import { contextMiddleware } from "@src/rest-resources/middlewares/context.middleware";
import { isAdminAuthenticated } from "@src/rest-resources/middlewares/isAdminAuthenticated";
import express from "express";
import { requestValidationMiddleware } from "@src/rest-resources/middlewares/requestValidation.middleware";
import { createIpAddressSchema } from "@src/json-schemas/ipAddress/createIpaddress.schema";
import { deleteIpAddressSchema } from "@src/json-schemas/ipAddress/deleteIpaddress.schema";
import { IpAddressController } from "@src/rest-resources/controllers/ipAddress.controller";
import { getAllIpAddressSchema } from "@src/json-schemas/ipAddress/getAllIpaddress.schema";

const args = { mergeParams: true };
const ipAddressRouter = express.Router(args);

ipAddressRouter
  .route('/')
  .get(
    contextMiddleware(false),
    requestValidationMiddleware(getAllIpAddressSchema),
    isAdminAuthenticated(),
    IpAddressController.getAllIpAddress
  )
  .post(
    contextMiddleware(true),
    requestValidationMiddleware(createIpAddressSchema),
    isAdminAuthenticated(),
    IpAddressController.createIpAddress
  )
  
  .delete(
    contextMiddleware(true),
    requestValidationMiddleware(deleteIpAddressSchema),
    isAdminAuthenticated(),
    IpAddressController.deleteIpAddress
  )

export { ipAddressRouter };
