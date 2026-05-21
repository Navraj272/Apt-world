import { AppError } from "@src/errors/app.error"
import { Errors } from "@src/errors/errorCodes"
import config from "@src/configs/app.config"
import axios from "axios"
import { BaseHandler } from "@src/libs/baseHandler"
import db from '@src/db/models'
import { COUNTRY } from "@src/utils/constants/paymentProvider/aptPay.constants"
import { deleteCache } from "@src/libs/redis"
import { CACHE_KEYS } from "@src/utils/constants/public.constants"

export class HandleFyntekRedeemHandler extends BaseHandler {
  async run() {
    const { userId, amount, paymentMethod, card, cryptoAddress, cryptoCurrency, tokenContractStandard  ,destinationTag , customer , billingAddress ,referenceId ,authenticatedAdminId}  = this.args
    try {

      // const referenceId = `FYNTEK-${userId}-${Date.now()}`

      const user = await db.User.findOne({
        where: { userId },
        attributes: ['firstName', 'lastName', 'email'],
        include: [{
          model: db.UserDetails,
          as: 'userDetails',
          attributes: ['stateCode', 'city', 'postalCode', 'address']
        }]
      });

      if (!user) {
        throw new AppError(Errors.USER_NOT_EXISTS);
      } else if (!user.firstName || !user.lastName) {
        throw new AppError(Errors.REQUIRED_FIELD);
      }

      const { address, postalCode, stateCode, city } = user.userDetails || {};


 const options = {
        referenceId,
        paymentType: "WITHDRAWAL",
        currency: "USD",
        amount,
        paymentMethod,
        description: "epicsweep.us",
        returnUrl: config.get("app.userFrontendUrl"),
        webhookUrl: `${config.get("fyntek.webhookUrl")}`,
        customer: { referenceId: referenceId, firstName: user.firstName, lastName: user.lastName, email: user.email },

      }
        if(billingAddress){
        options.billingAddress = {
                        addressLine1: billingAddress.addressLine1,
                        postalCode: billingAddress.zipCode ,
                        state: billingAddress.state ,
                        countryCode: billingAddress.country || COUNTRY.US,
                        city: billingAddress.city
                    }
        }else{
            if (!address || !postalCode || !stateCode || !city) {
        throw new AppError(Errors.REQUIRED_ADDRESS_DETAILS);
      }
        options.billingAddress = {
                  addressLine1: address,
                  postalCode: postalCode,
                  state: stateCode,
                  countryCode: 'US',
                  city: city
                }
        }

      console.log(options ,"options with biling address")

      if (paymentMethod === "BASIC_CARD") {

        if (!card?.cardNumber || !card?.expiryMonth || !card?.expiryYear) {
          throw new AppError(Errors.INVALID_CARD_DETAILS, { error: "Incomplete card details" })
        }

        options.card = {
          cardNumber: card.cardNumber,
          // cardholderName: card.cardholderName,
          // cardSecurityCode: card.cardSecurityCode,
          expiryMonth: card.expiryMonth,
          expiryYear: card.expiryYear,
        }

      } else if (paymentMethod === 'CRYPTO') {
        options.additionalParameters = {
          address : cryptoAddress,
          destinationTag : destinationTag || 'Crypto Withdrawal',
          cryptoCurrency : cryptoCurrency,
          tokenContractStandard : tokenContractStandard,
        }
      }
       else if(paymentMethod === 'BANKTRANSFER'){
options.customer = { ...options.customer, ...(customer || {}) }
        }
// console.log(JSON.stringify(options)  , "options==================")

      const response = await axios({
        method: "POST",
        url: `${config.get("fyntek.baseUrl")}`,
        headers: {
          Authorization: `Bearer ${config.get("fyntek.apiKey")}`,
          "Content-Type": "application/json",
        },
        data: options,
      })

      if (!response?.data?.result || !response.data.result.id || !response.data.result.state) {
          const cooldownKey = `${CACHE_KEYS.FYNTEK_REDEEM_COOLDOWN}:${userId}`;
          await deleteCache(cooldownKey);
        throw new AppError(Errors.PAYMENT_FAILED, { error: "Invalid Fyntek response" })
      }

      const { id, state } = response.data.result

       console.log(JSON.stringify(response.data.result) , "response==================")

       


      if (state !== "COMPLETED" && state !== "PENDING") {
          const cooldownKey = `${CACHE_KEYS.FYNTEK_REDEEM_COOLDOWN}:${userId}`;
          await deleteCache(cooldownKey);
        throw new AppError(Errors.PAYMENT_FAILED, { error: `Transaction failed. State: ${state}` })
      }
      return { success: true, message: "Redeem processed successfully", data: response.data }
    } catch (error) {
         const cooldownKey = `${CACHE_KEYS.FYNTEK_REDEEM_COOLDOWN}:${userId}`;
          await deleteCache(cooldownKey);
      // 2. Log the response data if available (Safe because we pick .data)
      if (error.response?.data) {
        // It is safe to stringify response.data, but NOT error.response
        console.log("Fyntek Provider Response:", JSON.stringify(error.response.data));
      }
      throw new AppError({ ...Errors.INTERNAL_SERVER_ERROR, message: error?.message })
    }
  }
}