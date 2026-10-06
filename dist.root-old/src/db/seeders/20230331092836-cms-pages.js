'use strict';

const {
  CMS_CATEGORIES
} = require("../../utils/constants/public.constants");
module.exports = {
  async up(queryInterface, DataTypes) {
    //     await queryInterface.bulkInsert({ tableName: 'cms_pages', schema: 'public' }, [
    //       {
    //         title: JSON.stringify({ EN: 'FAQ' }),
    //         slug: 'faq',
    //         category : CMS_CATEGORIES.SUPPORT,
    //         content: JSON.stringify({
    //           EN: `
    //           <h4>Account</h4>
    //           <p>Q: How do I sign up at {{{siteName}}}?</p>
    //           <p>A: To sign up, click &quot;Sign Up!&quot; at the top left of the homepage. This will open a short sign-up form for you to fill in.</p>
    //           <p><br></p>
    //           <p>Q:&nbsp;I am still waiting to receive a verification email after completing the sign-up form - how do I solve this issue?</p>
    //           <p>A: If you still need to receive verification. You can contact our support team, who will verify your account manually if the problem persists.</p>
    //           <p><br></p>
    //           <p>Q: I need help opening an account. What shall I do?</p>
    //           <p>A: Make sure that you have not registered an account. If in doubt, type the email address you think you might have used to register and click the reset password link.&nbsp;</p>
    //           <p>If you are still waiting to receive a forgotten password email, contact one of our support agents to investigate why you cannot register an account with {{{siteName}}}.</p>
    //           <p><br></p>
    //           <p>Q: How do I unsubscribe from receiving promotional emails and texts?</p>
    //           <p>To unsubscribe from communications, go to &quot;My Account&quot; and click &quot;Preferences,&quot; then untick the boxes next to email or sms and click save. Alternatively, you can unsubscribe directly from our promotional emails or sms by clicking on the unsubscribe link.</p>
    //           <p><br></p>
    //           <p>Q: How do I close my account?</p>
    //           <p>A: If you want to take a break and temporarily deactivate your account, you can do so by taking a time-out. After logging in, this option is located in the &quot;Responsible Gaming&quot; section of {{{siteUrl}}}. Here you will find the opportunity to pause your account for the time you deem fit. If you want to close your account for extended periods, contact our support team through {{{supportEmailAddress}}} or our Live Chat.</p>
    //           <p><br></p>
    //           <p>Q: I asked a question on live Chat, but I&apos;m left waiting for feedback.</p>
    //           <p>A: At certain times of the day, many players seek assistance from one of our support agents. Consequently, feedback might take time to deliver. However, our support service runs 24/7, 365 days a year, and be sure that you will get feedback as soon as possible.</p>
    //           <p><br></p>
    //           <p><br></p>
    //           <p>Payments</p>
    //           <p><br></p>
    //           <p>Q: How can I deposit money into my account?</p>
    //           <p>A: To deposit funds, log in to the website and select the &quot;Deposit&quot; option on the left-hand side. Then, choose your preferred payment method and follow the instructions.</p>
    //           <p><br></p>
    //           <p>Q: What is the process for making a withdrawal?</p>
    //           <p>A: When logged in, click on your profile icon on the left-hand side of the webpage. You will then be required to specify the amount of money you want to withdraw from your account and by which preferred payment method.</p>
    //           <p><br></p>
    //           <p>Q: Which forms of payment methods do you accept for the deposit?</p>
    //           <p>A: The deposit methods you can use vary depending on your location. We offer a range of cards, e-wallets, and even cryptocurrencies. To view all the deposit methods available to you, please click here.</p>
    //           <p><br></p>
    //           <p>Q: Which forms of withdrawal are available to me?</p>
    //           <p>A: The type of withdrawal options available to you depends on where you live. We provide various cards, digital wallets, and even cryptocurrency services. To see the complete list, check this page.</p>
    //           <p><br></p>
    //           <p>Q: Why didn&apos;t my deposit go through?</p>
    //           <p>A: Ensure that each field is accurately filled. Be sure you are utilizing the payment methods accepted in your area. For example, failures to deposit money are often caused by an issue with the bank. Be sure you have enough funds in the payment method you selected and that all related security verifications are passed. If you need help, feel free to contact our help desk.</p>
    //           <p><br></p>
    //           <p>Q: I deposited money, but the amount needs to be visible in my account. How is this possible?</p>
    //           <p>A: Check if any money has been taken from your bank account, and let us know if it has. Most issues can be resolved without providing any evidence of payment. However, we may occasionally need proof of payment to look into the problem with the payment processor.</p>
    //           <p><br></p>
    //           <p>Q: Are there any charges for depositing or withdrawing money at {{{siteName}}}?</p>
    //           <p>A: We charge no fees on deposits or withdrawals.</p>
    //           <p><br></p>
    //           <p>Q: Why am I unable to withdraw money from my account?</p>
    //           <p>A: Are you requesting more funds than you have in your account? Do you have any bonus funds that still need to be wagered and, therefore, cannot be withdrawn? Did you refresh the page and clear the cache?</p>
    //           <p>If the issue continues, please don&apos;t hesitate to contact us, and we will assist you.</p>
    //           <p><br></p>
    //           <p>Q: When will I get the funds from my withdrawal?</p>
    //           <p>A: The time it takes to process your withdrawal request is based on your chosen payment method. For example, if you are using a card, it can take 1-5 business days to be approved and sent, while e-wallets are processed immediately after being confirmed by our payments team.</p>
    //           <p><br></p>
    //           <p>Q: Is there a maximum amount I can deposit?</p>
    //           <p>A: There is no limit on how much money you can deposit daily, weekly, or monthly. However, certain payment providers might impose a daily deposit limit threshold which is out of our control. If you encounter any issues, don&apos;t hesitate to contact one of our support agents to investigate any potential problems further.</p>
    //           <p><br></p>
    //           <p>Bonuses</p>
    //           <p><br></p>
    //           <p>Q: What must I do to receive the welcome bonus after signing up?</p>
    //           <p>A: The welcome bonus is automatically issued to your account as soon as you successfully register an account at {{{siteName}}}. You can see your eligible bonus details in the cashier section, accessible by clicking the deposit now button or on the promotions page. Claim the bonus by ticking the box next to it in the cashier or click the claim now button on the relevant promotions page and proceed to deposit. After you successfully deposit, the bonus will be automatically added to your wallet.</p>
    //           <p><br></p>
    //           <p>Q: How will I know if I&apos;m eligible for free spins?</p>
    //           <p>A: After you log in to {{{siteName}}}, go to your profile on the top left of the homepage, click on the bonus section, and there you will see if any free spins are credited to your account.&nbsp;</p>
    //           <p><br></p>
    //           <p>Q: Do all games count towards the wagering requirements?</p>
    //           <p>A: Games can have different contributions to wagering requirements. Some may contribute nothing at all, while others may contribute fully. All the games that do not contribute towards wagering can be viewed on our bonus terms page here.</p>
    //           <p><br></p>
    //           <p>Q: How often do I need to wager my bonus before I can cash out?</p>
    //           <p>A: You need to wager your bonus funds 50 times before being able to withdraw it. This wagering contribution is standard and varies depending on your loyalty level. For more information, visit our loyaly programme page or check our bonus terms page for all details related to wagering requirements for our ten different loyalty levels.</p>
    //           <p><br></p>
    //           <p>Responsible Gaming</p>
    //           <p><br></p>
    //           <p>Q: Can I limit how much I can play, spend and lose on {{{siteName}}}?</p>
    //           <p>A: Our responsible gambling department takes our players&apos; needs and safety seriously. That&apos;s why we provide multiple tools to help them manage their gaming experiences &ndash; such as time-out limits and other restrictions. Please let us know if you feel we should develop additional tools to help you control your gambling.&nbsp;</p>
    //           <p>To limit your gambling, head to our Limits page to set your Deposit Limits for either one week or a month. Or, if you need a quick break from gaming, take a 24-hour, 7-day time-out, or even self-exclude permanently. If you wish assistance from one of our support agents with these responsible gaming options, contact us via email at {{{supportEmailAddress}}} or our 24/7 Live Chat.</p>
    //           <p><br></p>
    //           <p>Q: Can I adjust my gaming limits if need be?</p>
    //           <p>A: If you wish to adjust your limits, you can do so easily. However, increasing your limits will require a 24-hour grace period for the changes to take effect, while decreasing them is immediate.</p>
    //           <p><br></p>
    //           <p>Q: If I self-exclude my account, what will happen to the funds in my account?</p>
    //           <p>A: If you have cash funds remaining in your account after self-exclusion, it&apos;s best to contact our support team for assistance on the next steps. They&apos;ll be happy to provide advice on how to move forward.</p>
    //           <p><br></p>
    //           <p>Q: Is it possible to reverse a self-exclusion?</p>
    //           <p>A: If you&apos;d like to end your self-exclusion period, contact our support team, and they&apos;ll be able to help. Please note that there will be a 24-hour grace period before your account is reactivated.</p>
    //           <p><br></p>
    //           <p>Q: If I self-exclude, will my pending withdrawal still be processed?</p>
    //           <p>A: If you have a pending withdrawal before your self-excluding, it will be processed as usual.</p>
    //           <p><br></p>
    //           <p>Q: Can I open another account and start playing again if I&apos;m self-excluded?</p>
    //           <p>A: No, if you have self-excluded from an account, you cannot open and use another version.</p>
    //           <p><br></p>
    //           <p><br></p>
    //           <p>Technical Issues</p>
    //           <p><br></p>
    //           <p>Q: Are games taking forever to load?&nbsp;</p>
    //           <p>A: Let&apos;s look at why your game(s) might lag and figure out how to get you back in action.</p>
    //           <p>Ensure that your internet connection is running optimally and free of any issues. Check that you stay within your bandwidth by running fewer programs in the background. Keep your browser up to date with the most current version for maximum performance and security.</p>
    //           <p><br></p>
    //           <p>Q: My game got stuck in the middle of a round. What happens now?</p>
    //           <p>A: No need to be alarmed! You will not lose progress or money if your game gets stuck. Your data will remain intact, and the game will resume right where you left off. So rest assured that your gaming experience will always be safe and uninterrupted.</p>
    //           <p><br></p>
    //           <p>Q: One of the games I&apos;m trying to play needs to launch. How can I fix it?</p>
    //           <p>A: This issue could be due to a lost connection to the server. First, refresh the game or restart your browser for a quick fix. If that doesn&apos;t work, check your internet connection and ensure everything runs smoothly. Then, get back in the game with just a few easy steps!</p>
    //           <p><br></p>
    //           <p>Q. I claimed a bonus before I made a deposit, but the funds still need to be credited. What should I do?</p>
    //           <p>A: If this rare issue happens, contact one of our support agents in live Chat, and after verifying your eligibility, they will manually credit funds directly to your account.</p>
    //           <p><br></p>
    //           <p>Q: I received a promotional email saying that I was credited free spins on my favorite game, but when I logged in to play them, they weren&apos;t available.</p>
    //           <p>A: In such a case, contact one of our customer support agents, who can credit your due spins instantly.</p>
    //           <p><br></p>
    //           <p>Security, License, Legal</p>
    //           <p><br></p>
    //           <p>Q: Can I trust {{{siteName}}} with my money?</p>
    //           <p>A: Absolutely! Your funds are safe with {{{siteName}}}. We use the latest security measures to ensure your money is secure and protected. But, of course, being Curacao license holders obliges us to follow regulations and ensure that player funds are safe and accounted for.</p>
    //           <p>Furthermore, our site is SSL encrypted, giving you the utmost confidence in the security of your data.</p>
    //           <p><br></p>
    //           <p>Q: In which jurisdiction is {{{siteName}}} licensed?</p>
    //           <p>A: We hold a gaming license from Curacao.</p>
    //           <p><br></p>
    //           <p>Q: What is the approximate time needed to check my submitted documents?</p>
    //           <p>A: We will do our best to get your documents processed promptly, yet please bear in mind that your records need, at most, 72 hours to be thoroughly checked by our agents.</p>
    //           <p><br></p>
    //           <p>Q: How will I know if my documents have been successfully accepted?</p>
    //           <p>A: Our support team will send you a confirmation email that your submitted documents have been successfully verified.</p>
    //           <p><br></p>
    //           <p>Q: I suspect that someone has excessed my account without my knowledge. What should I do?</p>
    //           <p>A: If you think your account has been breached, it is essential to reach out to our support team right away, and we can help you fix the issue.</p>
    //           <p><br></p>
    //           <p>Q: Do you disclose my information to any other companies?</p>
    //           <p>A: We may be required by law, regulation, or other legal authority or warrant to disclose your personal information. Additionally, we might also share your data with a regulatory or law enforcement agency if it is deemed necessary for the protection of the Company, its customers, or any third party. Check our Privacy Policy for more detailed information.</p>
    //           <p><br></p>
    //           <p><br></p>
    //           <p><br></p>`
    //         }),
    //         is_active: true,
    //         created_at: new Date(),
    //         updated_at: new Date()
    //       },
    //       {
    //         title: JSON.stringify({ EN: 'Privacy Policy' }),
    //         slug: 'privacy-policy',
    //         category : CMS_CATEGORIES.LEGAL_COMPLIANCE,
    //         content: JSON.stringify({
    //           EN: `
    //           <p><strong>Privacy Policy at {{{siteName}}} Casino</strong></p>
    //           <p>{{{siteName}}} Casino ("we") are committed to protecting and respecting your privacy.</p>
    //           <p>This policy (together with Terms and Conditions and any other documents referred to in it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. Be assured that the person(s) with access to your data will keep your information confidential and only access and use information on your account when needed for internal purposes and on a need-to-know basis only.</p>

    //           <p><strong>Information we may collect from you</strong><br>We may collect and process the following data about you:</p>
    //           <p><ul><li><p>Information that you provide by filling in forms on our website {{{siteUrl}}} (the "Website"). This includes information provided at the time of opening an account with us, depositing funds, playing or participating in the games, events and services on the Website, posting material or requesting services or information. We also ask for a copy of yor ID, passport or drivers license.</p>
    //           <li><p>Details of your visits to the Website, including, but not limited to, your betting and gaming activities, the resources that you access, traffic data, location data and communication data, whether this is required for our own accounting purposes, risk assessment, security reviews, compliance procedures or otherwise.</p>
    //           <li><p>Details of transactions you carry out through your account with us.</p></ul></p>
    //           <p>If you contact us, we may keep a record of that correspondence. We or one of our licensors or suppliers may also ask you to complete surveys that we use for research purposes, although you do not have to respond to them.</p>

    //           <p><strong>IP Addresses and Cookies</strong><br>We may collect information about your computer, including where available your IP address, operating system and browser type, for system administration and to report aggregate information to our advertisers and licensors. This is statistical data about our users' browsing actions and patterns, and does not identify any individual.</p>
    //           <p>For the same reason as above, we may obtain information about your general internet usage by using a cookie file which is stored on the hard drive of your computer. Cookies contain information that is transferred to your computer's hard drive. They help us to improve the Website and to deliver a better and more personalised service. They enable us to estimate our audience size and usage pattern, to store information about your preferences, such as language and odds type, and to recognise you when you return to the Website. While placing a bet, information will be temporarily stored in a cookie until the transaction has been completed.</p>
    //           <p>You may refuse to accept cookies by activating the setting on your browser which allows you to refuse the setting of cookies. However, if you select this setting you may be unable to access certain parts of the Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you log on to the Website.</p>

    //           <p><strong>Where we store your personal data</strong><br>The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers or licensors. Such staff maybe engaged in, among other things, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.</p>
    //           <p>All information you submit to us is stored and kept on secure servers. Any payment transactions and submissions of personal information is transmitted using SSL encryption technology.<br><br>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our utmost to protect your personal data, we cannot guarantee the security of your data transmitted to the Website; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.</p>

    //           <p><strong>Uses made of the information</strong><br>We use information held about you in the following ways:</p>

    //           <p><ul><li><p>To ensure that content from the Website is presented in the most effective manner for you and for your computer.</p>
    //           <li><p>To provide you with information, products, games or services that you request from us or which we feel may interest you.</p>
    //           <li><p>To carry out our obligations arising from any transactions entered into between you and us.</p>
    //           <li><p>To allow you to participate in the interactive features of our games and services.
    //           <li>To notify you about changes to our games and services.</p></ul>
    //           We may also permit selected third parties to use your data to provide you with information about games, goods and services which may be of interest to you.</p>

    //           <p><strong>Disclosure of your information</strong><br>We may disclose your personal information to any member of our group, which means our subsidiaries, our ultimate holding company and its subsidiaries.</p>

    //           <p>We may disclose your personal information to third parties:<br>
    //           <ul><li><p>In the event that we sell or buy any business or assets, in which case we may disclose your personal data to the prospective seller or buyer of such business or assets.</p>
    //           <li><p>If {{{siteName}}} Casino or substantially all of its assets are acquired by a third party, in which case personal data held by it about its customers will be one of the transferred assets.</p>
    //           <li><p>If we are under a duty to disclose or share your personal data in order to comply with any legal obligation, or in order to enforce or apply the {{{siteName}}} Casino Terms of Website Use or the {{{siteName}}} Casino Betting and Gaming Terms and Conditions or to protect the rights, property, or safety of {{{siteName}}} Casino, our customers, licensors or others. This includes exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction.</p></ul></p>
    //           <p>We will disclose any information to the LGA and to any other authority in case of fraudulent activities or inquest from the relevant authorities.</p>

    //           <p><strong>Your Rights</strong><br>You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. You can also exercise the right at any time by contacting us at {{{siteName}}} Casino.</p>
    //           <p>The Website may, from time to time, contain links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.</p>
    //           `
    //         }),
    //         is_active: true,
    //         created_at: new Date(),
    //         updated_at: new Date()
    //       },
    //       {
    //         title: JSON.stringify({ EN: 'Bonus Terms' }),
    //         slug: 'bonus-terms',
    //         category : CMS_CATEGORIES.SUPPORT,
    //         content: JSON.stringify({
    //           EN: `
    //           <p><h3>1. General Bonus Terms Conditions</h3></p>
    // <p><b>1.1.</b>&nbsp;{{{siteName}}} occasionally offer bonuses, rewards, promotions, competitions, cashback, and/or gifts (&ldquo;promotions&rdquo;). These promotions will be governed by these General Bonus Terms and Conditions (&ldquo;General Bonus T&amp;Cs&apos;&apos;). Each promotion will have its own specific terms and conditions outside the General Bonus Terms and Conditions. By participating in any promotion and agreeing to receive bonuses offered by {{{siteName}}} CASINO, you automatically consent to comply with our general bonus terms &amp; conditions.</p>
    // <p><b>1.2.</b>&nbsp;If you intend to participate in a promotion or receive some bonus offered by {{{siteName}}} CASINO but do not properly understand how the promotion/bonus works, you should contact {{{siteName}}} CASINO Customer support for clarification.</p>
    // <p><b>1.3.</b>&nbsp;{{{siteName}}} CASINO reserves the right to add, remove or alter any promotional/bonus details or terms.</p>
    // <p><b>1.4.</b>&nbsp;You must regularly check the bonus terms and conditions for any amendments or updates. In case any alterations in terms and conditions occur, be it the general Terms and Conditions or the terms of a specific promotion, {{{siteName}}} CASINO will inform you accordingly.</p>
    // <p><b>1.5.</b>&nbsp;We may make terms and conditions available in various languages for our customer&rsquo;s convenience. In case of any discrepancy between the English and non-English versions of these terms and conditions, the English version always takes priority.</p>
    // <p><b>1.6.</b>&nbsp;Offers are limited to one Offer per Player (one Offer per household address, shared computer or shared IP address, email address, telephone number, and payment method). {{{siteName}}} CASINO reserves the right to suspend or close any account suspected of being a duplicate. If applicable, the original deposit made by the Player will not be confiscated, and only the Bonus and/or winnings from the Bonus will be confiscated.</p>
    // <p><b>1.7.</b>&nbsp;Unless otherwise stated, active Bonuses must be wagered within 7 days of issue. Otherwise, both bonus funds &amp; winnings associated with the relevant bonus will be forfeited.</p>
    // <p><b>1.8.</b>&nbsp;The availability of bonuses (bonuses) on the Site for a particular player is based exceptionally on its presence in the player&rsquo;s profile. If any of the bonuses are not intended for the player, then such a bonus will not be displayed among those available in the profile. Bonus offers may be received via email, SMS or other ways of communication. Those bonuses (along with the winnings from them) that are not intended for the player - may be forfeited.<br></p>
    // <p><b>1.9.</b>&nbsp;Real balance is used for bets first. Only when the amount on the player&apos;s real balance equals zero he starts playing for bonus money.</p>
    // <p><b>1.10.</b>&nbsp;Bonus amounts credited to a player&apos;s bonus account are subject to a maximum of fifty (x50) times wagering requirements before they are converted to your Cash Balance and can be withdrawn (unless explicitly stated otherwise in the Significant Terms).&nbsp;</p>
    // <p>Wagering requirements vary depending on the loyalty level of the customer.<br><br>Please see the table below showing the bonus wagering requirement by player level status:<br><br></p>
    // <style>
    // table {
    // border: 1px solid black;
    // border-collapse: collapse;
    // }
    // td, th {
    //   border: 1px solid #dddddd;
    //   text-align: center;
    //   padding: 8px;
    // }
    // </style>
    // <div align="left">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <th>
    //                     <p>Loyalty Levels</p>
    //                 </th>
    //                 <th>
    //                     <p>Bonuses Wagering Requirements</p>
    //                 </th>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>50x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>45x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>40x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>35x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>30x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>25x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>20x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>15x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>15x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>10x</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
    // <p><br></p>
    // <p><b>1.11.</b>&nbsp;If you have decided not to participate in a promotion(s), you have already opted in. You must contact {{{siteName}}} CASINO Customer support and request cancellation of the bonus before placing any bets.</p>
    // <p><b>1.12.</b>&nbsp;Unless otherwise stated, 10 EUR, INR 1000, USD 10, JPY 1500, NZD 10, AUD 10, TRY 200,, CAD 10, NOK 100, PLN 50, HUF 4000 (or the equivalent in any other currency) is the minimum deposit to avail of promotions or bonuses.</p>
    // <p><b>1.13.</b>&nbsp;You may not place any bets that exceed the maximum bonus bet size when using bonus money. The maximum bonus bet size is 5 EUR, INR 500, USD 5, JPY 750, NZD 5, AUD 5, TRY 100, CAD 5, NOK 50, PLN 25, HUF 2000 (or equivalent in any other currency) per bet/spin or equivalent unless it is stated differently in the specific terms and conditions tailored to each bonus campaign. Please note that you are responsible for ensuring you know the maximum bonus bet size. For cases where bets are deemed to have exceeded the maximum bonus bet size, an account may be reviewed, and the bonus funds confiscated and winnings, if any, voided.</p>
    // <p><b>1.14.</b>&nbsp;If you wish to withdraw before meeting the Wagering Requirements after you start to wager bonus money, you will effectively forfeit your bonus winnings accrued and your bonus amount and opt out of the promotion.</p>
    // <p><b>1.15.</b>&nbsp;Any Bonus Funds are displayed separately from any Deposit Funds in Your Player Account. Bonus Funds can only be withdrawn once converted into real money.</p>
    // <p><b>1.16.</b>&nbsp;When playing an active bonus, your funds will be used in the following order: Funds required to trigger the bonus, Bonus funds, and Any remaining funds.</p>
    // <p><b>1.17.</b>&nbsp;You can withdraw real money balance before satisfying bonus wagering. By doing so, you will forfeit the funds in your bonus balance.</p>
    // <p><b>1.18.</b>&nbsp;If you run out of deposit money and the bonus money attached to it before fulfilling the wagering requirements, your account will be cleared from any remaining wagering requirements.</p>
    // <p><b>1.19.</b>&nbsp;After wagering requirements are met, the deposit funds, bonus money, and any winnings gained will become withdrawable as real-cash money in your account.</p>
    // <p><b>1.20.</b>&nbsp;{{{siteName}}} CASINO bonuses are intended for recreational playing only. Improper use of the bonuses and promotional abuse will not be tolerated. We reserve the right to take the following actions against bonus abuse (list not exhaustive).</p>
    // <ul>
    //     <li>
    //         <p>Revoke and/or cancel any Bonuses and Bonus winnings that we regard to have been gained by misuse of the system.</p>
    //     </li>
    //     <li>
    //         <p>Ban such players from receiving further Bonuses</p>
    //     </li>
    //     <li>
    //         <p>Close the account</p>
    //     </li>
    // </ul>
    // <p>Abuse may include but is not limited to</p>
    // <ul>
    //     <li>
    //         <p>Using multiple Account(s)</p>
    //     </li>
    //     <li>
    //         <p>Evidence that an offer is being claimed or benefits the same person or group of persons, acting in an attempt to defraud us.</p>
    //     </li>
    //     <li>
    //         <p>Wagering bonuses on excluded Games.</p>
    //     </li>
    //     <li>
    //         <p>Co-operation, collusion, or organization of bets from the same source</p>
    //     </li>
    //     <li>
    //         <p>Manipulation of software, exploitation of loopholes, or other behaviors which amount to deliberate cheating.</p>
    //     </li>
    //     <li>
    //         <p>Hiding IP addresses or using a VPN(s).</p>
    //     </li>
    //     <li>
    //         <p>Delaying game rounds in any game, including free spins and bonus features, to a later time when you have wagering and non-wagering requirements.</p>
    //     </li>
    //     <li>
    //         <p>Using strategies that take advantage of any software bug or failure or on the built-up value during real-money play.</p>
    //     </li>
    // </ul>
    // <p><b>1.21.</b>&nbsp;We may reclaim any Bonus that has been awarded in error in accordance with the General Terms and Conditions.</p>
    // <p><b>1.22.</b>&nbsp;We may make amendments to an Offer to correct typographical errors or improve understanding, and we reserve the right to amend or terminate an offer if required for legal and/or regulatory reasons.</p>
    // <p><b>1.23.</b>&nbsp;{{{siteName}}} CASINO reserves the right to ban a player from participating in promotions at any time without the obligation to provide any reasons behind such a decision.</p>
    // <p><b>1.24.</b>&nbsp;If you failed to claim a deposit bonus or forgot to do so and intend to play with the bonus, you must contact Customer support before placing any bets and ask to adjust your balance.</p>
    // <p><b>1.25.</b>&nbsp;We reserve the right to audit your game play/transaction logs. You hereby consent in advance for us to do so. If, after an audit, it transpires that you participated, or attempted to participate, in a manipulative game strategy to take advantage of the bonus being rewarded to you from the casino, we hold the right to deny, withhold, revoke, or withdraw your entitlement to any promotion, winnings or bonus, or terminate your association with our website and/or block your account. In such circumstances, we shall be under no obligation to refund any funds in your account other than your original deposit amount.</p>
    // <p><b>1.26.</b>&nbsp;Bonus money is free money intended to help you enjoy {{{siteName}}} CASINO ; it is not to be withdrawn once received. To prevent you from withdrawing your bonus funds instantly, {{{siteName}}} CASINO (as well as other casinos) requires so-called &ldquo;wagering&rdquo; of the bonus money. The wagering coefficient indicates the number of times you need to place the bonus amount.</p>
    // <p><b>1.27.</b>&nbsp;Participation in some promotions requires players to claim the bonus from the promotions page or cashier before depositing funds. You can also opt out of receiving promotional newsletters anytime by unsubscribing directly from the email/SMS link or directly from your profile section at {{{siteUrl}}} after you log in.</p>
    // <p><b>1.28.</b>&nbsp;Bonus is in effect until bonus wagering requirements are fulfilled, all bonus money is lost, or the bonus expires.</p>
    // <p><b>1.29.</b>&nbsp;Any deposit bonus offered has a max cash-out policy which varies according to the loyalty program level the players are in. These max cash-out limits are also applicable to the welcome offers and can be viewed below:<br><br></p>
    // <div align="left">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <th>
    //                     <p>Loyalty Levels</p>
    //                 </th>
    //                 <th>
    //                     <p>Max Cashout with Deposit Bonus</p>
    //                 </th>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 1000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 2000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 3000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 4000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 5000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 6000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 10000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 15000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 15000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 25000</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
    // <p><br></p>
    // <p><br></p>
    // <p><b>1.30.</b>&nbsp;Game winnings from spins or game rounds initiated with bonus funds but completed with real money after the bonus has been wagered, lost, or forfeited will be removed and may result in your account being closed for bonus abuse.</p>
    // <p><b>1.31.</b>&nbsp;We reserve the right to withdraw or suspend any promotion or campaign at any given time.</p>
    // <p><b>1.32.</b>&nbsp;We reserve the right to update the bonus terms and conditions at anytime.</p>
    // <p>&nbsp;</p>
    // <h3>2. Specific promotions</h3>
    // <p><br><b>2.1. Deposit Free Spins</b><br><br>For free spins credited with a deposit, the maximum winning withdrawal cap is 500 EUR (or the equivalent in any other currency). &nbsp;The highest wagering requirement for deposit-free spins is 50x the winning amount, but this varies depending on the player&rsquo;s loyalty program level, as shown below.</p>
    // <div align="left">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <th>
    //                     <p>Loyalty Levels</p>
    //                 </th>
    //                 <th>
    //                     <p>FS Wagering</p>
    //                 </th>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>50x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>45x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>40x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>35x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>30x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>25x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>20x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>15x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>15x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>10x</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
    // <p><br><br></p>
    // <p><b>2.2. No Deposit-Free Spins</b><br><br>For free Spins credited without needing a deposit, unless differently specified in the specific promotion, the maximum winning withdrawal cap is 50 EUR (or the equivalent in any other currency). Winnings will be transferred to your cash account after wagering 100x the winning amount generated from the spins is complete. Unless otherwise stated, to withdraw winnings from free spins, you must deposit a minimum of 10 EUR (or the equivalent in any other currency) and wager it once 1x.<br><br></p>
    // <p><b>2.3.&nbsp;Daily Cashback</b><br></p>
    // <p>2.3.1 Cashback is calculated daily on all deposits between 00:01 - 23:59 CET.</p>
    // <p>2.3.2 Cashback is calculated as follows: Deposits - Withdrawals - Bonus Received - Balance.</p>
    // <p>2.3.3 Balance will be checked the following morning at 06:00 CET, and players must have a balance of not more than &euro;5 to qualify for cashback.<br><br>2.3.4 Cash back bonuses are automatically available to all players from level 2 upwards.</p>
    // <p>2.3.5 Cashback will be credited to qualifying players by 12:00 CET the following morning.</p>
    // <p>2.3.6 Cash Back credits will be rounded to the nearest Euro or currency equivalent.</p>
    // <p>2.3.7 Cashback will be credited to your bonus wallet and is subject to varying wagering requirements depending on the player&rsquo;s Loyalty level status.<br><br>See the table below for the different wagering requirements by player loyalty level:</p>
    // <p><br></p>
    // <div align="left">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <th>
    //                     <p>Loyalty Levels</p>
    //                 </th>
    //                 <th>
    //                     <p>Cashback Wagering Requirment</p>
    //                 </th>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>N/A</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>50x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>40x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>35x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>30x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>20x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>15x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>10x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>5x</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>1x</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
    // <p><br><br></p>
    // <p>2.3.8 If you have real money and cashback money in your account, the real money will always be used first and then cashback money.</p>
    // <p>2.3.9 Cashback is only paid to open accounts.</p>
    // <p>2.3.10 {{{siteName}}} reserves the right to decline cashback to any players who are found to abuse the cashback offer due to strategic gameplay. For example, using the game feature, leaving the value in the game, and redeeming it the day after when cashback has been credited. This is prohibited and considered fraudulent. Any cashback and associated winnings will be confiscated. The cashback is subject to standard bonus terms and conditions. {{{siteName}}} reserves the right to cancel or change the cashback offer at any time, at its sole discretion.</p>
    // <p></p>
    // <p><br>2.3.11.&nbsp;The daily cashback percentage issued depends on the player&rsquo;s loyalty level, as indicated below. The minimum cashback claimed is 3%, and the maximum is 15%.</p>
    // <div align="left">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <th>
    //                     <p>Loyalty Levels</p>
    //                 </th>
    //                 <th>
    //                     <p>CB Percentage</p>
    //                 </th>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>0</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>3%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>4%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>6%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>7%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>8%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>9%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>10%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>12%</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>15%</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>

    // <p>2.3.12 The daily cashback program has a minimum and maximum cash-out policy based on the player&rsquo;s loyalty levels. Money over and above the maximum cashable amounts will be automatically removed from the player&rsquo;s wallet. The minimum cashback awarded is &euro;0.5, and the maximum awarded cashback is &euro;1000 daily.<br><br>See the table below for cashback maximum withdrawal amounts per level.&nbsp;</p>

    // <div align="left">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <th>
    //                     <p>Loyalty Levels</p>
    //                 </th>
    //                 <th>
    //                     <p>Cashback Maximum Cash Out</p>
    //                 </th>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>N/A</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;500</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;600</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;700</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;800</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;1,000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;1,500</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;2,000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;2,500</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>&euro;5,000</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>

    // <p><br></p>
    // <p>2.3.13 The cashback bonus must be cleared (wagered) in 1 day from the issue date. Failing to claim or complete wagering will result in bonus cancellation and voiding of the unwaged balance.</p>
    // <p><br></p>

    // <p><b>2.4.&nbsp;Instant &amp; Good Will Bonuses</b></p>
    // <p>2.4.1. Support agents might consider awarding an instant deposit bonus, deposit bonus spins, free spins, free bonus money, or free cash as an act of goodwill in a case-by-case scenario. In such cases and independently of the type or amount of bonus given, the maximum win resulting from that bonus cannot exceed 4 times the value of the originally released bonus amount.</p>
    // <p>2.4.2. You can apply for reload bonuses only if you have no pending withdrawal.</p>
    // <p>2.4.3. Unless stated in the individual promotional terms, the general bonus terms shall apply to all reload bonuses.<br><br></p>
    // <p><b>2.5.&nbsp;Welcome Offers</b></p>
    // <p>2.5.1. The welcome bonus is offered on the first 3 deposits ever made by players and is split into 3 deposit bonuses:</p>
    // <p><b>The first welcome bonus</b>&nbsp;is a deposit bonus of 100% up to 500 EUR, INR 45000, USD 500, JPY 75000, NZD 500, AUD 500, TRY 10000, CAD 10, NOK 5000, PLN 2500, HUF 200000 &nbsp;( equivalent in any other currency) + 200 Spins on Big Bass Bonanza.</p>
    // <p><b>The second welcome bonus</b>&nbsp;is a deposit bonus of 75% up to 500 EUR, INR 45000, USD 500, JPY 75000, NZD 500, AUD 500, TRY 10000, CAD 10, NOK 5000, PLN 2500, HUF 200000 &nbsp;( equivalent in any other currency) + 100 Spins in Gates of Olympus.</p>
    // <p><b>The third welcome bonus</b>&nbsp;is a deposit bonus of 100% up to 1000 EUR, INR 90000, USD 1000, JPY 150000, NZD 1000, AUD 1000, TRY 20000, CAD 1000, NOK 10000, PLN 5000, HUF 400000 &nbsp;( equivalent in any other currency) (equivalent in any other currency) + 50 Spins in Jammin Jars.</p>
    // <p>2.5.2. Welcome package also includes Free spins offered with the first, second, and third deposits made by players.&nbsp;</p>
    // <p>They are split as follows:</p>
    // <p><b>Welcome Free Spins part 1</b>: 200 Free Spins are distributed in the player&rsquo;s account in batches of 20 in 10 consecutive days. The initial 20 free spins are available when the player makes the first deposit and claims the welcome bonus.<br><br><b>Welcome Free Spins part 2</b>: &nbsp;100 Free Spins will be distributed to the player&rsquo;s account in batches of 20 in 5 days consecutive days. The initial 20 free spins are available when the player deposits and claims the second welcome bonus.<br><br><b>Welcome Free Spins part 3</b>: &nbsp;50 Free Spins will automatically be credited to the player&rsquo;s account with the third deposit after the third welcome bonus is claimed.&nbsp;</p>
    // <p><br></p>
    // <p>2.5.3. It&apos;s important to note that players might see and claim a welcome bonus different from the standard offer advertised on-site. Generally, these welcome bonuses are promoted by affiliate sites with tgt permission. If players claim such 1st deposit offers, they are not permitted to claim a second first deposit offer from other site sections. If this is discovered or allowed by a system glitch, the Casino reserves the right to close the player&apos;s account immediately.<br><br></p>
    // <p><b>2.6.&nbsp;Monday 25% Unlimited Bonus</b></p>
    // <p>2.6.1. The Monday bonus is triggered with a minimum deposit of 10 EUR, INR 1000, USD 10, JPY 1500, NZD 10, AUD 10, TRY 200, CAD 10, NOK 100, PLN 50, and HUF 4000.&nbsp;</p>
    // <p>2.6.2. Players must go to the cashier or promotions page, claim from there, and then deposit to get the bonus credited to their account.</p>
    // <p>2.6.3. This deposit bonus can be claimed unlimited times during the day.&nbsp;</p>
    // <p>2.6.4. Any deposit bonus offered has a max cash-out policy which varies according to the loyalty program level the players are in. These max cash-out limits are also applicable to the welcome offers and can be viewed below:</p>
    // <p><br></p>
    // <div align="left">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <th>
    //                     <p>Loyalty Levels</p>
    //                 </th>
    //                 <th>
    //                     <p>Max Cashout with deposit Bonus</p>
    //                 </th>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 1000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 2000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 3000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 4000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 5000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 6000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 10000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 15000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 15000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 25000</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
    // <p><br></p>
    // <p>2.6.5. Wagering Requirement: 50x wagering applies independently of the loyalty program level the player is in.&nbsp;</p>
    // <p>2.6.6 Max bet during bonus: 5 EUR, INR 500, USD 5, JPY 750, NZD 5, AUD 5, TRY 100, CAD 5, NOK 50, PLN 25, HUF 2000 (or equivalent in any other currency) per bet/spin.</p>
    // <p>2.6.7. Once claimed, the bonus must be wagered within 7 days from the bonus issue date.<br><br></p>
    // <p>2.6.8. Standard bonus terms and General Website conditions apply.</p>
    // <p><br></p>
    // <p><b>2.7.Tuesday Free Spins Bonus</b></p>
    // <p>2.7.1. 25 Free Spins bonus is triggered with a minimum deposit of 10 EUR, INR 1000, USD 10, JPY 1500, NZD 10, AUD 10, TRY 200, CAD 10, NOK 100, PLN 50, HUF 4000.<br><br>2.7.2 To claim the 25 free spins credited on the selected game of the week, players need to go to the cashier or promotions page, claim from there, and proceed to deposit. Free spins bonus is offered weekly and subject to standard bonus terms.<br><br></p>
    // <p>2.7.3. This Offer is available to all players who have already deposited at {{{siteName}}} Casino.</p>
    // <p>2.7.4. The 25 free spins will be credited into the player&apos;s account instantly upon making a qualifying deposit.</p>
    // <ul>
    //     <li>
    //         <p>Max withdrawal amount with this bonus: 500 EUR, INR 45000, USD 500, JPY 75000, NZD 500, AUD 500, TRY 10000, CAD 10, NOK 5000, PLN 2500, HUF 200000 &nbsp;( equivalent in any other currency).</p>
    //     </li>
    //     <li>
    //         <p>Max bet during bonus: 5 EUR, INR 500, USD 5, JPY 750, NZD 5, AUD 5, TRY 100, CAD 5, NOK 50, PLN 25, HUF 2000 (or equivalent in any other currency) per bet/spin.</p>
    //     </li>
    //     <li>
    //         <p>Wagering Requirement: 50x wagering applies independently of the loyalty program level the player is in.&nbsp;</p>
    //     </li>
    //     <li>
    //         <p>Once claimed, the bonus must be wagered within 7 days from the bonus issue date.</p>
    //     </li>
    // </ul>
    // <p><br></p>
    // <p><b>2.8. Wednesday double loyalty points bonus</b></p>
    // <p>2.8.1. The Wednesday double loyalty points grant twice the loyalty points to any player playing at the casino every Wednesday.</p>
    // <p>For example, if a Player usually receives 1 lp for every 10 EUR, INR 1000, USD 10, JPY 1500, NZD 10, AUD 10, TRY 200, CAD 10, NOK 100, PLN 50, HUF 4000 bet placed on Wednesday, they will receive 2 lp, thus speeding up their level-up potential.</p>
    // <p><br><b>2.9. Thursday deposit Bonus&nbsp;</b></p>
    // <p>2.9.1. The 50% up to 50 EUR, INR 5000, USD 50, JPY 7500, NZD 50, AUD 50, TRY 1000, CAD 50, NOK 500, PLN 250, HUF 20000 Thursday bonus is triggered with a minimum deposit of 10 EUR, INR 1000, USD 10, JPY 1500, NZD 10, AUD 10, TRY 200,, CAD 10, NOK 100, PLN 50, HUF 4000.</p>
    // <p>2.9.2. Players must go to the cashier or promotions page to claim the Thursday bonus, claim from there, and deposit.&nbsp;<br><br><br>2.9.3. To claim the 50% up to 50 EUR, INR 5000, USD 50, JPY 7500, NZD 50, AUD 50, TRY 1000, CAD 50, NOK 500, PLN 250, HUF 20000, players need to go to the cashier or promotions page, claim from there, and proceed to deposit. This deposit bonus is offered weekly and subject to standard bonus terms.</p>
    // <p>2.9.4. This Offer is available to all players who have already deposited at {{{siteName}}} Casino.</p>
    // <p>2.9.5. Any deposit bonus offered has a max cash-out policy which varies according to the loyalty program level the players are in. These max cash-out limits are also applicable to the welcome offers and can be viewed below:</p>
    // <p><br></p>
    // <p><br></p>
    // <div align="center">
    //     <table>
    //         <tbody>
    //             <tr>
    //                 <td>
    //                     <p>Loyalty Levels</p>
    //                 </td>
    //                 <td>
    //                     <p>Max Cashout with deposit Bonus</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>1</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 1000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>2</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 2000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>3</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 3000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>4</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 4000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>5</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 5000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>6</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 6000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>7</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 10000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>8</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 15000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>9</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 15000</p>
    //                 </td>
    //             </tr>
    //             <tr>
    //                 <td>
    //                     <p>10</p>
    //                 </td>
    //                 <td>
    //                     <p>EUR 25000</p>
    //                 </td>
    //             </tr>
    //         </tbody>
    //     </table>
    // </div>
    // <p><br></p>
    // <ul>
    //     <li>
    //         <p>Max bet during bonus: is 5 EUR, INR 500, USD 5, JPY 750, NZD 5, AUD 5, TRY 100, CAD 5, NOK 50, PLN 25, HUF 2000 (or equivalent in any other currency) per bet/spin.</p>
    //     </li>
    //     <li>
    //         <p>Wagering Requirement: 50x wagering applies independently of the loyalty program level the player is in.&nbsp;</p>
    //     </li>
    //     <li>
    //         <p>Once claimed, the bonus must be wagered within 7 days from the bonus issue date.</p>
    //     </li>
    //     <li>
    //         <p>Standard bonus terms and General Website conditions apply.</p>
    //     </li>
    // </ul>
    // <p><br></p>
    // <h3>3.0 Other bonus terms<br><br></h3>
    // <p>3.0.1.&nbsp;Different games and game types contribute towards fulfilling wagering requirements to different extents. For instance, if a game type delivers 100% towards wagering, it means that if you bet &euro;1, &euro;1 will count towards completing the wagering.</p>
    // <p>Below are the game&apos;s bonus wagering contribution rates:</p>
    // <p>All Slot Games: 100% (except Amatic: Aztec Emerald, Fruit Loop, Scarab Treasure, Princess of Pearls, Wild Hearts<br><br></p>
    // <p>- BGaming:&nbsp;Rocket Dice, Blackjack Surrender, Foxy Wild Heart, Plinko, WBC RIng of Riches, Zorro Wild Heart<br><br></p>
    // <p>- Booming:&nbsp;Surfin&apos; Reels , Wombaroo<br><br></p>
    // <p>- Betsoft:&nbsp;Dr. Jekyll &amp; Mr. Hyde, Fruitbat Crazy, Max Quest: Wrath of Ra, Lava Gold, Pinocchio, Spinfinity Man, Split Way Royal, Sugar Pop, Sugar Pop 2: Double Dipped, Super 7 Blackjack, Take The Bank, Take The Kingdom, Take Olympus, Take Santa&apos;s Shop, Tens or Better, The Hive!, The Mystic Hive, Three Card Rummy, Triple Edge Poker, Vip European Roulette, WhoSpunIt Plus, Zoom Roulette<br><br></p>
    // <p>- Endorphina:&nbsp;Ninja<br><br></p>
    // <p>- Epic Media:&nbsp;1429 Uncharted Seas (TK), Hope Diamond (Blueprint)<br><br></p>
    // <p>- Evoplay:&nbsp;Fluffy Rangers, Forgotten Fable, Rocket Stars, Night of the Living Tales<br><br></p>
    // <p>- Felix Gaming:&nbsp;Deep Blue Jackbomb, Lines of Magic<br><br></p>
    // <p>- Habanero:&nbsp;Egyptian Dreams Deluxe, Candy Tower, Fly!, Jellyfish Flow, Knockout Football, Knockout Football Rush, London Hunter, Magic Oak, Marvelous Furlongs, Presto!, Pumpkin Patch, Santa&rsquo;s Village<br><br></p>
    // <p>- iSoftbet:&nbsp;Ambiance, Mega Boy, Roo Riches, Super Fast Hot Hot Respin, Tree of Fortune, Vegas High Roller<br><br></p>
    // <p>- Kalamba:&nbsp;Bangkok Dreams, Crystal Cavern, Dino Odyssey<br><br></p>
    // <p>- Mascot:&nbsp;Bastet and Cats<br><br></p>
    // <p>- NetEnt:&nbsp;Blood Suckers, Dead or Alive, Dead or Alive 2, Dead or Alive 2 Feature Buy, Devil&apos;s Delight, Jackpot 6000, Lucky Angler, Mega Joker, Reel Rush 2, Reel Steal, Robin Hood: Shifting Riches, Scudamore&apos;s Super Stakes, Secrets of Atlantis, Serengeti Kings, Single Deck Blackjack Professional Series, Street Fighter II: The World Warrior Slot, The French Roulette, Rome: The Golden Age, The Wish Master, TXS Hold&apos;em Professional Series, Wilderland<br><br></p>
    // <p>- Nolimit City:&nbsp;Book Of Shadows<br>Nucleus: Wild Cherry Blast, Wins Ahoy<br><br></p>
    // <p>- NYX:&nbsp;300 Shields, Jackpot Jester 200000, 1429 Uncharted Seas , Lil Devil (BTG), Royal Mint (BTG)<br><br></p>
    // <p>- OnlyPlay:&nbsp;Crystal Crush, Juicy Crush, Myths of Bastet<br><br></p>
    // <p>- Play&apos;nGo: Baker&apos;s Treat, Eye of the Kraken, Golden Legend, Happy Halloween, Hugo 2, Mahjong 88, MULTIFRUIT 81, Pearls of India, Pimped, Rage to Riches, Royal Masquerade, Sea Hunter, Tower Quest<br><br></p>
    // <p>- Playson:&nbsp;Solar Temple (Infingame), Solar Queen (Infingame), Solar King (Infingame)&nbsp;<br><br></p>
    // <p>- Playtech:&nbsp;Age of the Gods: Ruler of the Seas, Shields of Rome, Storms of Ice Power Play Jackpot, Wild Lava, Savage Jungle, Viking Runecraft, Pragmatic, 3 Kingdoms &ndash; Battle of Red Cliffs, Bronco Spirit, Cash Elevator, Dragon Kingdom - Eyes of Fire, Golden Beauty, Jade Butterfly, Jungle Gorilla, Queen of Gold, The Champions, Wild Depth<br><br></p>
    // <p>- Push Gaming:&nbsp;Bison Battle, Jammin&apos; Jars 2 , Wild Swarm, Wizard Shop<br><br></p>
    // <p>- Quickfire:&nbsp;3 Tiny Gods, 300 Shields, Africa X UP, African Quest, Agent Valkyrie, Age of Conquest, Alchemy Blast, Astro Legends: Lyra and Erion, Art of the Heist, Augustus, Beautiful Bones, Bikini Party, Book of Oz, Bookie of Odds, Break Da Bank Again Respin, Castle Builder, Castle Builder II, Cool Buck, Craps, Dragon Dance, Elite of Evil: Portal of Gold (Gamevy), Flower Fortunes, Forsaken Kingdom, Gems Odyssey, Gems Odyssey 92, Gods Of Power, Goldaur Guardians, Golden Stallion, Hot Ink, Le Kaffee Bar, Lil Devil, Lucky Clucks (Crazytooth), Magic of Sahara, Major Millions, Medusa, Mega Moolah, Mega Moolah Isis, Monster Blast, Peek-a-Boo - 5 Reel, Pets Go Wild, Rabbit in the Hat, Reel Gems, Retro Reels, Retro Reels Diamond Glitz, Retro Reels Extreme Heat, Santa Goes Wild, Scrooge, Sisters of Oz WOWPOT, Solar Queen (Playson), Spectacular Wheel of Wealth, Stardust, Sweet Chilli, Tomb Raider - Secret of the Sword, Tomb Raider, Untamed Bengal Tiger, Untamed Crowned Eagle, Untamed Giant Panda, Untamed Wolf Pack, Vampire: The Masquerade - Las Vegas, Village People Macho Moves, Wheel of Wealth Special Edition, Wheel of Wealth, Wild Orient, Zombie Hoard<br><br></p>
    // <p>- Quickspin:&nbsp;Skulls Up!<br><br></p>
    // <p>- Red Tiger:&nbsp;5 Families, Ancients Blessing, Aztec Spins, Bombuster, Diamond Blitz, Dynamite Riches, Lucky Fridays, Spin Town, Three Musketeers, Reel Heist, Well Of Wishes<br><br></p>
    // <p>- Relax:&nbsp;3 Secret Cities (4ThePlayer), 100 Bit Dice (4ThePlayer), Book of 99, Deep Descent, Frequent Flyer, Hellcatraz , Kingmaker (BTG), Lil Devil (BTG), Marching Legions, Royal Mint (BTG), Slot Vegas Megaquads (BTG), Trail Blazer (Northernlights), Wizard Shop (Push Gaming)<br><br></p>
    // <p>- Spinomenal:&nbsp;1 Reel Egypt, 1 Reel Fruits, 1 Reel Halloween, 1 Reel Monkey, 1 Reel Xmas, Cupids Strike 2, Divine Forest, Lemur Does Vegas, Summer Splash, Mines of Gold, BlackJack<br><br></p>
    // <p>- Slotegrator:&nbsp;Solar King, Solar Temple<br><br></p>
    // <p>- Swintt:&nbsp;Egypt King<br><br></p>
    // <p>- Thunderkick:&nbsp;1429 Uncharted Seas, Barbershop: Uncut, Bork The Berzerker, Fruit Warp, Toki Time<br><br></p>
    // <p>- TrueLab:&nbsp;Crypts of Fortune, Mining Factory, Victoria Wild<br><br></p>
    // <p>- Yggdrasil:&nbsp;Alchymedes, Ancient Eclipse, Cauldron, Cazino Cosmos, Dark Vortex, Dwarf Mine, Double Dragons, Football Glory, Hammer of Gods, Holmes and the Stolen Stones, Jackpot Raiders , Johnan Legendarian, Jokerizer, Legion Hot 1, Ozwin&rsquo;s Jackpots, Rise of the Valkyrie Splitz, Robin Sherwood Marauders, Spina Colada, The Hot Offer, The Dark Joker Rizes, The Royal Family, Towering Pays Valhalla, Tut&apos;s Twister, Vikings Go to Hell, Vikings Go Berzerk, Vikings Go To Valhalla, Victoria Wild, Wicked Circus, Wolf Hunters<br><br></p>
    // <p>- Wazdan:&nbsp;9 Lions, Black Horse, Black Horse Deluxe, Butterfly Lovers, Hot 777, Hot 777 Deluxe, Larry The Leprechaun, Larry the Leprechaun Easter, Reel Hero, Relic Hunters and the Book of Faith, Sonic Reels: 0%).<br><br>We reserve the right to forfeit winnings if bonus funds are wagered on these games.</p>
    // <p><br></p>
    // <p>All Table Games and Live Casino games: 0%</p>
    // <p>All Video Poker games: 0%</p>
    // <p>All other games: 0%</p>
    // <p>2.4. We reserve the right to update this list and forfeit any winnings if bonus funds are wagered on these games.</p>
    // <p>2.5. The stake size on any game with a &quot;bonus buy&quot; or &quot;feature buys&quot; option will count as the total cost of the spin, not the stake or value of the game round the feature or bonus is played at. For example, for Money Train at &euro;1 stake, the bonus buy is 80x (&euro;80), so the bet size for this round would be &euro;80.<br><br>2.6. Although the rules listed above are {{{siteName}}} default wagering settings, players&rsquo; participation in specific promotions may necessitate special requirements that differ from those above. For example, table games, excluded from wagering by default, might become the only type of games eligible for wagering bonus money within special promotions for table games. Any promotion with an irregular wagering mode will have an accurate description of this mode in its terms and conditions.</p>
    // <p><br></p>
    // <p><br></p>
    //           `
    //         }),
    //         is_active: true,
    //         created_at: new Date(),
    //         updated_at: new Date()
    //       },
    //       {
    //         title: JSON.stringify({ EN: 'General Terms & Conditions' }),
    //         slug: 'general-terms',
    //         category : CMS_CATEGORIES.LEGAL_COMPLIANCE,
    //         content: JSON.stringify({
    //           EN: `
    //           <h3>1. Introduction</h3>
    //           1.1 {{{siteName}}} Casino is licensed by HNA Gaming B.V, a company based in Fransche Bloemweg 4, Willemstad, Curaçao, under the gaming license number 8048/JAZ issued by Antillephone Services N.V., authorised and regulated by the Government of Curacao.<br>
    //           1.2 {{{siteName}}} Casino is operated by tgt Group Ltd acting as a Merchant of Record, tgt Group Ltd., a company incorporated under the Laws of Cyprus with registration number HE 436088, VAT number 10436088C, and registered at Peiraios, 34A Strovolos, 2023, Nicosia, Cyprus with contact phone number +357 2232 4291.<br>
    //           1.3 tgt Group Ltd. is a 100% subsidiary of HNA Gaming B.V.<br>
    //           1.4 {{{siteName}}} Casino reserves the right to modify the terms and conditions at any time. Players who have already accepted the previous version of the terms will be notified via e-mail and requested to re-accept the new version of the terms via popup upon first login after terms update. These become effective as soon as they are published on this page without retroactive effect.
    //           With regard to bonuses and promotions terms & conditions, it’s the user's responsibility to read these terms and conditions and to refer to them regularly. Any deposit or game on {{{siteName}}} Casino implies that any user of the platform accepts these terms.<br>
    //           1.5 Payments are processed by tgt Group Ltd and for payment disputes Cypriot law applies.<br><br>
    //           <h3>2. Account</h3>
    //           2.1 To be able to play real money games on {{{siteName}}} Casino, an account must be opened.<br>
    //           2.2 The minimum age required to create an account is 18 years old.<br>
    //           2.3 Players residing in countries which are not available on the registration form cannot create an account or play on {{{siteName}}} Casino.<br>
    //           2.4 The Company only allows one (1) account per player, household, IP address, email address, phone number, payment methods (debit or credit cards). In the event that our security system detects that information is identical on several accounts, we then speak of "multi-accounts", which is strictly forbidden and, in this case, all accounts can be immediately closed by the fraud department.<br>

    //           2.5 If several players wish to play in our casino from a common computer network (dormitories, fraternities, etc.), or from the same household, we strongly suggest that they contact our support service, before creating accounts. multiple, to avoid unnecessary security procedures.<br>
    //           2.6 In order to open an account, the player will be invited to complete a registration form and provide the following personal information: a "username", a "password", "Name", "First name", "email" , “Phone number”, “home address”, “gender”, “date of birth” and “currency”. The name registered on the player's account must deposit the legal name and identity of the player.<br>
    //           2.7 It is the player's responsibility to ensure that he is the one and only person able to access his account by ensuring that his login information is kept secure. We recommend that our users log out of their account at the end of each game session for more security. <br>
    //           2.8 The player is advised to create a strong password containing upper and lower case letters, alphabetic characters, special characters and numbers. The suggested minimum length is eight characters including a capital letter, a number and a symbol.<br>
    //           2.9 The Company reserves the right to prohibit the use of pseudonyms and / or avatars that it deems inappropriate, in particular those of a political, racist, pornographic, insulting, violent nature, condoning terrorism, drugs and / or weapons. We also reserve the right to refuse to activate an account at any time and for any reason.<br><br>
    //           <ul><h3>2.9.1 Inactive Account :</h3>
    //           2.9.1.1 An account on which no activity has been recorded for at least 6 months will be considered inactive.<br>
    //           2.9.1.2 We reserve the right to apply an account management fee of 5 EUR, INR 500, USD 5, JPY 750, NZD 5, AUD 5, TRY 100, CAD 5, NOK 50, PLN 25, HUF 2000 per month, to any inactive credit account. In this case, said charges will be deducted from the active cash balance until the account is active again and / or until the active balance is zero.
    //           2.9.1.3 Once the balance is zero, no more inactivity fees will be applied by the Company.<br>
    //           2.9.1.4 Players have the possibility to recover the remaining funds on their inactive accounts by logging into their personal account and making a withdrawal request.<br>
    //           2.9.1.5 In the case of blocked and / or excluded accounts, players must contact customer support to recover these dormant funds.</ul><br>
    //           <h3>3. Acccount Verification</h3>
    //           3.1 All accounts need to be verified for age verification, fraud prevention, withdrawal processing, promotional restrictions, account closings, etc.<br>
    //           3.2 Any withdrawal request requires prior account verification. The required documents are as follows:
    //           <ul><li>A valid personal identification document (passport, driving license or national identity card).
    //           <li>Proof of address of less than 3 months in PDF format on which the full name and address of the player are mentioned. Bank account statements, payslip, water, gas and electricity bills as well as landline / internet bills are considered as proof of address.
    //           <li>Any official document from the user's banking institution on which the IBAN code and the BIC / SWIFT code appear.
    //           Failure to provide one of these supporting documents, the user must inform customer service.</ul>
    //           3.3 All {{{siteName}}} Casino accounts may be subject to a general or specific verification relating to the player's age, identity, means of payment as well as compliance with our terms of use. In the event that the player does not meet the time limits required to verify the account, {{{siteName}}} Casino reserves the right to temporarily suspend access to the games.<br>
    //           3.4 If you wish to verify your account before requesting a withdrawal, you should contact our live support. Documents can be emailed to verifications@{{{siteUrl}}} or through live chat.<br>
    //           3.5 Once you receive an email from our KYC team (Know Your Customers), please be sure to upload all requested documents within the allotted time following the instructions. Each link allows the download of a single document.<br>
    //           3.6 The information on the documents submitted must correspond to the information provided by the player when creating his {{{siteName}}} Casino account. The player agrees to inform customer service of any change in the situation, in order to keep his account up to date and verified by providing supporting documents.<br>
    //           3.7 The player will take care to submit a complete file and including authentic, legible and good quality documents, so that the processing times can be respected.<br>
    //           3.8 The processing time for account verification is 1 (one) working day, once all the necessary supporting documents have been received. However, the delay may be altered by an extraordinary and unusual situation.<br>
    //           3.9 The verification of your documents is carried out by our operator tgt Group Ltd. So your documents may have already been received and verified from another casino of this operator.<br><br>
    //           <h3>4. Deposits</h3>
    //           4.1 The minimum deposit amount is 10 EUR, INR 1000, USD 10, JPY 1500, NZD 10, AUD 10, TRY 200, CAD 10, NOK 100, PLN 50, HUF 4000 and the maximum amount is 2500 EUR, INR 200000, USD 2500, JPY 350000, NZD 2500, AUD 2500, TRY 50000, CAD 2500, NOK 25000, PLN 10000, HUF 1000000 per transaction.<br>
    //           4.2 When making a deposit, the player authorizes {{{siteName}}} Casino to use Electronic Service Providers (PSE) and / or third party payment providers for the processing of the various financial transactions, he therefore accepts to be bound directly to the general conditions of use of said partners.<br>
    //           4.3 By choosing a deposit method, the player accepts the conditions and all the costs that may be applied to him by a third party, such as his banking establishment (conversion fees, international transaction fees, etc.)<br>
    //           4.4 Any deposit method used must correspond to the first and last name of the {{{siteName}}} Casino account holder.<br>
    //           4.5 The list of available payment methods may change according to the wishes of the company and / or according to the player's geographical area.<br>
    //           4.6 By choosing to play for money on games of chance, the user accepts the possible risk of losing.<br>
    //           4.7 Stakes and deposits made on the site may be refunded under certain conditions. (See 15. Refunds)<br>
    //           4.8 Deposits by check, cash or wire transfer are not permitted on the site.<br><br>
    //           <h3>5. Withdrawals</h3>
    //           5.1 In order to make a withdrawal, the user's account must be verified (see 3. Verifications).<br>
    //           5.2 The minimum withdrawal amount is 10 EUR, INR 1000, USD 10, JPY 1500, NZD 10, AUD 10, TRY 200, CAD 10, NOK 100, PLN 50, HUF 4000, unless explicitly stated otherwise in the terms and conditions of the specific promotion.<br>
    //           5.3 A deposit must be wagered at least 1 (once) before part or all of the balance is withdrawn, in accordance with the standards imposed on us in the context of the fight against money laundering.<br>
    //           5.4 The withdrawal means are linked to the deposit methods used during the deposits previously made. If a payment method does not allow a payment to proceed smoothly, we reserve the right to choose the method of payment for the withdrawal.<br>
    //           5.5 In special cases, generally to prevent money laundering, we reserve the right to pay the withdrawal by a payout method of our choice and even if it is not the one initially required. Withdrawal requests on non-refundable credit cards will be issued to an electronic wallet of your choice or by bank transfer. In this case, all processing costs are the responsibility of the player.<br>
    //           5.6 The maximum withdrawal amount for a player is 2500 EUR, INR 200000, USD 2500, JPY 350000, NZD 2500, AUD 2500, TRY 50000, CAD 2500, NOK 25000, PLN 10000, HUF 1000000 per 7-day period, until full payment and unless otherwise specified in the Promotional Terms and Conditions, or except at our discretion, in the case of players having a privileged status for example.<br>
    //           5.7 Withdrawal requests may be canceled at any time by the player as long as they have not been processed by the financial department.
    //           5.8 If the withdrawal amount is limited (in the case of player wins with the free registration bonus for example), any balance exceeding the maximum authorized amount will be canceled and deleted from the account.<br>
    //           5.9 Any withdrawal request made cancels the current active bonuses, including non-activated free spins (see General Bonus Conditions).<br>
    //           5.10 In the event that one or more deposits are canceled or refused by the payment provider, we reserve the right to refuse or withhold any associated bonus amount or winnings.<br>
    //           5.11 The processing time for withdrawal requests is 3 (three) working days once all account verification documents have been received, analyzed and confirmed and in the event that no further verification is required.<br>
    //           5.12 Any withdrawal request will be subject to verification by our fraud department, which reserves the right to cancel all or part of the funds in the event of non-compliance with our present Terms and Conditions. The player will then be informed by email (see 4. Account Closures ans Holdings of Funds).<br>
    //           5.13 It is up to the player to inquire about the taxes and duties applicable to his winnings in his jurisdiction.<br><br>
    //           <h3>6. Bonuses and Promotions</h3>
    //           6.1 To view the terms and conditions for using bonuses, please click <a href="{{{siteUrl}}}/en/bonus-terms"><span class="s1">here</span></a><br>
    //           <h3>7. Customer Service</h3>
    //           7.1 Customer service is available 24/7 through live chat.<br>
    //           7.2 The user undertakes to use correct and respectful language in his interactions with the members of the {{{siteName}}} Casino team. Any abuse or behavior deemed inappropriate may lead to suspensions or the final closure of the account.<br><br>
    //           <h3>8. The Fight against Money Laundering and the financing of Terrorism.</h3>
    //           8.1 We are subject to the laws against money laundering and terrorist financing and in this regard must exercise due diligence on all accounts. Information provided to us, for account verification or other situations set forth in our terms and conditions, will be treated in accordance with our privacy policy and may not be used for any other purpose.<br>
    //           8.2 The player hereby acknowledges and agrees that we will use the information provided for our due diligence obligations, to carry out public research and to carry out checks to verify the veracity of the data provided to us. <br>
    //           8.3 While we are applying our due diligence measures, the player may be allowed to continue to use their account. However, he will not be allowed to make withdrawals from this account until our verification procedures are completed.<br>
    //           8.4 Where we are unable to fulfill our due diligence obligations because we have not received the required information from the player or are unable to verify their identity, no activity can be undertaken from the account and the account will be blocked and / or closed. In such event, we will return any deposit funds present in the account at the time of blocking and / or closing, unless it is necessary for us to delay or withhold payment of all or part of the player's funds to comply with our legal obligations.<br>
    //           8.5 The user agrees to cooperate and provide additional information and / or supporting documents necessary for the fulfillment of our obligations. Any communication for the provision of information / documentation should not be considered as a final communication in this regard.<br>
    //           8.6 If we learn or suspect that the information provided by the player is materially false, we will cancel the registration and take any other action we may require under the law. We will not pay any winnings in such circumstances.<br><br>
    //           <h3>9. Responsible Gaming</h3>
    //           9.1 The player can choose, at his discretion, a deposit limit by setting the amount and the desired period. Once registered and when said limit is reached, the player will no longer be able to deposit until his limit is reset. It should be noted that the deposits already made over the period will be taken into account in the calculation of the limit.<br>
    //           9.2 The player may, at his discretion, choose to limit his ability to access his player space for a determined period using the “Account freeze” option from his cashier. Following this limitation, the active funds will then be frozen and no transaction can be carried out on his account. The player will be able to enjoy his funds at the end of the defined freeze period.<br>
    //           9.3 All restrictions and exclusions will take effect immediately after confirming the settings in the Cashier // Limit section of the player account.<br>
    //           9.4 Any request for account freezing and / or exclusion will only be valid for the brand on which the player has requested it ({{{siteUrl}}}) and does not include other sites that we operate.<br>
    //           9.5 Our staff have no control over checkout options, which means they can only be changed or removed by the player. Any increase or removal of the limit will be effective within 24 hours exactly.<br><br>
    //           <h3>10. Data Protection</h3>
    //           10.1 We hereby warrant that we adopt adequate technical and organizational measures to ensure the security of our systems and the integrity of data transmitted on our website.<br>
    //           10.2 The player hereby acknowledges that his personal data will be processed by the licensee or by any other person, company or business associated in any way or otherwise engaged by the licensee to provide him with services as stipulated in these conditions. general. We will process players' personal data in accordance with the privacy policy of this website.<br>
    //           10.3 Registration of personal data
    //           {{{siteName}}} Casino guarantees that the personal data of our players is always obtained lawfully and treated fairly, in accordance with the rights of the player concerned and our regulatory obligations or recommendations. This allows us to guarantee safe and user-friendly sailing conditions for our players. This information may be disclosed to law enforcement authorities or our data processing service providers for review where it complies with our legally binding duties or obligations. {{{siteName}}} Casino is committed to protecting your privacy and your personal information.<br><br>
    //           10.4 Retention of personal data<br><br>
    //           The personal information we collect is kept secure in accordance with legal data security and retention requirements. Under applicable laws and regulations, {{{siteName}}} Casino is required to maintain a secure online list of all registered players. In addition, {{{siteName}}} Casino is obliged to keep all personal data submitted during registration and all data transmitted during the period of operation of a player account for at least five years from the last transaction of the player or the closing of the account. {{{siteName}}} Casino will retain this information for the period required by gambling laws and regulations.
    //           For more information, please refer to the Privacy Policy.<br><br>
    //           10.5 Cookies
    //           The {{{siteName}}} Casino site requires the storage of small data sent by the web server to the browser, commonly known as “Cookies”.
    //           The use of a cookie is in no way linked to the player's personal information, but with the aim of offering an ever more optimized and personalized gaming experience.
    //           Please be aware that the website {{{siteUrl}}} cannot be used correctly if cookies are disabled.<br><br>
    //           10.6 Communication
    //           {{{siteName}}} Casino can communicate to its registered members, informative and / or promotional content by means of newsletters and / or SMS.
    //           The user can unsubscribe from newsletters at any time by clicking on the "Unsubscribe" button at the bottom of the e-mail or by replying the word "STOP" to the SMS received.<br><br>
    //           <h3>11. Complaints</h3>
    //           11.1 The player can contact our customer service at {{{supportEmailAddress}}} and according to the instructions located on the website to inform us of any complaint and / or malfunction concerning our services (registration form, transactions, stakes, winnings, etc. .).<br>
    //           11.2 In the event of a wager not being recorded on time by the servers, the casino cannot be held responsible or liable for the result of the round. Likewise, any amount engaged cannot be the subject of a request for reimbursement.<br>
    //           11.3 Complaints are handled by the support team and forwarded to management if necessary. Any complaints considered reasonable will be dealt with within 24 hours.<br>
    //           11.4 The player has the right to submit unresolved disputes to Antillephone Services N.V. through complaints@xcm.com.<br>
    //           11.5 For more information on the Authority, please visit www.curacao-egaming.com<br>
    //           11.6 The Company cannot be held responsible for any unintentional interruption of operation of the Site following unforeseen circumstances or for reasons beyond its control, in particular, but not exhaustively: natural disasters, such as earthquakes, floods, fires, earthquakes, hurricanes, tropical storms; war, insurrection, arson, embargoes, acts of civil or military authorities, or terrorism; fiber optic cuts, strikes, or shortages of transportation, infrastructure, fuel, energy, labor or materials; the breakdown of infrastructure providing telecommunications and information services; hacking.<br><br>
    //           <h3>12. Governing Law</h3>
    //           12.1 These general conditions are governed by the laws of Curaçao.<br>
    //           12.2 The parties agree that any dispute, controversy or claim arising out of or in connection with these terms and conditions, or their breach, termination or invalidity, will be subject to the exclusive jurisdiction of Curaçao.<br>
    //           12.3 The regulations of the games and the services of the platform are governed by the laws of Curaçao.<br>
    //           12.4 You are solely responsible for complying with any law applicable in your country of residence and if you are authorized by the law applicable in your country of residence to play, you may open an account with us. We accept no liability for any violation or violation of applicable law. Otherwise, we reserve the right to reject your request to open an account or to deactivate your account. In addition, players declare that they are not residents of the United States and its dependencies or of Curacao. {{{siteName}}} Casino also prohibits persons located or residing in certain jurisdictions.<br><br>
    //           <h3>13. Game Restrictions</h3>
    //           13.1 The following territories are restricted by the game providers:
    //           Afghanistan, Albania, Algeria, Angola, Australia, Bahamas, Botswana, Belgium, Bulgaria, Curacao, Colombia, Croatia, Czech Republic, Denmark, Estonia, Ecuador, Ethiopia, France, Ghana, Guyana, Hong Kong, Italy, Iran, Iraq, Israel, Kuwait, Latvia, Lithuania, Mexico, Namibia, Nicaragua, Netherlands, North Korea, Pakistan, Panama, Philippines, Portugal, Romania, Singapore, Spain, Sudan, Syria, Taiwan, Trinidad and Tobago, Tunisia, Uganda, United Kingdom, United States of America, Yemen, Zimbabwe.<br><br>
    //           <h3>14. Account Closures and Holdings of Funds.</h3>
    //           14.1 The player can request the closure of his account at any time by contacting customer support via the chat or by sending an email to {{{supportEmailAddress}}}. Any request will be processed within 24 working hours, to the extent possible.<br>
    //           14.2 {{{siteName}}} Casino reserves the right, at its sole discretion, to permanently deactivate your account at any time and for any reason. In this case, the player immediately loses all his rights to the bonuses and / or any other promotional offer which would have been granted to him.<br>
    //           14.3 When an account is closed and whatever the origin, if we notice cheating, irregular gambling, collusion, fraud / criminal activity, or a violation of the terms of these General Conditions, we will reserve the right to withhold funds still in the balance. If it is not possible to pay the entire balance at once, due to payment limits or other reasons, the account will remain open until the full amount has been withdrawn by the player.<br>
    //           14.4 Any actual active balance in your account when it is closed, will be credited to a payment method recorded on your account, and of our choice, unless we withhold these sums for the reasons mentioned above.<br>
    //           14.5 Also, the Casino reserves the right, at its sole discretion, to cancel any winnings and confiscate any balance in any of the following circumstances:<br><ul>
    //           a. If you have more than one active account with {{{siteName}}} Casino;<br>
    //           b. If the name appearing on your player account does not deposit the name appearing on the payment or withdrawal method used (including credit card (s), e-wallet, money transfers, etc.);<br>
    //           c. If you provide incorrect or misleading registration or player profile information;<br>
    //           d. If you are not of legal age in the province / state / country and / or jurisdiction where you reside;<br>
    //           e. If you have authorized or permitted (intentionally or unintentionally) someone else to access or play on your account;<br>
    //           f. If you have not played individually for your own personal entertainment (i.e. you have played in a professional capacity, with the intention of exploiting our bonuses or in concert with one or more other players in as part of a club, group, etc.);<br>
    //           g. If you have requested a refund of any of the deposits made with your credit card or any other available payment method associated with your account or if you have threatened to do so;<br>
    //           h. If you are found guilty of collusion, cheating, criminal activity such as money laundering or fraudulent activity;<br>
    //           i. If it is established that you have employed or used a system (including the elements hereafter cited but not limited to machines, computers, software, algorithms or other automated "bot" systems) designed specifically to defeat {{{siteName}}} Casino, increase its chances of winning or that you have adopted habits and / or irregular betting or betting strategies. Thus, any use of automated programs or devices but also any game manipulation such as the use of the practice of Martingale, the Paroli Betting System or the Bonus Hunt (non-exhaustive list) are not authorized.<br>
    //           j. If you have used the site, or your account in a malicious manner.<br>
    //           k. If you use an anomaly to your advantage of the elements mentioned below but not limited to the system, balances, bonuses, free spins. The related winnings may also be frozen, and / or confiscated in part or in full.<br>
    //           l. If we learn that you have played at another online casino in any of the above circumstances. </ul><br>
    //           <h3>15. Refunds</h3>
    //           15.1 Refunds are in addition to a customer's rights as a consumer under applicable consumer protection laws and regulations.<br>
    //           15.2 All sums deposited by players are kept in the player account. Player funds are kept in bank accounts separate from professional accounts.<br>
    //           15.3 After filing a dispute regarding a deposit related issue, the player may request a refund.<br>
    //           15.4 To request a refund, the player must contact customer service, clearly describe the problem and specify the amount of the refund requested.<br>
    //           15.5 This request will be sent to the competent service, depending on the nature of the request.<br>
    //           15.6 The reimbursement request can be examined at any time, depending on the nature of the request.<br>
    //           15.7 The refund request will be diligently investigated and, if necessary, information will be obtained from the player's account, game providers, PSPs, etc. until a precise and satisfactory conclusion can be reached.<br>
    //           15.8 In the event of a reimbursement agreement, the amount transferred will be a true reflection of what is owed to the player and proportional to the player's existing balance and winnings.<br>
    //           15.9 We reserve the right to withhold any refund until the identity of the account holder is established to our satisfaction.<br>
    //           15.10 Where possible, refunds will be made using the same method used for deposits. In the event that the payment method used for the deposit does not support withdrawals, the refund will be processed only by bank transfer. In exceptional circumstances, when the payment method used for deposit supports withdrawals and we cannot send a wire transfer due to restricted areas, the refund can be made to a crypto wallet.<br>
    //           15.11 Reimbursement will be made in full, to the extent possible, and not over a period of time.<br>
    //           15.12 In the event that the request is not approved, the player will be informed of the reasons why his request was refused.<br>
    //           15.13 If the player is still not satisfied, they should send an email to customer support and a manager will contact them directly to resolve the situation.<br>
    //           15.14 If the situation still cannot be resolved, the player should refer to our complaints procedure policy. (see. 11. Complaints).<br>
    //           15.15 To the extent possible, the time / period between a refund request and resolution, approving or not approving the refund, will not exceed 72 hours from receipt of the request.<br><br>
    //           Last Updated: 8th March 2023<br>
    //           V 0.1
    //           `
    //         }),
    //         is_active: true,
    //         created_at: new Date(),
    //         updated_at: new Date()
    //       },
    //       {
    //         title: JSON.stringify({ EN: 'Responsible Gambling' }),
    //         slug: 'responsible-gambling',
    //         category : CMS_CATEGORIES.LEGAL_COMPLIANCE,
    //         content: JSON.stringify({
    //           EN: `
    //           <h3>RESPONSIBLE GAMING</h3>
    //           <p>Playing at {{{siteName}}} Casino. should be fun and enjoyable. Our mission is to entertain you but we understand the potential risks of problem gambling. We have provided below some ways to make sure your gambling is within controllable limits along with suggesting some places to go to if you need help.</p>
    //           <p>&nbsp;</p>
    //           <p>Here are some tips:</p>
    //           <ul>
    //           <li>
    //           <p>Jobs are for making money, but gambling is for entertainment. Treat it as an entertainment expense, like a ticket to the cinema, rather than a way to make money.</p>
    //           </li>
    //           <li>
    //           <p>Only gamble with money you can afford to lose.</p>
    //           </li>
    //           <li>
    //           <p>Know your limits and be clear about them before you start betting.</p>
    //           </li>
    //           <li>
    //           <p>Take a break. Gambling continuously without taking a break will impact your judgement.</p>
    //           </li>
    //           <li>
    //           <p>Don&rsquo;t gamble when you&rsquo;re upset or depressed. Talk to mates or family or get in touch with a Help Organization.</p>
    //           </li>
    //           <li>
    //           <p>Do other stuff. Sometimes less is more, so make gambling a part of a well-balanced lifestyle.</p>
    //           </li>
    //           <li>
    //           <p>Don&rsquo;t go chasing losses. Set your limits, stay in control.</p>
    //           </li>
    //           </ul>
    //           <p>&nbsp;</p>
    //           <p>KNOW YOUR LIMITS</p>
    //           <p>Since at {{{siteName}}} Casino we believe that your ability to play safely is very important, we have tools that are there for you to use if you feel the need to have a break.</p>
    //           <p>In the Limits section of your account you will find:</p>
    //           <p><strong>Deposit Limits</strong></p>
    //           <p>This will limit the amount you can deposit during a certain period. Once you have reached this sum you will not be able to make any new deposits until your limit is reset.</p>
    //           <p><strong>Wager Limits</strong></p>
    //           <p>This will limit the total amount you can bet during a certain period. When you have reached these sums, you will not be able to place any new bets until your limit is reset.</p>
    //           <p><strong>Loss Limits</strong></p>
    //           <p>This limit will prevent you from losing more than you are willing to lose. (winnings are not included in the calculation). Once you reach the loss limit they will be unable to lose beyond the set limit.</p>
    //           <p><strong>Session Limits</strong></p>
    //           <p>It&rsquo;s important that you keep track of the amount of time you spend gambling. We recommend you take note of the time you start gambling set Session Limits and keep an eye on the clock to make sure that you aren&rsquo;t spending more time than you should be. We also strongly advise you to keep your device clock enabled whilst gambling so you can easily refer to it.</p>
    //           <p><strong>Take a Break</strong></p>
    //           <p>You may feel in control but would like a break to consider your gambling, or maybe you are in the middle of a busy time and don&rsquo;t want to spend time or energy on gambling. If this is the case, taking a break may help you.</p>
    //           <p>Take a Break can be applied to your account from 24 hours up to a maximum of 30 days During this period, you will be restricted from accessing your {{{siteName}}} Casino account and we will stop any contact or marketing offers.</p>
    //           <p><strong>Self-Exclusion</strong></p>
    //           <p>Should you be unable to control your gambling and decide to make a much longer break or even permanent, then it is possible to self-exclude. Choosing to self-exclude will mean that it will not be possible to reopen your account once in effect for periods ranging from six months to 1 year or even Permanent by clicking&nbsp;<a href="{{{siteUrl}}}/en/account/limits">here</a>.&nbsp;In order to request a longer self-exclusion please contact us via live chat or email&nbsp;{{{supportEmailAddress}}}.</p>
    //           <p>&nbsp;</p>
    //           <p><strong>SELF ASSESSMENT TEST</strong></p>
    //           <p>If you are not sure about your gambling activity please feel free to conduct the GamCare Self-Assessment Test by clicking&nbsp;<a href="https://www.gamcare.org.uk/self-help/self-assessment-tool/">here</a></p>
    //           <p>The assessment consists of statements to evaluate and give a score on a scale of 1-10 according to how much they apply to you. The result will provide you with a breakdown of how gambling is affecting your life and will give you personalised recommendations for your next steps.</p>
    //           <p>&nbsp;</p>
    //           <p><strong>PROFESSIONAL SUPPORT</strong></p>
    //           <p><a href="https://www.gamblersanonymous.org.uk/">Gamblers Anonymous</a></p>
    //           <p>is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to do the same. They offer various aids for the compulsive gambler including a forum, a chat room, literature and most importantly a meeting finder.</p>

    //           <p><a href="https://www.gamcare.org.uk/">GamCare</a></p>
    //           <p>Founded in 1997, GamCare is the leading provider of information, advice and support for anyone affected by problem gambling. They operate the National Gambling Helpline, provide treatment for problem gamblers and their families, create awareness about responsible gambling and treatment, and encourage an effective approach to responsible gambling within the gambling industry</p>
    //           <br>
    //           <p><strong>ADDITIONAL TIPS</strong></p>
    //           <p>Many banks, fintech banks and e-wallet providers across Europe now offer gambling blocks that allow their customers to block gambling transactions on their accounts. If you want to implement these, your bank should explain how to do this, or could even do it for you. Please be aware that these blocks are not permanent, they can be switched on and off with varying delays, so it&rsquo;s also a good idea to have other support in place if you want to stop gambling completely.</p>
    //           <p>Some banks may also allow you to set a spending limit for a single debit card transaction, or temporarily freeze your card if you feel like your spending is getting out of control. This will vary from bank to bank so check what protections your bank can put in place for you.</p>
    //           <p>Another way of taking some time away from online gambling is to put a &ldquo;blocker&rdquo; on your device, well-known ones are Gamblock or Betblocker.</p>
    //           <p>Please note&nbsp;that tgt Group takes no responsibility for the performance or quality of the software suggested on this page that is not supplied by ourselves.</p>
    //           <br>
    //           <p><strong>PREVENTING UNDERAGE GAMBLING</strong></p>
    //           <p>It is illegal for anybody under the age of 18 to open an account or gamble with {{{siteName}}} Casino. We take our responsibilities in this area very seriously and follow a few steps to verify our customers are over 18.</p>
    //           <p>Anyone under the age of 18 found using this site will have winnings forfeited and the account will be closed with immediate effect.</p>
    //           <p>We also advise that you familiarise yourself with the built-in parental tools on your Mobile/Tablet/PC/TV devices</p>
    //           <p>Limit the amount of time your children spend online.</p>
    //           <p><br></p>
    //           <p><br></p>
    //           <p><br></p>
    //           `
    //         }),
    //         is_active: true,
    //         created_at: new Date(),
    //         updated_at: new Date()
    //       }
    //     ])
  },
  async down(queryInterface, DataTypes) {
    // await queryInterface.bulkDelete({ tableName: 'cms_pages', schema: 'public' }, null, {})
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDTVNfQ0FURUdPUklFUyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIkRhdGFUeXBlcyIsImRvd24iXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGIvc2VlZGVycy8yMDIzMDMzMTA5MjgzNi1jbXMtcGFnZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IHsgQ01TX0NBVEVHT1JJRVMgfSA9IHJlcXVpcmUoXCJAc3JjL3V0aWxzL2NvbnN0YW50cy9wdWJsaWMuY29uc3RhbnRzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3luYyB1cCAocXVlcnlJbnRlcmZhY2UsIERhdGFUeXBlcykge1xuLy8gICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmJ1bGtJbnNlcnQoeyB0YWJsZU5hbWU6ICdjbXNfcGFnZXMnLCBzY2hlbWE6ICdwdWJsaWMnIH0sIFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgdGl0bGU6IEpTT04uc3RyaW5naWZ5KHsgRU46ICdGQVEnIH0pLFxuLy8gICAgICAgICBzbHVnOiAnZmFxJyxcbi8vICAgICAgICAgY2F0ZWdvcnkgOiBDTVNfQ0FURUdPUklFUy5TVVBQT1JULFxuLy8gICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgRU46IGBcbi8vICAgICAgICAgICA8aDQ+QWNjb3VudDwvaDQ+XG4vLyAgICAgICAgICAgPHA+UTogSG93IGRvIEkgc2lnbiB1cCBhdCB7e3tzaXRlTmFtZX19fT88L3A+XG4vLyAgICAgICAgICAgPHA+QTogVG8gc2lnbiB1cCwgY2xpY2sgJnF1b3Q7U2lnbiBVcCEmcXVvdDsgYXQgdGhlIHRvcCBsZWZ0IG9mIHRoZSBob21lcGFnZS4gVGhpcyB3aWxsIG9wZW4gYSBzaG9ydCBzaWduLXVwIGZvcm0gZm9yIHlvdSB0byBmaWxsIGluLjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6Jm5ic3A7SSBhbSBzdGlsbCB3YWl0aW5nIHRvIHJlY2VpdmUgYSB2ZXJpZmljYXRpb24gZW1haWwgYWZ0ZXIgY29tcGxldGluZyB0aGUgc2lnbi11cCBmb3JtIC0gaG93IGRvIEkgc29sdmUgdGhpcyBpc3N1ZT88L3A+XG4vLyAgICAgICAgICAgPHA+QTogSWYgeW91IHN0aWxsIG5lZWQgdG8gcmVjZWl2ZSB2ZXJpZmljYXRpb24uIFlvdSBjYW4gY29udGFjdCBvdXIgc3VwcG9ydCB0ZWFtLCB3aG8gd2lsbCB2ZXJpZnkgeW91ciBhY2NvdW50IG1hbnVhbGx5IGlmIHRoZSBwcm9ibGVtIHBlcnNpc3RzLjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IEkgbmVlZCBoZWxwIG9wZW5pbmcgYW4gYWNjb3VudC4gV2hhdCBzaGFsbCBJIGRvPzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBNYWtlIHN1cmUgdGhhdCB5b3UgaGF2ZSBub3QgcmVnaXN0ZXJlZCBhbiBhY2NvdW50LiBJZiBpbiBkb3VidCwgdHlwZSB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdGhpbmsgeW91IG1pZ2h0IGhhdmUgdXNlZCB0byByZWdpc3RlciBhbmQgY2xpY2sgdGhlIHJlc2V0IHBhc3N3b3JkIGxpbmsuJm5ic3A7PC9wPlxuLy8gICAgICAgICAgIDxwPklmIHlvdSBhcmUgc3RpbGwgd2FpdGluZyB0byByZWNlaXZlIGEgZm9yZ290dGVuIHBhc3N3b3JkIGVtYWlsLCBjb250YWN0IG9uZSBvZiBvdXIgc3VwcG9ydCBhZ2VudHMgdG8gaW52ZXN0aWdhdGUgd2h5IHlvdSBjYW5ub3QgcmVnaXN0ZXIgYW4gYWNjb3VudCB3aXRoIHt7e3NpdGVOYW1lfX19LjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IEhvdyBkbyBJIHVuc3Vic2NyaWJlIGZyb20gcmVjZWl2aW5nIHByb21vdGlvbmFsIGVtYWlscyBhbmQgdGV4dHM/PC9wPlxuLy8gICAgICAgICAgIDxwPlRvIHVuc3Vic2NyaWJlIGZyb20gY29tbXVuaWNhdGlvbnMsIGdvIHRvICZxdW90O015IEFjY291bnQmcXVvdDsgYW5kIGNsaWNrICZxdW90O1ByZWZlcmVuY2VzLCZxdW90OyB0aGVuIHVudGljayB0aGUgYm94ZXMgbmV4dCB0byBlbWFpbCBvciBzbXMgYW5kIGNsaWNrIHNhdmUuIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdW5zdWJzY3JpYmUgZGlyZWN0bHkgZnJvbSBvdXIgcHJvbW90aW9uYWwgZW1haWxzIG9yIHNtcyBieSBjbGlja2luZyBvbiB0aGUgdW5zdWJzY3JpYmUgbGluay48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBIb3cgZG8gSSBjbG9zZSBteSBhY2NvdW50PzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBJZiB5b3Ugd2FudCB0byB0YWtlIGEgYnJlYWsgYW5kIHRlbXBvcmFyaWx5IGRlYWN0aXZhdGUgeW91ciBhY2NvdW50LCB5b3UgY2FuIGRvIHNvIGJ5IHRha2luZyBhIHRpbWUtb3V0LiBBZnRlciBsb2dnaW5nIGluLCB0aGlzIG9wdGlvbiBpcyBsb2NhdGVkIGluIHRoZSAmcXVvdDtSZXNwb25zaWJsZSBHYW1pbmcmcXVvdDsgc2VjdGlvbiBvZiB7e3tzaXRlVXJsfX19LiBIZXJlIHlvdSB3aWxsIGZpbmQgdGhlIG9wcG9ydHVuaXR5IHRvIHBhdXNlIHlvdXIgYWNjb3VudCBmb3IgdGhlIHRpbWUgeW91IGRlZW0gZml0LiBJZiB5b3Ugd2FudCB0byBjbG9zZSB5b3VyIGFjY291bnQgZm9yIGV4dGVuZGVkIHBlcmlvZHMsIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbSB0aHJvdWdoIHt7e3N1cHBvcnRFbWFpbEFkZHJlc3N9fX0gb3Igb3VyIExpdmUgQ2hhdC48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBJIGFza2VkIGEgcXVlc3Rpb24gb24gbGl2ZSBDaGF0LCBidXQgSSZhcG9zO20gbGVmdCB3YWl0aW5nIGZvciBmZWVkYmFjay48L3A+XG4vLyAgICAgICAgICAgPHA+QTogQXQgY2VydGFpbiB0aW1lcyBvZiB0aGUgZGF5LCBtYW55IHBsYXllcnMgc2VlayBhc3Npc3RhbmNlIGZyb20gb25lIG9mIG91ciBzdXBwb3J0IGFnZW50cy4gQ29uc2VxdWVudGx5LCBmZWVkYmFjayBtaWdodCB0YWtlIHRpbWUgdG8gZGVsaXZlci4gSG93ZXZlciwgb3VyIHN1cHBvcnQgc2VydmljZSBydW5zIDI0LzcsIDM2NSBkYXlzIGEgeWVhciwgYW5kIGJlIHN1cmUgdGhhdCB5b3Ugd2lsbCBnZXQgZmVlZGJhY2sgYXMgc29vbiBhcyBwb3NzaWJsZS48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlBheW1lbnRzPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogSG93IGNhbiBJIGRlcG9zaXQgbW9uZXkgaW50byBteSBhY2NvdW50PzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBUbyBkZXBvc2l0IGZ1bmRzLCBsb2cgaW4gdG8gdGhlIHdlYnNpdGUgYW5kIHNlbGVjdCB0aGUgJnF1b3Q7RGVwb3NpdCZxdW90OyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlLiBUaGVuLCBjaG9vc2UgeW91ciBwcmVmZXJyZWQgcGF5bWVudCBtZXRob2QgYW5kIGZvbGxvdyB0aGUgaW5zdHJ1Y3Rpb25zLjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IFdoYXQgaXMgdGhlIHByb2Nlc3MgZm9yIG1ha2luZyBhIHdpdGhkcmF3YWw/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFdoZW4gbG9nZ2VkIGluLCBjbGljayBvbiB5b3VyIHByb2ZpbGUgaWNvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHdlYnBhZ2UuIFlvdSB3aWxsIHRoZW4gYmUgcmVxdWlyZWQgdG8gc3BlY2lmeSB0aGUgYW1vdW50IG9mIG1vbmV5IHlvdSB3YW50IHRvIHdpdGhkcmF3IGZyb20geW91ciBhY2NvdW50IGFuZCBieSB3aGljaCBwcmVmZXJyZWQgcGF5bWVudCBtZXRob2QuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogV2hpY2ggZm9ybXMgb2YgcGF5bWVudCBtZXRob2RzIGRvIHlvdSBhY2NlcHQgZm9yIHRoZSBkZXBvc2l0PzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBUaGUgZGVwb3NpdCBtZXRob2RzIHlvdSBjYW4gdXNlIHZhcnkgZGVwZW5kaW5nIG9uIHlvdXIgbG9jYXRpb24uIFdlIG9mZmVyIGEgcmFuZ2Ugb2YgY2FyZHMsIGUtd2FsbGV0cywgYW5kIGV2ZW4gY3J5cHRvY3VycmVuY2llcy4gVG8gdmlldyBhbGwgdGhlIGRlcG9zaXQgbWV0aG9kcyBhdmFpbGFibGUgdG8geW91LCBwbGVhc2UgY2xpY2sgaGVyZS48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBXaGljaCBmb3JtcyBvZiB3aXRoZHJhd2FsIGFyZSBhdmFpbGFibGUgdG8gbWU/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFRoZSB0eXBlIG9mIHdpdGhkcmF3YWwgb3B0aW9ucyBhdmFpbGFibGUgdG8geW91IGRlcGVuZHMgb24gd2hlcmUgeW91IGxpdmUuIFdlIHByb3ZpZGUgdmFyaW91cyBjYXJkcywgZGlnaXRhbCB3YWxsZXRzLCBhbmQgZXZlbiBjcnlwdG9jdXJyZW5jeSBzZXJ2aWNlcy4gVG8gc2VlIHRoZSBjb21wbGV0ZSBsaXN0LCBjaGVjayB0aGlzIHBhZ2UuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogV2h5IGRpZG4mYXBvczt0IG15IGRlcG9zaXQgZ28gdGhyb3VnaD88L3A+XG4vLyAgICAgICAgICAgPHA+QTogRW5zdXJlIHRoYXQgZWFjaCBmaWVsZCBpcyBhY2N1cmF0ZWx5IGZpbGxlZC4gQmUgc3VyZSB5b3UgYXJlIHV0aWxpemluZyB0aGUgcGF5bWVudCBtZXRob2RzIGFjY2VwdGVkIGluIHlvdXIgYXJlYS4gRm9yIGV4YW1wbGUsIGZhaWx1cmVzIHRvIGRlcG9zaXQgbW9uZXkgYXJlIG9mdGVuIGNhdXNlZCBieSBhbiBpc3N1ZSB3aXRoIHRoZSBiYW5rLiBCZSBzdXJlIHlvdSBoYXZlIGVub3VnaCBmdW5kcyBpbiB0aGUgcGF5bWVudCBtZXRob2QgeW91IHNlbGVjdGVkIGFuZCB0aGF0IGFsbCByZWxhdGVkIHNlY3VyaXR5IHZlcmlmaWNhdGlvbnMgYXJlIHBhc3NlZC4gSWYgeW91IG5lZWQgaGVscCwgZmVlbCBmcmVlIHRvIGNvbnRhY3Qgb3VyIGhlbHAgZGVzay48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBJIGRlcG9zaXRlZCBtb25leSwgYnV0IHRoZSBhbW91bnQgbmVlZHMgdG8gYmUgdmlzaWJsZSBpbiBteSBhY2NvdW50LiBIb3cgaXMgdGhpcyBwb3NzaWJsZT88L3A+XG4vLyAgICAgICAgICAgPHA+QTogQ2hlY2sgaWYgYW55IG1vbmV5IGhhcyBiZWVuIHRha2VuIGZyb20geW91ciBiYW5rIGFjY291bnQsIGFuZCBsZXQgdXMga25vdyBpZiBpdCBoYXMuIE1vc3QgaXNzdWVzIGNhbiBiZSByZXNvbHZlZCB3aXRob3V0IHByb3ZpZGluZyBhbnkgZXZpZGVuY2Ugb2YgcGF5bWVudC4gSG93ZXZlciwgd2UgbWF5IG9jY2FzaW9uYWxseSBuZWVkIHByb29mIG9mIHBheW1lbnQgdG8gbG9vayBpbnRvIHRoZSBwcm9ibGVtIHdpdGggdGhlIHBheW1lbnQgcHJvY2Vzc29yLjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IEFyZSB0aGVyZSBhbnkgY2hhcmdlcyBmb3IgZGVwb3NpdGluZyBvciB3aXRoZHJhd2luZyBtb25leSBhdCB7e3tzaXRlTmFtZX19fT88L3A+XG4vLyAgICAgICAgICAgPHA+QTogV2UgY2hhcmdlIG5vIGZlZXMgb24gZGVwb3NpdHMgb3Igd2l0aGRyYXdhbHMuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogV2h5IGFtIEkgdW5hYmxlIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gbXkgYWNjb3VudD88L3A+XG4vLyAgICAgICAgICAgPHA+QTogQXJlIHlvdSByZXF1ZXN0aW5nIG1vcmUgZnVuZHMgdGhhbiB5b3UgaGF2ZSBpbiB5b3VyIGFjY291bnQ/IERvIHlvdSBoYXZlIGFueSBib251cyBmdW5kcyB0aGF0IHN0aWxsIG5lZWQgdG8gYmUgd2FnZXJlZCBhbmQsIHRoZXJlZm9yZSwgY2Fubm90IGJlIHdpdGhkcmF3bj8gRGlkIHlvdSByZWZyZXNoIHRoZSBwYWdlIGFuZCBjbGVhciB0aGUgY2FjaGU/PC9wPlxuLy8gICAgICAgICAgIDxwPklmIHRoZSBpc3N1ZSBjb250aW51ZXMsIHBsZWFzZSBkb24mYXBvczt0IGhlc2l0YXRlIHRvIGNvbnRhY3QgdXMsIGFuZCB3ZSB3aWxsIGFzc2lzdCB5b3UuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogV2hlbiB3aWxsIEkgZ2V0IHRoZSBmdW5kcyBmcm9tIG15IHdpdGhkcmF3YWw/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFRoZSB0aW1lIGl0IHRha2VzIHRvIHByb2Nlc3MgeW91ciB3aXRoZHJhd2FsIHJlcXVlc3QgaXMgYmFzZWQgb24geW91ciBjaG9zZW4gcGF5bWVudCBtZXRob2QuIEZvciBleGFtcGxlLCBpZiB5b3UgYXJlIHVzaW5nIGEgY2FyZCwgaXQgY2FuIHRha2UgMS01IGJ1c2luZXNzIGRheXMgdG8gYmUgYXBwcm92ZWQgYW5kIHNlbnQsIHdoaWxlIGUtd2FsbGV0cyBhcmUgcHJvY2Vzc2VkIGltbWVkaWF0ZWx5IGFmdGVyIGJlaW5nIGNvbmZpcm1lZCBieSBvdXIgcGF5bWVudHMgdGVhbS48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBJcyB0aGVyZSBhIG1heGltdW0gYW1vdW50IEkgY2FuIGRlcG9zaXQ/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFRoZXJlIGlzIG5vIGxpbWl0IG9uIGhvdyBtdWNoIG1vbmV5IHlvdSBjYW4gZGVwb3NpdCBkYWlseSwgd2Vla2x5LCBvciBtb250aGx5LiBIb3dldmVyLCBjZXJ0YWluIHBheW1lbnQgcHJvdmlkZXJzIG1pZ2h0IGltcG9zZSBhIGRhaWx5IGRlcG9zaXQgbGltaXQgdGhyZXNob2xkIHdoaWNoIGlzIG91dCBvZiBvdXIgY29udHJvbC4gSWYgeW91IGVuY291bnRlciBhbnkgaXNzdWVzLCBkb24mYXBvczt0IGhlc2l0YXRlIHRvIGNvbnRhY3Qgb25lIG9mIG91ciBzdXBwb3J0IGFnZW50cyB0byBpbnZlc3RpZ2F0ZSBhbnkgcG90ZW50aWFsIHByb2JsZW1zIGZ1cnRoZXIuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+Qm9udXNlczwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IFdoYXQgbXVzdCBJIGRvIHRvIHJlY2VpdmUgdGhlIHdlbGNvbWUgYm9udXMgYWZ0ZXIgc2lnbmluZyB1cD88L3A+XG4vLyAgICAgICAgICAgPHA+QTogVGhlIHdlbGNvbWUgYm9udXMgaXMgYXV0b21hdGljYWxseSBpc3N1ZWQgdG8geW91ciBhY2NvdW50IGFzIHNvb24gYXMgeW91IHN1Y2Nlc3NmdWxseSByZWdpc3RlciBhbiBhY2NvdW50IGF0IHt7e3NpdGVOYW1lfX19LiBZb3UgY2FuIHNlZSB5b3VyIGVsaWdpYmxlIGJvbnVzIGRldGFpbHMgaW4gdGhlIGNhc2hpZXIgc2VjdGlvbiwgYWNjZXNzaWJsZSBieSBjbGlja2luZyB0aGUgZGVwb3NpdCBub3cgYnV0dG9uIG9yIG9uIHRoZSBwcm9tb3Rpb25zIHBhZ2UuIENsYWltIHRoZSBib251cyBieSB0aWNraW5nIHRoZSBib3ggbmV4dCB0byBpdCBpbiB0aGUgY2FzaGllciBvciBjbGljayB0aGUgY2xhaW0gbm93IGJ1dHRvbiBvbiB0aGUgcmVsZXZhbnQgcHJvbW90aW9ucyBwYWdlIGFuZCBwcm9jZWVkIHRvIGRlcG9zaXQuIEFmdGVyIHlvdSBzdWNjZXNzZnVsbHkgZGVwb3NpdCwgdGhlIGJvbnVzIHdpbGwgYmUgYXV0b21hdGljYWxseSBhZGRlZCB0byB5b3VyIHdhbGxldC48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBIb3cgd2lsbCBJIGtub3cgaWYgSSZhcG9zO20gZWxpZ2libGUgZm9yIGZyZWUgc3BpbnM/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IEFmdGVyIHlvdSBsb2cgaW4gdG8ge3t7c2l0ZU5hbWV9fX0sIGdvIHRvIHlvdXIgcHJvZmlsZSBvbiB0aGUgdG9wIGxlZnQgb2YgdGhlIGhvbWVwYWdlLCBjbGljayBvbiB0aGUgYm9udXMgc2VjdGlvbiwgYW5kIHRoZXJlIHlvdSB3aWxsIHNlZSBpZiBhbnkgZnJlZSBzcGlucyBhcmUgY3JlZGl0ZWQgdG8geW91ciBhY2NvdW50LiZuYnNwOzwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IERvIGFsbCBnYW1lcyBjb3VudCB0b3dhcmRzIHRoZSB3YWdlcmluZyByZXF1aXJlbWVudHM/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IEdhbWVzIGNhbiBoYXZlIGRpZmZlcmVudCBjb250cmlidXRpb25zIHRvIHdhZ2VyaW5nIHJlcXVpcmVtZW50cy4gU29tZSBtYXkgY29udHJpYnV0ZSBub3RoaW5nIGF0IGFsbCwgd2hpbGUgb3RoZXJzIG1heSBjb250cmlidXRlIGZ1bGx5LiBBbGwgdGhlIGdhbWVzIHRoYXQgZG8gbm90IGNvbnRyaWJ1dGUgdG93YXJkcyB3YWdlcmluZyBjYW4gYmUgdmlld2VkIG9uIG91ciBib251cyB0ZXJtcyBwYWdlIGhlcmUuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogSG93IG9mdGVuIGRvIEkgbmVlZCB0byB3YWdlciBteSBib251cyBiZWZvcmUgSSBjYW4gY2FzaCBvdXQ/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFlvdSBuZWVkIHRvIHdhZ2VyIHlvdXIgYm9udXMgZnVuZHMgNTAgdGltZXMgYmVmb3JlIGJlaW5nIGFibGUgdG8gd2l0aGRyYXcgaXQuIFRoaXMgd2FnZXJpbmcgY29udHJpYnV0aW9uIGlzIHN0YW5kYXJkIGFuZCB2YXJpZXMgZGVwZW5kaW5nIG9uIHlvdXIgbG95YWx0eSBsZXZlbC4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHZpc2l0IG91ciBsb3lhbHkgcHJvZ3JhbW1lIHBhZ2Ugb3IgY2hlY2sgb3VyIGJvbnVzIHRlcm1zIHBhZ2UgZm9yIGFsbCBkZXRhaWxzIHJlbGF0ZWQgdG8gd2FnZXJpbmcgcmVxdWlyZW1lbnRzIGZvciBvdXIgdGVuIGRpZmZlcmVudCBsb3lhbHR5IGxldmVscy48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5SZXNwb25zaWJsZSBHYW1pbmc8L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBDYW4gSSBsaW1pdCBob3cgbXVjaCBJIGNhbiBwbGF5LCBzcGVuZCBhbmQgbG9zZSBvbiB7e3tzaXRlTmFtZX19fT88L3A+XG4vLyAgICAgICAgICAgPHA+QTogT3VyIHJlc3BvbnNpYmxlIGdhbWJsaW5nIGRlcGFydG1lbnQgdGFrZXMgb3VyIHBsYXllcnMmYXBvczsgbmVlZHMgYW5kIHNhZmV0eSBzZXJpb3VzbHkuIFRoYXQmYXBvcztzIHdoeSB3ZSBwcm92aWRlIG11bHRpcGxlIHRvb2xzIHRvIGhlbHAgdGhlbSBtYW5hZ2UgdGhlaXIgZ2FtaW5nIGV4cGVyaWVuY2VzICZuZGFzaDsgc3VjaCBhcyB0aW1lLW91dCBsaW1pdHMgYW5kIG90aGVyIHJlc3RyaWN0aW9ucy4gUGxlYXNlIGxldCB1cyBrbm93IGlmIHlvdSBmZWVsIHdlIHNob3VsZCBkZXZlbG9wIGFkZGl0aW9uYWwgdG9vbHMgdG8gaGVscCB5b3UgY29udHJvbCB5b3VyIGdhbWJsaW5nLiZuYnNwOzwvcD5cbi8vICAgICAgICAgICA8cD5UbyBsaW1pdCB5b3VyIGdhbWJsaW5nLCBoZWFkIHRvIG91ciBMaW1pdHMgcGFnZSB0byBzZXQgeW91ciBEZXBvc2l0IExpbWl0cyBmb3IgZWl0aGVyIG9uZSB3ZWVrIG9yIGEgbW9udGguIE9yLCBpZiB5b3UgbmVlZCBhIHF1aWNrIGJyZWFrIGZyb20gZ2FtaW5nLCB0YWtlIGEgMjQtaG91ciwgNy1kYXkgdGltZS1vdXQsIG9yIGV2ZW4gc2VsZi1leGNsdWRlIHBlcm1hbmVudGx5LiBJZiB5b3Ugd2lzaCBhc3Npc3RhbmNlIGZyb20gb25lIG9mIG91ciBzdXBwb3J0IGFnZW50cyB3aXRoIHRoZXNlIHJlc3BvbnNpYmxlIGdhbWluZyBvcHRpb25zLCBjb250YWN0IHVzIHZpYSBlbWFpbCBhdCB7e3tzdXBwb3J0RW1haWxBZGRyZXNzfX19IG9yIG91ciAyNC83IExpdmUgQ2hhdC48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBDYW4gSSBhZGp1c3QgbXkgZ2FtaW5nIGxpbWl0cyBpZiBuZWVkIGJlPzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBJZiB5b3Ugd2lzaCB0byBhZGp1c3QgeW91ciBsaW1pdHMsIHlvdSBjYW4gZG8gc28gZWFzaWx5LiBIb3dldmVyLCBpbmNyZWFzaW5nIHlvdXIgbGltaXRzIHdpbGwgcmVxdWlyZSBhIDI0LWhvdXIgZ3JhY2UgcGVyaW9kIGZvciB0aGUgY2hhbmdlcyB0byB0YWtlIGVmZmVjdCwgd2hpbGUgZGVjcmVhc2luZyB0aGVtIGlzIGltbWVkaWF0ZS48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBJZiBJIHNlbGYtZXhjbHVkZSBteSBhY2NvdW50LCB3aGF0IHdpbGwgaGFwcGVuIHRvIHRoZSBmdW5kcyBpbiBteSBhY2NvdW50PzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBJZiB5b3UgaGF2ZSBjYXNoIGZ1bmRzIHJlbWFpbmluZyBpbiB5b3VyIGFjY291bnQgYWZ0ZXIgc2VsZi1leGNsdXNpb24sIGl0JmFwb3M7cyBiZXN0IHRvIGNvbnRhY3Qgb3VyIHN1cHBvcnQgdGVhbSBmb3IgYXNzaXN0YW5jZSBvbiB0aGUgbmV4dCBzdGVwcy4gVGhleSZhcG9zO2xsIGJlIGhhcHB5IHRvIHByb3ZpZGUgYWR2aWNlIG9uIGhvdyB0byBtb3ZlIGZvcndhcmQuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogSXMgaXQgcG9zc2libGUgdG8gcmV2ZXJzZSBhIHNlbGYtZXhjbHVzaW9uPzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBJZiB5b3UmYXBvcztkIGxpa2UgdG8gZW5kIHlvdXIgc2VsZi1leGNsdXNpb24gcGVyaW9kLCBjb250YWN0IG91ciBzdXBwb3J0IHRlYW0sIGFuZCB0aGV5JmFwb3M7bGwgYmUgYWJsZSB0byBoZWxwLiBQbGVhc2Ugbm90ZSB0aGF0IHRoZXJlIHdpbGwgYmUgYSAyNC1ob3VyIGdyYWNlIHBlcmlvZCBiZWZvcmUgeW91ciBhY2NvdW50IGlzIHJlYWN0aXZhdGVkLjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IElmIEkgc2VsZi1leGNsdWRlLCB3aWxsIG15IHBlbmRpbmcgd2l0aGRyYXdhbCBzdGlsbCBiZSBwcm9jZXNzZWQ/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IElmIHlvdSBoYXZlIGEgcGVuZGluZyB3aXRoZHJhd2FsIGJlZm9yZSB5b3VyIHNlbGYtZXhjbHVkaW5nLCBpdCB3aWxsIGJlIHByb2Nlc3NlZCBhcyB1c3VhbC48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBDYW4gSSBvcGVuIGFub3RoZXIgYWNjb3VudCBhbmQgc3RhcnQgcGxheWluZyBhZ2FpbiBpZiBJJmFwb3M7bSBzZWxmLWV4Y2x1ZGVkPzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBObywgaWYgeW91IGhhdmUgc2VsZi1leGNsdWRlZCBmcm9tIGFuIGFjY291bnQsIHlvdSBjYW5ub3Qgb3BlbiBhbmQgdXNlIGFub3RoZXIgdmVyc2lvbi48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlRlY2huaWNhbCBJc3N1ZXM8L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBBcmUgZ2FtZXMgdGFraW5nIGZvcmV2ZXIgdG8gbG9hZD8mbmJzcDs8L3A+XG4vLyAgICAgICAgICAgPHA+QTogTGV0JmFwb3M7cyBsb29rIGF0IHdoeSB5b3VyIGdhbWUocykgbWlnaHQgbGFnIGFuZCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgeW91IGJhY2sgaW4gYWN0aW9uLjwvcD5cbi8vICAgICAgICAgICA8cD5FbnN1cmUgdGhhdCB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24gaXMgcnVubmluZyBvcHRpbWFsbHkgYW5kIGZyZWUgb2YgYW55IGlzc3Vlcy4gQ2hlY2sgdGhhdCB5b3Ugc3RheSB3aXRoaW4geW91ciBiYW5kd2lkdGggYnkgcnVubmluZyBmZXdlciBwcm9ncmFtcyBpbiB0aGUgYmFja2dyb3VuZC4gS2VlcCB5b3VyIGJyb3dzZXIgdXAgdG8gZGF0ZSB3aXRoIHRoZSBtb3N0IGN1cnJlbnQgdmVyc2lvbiBmb3IgbWF4aW11bSBwZXJmb3JtYW5jZSBhbmQgc2VjdXJpdHkuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogTXkgZ2FtZSBnb3Qgc3R1Y2sgaW4gdGhlIG1pZGRsZSBvZiBhIHJvdW5kLiBXaGF0IGhhcHBlbnMgbm93PzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBObyBuZWVkIHRvIGJlIGFsYXJtZWQhIFlvdSB3aWxsIG5vdCBsb3NlIHByb2dyZXNzIG9yIG1vbmV5IGlmIHlvdXIgZ2FtZSBnZXRzIHN0dWNrLiBZb3VyIGRhdGEgd2lsbCByZW1haW4gaW50YWN0LCBhbmQgdGhlIGdhbWUgd2lsbCByZXN1bWUgcmlnaHQgd2hlcmUgeW91IGxlZnQgb2ZmLiBTbyByZXN0IGFzc3VyZWQgdGhhdCB5b3VyIGdhbWluZyBleHBlcmllbmNlIHdpbGwgYWx3YXlzIGJlIHNhZmUgYW5kIHVuaW50ZXJydXB0ZWQuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogT25lIG9mIHRoZSBnYW1lcyBJJmFwb3M7bSB0cnlpbmcgdG8gcGxheSBuZWVkcyB0byBsYXVuY2guIEhvdyBjYW4gSSBmaXggaXQ/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFRoaXMgaXNzdWUgY291bGQgYmUgZHVlIHRvIGEgbG9zdCBjb25uZWN0aW9uIHRvIHRoZSBzZXJ2ZXIuIEZpcnN0LCByZWZyZXNoIHRoZSBnYW1lIG9yIHJlc3RhcnQgeW91ciBicm93c2VyIGZvciBhIHF1aWNrIGZpeC4gSWYgdGhhdCBkb2VzbiZhcG9zO3Qgd29yaywgY2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCBlbnN1cmUgZXZlcnl0aGluZyBydW5zIHNtb290aGx5LiBUaGVuLCBnZXQgYmFjayBpbiB0aGUgZ2FtZSB3aXRoIGp1c3QgYSBmZXcgZWFzeSBzdGVwcyE8L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5RLiBJIGNsYWltZWQgYSBib251cyBiZWZvcmUgSSBtYWRlIGEgZGVwb3NpdCwgYnV0IHRoZSBmdW5kcyBzdGlsbCBuZWVkIHRvIGJlIGNyZWRpdGVkLiBXaGF0IHNob3VsZCBJIGRvPzwvcD5cbi8vICAgICAgICAgICA8cD5BOiBJZiB0aGlzIHJhcmUgaXNzdWUgaGFwcGVucywgY29udGFjdCBvbmUgb2Ygb3VyIHN1cHBvcnQgYWdlbnRzIGluIGxpdmUgQ2hhdCwgYW5kIGFmdGVyIHZlcmlmeWluZyB5b3VyIGVsaWdpYmlsaXR5LCB0aGV5IHdpbGwgbWFudWFsbHkgY3JlZGl0IGZ1bmRzIGRpcmVjdGx5IHRvIHlvdXIgYWNjb3VudC48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBJIHJlY2VpdmVkIGEgcHJvbW90aW9uYWwgZW1haWwgc2F5aW5nIHRoYXQgSSB3YXMgY3JlZGl0ZWQgZnJlZSBzcGlucyBvbiBteSBmYXZvcml0ZSBnYW1lLCBidXQgd2hlbiBJIGxvZ2dlZCBpbiB0byBwbGF5IHRoZW0sIHRoZXkgd2VyZW4mYXBvczt0IGF2YWlsYWJsZS48L3A+XG4vLyAgICAgICAgICAgPHA+QTogSW4gc3VjaCBhIGNhc2UsIGNvbnRhY3Qgb25lIG9mIG91ciBjdXN0b21lciBzdXBwb3J0IGFnZW50cywgd2hvIGNhbiBjcmVkaXQgeW91ciBkdWUgc3BpbnMgaW5zdGFudGx5LjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlNlY3VyaXR5LCBMaWNlbnNlLCBMZWdhbDwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IENhbiBJIHRydXN0IHt7e3NpdGVOYW1lfX19IHdpdGggbXkgbW9uZXk/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IEFic29sdXRlbHkhIFlvdXIgZnVuZHMgYXJlIHNhZmUgd2l0aCB7e3tzaXRlTmFtZX19fS4gV2UgdXNlIHRoZSBsYXRlc3Qgc2VjdXJpdHkgbWVhc3VyZXMgdG8gZW5zdXJlIHlvdXIgbW9uZXkgaXMgc2VjdXJlIGFuZCBwcm90ZWN0ZWQuIEJ1dCwgb2YgY291cnNlLCBiZWluZyBDdXJhY2FvIGxpY2Vuc2UgaG9sZGVycyBvYmxpZ2VzIHVzIHRvIGZvbGxvdyByZWd1bGF0aW9ucyBhbmQgZW5zdXJlIHRoYXQgcGxheWVyIGZ1bmRzIGFyZSBzYWZlIGFuZCBhY2NvdW50ZWQgZm9yLjwvcD5cbi8vICAgICAgICAgICA8cD5GdXJ0aGVybW9yZSwgb3VyIHNpdGUgaXMgU1NMIGVuY3J5cHRlZCwgZ2l2aW5nIHlvdSB0aGUgdXRtb3N0IGNvbmZpZGVuY2UgaW4gdGhlIHNlY3VyaXR5IG9mIHlvdXIgZGF0YS48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBJbiB3aGljaCBqdXJpc2RpY3Rpb24gaXMge3t7c2l0ZU5hbWV9fX0gbGljZW5zZWQ/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFdlIGhvbGQgYSBnYW1pbmcgbGljZW5zZSBmcm9tIEN1cmFjYW8uPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogV2hhdCBpcyB0aGUgYXBwcm94aW1hdGUgdGltZSBuZWVkZWQgdG8gY2hlY2sgbXkgc3VibWl0dGVkIGRvY3VtZW50cz88L3A+XG4vLyAgICAgICAgICAgPHA+QTogV2Ugd2lsbCBkbyBvdXIgYmVzdCB0byBnZXQgeW91ciBkb2N1bWVudHMgcHJvY2Vzc2VkIHByb21wdGx5LCB5ZXQgcGxlYXNlIGJlYXIgaW4gbWluZCB0aGF0IHlvdXIgcmVjb3JkcyBuZWVkLCBhdCBtb3N0LCA3MiBob3VycyB0byBiZSB0aG9yb3VnaGx5IGNoZWNrZWQgYnkgb3VyIGFnZW50cy48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD5ROiBIb3cgd2lsbCBJIGtub3cgaWYgbXkgZG9jdW1lbnRzIGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgYWNjZXB0ZWQ/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IE91ciBzdXBwb3J0IHRlYW0gd2lsbCBzZW5kIHlvdSBhIGNvbmZpcm1hdGlvbiBlbWFpbCB0aGF0IHlvdXIgc3VibWl0dGVkIGRvY3VtZW50cyBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IHZlcmlmaWVkLjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPlE6IEkgc3VzcGVjdCB0aGF0IHNvbWVvbmUgaGFzIGV4Y2Vzc2VkIG15IGFjY291bnQgd2l0aG91dCBteSBrbm93bGVkZ2UuIFdoYXQgc2hvdWxkIEkgZG8/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IElmIHlvdSB0aGluayB5b3VyIGFjY291bnQgaGFzIGJlZW4gYnJlYWNoZWQsIGl0IGlzIGVzc2VudGlhbCB0byByZWFjaCBvdXQgdG8gb3VyIHN1cHBvcnQgdGVhbSByaWdodCBhd2F5LCBhbmQgd2UgY2FuIGhlbHAgeW91IGZpeCB0aGUgaXNzdWUuPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+UTogRG8geW91IGRpc2Nsb3NlIG15IGluZm9ybWF0aW9uIHRvIGFueSBvdGhlciBjb21wYW5pZXM/PC9wPlxuLy8gICAgICAgICAgIDxwPkE6IFdlIG1heSBiZSByZXF1aXJlZCBieSBsYXcsIHJlZ3VsYXRpb24sIG9yIG90aGVyIGxlZ2FsIGF1dGhvcml0eSBvciB3YXJyYW50IHRvIGRpc2Nsb3NlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uIEFkZGl0aW9uYWxseSwgd2UgbWlnaHQgYWxzbyBzaGFyZSB5b3VyIGRhdGEgd2l0aCBhIHJlZ3VsYXRvcnkgb3IgbGF3IGVuZm9yY2VtZW50IGFnZW5jeSBpZiBpdCBpcyBkZWVtZWQgbmVjZXNzYXJ5IGZvciB0aGUgcHJvdGVjdGlvbiBvZiB0aGUgQ29tcGFueSwgaXRzIGN1c3RvbWVycywgb3IgYW55IHRoaXJkIHBhcnR5LiBDaGVjayBvdXIgUHJpdmFjeSBQb2xpY3kgZm9yIG1vcmUgZGV0YWlsZWQgaW5mb3JtYXRpb24uPC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPmBcbi8vICAgICAgICAgfSksXG4vLyAgICAgICAgIGlzX2FjdGl2ZTogdHJ1ZSxcbi8vICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbi8vICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdGl0bGU6IEpTT04uc3RyaW5naWZ5KHsgRU46ICdQcml2YWN5IFBvbGljeScgfSksXG4vLyAgICAgICAgIHNsdWc6ICdwcml2YWN5LXBvbGljeScsXG4vLyAgICAgICAgIGNhdGVnb3J5IDogQ01TX0NBVEVHT1JJRVMuTEVHQUxfQ09NUExJQU5DRSxcbi8vICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAgIEVOOiBgXG4vLyAgICAgICAgICAgPHA+PHN0cm9uZz5Qcml2YWN5IFBvbGljeSBhdCB7e3tzaXRlTmFtZX19fSBDYXNpbm88L3N0cm9uZz48L3A+XG4vLyAgICAgICAgICAgPHA+e3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIChcIndlXCIpIGFyZSBjb21taXR0ZWQgdG8gcHJvdGVjdGluZyBhbmQgcmVzcGVjdGluZyB5b3VyIHByaXZhY3kuPC9wPlxuLy8gICAgICAgICAgIDxwPlRoaXMgcG9saWN5ICh0b2dldGhlciB3aXRoIFRlcm1zIGFuZCBDb25kaXRpb25zIGFuZCBhbnkgb3RoZXIgZG9jdW1lbnRzIHJlZmVycmVkIHRvIGluIGl0KSBzZXRzIG91dCB0aGUgYmFzaXMgb24gd2hpY2ggYW55IHBlcnNvbmFsIGRhdGEgd2UgY29sbGVjdCBmcm9tIHlvdSwgb3IgdGhhdCB5b3UgcHJvdmlkZSB0byB1cywgd2lsbCBiZSBwcm9jZXNzZWQgYnkgdXMuIFBsZWFzZSByZWFkIHRoZSBmb2xsb3dpbmcgY2FyZWZ1bGx5IHRvIHVuZGVyc3RhbmQgb3VyIHZpZXdzIGFuZCBwcmFjdGljZXMgcmVnYXJkaW5nIHlvdXIgcGVyc29uYWwgZGF0YSBhbmQgaG93IHdlIHdpbGwgdHJlYXQgaXQuIEJlIGFzc3VyZWQgdGhhdCB0aGUgcGVyc29uKHMpIHdpdGggYWNjZXNzIHRvIHlvdXIgZGF0YSB3aWxsIGtlZXAgeW91ciBpbmZvcm1hdGlvbiBjb25maWRlbnRpYWwgYW5kIG9ubHkgYWNjZXNzIGFuZCB1c2UgaW5mb3JtYXRpb24gb24geW91ciBhY2NvdW50IHdoZW4gbmVlZGVkIGZvciBpbnRlcm5hbCBwdXJwb3NlcyBhbmQgb24gYSBuZWVkLXRvLWtub3cgYmFzaXMgb25seS48L3A+XG5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPkluZm9ybWF0aW9uIHdlIG1heSBjb2xsZWN0IGZyb20geW91PC9zdHJvbmc+PGJyPldlIG1heSBjb2xsZWN0IGFuZCBwcm9jZXNzIHRoZSBmb2xsb3dpbmcgZGF0YSBhYm91dCB5b3U6PC9wPlxuLy8gICAgICAgICAgIDxwPjx1bD48bGk+PHA+SW5mb3JtYXRpb24gdGhhdCB5b3UgcHJvdmlkZSBieSBmaWxsaW5nIGluIGZvcm1zIG9uIG91ciB3ZWJzaXRlIHt7e3NpdGVVcmx9fX0gKHRoZSBcIldlYnNpdGVcIikuIFRoaXMgaW5jbHVkZXMgaW5mb3JtYXRpb24gcHJvdmlkZWQgYXQgdGhlIHRpbWUgb2Ygb3BlbmluZyBhbiBhY2NvdW50IHdpdGggdXMsIGRlcG9zaXRpbmcgZnVuZHMsIHBsYXlpbmcgb3IgcGFydGljaXBhdGluZyBpbiB0aGUgZ2FtZXMsIGV2ZW50cyBhbmQgc2VydmljZXMgb24gdGhlIFdlYnNpdGUsIHBvc3RpbmcgbWF0ZXJpYWwgb3IgcmVxdWVzdGluZyBzZXJ2aWNlcyBvciBpbmZvcm1hdGlvbi4gV2UgYWxzbyBhc2sgZm9yIGEgY29weSBvZiB5b3IgSUQsIHBhc3Nwb3J0IG9yIGRyaXZlcnMgbGljZW5zZS48L3A+XG4vLyAgICAgICAgICAgPGxpPjxwPkRldGFpbHMgb2YgeW91ciB2aXNpdHMgdG8gdGhlIFdlYnNpdGUsIGluY2x1ZGluZywgYnV0IG5vdCBsaW1pdGVkIHRvLCB5b3VyIGJldHRpbmcgYW5kIGdhbWluZyBhY3Rpdml0aWVzLCB0aGUgcmVzb3VyY2VzIHRoYXQgeW91IGFjY2VzcywgdHJhZmZpYyBkYXRhLCBsb2NhdGlvbiBkYXRhIGFuZCBjb21tdW5pY2F0aW9uIGRhdGEsIHdoZXRoZXIgdGhpcyBpcyByZXF1aXJlZCBmb3Igb3VyIG93biBhY2NvdW50aW5nIHB1cnBvc2VzLCByaXNrIGFzc2Vzc21lbnQsIHNlY3VyaXR5IHJldmlld3MsIGNvbXBsaWFuY2UgcHJvY2VkdXJlcyBvciBvdGhlcndpc2UuPC9wPlxuLy8gICAgICAgICAgIDxsaT48cD5EZXRhaWxzIG9mIHRyYW5zYWN0aW9ucyB5b3UgY2Fycnkgb3V0IHRocm91Z2ggeW91ciBhY2NvdW50IHdpdGggdXMuPC9wPjwvdWw+PC9wPlxuLy8gICAgICAgICAgIDxwPklmIHlvdSBjb250YWN0IHVzLCB3ZSBtYXkga2VlcCBhIHJlY29yZCBvZiB0aGF0IGNvcnJlc3BvbmRlbmNlLiBXZSBvciBvbmUgb2Ygb3VyIGxpY2Vuc29ycyBvciBzdXBwbGllcnMgbWF5IGFsc28gYXNrIHlvdSB0byBjb21wbGV0ZSBzdXJ2ZXlzIHRoYXQgd2UgdXNlIGZvciByZXNlYXJjaCBwdXJwb3NlcywgYWx0aG91Z2ggeW91IGRvIG5vdCBoYXZlIHRvIHJlc3BvbmQgdG8gdGhlbS48L3A+XG5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPklQIEFkZHJlc3NlcyBhbmQgQ29va2llczwvc3Ryb25nPjxicj5XZSBtYXkgY29sbGVjdCBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIGNvbXB1dGVyLCBpbmNsdWRpbmcgd2hlcmUgYXZhaWxhYmxlIHlvdXIgSVAgYWRkcmVzcywgb3BlcmF0aW5nIHN5c3RlbSBhbmQgYnJvd3NlciB0eXBlLCBmb3Igc3lzdGVtIGFkbWluaXN0cmF0aW9uIGFuZCB0byByZXBvcnQgYWdncmVnYXRlIGluZm9ybWF0aW9uIHRvIG91ciBhZHZlcnRpc2VycyBhbmQgbGljZW5zb3JzLiBUaGlzIGlzIHN0YXRpc3RpY2FsIGRhdGEgYWJvdXQgb3VyIHVzZXJzJyBicm93c2luZyBhY3Rpb25zIGFuZCBwYXR0ZXJucywgYW5kIGRvZXMgbm90IGlkZW50aWZ5IGFueSBpbmRpdmlkdWFsLjwvcD5cbi8vICAgICAgICAgICA8cD5Gb3IgdGhlIHNhbWUgcmVhc29uIGFzIGFib3ZlLCB3ZSBtYXkgb2J0YWluIGluZm9ybWF0aW9uIGFib3V0IHlvdXIgZ2VuZXJhbCBpbnRlcm5ldCB1c2FnZSBieSB1c2luZyBhIGNvb2tpZSBmaWxlIHdoaWNoIGlzIHN0b3JlZCBvbiB0aGUgaGFyZCBkcml2ZSBvZiB5b3VyIGNvbXB1dGVyLiBDb29raWVzIGNvbnRhaW4gaW5mb3JtYXRpb24gdGhhdCBpcyB0cmFuc2ZlcnJlZCB0byB5b3VyIGNvbXB1dGVyJ3MgaGFyZCBkcml2ZS4gVGhleSBoZWxwIHVzIHRvIGltcHJvdmUgdGhlIFdlYnNpdGUgYW5kIHRvIGRlbGl2ZXIgYSBiZXR0ZXIgYW5kIG1vcmUgcGVyc29uYWxpc2VkIHNlcnZpY2UuIFRoZXkgZW5hYmxlIHVzIHRvIGVzdGltYXRlIG91ciBhdWRpZW5jZSBzaXplIGFuZCB1c2FnZSBwYXR0ZXJuLCB0byBzdG9yZSBpbmZvcm1hdGlvbiBhYm91dCB5b3VyIHByZWZlcmVuY2VzLCBzdWNoIGFzIGxhbmd1YWdlIGFuZCBvZGRzIHR5cGUsIGFuZCB0byByZWNvZ25pc2UgeW91IHdoZW4geW91IHJldHVybiB0byB0aGUgV2Vic2l0ZS4gV2hpbGUgcGxhY2luZyBhIGJldCwgaW5mb3JtYXRpb24gd2lsbCBiZSB0ZW1wb3JhcmlseSBzdG9yZWQgaW4gYSBjb29raWUgdW50aWwgdGhlIHRyYW5zYWN0aW9uIGhhcyBiZWVuIGNvbXBsZXRlZC48L3A+XG4vLyAgICAgICAgICAgPHA+WW91IG1heSByZWZ1c2UgdG8gYWNjZXB0IGNvb2tpZXMgYnkgYWN0aXZhdGluZyB0aGUgc2V0dGluZyBvbiB5b3VyIGJyb3dzZXIgd2hpY2ggYWxsb3dzIHlvdSB0byByZWZ1c2UgdGhlIHNldHRpbmcgb2YgY29va2llcy4gSG93ZXZlciwgaWYgeW91IHNlbGVjdCB0aGlzIHNldHRpbmcgeW91IG1heSBiZSB1bmFibGUgdG8gYWNjZXNzIGNlcnRhaW4gcGFydHMgb2YgdGhlIFdlYnNpdGUuIFVubGVzcyB5b3UgaGF2ZSBhZGp1c3RlZCB5b3VyIGJyb3dzZXIgc2V0dGluZyBzbyB0aGF0IGl0IHdpbGwgcmVmdXNlIGNvb2tpZXMsIG91ciBzeXN0ZW0gd2lsbCBpc3N1ZSBjb29raWVzIHdoZW4geW91IGxvZyBvbiB0byB0aGUgV2Vic2l0ZS48L3A+XG5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPldoZXJlIHdlIHN0b3JlIHlvdXIgcGVyc29uYWwgZGF0YTwvc3Ryb25nPjxicj5UaGUgZGF0YSB0aGF0IHdlIGNvbGxlY3QgZnJvbSB5b3UgbWF5IGJlIHRyYW5zZmVycmVkIHRvLCBhbmQgc3RvcmVkIGF0LCBhIGRlc3RpbmF0aW9uIG91dHNpZGUgdGhlIEV1cm9wZWFuIEVjb25vbWljIEFyZWEgKFwiRUVBXCIpLiBJdCBtYXkgYWxzbyBiZSBwcm9jZXNzZWQgYnkgc3RhZmYgb3BlcmF0aW5nIG91dHNpZGUgdGhlIEVFQSB3aG8gd29yayBmb3IgdXMgb3IgZm9yIG9uZSBvZiBvdXIgc3VwcGxpZXJzIG9yIGxpY2Vuc29ycy4gU3VjaCBzdGFmZiBtYXliZSBlbmdhZ2VkIGluLCBhbW9uZyBvdGhlciB0aGluZ3MsIHRoZSBwcm9jZXNzaW5nIG9mIHlvdXIgcGF5bWVudCBkZXRhaWxzIGFuZCB0aGUgcHJvdmlzaW9uIG9mIHN1cHBvcnQgc2VydmljZXMuIEJ5IHN1Ym1pdHRpbmcgeW91ciBwZXJzb25hbCBkYXRhLCB5b3UgYWdyZWUgdG8gdGhpcyB0cmFuc2Zlciwgc3RvcmluZyBvciBwcm9jZXNzaW5nLiBXZSB3aWxsIHRha2UgYWxsIHN0ZXBzIHJlYXNvbmFibHkgbmVjZXNzYXJ5IHRvIGVuc3VyZSB0aGF0IHlvdXIgZGF0YSBpcyB0cmVhdGVkIHNlY3VyZWx5IGFuZCBpbiBhY2NvcmRhbmNlIHdpdGggdGhpcyBwcml2YWN5IHBvbGljeS48L3A+XG4vLyAgICAgICAgICAgPHA+QWxsIGluZm9ybWF0aW9uIHlvdSBzdWJtaXQgdG8gdXMgaXMgc3RvcmVkIGFuZCBrZXB0IG9uIHNlY3VyZSBzZXJ2ZXJzLiBBbnkgcGF5bWVudCB0cmFuc2FjdGlvbnMgYW5kIHN1Ym1pc3Npb25zIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIHRyYW5zbWl0dGVkIHVzaW5nIFNTTCBlbmNyeXB0aW9uIHRlY2hub2xvZ3kuPGJyPjxicj5VbmZvcnR1bmF0ZWx5LCB0aGUgdHJhbnNtaXNzaW9uIG9mIGluZm9ybWF0aW9uIHZpYSB0aGUgaW50ZXJuZXQgaXMgbm90IGNvbXBsZXRlbHkgc2VjdXJlLiBBbHRob3VnaCB3ZSB3aWxsIGRvIG91ciB1dG1vc3QgdG8gcHJvdGVjdCB5b3VyIHBlcnNvbmFsIGRhdGEsIHdlIGNhbm5vdCBndWFyYW50ZWUgdGhlIHNlY3VyaXR5IG9mIHlvdXIgZGF0YSB0cmFuc21pdHRlZCB0byB0aGUgV2Vic2l0ZTsgYW55IHRyYW5zbWlzc2lvbiBpcyBhdCB5b3VyIG93biByaXNrLiBPbmNlIHdlIGhhdmUgcmVjZWl2ZWQgeW91ciBpbmZvcm1hdGlvbiwgd2Ugd2lsbCB1c2Ugc3RyaWN0IHByb2NlZHVyZXMgYW5kIHNlY3VyaXR5IGZlYXR1cmVzIHRvIHRyeSB0byBwcmV2ZW50IHVuYXV0aG9yaXNlZCBhY2Nlc3MuPC9wPlxuXG4vLyAgICAgICAgICAgPHA+PHN0cm9uZz5Vc2VzIG1hZGUgb2YgdGhlIGluZm9ybWF0aW9uPC9zdHJvbmc+PGJyPldlIHVzZSBpbmZvcm1hdGlvbiBoZWxkIGFib3V0IHlvdSBpbiB0aGUgZm9sbG93aW5nIHdheXM6PC9wPlxuXG4vLyAgICAgICAgICAgPHA+PHVsPjxsaT48cD5UbyBlbnN1cmUgdGhhdCBjb250ZW50IGZyb20gdGhlIFdlYnNpdGUgaXMgcHJlc2VudGVkIGluIHRoZSBtb3N0IGVmZmVjdGl2ZSBtYW5uZXIgZm9yIHlvdSBhbmQgZm9yIHlvdXIgY29tcHV0ZXIuPC9wPlxuLy8gICAgICAgICAgIDxsaT48cD5UbyBwcm92aWRlIHlvdSB3aXRoIGluZm9ybWF0aW9uLCBwcm9kdWN0cywgZ2FtZXMgb3Igc2VydmljZXMgdGhhdCB5b3UgcmVxdWVzdCBmcm9tIHVzIG9yIHdoaWNoIHdlIGZlZWwgbWF5IGludGVyZXN0IHlvdS48L3A+XG4vLyAgICAgICAgICAgPGxpPjxwPlRvIGNhcnJ5IG91dCBvdXIgb2JsaWdhdGlvbnMgYXJpc2luZyBmcm9tIGFueSB0cmFuc2FjdGlvbnMgZW50ZXJlZCBpbnRvIGJldHdlZW4geW91IGFuZCB1cy48L3A+XG4vLyAgICAgICAgICAgPGxpPjxwPlRvIGFsbG93IHlvdSB0byBwYXJ0aWNpcGF0ZSBpbiB0aGUgaW50ZXJhY3RpdmUgZmVhdHVyZXMgb2Ygb3VyIGdhbWVzIGFuZCBzZXJ2aWNlcy5cbi8vICAgICAgICAgICA8bGk+VG8gbm90aWZ5IHlvdSBhYm91dCBjaGFuZ2VzIHRvIG91ciBnYW1lcyBhbmQgc2VydmljZXMuPC9wPjwvdWw+XG4vLyAgICAgICAgICAgV2UgbWF5IGFsc28gcGVybWl0IHNlbGVjdGVkIHRoaXJkIHBhcnRpZXMgdG8gdXNlIHlvdXIgZGF0YSB0byBwcm92aWRlIHlvdSB3aXRoIGluZm9ybWF0aW9uIGFib3V0IGdhbWVzLCBnb29kcyBhbmQgc2VydmljZXMgd2hpY2ggbWF5IGJlIG9mIGludGVyZXN0IHRvIHlvdS48L3A+XG5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPkRpc2Nsb3N1cmUgb2YgeW91ciBpbmZvcm1hdGlvbjwvc3Ryb25nPjxicj5XZSBtYXkgZGlzY2xvc2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byBhbnkgbWVtYmVyIG9mIG91ciBncm91cCwgd2hpY2ggbWVhbnMgb3VyIHN1YnNpZGlhcmllcywgb3VyIHVsdGltYXRlIGhvbGRpbmcgY29tcGFueSBhbmQgaXRzIHN1YnNpZGlhcmllcy48L3A+XG5cbi8vICAgICAgICAgICA8cD5XZSBtYXkgZGlzY2xvc2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byB0aGlyZCBwYXJ0aWVzOjxicj5cbi8vICAgICAgICAgICA8dWw+PGxpPjxwPkluIHRoZSBldmVudCB0aGF0IHdlIHNlbGwgb3IgYnV5IGFueSBidXNpbmVzcyBvciBhc3NldHMsIGluIHdoaWNoIGNhc2Ugd2UgbWF5IGRpc2Nsb3NlIHlvdXIgcGVyc29uYWwgZGF0YSB0byB0aGUgcHJvc3BlY3RpdmUgc2VsbGVyIG9yIGJ1eWVyIG9mIHN1Y2ggYnVzaW5lc3Mgb3IgYXNzZXRzLjwvcD5cbi8vICAgICAgICAgICA8bGk+PHA+SWYge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIG9yIHN1YnN0YW50aWFsbHkgYWxsIG9mIGl0cyBhc3NldHMgYXJlIGFjcXVpcmVkIGJ5IGEgdGhpcmQgcGFydHksIGluIHdoaWNoIGNhc2UgcGVyc29uYWwgZGF0YSBoZWxkIGJ5IGl0IGFib3V0IGl0cyBjdXN0b21lcnMgd2lsbCBiZSBvbmUgb2YgdGhlIHRyYW5zZmVycmVkIGFzc2V0cy48L3A+XG4vLyAgICAgICAgICAgPGxpPjxwPklmIHdlIGFyZSB1bmRlciBhIGR1dHkgdG8gZGlzY2xvc2Ugb3Igc2hhcmUgeW91ciBwZXJzb25hbCBkYXRhIGluIG9yZGVyIHRvIGNvbXBseSB3aXRoIGFueSBsZWdhbCBvYmxpZ2F0aW9uLCBvciBpbiBvcmRlciB0byBlbmZvcmNlIG9yIGFwcGx5IHRoZSB7e3tzaXRlTmFtZX19fSBDYXNpbm8gVGVybXMgb2YgV2Vic2l0ZSBVc2Ugb3IgdGhlIHt7e3NpdGVOYW1lfX19IENhc2lubyBCZXR0aW5nIGFuZCBHYW1pbmcgVGVybXMgYW5kIENvbmRpdGlvbnMgb3IgdG8gcHJvdGVjdCB0aGUgcmlnaHRzLCBwcm9wZXJ0eSwgb3Igc2FmZXR5IG9mIHt7e3NpdGVOYW1lfX19IENhc2lubywgb3VyIGN1c3RvbWVycywgbGljZW5zb3JzIG9yIG90aGVycy4gVGhpcyBpbmNsdWRlcyBleGNoYW5naW5nIGluZm9ybWF0aW9uIHdpdGggb3RoZXIgY29tcGFuaWVzIGFuZCBvcmdhbmlzYXRpb25zIGZvciB0aGUgcHVycG9zZXMgb2YgZnJhdWQgcHJvdGVjdGlvbiBhbmQgY3JlZGl0IHJpc2sgcmVkdWN0aW9uLjwvcD48L3VsPjwvcD5cbi8vICAgICAgICAgICA8cD5XZSB3aWxsIGRpc2Nsb3NlIGFueSBpbmZvcm1hdGlvbiB0byB0aGUgTEdBIGFuZCB0byBhbnkgb3RoZXIgYXV0aG9yaXR5IGluIGNhc2Ugb2YgZnJhdWR1bGVudCBhY3Rpdml0aWVzIG9yIGlucXVlc3QgZnJvbSB0aGUgcmVsZXZhbnQgYXV0aG9yaXRpZXMuPC9wPlxuXG4vLyAgICAgICAgICAgPHA+PHN0cm9uZz5Zb3VyIFJpZ2h0czwvc3Ryb25nPjxicj5Zb3UgaGF2ZSB0aGUgcmlnaHQgdG8gYXNrIHVzIG5vdCB0byBwcm9jZXNzIHlvdXIgcGVyc29uYWwgZGF0YSBmb3IgbWFya2V0aW5nIHB1cnBvc2VzLiBXZSB3aWxsIHVzdWFsbHkgaW5mb3JtIHlvdSAoYmVmb3JlIGNvbGxlY3RpbmcgeW91ciBkYXRhKSBpZiB3ZSBpbnRlbmQgdG8gdXNlIHlvdXIgZGF0YSBmb3Igc3VjaCBwdXJwb3NlcyBvciBpZiB3ZSBpbnRlbmQgdG8gZGlzY2xvc2UgeW91ciBpbmZvcm1hdGlvbiB0byBhbnkgdGhpcmQgcGFydHkgZm9yIHN1Y2ggcHVycG9zZXMuIFlvdSBjYW4gZXhlcmNpc2UgeW91ciByaWdodCB0byBwcmV2ZW50IHN1Y2ggcHJvY2Vzc2luZyBieSBjaGVja2luZyBjZXJ0YWluIGJveGVzIG9uIHRoZSBmb3JtcyB3ZSB1c2UgdG8gY29sbGVjdCB5b3VyIGRhdGEuIFlvdSBjYW4gYWxzbyBleGVyY2lzZSB0aGUgcmlnaHQgYXQgYW55IHRpbWUgYnkgY29udGFjdGluZyB1cyBhdCB7e3tzaXRlTmFtZX19fSBDYXNpbm8uPC9wPlxuLy8gICAgICAgICAgIDxwPlRoZSBXZWJzaXRlIG1heSwgZnJvbSB0aW1lIHRvIHRpbWUsIGNvbnRhaW4gbGlua3MgdG8gYW5kIGZyb20gdGhlIHdlYnNpdGVzIG9mIG91ciBwYXJ0bmVyIG5ldHdvcmtzLCBhZHZlcnRpc2VycyBhbmQgYWZmaWxpYXRlcy4gSWYgeW91IGZvbGxvdyBhIGxpbmsgdG8gYW55IG9mIHRoZXNlIHdlYnNpdGVzLCBwbGVhc2Ugbm90ZSB0aGF0IHRoZXNlIHdlYnNpdGVzIGhhdmUgdGhlaXIgb3duIHByaXZhY3kgcG9saWNpZXMgYW5kIHRoYXQgd2UgZG8gbm90IGFjY2VwdCBhbnkgcmVzcG9uc2liaWxpdHkgb3IgbGlhYmlsaXR5IGZvciB0aGVzZSBwb2xpY2llcy4gUGxlYXNlIGNoZWNrIHRoZXNlIHBvbGljaWVzIGJlZm9yZSB5b3Ugc3VibWl0IGFueSBwZXJzb25hbCBkYXRhIHRvIHRoZXNlIHdlYnNpdGVzLjwvcD5cbi8vICAgICAgICAgICBgXG4vLyAgICAgICAgIH0pLFxuLy8gICAgICAgICBpc19hY3RpdmU6IHRydWUsXG4vLyAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4vLyAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHRpdGxlOiBKU09OLnN0cmluZ2lmeSh7IEVOOiAnQm9udXMgVGVybXMnIH0pLFxuLy8gICAgICAgICBzbHVnOiAnYm9udXMtdGVybXMnLFxuLy8gICAgICAgICBjYXRlZ29yeSA6IENNU19DQVRFR09SSUVTLlNVUFBPUlQsXG4vLyAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICBFTjogYFxuLy8gICAgICAgICAgIDxwPjxoMz4xLiBHZW5lcmFsIEJvbnVzIFRlcm1zIENvbmRpdGlvbnM8L2gzPjwvcD5cbi8vIDxwPjxiPjEuMS48L2I+Jm5ic3A7e3t7c2l0ZU5hbWV9fX0gb2NjYXNpb25hbGx5IG9mZmVyIGJvbnVzZXMsIHJld2FyZHMsIHByb21vdGlvbnMsIGNvbXBldGl0aW9ucywgY2FzaGJhY2ssIGFuZC9vciBnaWZ0cyAoJmxkcXVvO3Byb21vdGlvbnMmcmRxdW87KS4gVGhlc2UgcHJvbW90aW9ucyB3aWxsIGJlIGdvdmVybmVkIGJ5IHRoZXNlIEdlbmVyYWwgQm9udXMgVGVybXMgYW5kIENvbmRpdGlvbnMgKCZsZHF1bztHZW5lcmFsIEJvbnVzIFQmYW1wO0NzJmFwb3M7JmFwb3M7KS4gRWFjaCBwcm9tb3Rpb24gd2lsbCBoYXZlIGl0cyBvd24gc3BlY2lmaWMgdGVybXMgYW5kIGNvbmRpdGlvbnMgb3V0c2lkZSB0aGUgR2VuZXJhbCBCb251cyBUZXJtcyBhbmQgQ29uZGl0aW9ucy4gQnkgcGFydGljaXBhdGluZyBpbiBhbnkgcHJvbW90aW9uIGFuZCBhZ3JlZWluZyB0byByZWNlaXZlIGJvbnVzZXMgb2ZmZXJlZCBieSB7e3tzaXRlTmFtZX19fSBDQVNJTk8sIHlvdSBhdXRvbWF0aWNhbGx5IGNvbnNlbnQgdG8gY29tcGx5IHdpdGggb3VyIGdlbmVyYWwgYm9udXMgdGVybXMgJmFtcDsgY29uZGl0aW9ucy48L3A+XG4vLyA8cD48Yj4xLjIuPC9iPiZuYnNwO0lmIHlvdSBpbnRlbmQgdG8gcGFydGljaXBhdGUgaW4gYSBwcm9tb3Rpb24gb3IgcmVjZWl2ZSBzb21lIGJvbnVzIG9mZmVyZWQgYnkge3t7c2l0ZU5hbWV9fX0gQ0FTSU5PIGJ1dCBkbyBub3QgcHJvcGVybHkgdW5kZXJzdGFuZCBob3cgdGhlIHByb21vdGlvbi9ib251cyB3b3JrcywgeW91IHNob3VsZCBjb250YWN0IHt7e3NpdGVOYW1lfX19IENBU0lOTyBDdXN0b21lciBzdXBwb3J0IGZvciBjbGFyaWZpY2F0aW9uLjwvcD5cbi8vIDxwPjxiPjEuMy48L2I+Jm5ic3A7e3t7c2l0ZU5hbWV9fX0gQ0FTSU5PIHJlc2VydmVzIHRoZSByaWdodCB0byBhZGQsIHJlbW92ZSBvciBhbHRlciBhbnkgcHJvbW90aW9uYWwvYm9udXMgZGV0YWlscyBvciB0ZXJtcy48L3A+XG4vLyA8cD48Yj4xLjQuPC9iPiZuYnNwO1lvdSBtdXN0IHJlZ3VsYXJseSBjaGVjayB0aGUgYm9udXMgdGVybXMgYW5kIGNvbmRpdGlvbnMgZm9yIGFueSBhbWVuZG1lbnRzIG9yIHVwZGF0ZXMuIEluIGNhc2UgYW55IGFsdGVyYXRpb25zIGluIHRlcm1zIGFuZCBjb25kaXRpb25zIG9jY3VyLCBiZSBpdCB0aGUgZ2VuZXJhbCBUZXJtcyBhbmQgQ29uZGl0aW9ucyBvciB0aGUgdGVybXMgb2YgYSBzcGVjaWZpYyBwcm9tb3Rpb24sIHt7e3NpdGVOYW1lfX19IENBU0lOTyB3aWxsIGluZm9ybSB5b3UgYWNjb3JkaW5nbHkuPC9wPlxuLy8gPHA+PGI+MS41LjwvYj4mbmJzcDtXZSBtYXkgbWFrZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhdmFpbGFibGUgaW4gdmFyaW91cyBsYW5ndWFnZXMgZm9yIG91ciBjdXN0b21lciZyc3F1bztzIGNvbnZlbmllbmNlLiBJbiBjYXNlIG9mIGFueSBkaXNjcmVwYW5jeSBiZXR3ZWVuIHRoZSBFbmdsaXNoIGFuZCBub24tRW5nbGlzaCB2ZXJzaW9ucyBvZiB0aGVzZSB0ZXJtcyBhbmQgY29uZGl0aW9ucywgdGhlIEVuZ2xpc2ggdmVyc2lvbiBhbHdheXMgdGFrZXMgcHJpb3JpdHkuPC9wPlxuLy8gPHA+PGI+MS42LjwvYj4mbmJzcDtPZmZlcnMgYXJlIGxpbWl0ZWQgdG8gb25lIE9mZmVyIHBlciBQbGF5ZXIgKG9uZSBPZmZlciBwZXIgaG91c2Vob2xkIGFkZHJlc3MsIHNoYXJlZCBjb21wdXRlciBvciBzaGFyZWQgSVAgYWRkcmVzcywgZW1haWwgYWRkcmVzcywgdGVsZXBob25lIG51bWJlciwgYW5kIHBheW1lbnQgbWV0aG9kKS4ge3t7c2l0ZU5hbWV9fX0gQ0FTSU5PIHJlc2VydmVzIHRoZSByaWdodCB0byBzdXNwZW5kIG9yIGNsb3NlIGFueSBhY2NvdW50IHN1c3BlY3RlZCBvZiBiZWluZyBhIGR1cGxpY2F0ZS4gSWYgYXBwbGljYWJsZSwgdGhlIG9yaWdpbmFsIGRlcG9zaXQgbWFkZSBieSB0aGUgUGxheWVyIHdpbGwgbm90IGJlIGNvbmZpc2NhdGVkLCBhbmQgb25seSB0aGUgQm9udXMgYW5kL29yIHdpbm5pbmdzIGZyb20gdGhlIEJvbnVzIHdpbGwgYmUgY29uZmlzY2F0ZWQuPC9wPlxuLy8gPHA+PGI+MS43LjwvYj4mbmJzcDtVbmxlc3Mgb3RoZXJ3aXNlIHN0YXRlZCwgYWN0aXZlIEJvbnVzZXMgbXVzdCBiZSB3YWdlcmVkIHdpdGhpbiA3IGRheXMgb2YgaXNzdWUuIE90aGVyd2lzZSwgYm90aCBib251cyBmdW5kcyAmYW1wOyB3aW5uaW5ncyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlbGV2YW50IGJvbnVzIHdpbGwgYmUgZm9yZmVpdGVkLjwvcD5cbi8vIDxwPjxiPjEuOC48L2I+Jm5ic3A7VGhlIGF2YWlsYWJpbGl0eSBvZiBib251c2VzIChib251c2VzKSBvbiB0aGUgU2l0ZSBmb3IgYSBwYXJ0aWN1bGFyIHBsYXllciBpcyBiYXNlZCBleGNlcHRpb25hbGx5IG9uIGl0cyBwcmVzZW5jZSBpbiB0aGUgcGxheWVyJnJzcXVvO3MgcHJvZmlsZS4gSWYgYW55IG9mIHRoZSBib251c2VzIGFyZSBub3QgaW50ZW5kZWQgZm9yIHRoZSBwbGF5ZXIsIHRoZW4gc3VjaCBhIGJvbnVzIHdpbGwgbm90IGJlIGRpc3BsYXllZCBhbW9uZyB0aG9zZSBhdmFpbGFibGUgaW4gdGhlIHByb2ZpbGUuIEJvbnVzIG9mZmVycyBtYXkgYmUgcmVjZWl2ZWQgdmlhIGVtYWlsLCBTTVMgb3Igb3RoZXIgd2F5cyBvZiBjb21tdW5pY2F0aW9uLiBUaG9zZSBib251c2VzIChhbG9uZyB3aXRoIHRoZSB3aW5uaW5ncyBmcm9tIHRoZW0pIHRoYXQgYXJlIG5vdCBpbnRlbmRlZCBmb3IgdGhlIHBsYXllciAtIG1heSBiZSBmb3JmZWl0ZWQuPGJyPjwvcD5cbi8vIDxwPjxiPjEuOS48L2I+Jm5ic3A7UmVhbCBiYWxhbmNlIGlzIHVzZWQgZm9yIGJldHMgZmlyc3QuIE9ubHkgd2hlbiB0aGUgYW1vdW50IG9uIHRoZSBwbGF5ZXImYXBvcztzIHJlYWwgYmFsYW5jZSBlcXVhbHMgemVybyBoZSBzdGFydHMgcGxheWluZyBmb3IgYm9udXMgbW9uZXkuPC9wPlxuLy8gPHA+PGI+MS4xMC48L2I+Jm5ic3A7Qm9udXMgYW1vdW50cyBjcmVkaXRlZCB0byBhIHBsYXllciZhcG9zO3MgYm9udXMgYWNjb3VudCBhcmUgc3ViamVjdCB0byBhIG1heGltdW0gb2YgZmlmdHkgKHg1MCkgdGltZXMgd2FnZXJpbmcgcmVxdWlyZW1lbnRzIGJlZm9yZSB0aGV5IGFyZSBjb252ZXJ0ZWQgdG8geW91ciBDYXNoIEJhbGFuY2UgYW5kIGNhbiBiZSB3aXRoZHJhd24gKHVubGVzcyBleHBsaWNpdGx5IHN0YXRlZCBvdGhlcndpc2UgaW4gdGhlIFNpZ25pZmljYW50IFRlcm1zKS4mbmJzcDs8L3A+XG4vLyA8cD5XYWdlcmluZyByZXF1aXJlbWVudHMgdmFyeSBkZXBlbmRpbmcgb24gdGhlIGxveWFsdHkgbGV2ZWwgb2YgdGhlIGN1c3RvbWVyLjxicj48YnI+UGxlYXNlIHNlZSB0aGUgdGFibGUgYmVsb3cgc2hvd2luZyB0aGUgYm9udXMgd2FnZXJpbmcgcmVxdWlyZW1lbnQgYnkgcGxheWVyIGxldmVsIHN0YXR1czo8YnI+PGJyPjwvcD5cbi8vIDxzdHlsZT5cbi8vIHRhYmxlIHtcbi8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuLy8gYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbi8vIH1cbi8vIHRkLCB0aCB7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcGFkZGluZzogOHB4O1xuLy8gfVxuLy8gPC9zdHlsZT5cbi8vIDxkaXYgYWxpZ249XCJsZWZ0XCI+XG4vLyAgICAgPHRhYmxlPlxuLy8gICAgICAgICA8dGJvZHk+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5Mb3lhbHR5IExldmVsczwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+Qm9udXNlcyBXYWdlcmluZyBSZXF1aXJlbWVudHM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD41MHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4yPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD40NXg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD40MHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD40PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zNXg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD41PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zMHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD42PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4yNXg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD43PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4yMHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD44PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xNXg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD45PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xNXg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTB4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICA8L3Rib2R5PlxuLy8gICAgIDwvdGFibGU+XG4vLyA8L2Rpdj5cbi8vIDxwPjxicj48L3A+XG4vLyA8cD48Yj4xLjExLjwvYj4mbmJzcDtJZiB5b3UgaGF2ZSBkZWNpZGVkIG5vdCB0byBwYXJ0aWNpcGF0ZSBpbiBhIHByb21vdGlvbihzKSwgeW91IGhhdmUgYWxyZWFkeSBvcHRlZCBpbi4gWW91IG11c3QgY29udGFjdCB7e3tzaXRlTmFtZX19fSBDQVNJTk8gQ3VzdG9tZXIgc3VwcG9ydCBhbmQgcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgdGhlIGJvbnVzIGJlZm9yZSBwbGFjaW5nIGFueSBiZXRzLjwvcD5cbi8vIDxwPjxiPjEuMTIuPC9iPiZuYnNwO1VubGVzcyBvdGhlcndpc2Ugc3RhdGVkLCAxMCBFVVIsIElOUiAxMDAwLCBVU0QgMTAsIEpQWSAxNTAwLCBOWkQgMTAsIEFVRCAxMCwgVFJZIDIwMCwsIENBRCAxMCwgTk9LIDEwMCwgUExOIDUwLCBIVUYgNDAwMCAob3IgdGhlIGVxdWl2YWxlbnQgaW4gYW55IG90aGVyIGN1cnJlbmN5KSBpcyB0aGUgbWluaW11bSBkZXBvc2l0IHRvIGF2YWlsIG9mIHByb21vdGlvbnMgb3IgYm9udXNlcy48L3A+XG4vLyA8cD48Yj4xLjEzLjwvYj4mbmJzcDtZb3UgbWF5IG5vdCBwbGFjZSBhbnkgYmV0cyB0aGF0IGV4Y2VlZCB0aGUgbWF4aW11bSBib251cyBiZXQgc2l6ZSB3aGVuIHVzaW5nIGJvbnVzIG1vbmV5LiBUaGUgbWF4aW11bSBib251cyBiZXQgc2l6ZSBpcyA1IEVVUiwgSU5SIDUwMCwgVVNEIDUsIEpQWSA3NTAsIE5aRCA1LCBBVUQgNSwgVFJZIDEwMCwgQ0FEIDUsIE5PSyA1MCwgUExOIDI1LCBIVUYgMjAwMCAob3IgZXF1aXZhbGVudCBpbiBhbnkgb3RoZXIgY3VycmVuY3kpIHBlciBiZXQvc3BpbiBvciBlcXVpdmFsZW50IHVubGVzcyBpdCBpcyBzdGF0ZWQgZGlmZmVyZW50bHkgaW4gdGhlIHNwZWNpZmljIHRlcm1zIGFuZCBjb25kaXRpb25zIHRhaWxvcmVkIHRvIGVhY2ggYm9udXMgY2FtcGFpZ24uIFBsZWFzZSBub3RlIHRoYXQgeW91IGFyZSByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgeW91IGtub3cgdGhlIG1heGltdW0gYm9udXMgYmV0IHNpemUuIEZvciBjYXNlcyB3aGVyZSBiZXRzIGFyZSBkZWVtZWQgdG8gaGF2ZSBleGNlZWRlZCB0aGUgbWF4aW11bSBib251cyBiZXQgc2l6ZSwgYW4gYWNjb3VudCBtYXkgYmUgcmV2aWV3ZWQsIGFuZCB0aGUgYm9udXMgZnVuZHMgY29uZmlzY2F0ZWQgYW5kIHdpbm5pbmdzLCBpZiBhbnksIHZvaWRlZC48L3A+XG4vLyA8cD48Yj4xLjE0LjwvYj4mbmJzcDtJZiB5b3Ugd2lzaCB0byB3aXRoZHJhdyBiZWZvcmUgbWVldGluZyB0aGUgV2FnZXJpbmcgUmVxdWlyZW1lbnRzIGFmdGVyIHlvdSBzdGFydCB0byB3YWdlciBib251cyBtb25leSwgeW91IHdpbGwgZWZmZWN0aXZlbHkgZm9yZmVpdCB5b3VyIGJvbnVzIHdpbm5pbmdzIGFjY3J1ZWQgYW5kIHlvdXIgYm9udXMgYW1vdW50IGFuZCBvcHQgb3V0IG9mIHRoZSBwcm9tb3Rpb24uPC9wPlxuLy8gPHA+PGI+MS4xNS48L2I+Jm5ic3A7QW55IEJvbnVzIEZ1bmRzIGFyZSBkaXNwbGF5ZWQgc2VwYXJhdGVseSBmcm9tIGFueSBEZXBvc2l0IEZ1bmRzIGluIFlvdXIgUGxheWVyIEFjY291bnQuIEJvbnVzIEZ1bmRzIGNhbiBvbmx5IGJlIHdpdGhkcmF3biBvbmNlIGNvbnZlcnRlZCBpbnRvIHJlYWwgbW9uZXkuPC9wPlxuLy8gPHA+PGI+MS4xNi48L2I+Jm5ic3A7V2hlbiBwbGF5aW5nIGFuIGFjdGl2ZSBib251cywgeW91ciBmdW5kcyB3aWxsIGJlIHVzZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjogRnVuZHMgcmVxdWlyZWQgdG8gdHJpZ2dlciB0aGUgYm9udXMsIEJvbnVzIGZ1bmRzLCBhbmQgQW55IHJlbWFpbmluZyBmdW5kcy48L3A+XG4vLyA8cD48Yj4xLjE3LjwvYj4mbmJzcDtZb3UgY2FuIHdpdGhkcmF3IHJlYWwgbW9uZXkgYmFsYW5jZSBiZWZvcmUgc2F0aXNmeWluZyBib251cyB3YWdlcmluZy4gQnkgZG9pbmcgc28sIHlvdSB3aWxsIGZvcmZlaXQgdGhlIGZ1bmRzIGluIHlvdXIgYm9udXMgYmFsYW5jZS48L3A+XG4vLyA8cD48Yj4xLjE4LjwvYj4mbmJzcDtJZiB5b3UgcnVuIG91dCBvZiBkZXBvc2l0IG1vbmV5IGFuZCB0aGUgYm9udXMgbW9uZXkgYXR0YWNoZWQgdG8gaXQgYmVmb3JlIGZ1bGZpbGxpbmcgdGhlIHdhZ2VyaW5nIHJlcXVpcmVtZW50cywgeW91ciBhY2NvdW50IHdpbGwgYmUgY2xlYXJlZCBmcm9tIGFueSByZW1haW5pbmcgd2FnZXJpbmcgcmVxdWlyZW1lbnRzLjwvcD5cbi8vIDxwPjxiPjEuMTkuPC9iPiZuYnNwO0FmdGVyIHdhZ2VyaW5nIHJlcXVpcmVtZW50cyBhcmUgbWV0LCB0aGUgZGVwb3NpdCBmdW5kcywgYm9udXMgbW9uZXksIGFuZCBhbnkgd2lubmluZ3MgZ2FpbmVkIHdpbGwgYmVjb21lIHdpdGhkcmF3YWJsZSBhcyByZWFsLWNhc2ggbW9uZXkgaW4geW91ciBhY2NvdW50LjwvcD5cbi8vIDxwPjxiPjEuMjAuPC9iPiZuYnNwO3t7e3NpdGVOYW1lfX19IENBU0lOTyBib251c2VzIGFyZSBpbnRlbmRlZCBmb3IgcmVjcmVhdGlvbmFsIHBsYXlpbmcgb25seS4gSW1wcm9wZXIgdXNlIG9mIHRoZSBib251c2VzIGFuZCBwcm9tb3Rpb25hbCBhYnVzZSB3aWxsIG5vdCBiZSB0b2xlcmF0ZWQuIFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHRha2UgdGhlIGZvbGxvd2luZyBhY3Rpb25zIGFnYWluc3QgYm9udXMgYWJ1c2UgKGxpc3Qgbm90IGV4aGF1c3RpdmUpLjwvcD5cbi8vIDx1bD5cbi8vICAgICA8bGk+XG4vLyAgICAgICAgIDxwPlJldm9rZSBhbmQvb3IgY2FuY2VsIGFueSBCb251c2VzIGFuZCBCb251cyB3aW5uaW5ncyB0aGF0IHdlIHJlZ2FyZCB0byBoYXZlIGJlZW4gZ2FpbmVkIGJ5IG1pc3VzZSBvZiB0aGUgc3lzdGVtLjwvcD5cbi8vICAgICA8L2xpPlxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgPHA+QmFuIHN1Y2ggcGxheWVycyBmcm9tIHJlY2VpdmluZyBmdXJ0aGVyIEJvbnVzZXM8L3A+XG4vLyAgICAgPC9saT5cbi8vICAgICA8bGk+XG4vLyAgICAgICAgIDxwPkNsb3NlIHRoZSBhY2NvdW50PC9wPlxuLy8gICAgIDwvbGk+XG4vLyA8L3VsPlxuLy8gPHA+QWJ1c2UgbWF5IGluY2x1ZGUgYnV0IGlzIG5vdCBsaW1pdGVkIHRvPC9wPlxuLy8gPHVsPlxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgPHA+VXNpbmcgbXVsdGlwbGUgQWNjb3VudChzKTwvcD5cbi8vICAgICA8L2xpPlxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgPHA+RXZpZGVuY2UgdGhhdCBhbiBvZmZlciBpcyBiZWluZyBjbGFpbWVkIG9yIGJlbmVmaXRzIHRoZSBzYW1lIHBlcnNvbiBvciBncm91cCBvZiBwZXJzb25zLCBhY3RpbmcgaW4gYW4gYXR0ZW1wdCB0byBkZWZyYXVkIHVzLjwvcD5cbi8vICAgICA8L2xpPlxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgPHA+V2FnZXJpbmcgYm9udXNlcyBvbiBleGNsdWRlZCBHYW1lcy48L3A+XG4vLyAgICAgPC9saT5cbi8vICAgICA8bGk+XG4vLyAgICAgICAgIDxwPkNvLW9wZXJhdGlvbiwgY29sbHVzaW9uLCBvciBvcmdhbml6YXRpb24gb2YgYmV0cyBmcm9tIHRoZSBzYW1lIHNvdXJjZTwvcD5cbi8vICAgICA8L2xpPlxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgPHA+TWFuaXB1bGF0aW9uIG9mIHNvZnR3YXJlLCBleHBsb2l0YXRpb24gb2YgbG9vcGhvbGVzLCBvciBvdGhlciBiZWhhdmlvcnMgd2hpY2ggYW1vdW50IHRvIGRlbGliZXJhdGUgY2hlYXRpbmcuPC9wPlxuLy8gICAgIDwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8cD5IaWRpbmcgSVAgYWRkcmVzc2VzIG9yIHVzaW5nIGEgVlBOKHMpLjwvcD5cbi8vICAgICA8L2xpPlxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgPHA+RGVsYXlpbmcgZ2FtZSByb3VuZHMgaW4gYW55IGdhbWUsIGluY2x1ZGluZyBmcmVlIHNwaW5zIGFuZCBib251cyBmZWF0dXJlcywgdG8gYSBsYXRlciB0aW1lIHdoZW4geW91IGhhdmUgd2FnZXJpbmcgYW5kIG5vbi13YWdlcmluZyByZXF1aXJlbWVudHMuPC9wPlxuLy8gICAgIDwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8cD5Vc2luZyBzdHJhdGVnaWVzIHRoYXQgdGFrZSBhZHZhbnRhZ2Ugb2YgYW55IHNvZnR3YXJlIGJ1ZyBvciBmYWlsdXJlIG9yIG9uIHRoZSBidWlsdC11cCB2YWx1ZSBkdXJpbmcgcmVhbC1tb25leSBwbGF5LjwvcD5cbi8vICAgICA8L2xpPlxuLy8gPC91bD5cbi8vIDxwPjxiPjEuMjEuPC9iPiZuYnNwO1dlIG1heSByZWNsYWltIGFueSBCb251cyB0aGF0IGhhcyBiZWVuIGF3YXJkZWQgaW4gZXJyb3IgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBHZW5lcmFsIFRlcm1zIGFuZCBDb25kaXRpb25zLjwvcD5cbi8vIDxwPjxiPjEuMjIuPC9iPiZuYnNwO1dlIG1heSBtYWtlIGFtZW5kbWVudHMgdG8gYW4gT2ZmZXIgdG8gY29ycmVjdCB0eXBvZ3JhcGhpY2FsIGVycm9ycyBvciBpbXByb3ZlIHVuZGVyc3RhbmRpbmcsIGFuZCB3ZSByZXNlcnZlIHRoZSByaWdodCB0byBhbWVuZCBvciB0ZXJtaW5hdGUgYW4gb2ZmZXIgaWYgcmVxdWlyZWQgZm9yIGxlZ2FsIGFuZC9vciByZWd1bGF0b3J5IHJlYXNvbnMuPC9wPlxuLy8gPHA+PGI+MS4yMy48L2I+Jm5ic3A7e3t7c2l0ZU5hbWV9fX0gQ0FTSU5PIHJlc2VydmVzIHRoZSByaWdodCB0byBiYW4gYSBwbGF5ZXIgZnJvbSBwYXJ0aWNpcGF0aW5nIGluIHByb21vdGlvbnMgYXQgYW55IHRpbWUgd2l0aG91dCB0aGUgb2JsaWdhdGlvbiB0byBwcm92aWRlIGFueSByZWFzb25zIGJlaGluZCBzdWNoIGEgZGVjaXNpb24uPC9wPlxuLy8gPHA+PGI+MS4yNC48L2I+Jm5ic3A7SWYgeW91IGZhaWxlZCB0byBjbGFpbSBhIGRlcG9zaXQgYm9udXMgb3IgZm9yZ290IHRvIGRvIHNvIGFuZCBpbnRlbmQgdG8gcGxheSB3aXRoIHRoZSBib251cywgeW91IG11c3QgY29udGFjdCBDdXN0b21lciBzdXBwb3J0IGJlZm9yZSBwbGFjaW5nIGFueSBiZXRzIGFuZCBhc2sgdG8gYWRqdXN0IHlvdXIgYmFsYW5jZS48L3A+XG4vLyA8cD48Yj4xLjI1LjwvYj4mbmJzcDtXZSByZXNlcnZlIHRoZSByaWdodCB0byBhdWRpdCB5b3VyIGdhbWUgcGxheS90cmFuc2FjdGlvbiBsb2dzLiBZb3UgaGVyZWJ5IGNvbnNlbnQgaW4gYWR2YW5jZSBmb3IgdXMgdG8gZG8gc28uIElmLCBhZnRlciBhbiBhdWRpdCwgaXQgdHJhbnNwaXJlcyB0aGF0IHlvdSBwYXJ0aWNpcGF0ZWQsIG9yIGF0dGVtcHRlZCB0byBwYXJ0aWNpcGF0ZSwgaW4gYSBtYW5pcHVsYXRpdmUgZ2FtZSBzdHJhdGVneSB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGUgYm9udXMgYmVpbmcgcmV3YXJkZWQgdG8geW91IGZyb20gdGhlIGNhc2lubywgd2UgaG9sZCB0aGUgcmlnaHQgdG8gZGVueSwgd2l0aGhvbGQsIHJldm9rZSwgb3Igd2l0aGRyYXcgeW91ciBlbnRpdGxlbWVudCB0byBhbnkgcHJvbW90aW9uLCB3aW5uaW5ncyBvciBib251cywgb3IgdGVybWluYXRlIHlvdXIgYXNzb2NpYXRpb24gd2l0aCBvdXIgd2Vic2l0ZSBhbmQvb3IgYmxvY2sgeW91ciBhY2NvdW50LiBJbiBzdWNoIGNpcmN1bXN0YW5jZXMsIHdlIHNoYWxsIGJlIHVuZGVyIG5vIG9ibGlnYXRpb24gdG8gcmVmdW5kIGFueSBmdW5kcyBpbiB5b3VyIGFjY291bnQgb3RoZXIgdGhhbiB5b3VyIG9yaWdpbmFsIGRlcG9zaXQgYW1vdW50LjwvcD5cbi8vIDxwPjxiPjEuMjYuPC9iPiZuYnNwO0JvbnVzIG1vbmV5IGlzIGZyZWUgbW9uZXkgaW50ZW5kZWQgdG8gaGVscCB5b3UgZW5qb3kge3t7c2l0ZU5hbWV9fX0gQ0FTSU5PIDsgaXQgaXMgbm90IHRvIGJlIHdpdGhkcmF3biBvbmNlIHJlY2VpdmVkLiBUbyBwcmV2ZW50IHlvdSBmcm9tIHdpdGhkcmF3aW5nIHlvdXIgYm9udXMgZnVuZHMgaW5zdGFudGx5LCB7e3tzaXRlTmFtZX19fSBDQVNJTk8gKGFzIHdlbGwgYXMgb3RoZXIgY2FzaW5vcykgcmVxdWlyZXMgc28tY2FsbGVkICZsZHF1bzt3YWdlcmluZyZyZHF1bzsgb2YgdGhlIGJvbnVzIG1vbmV5LiBUaGUgd2FnZXJpbmcgY29lZmZpY2llbnQgaW5kaWNhdGVzIHRoZSBudW1iZXIgb2YgdGltZXMgeW91IG5lZWQgdG8gcGxhY2UgdGhlIGJvbnVzIGFtb3VudC48L3A+XG4vLyA8cD48Yj4xLjI3LjwvYj4mbmJzcDtQYXJ0aWNpcGF0aW9uIGluIHNvbWUgcHJvbW90aW9ucyByZXF1aXJlcyBwbGF5ZXJzIHRvIGNsYWltIHRoZSBib251cyBmcm9tIHRoZSBwcm9tb3Rpb25zIHBhZ2Ugb3IgY2FzaGllciBiZWZvcmUgZGVwb3NpdGluZyBmdW5kcy4gWW91IGNhbiBhbHNvIG9wdCBvdXQgb2YgcmVjZWl2aW5nIHByb21vdGlvbmFsIG5ld3NsZXR0ZXJzIGFueXRpbWUgYnkgdW5zdWJzY3JpYmluZyBkaXJlY3RseSBmcm9tIHRoZSBlbWFpbC9TTVMgbGluayBvciBkaXJlY3RseSBmcm9tIHlvdXIgcHJvZmlsZSBzZWN0aW9uIGF0IHt7e3NpdGVVcmx9fX0gYWZ0ZXIgeW91IGxvZyBpbi48L3A+XG4vLyA8cD48Yj4xLjI4LjwvYj4mbmJzcDtCb251cyBpcyBpbiBlZmZlY3QgdW50aWwgYm9udXMgd2FnZXJpbmcgcmVxdWlyZW1lbnRzIGFyZSBmdWxmaWxsZWQsIGFsbCBib251cyBtb25leSBpcyBsb3N0LCBvciB0aGUgYm9udXMgZXhwaXJlcy48L3A+XG4vLyA8cD48Yj4xLjI5LjwvYj4mbmJzcDtBbnkgZGVwb3NpdCBib251cyBvZmZlcmVkIGhhcyBhIG1heCBjYXNoLW91dCBwb2xpY3kgd2hpY2ggdmFyaWVzIGFjY29yZGluZyB0byB0aGUgbG95YWx0eSBwcm9ncmFtIGxldmVsIHRoZSBwbGF5ZXJzIGFyZSBpbi4gVGhlc2UgbWF4IGNhc2gtb3V0IGxpbWl0cyBhcmUgYWxzbyBhcHBsaWNhYmxlIHRvIHRoZSB3ZWxjb21lIG9mZmVycyBhbmQgY2FuIGJlIHZpZXdlZCBiZWxvdzo8YnI+PGJyPjwvcD5cbi8vIDxkaXYgYWxpZ249XCJsZWZ0XCI+XG4vLyAgICAgPHRhYmxlPlxuLy8gICAgICAgICA8dGJvZHk+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5Mb3lhbHR5IExldmVsczwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TWF4IENhc2hvdXQgd2l0aCBEZXBvc2l0IEJvbnVzPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGg+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDEwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4yPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgMjAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAzMDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDQwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD41PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgNTAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjY8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiA2MDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NzwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDEwMDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+ODwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDE1MDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+OTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDE1MDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAyNTAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgPC90Ym9keT5cbi8vICAgICA8L3RhYmxlPlxuLy8gPC9kaXY+XG4vLyA8cD48YnI+PC9wPlxuLy8gPHA+PGJyPjwvcD5cbi8vIDxwPjxiPjEuMzAuPC9iPiZuYnNwO0dhbWUgd2lubmluZ3MgZnJvbSBzcGlucyBvciBnYW1lIHJvdW5kcyBpbml0aWF0ZWQgd2l0aCBib251cyBmdW5kcyBidXQgY29tcGxldGVkIHdpdGggcmVhbCBtb25leSBhZnRlciB0aGUgYm9udXMgaGFzIGJlZW4gd2FnZXJlZCwgbG9zdCwgb3IgZm9yZmVpdGVkIHdpbGwgYmUgcmVtb3ZlZCBhbmQgbWF5IHJlc3VsdCBpbiB5b3VyIGFjY291bnQgYmVpbmcgY2xvc2VkIGZvciBib251cyBhYnVzZS48L3A+XG4vLyA8cD48Yj4xLjMxLjwvYj4mbmJzcDtXZSByZXNlcnZlIHRoZSByaWdodCB0byB3aXRoZHJhdyBvciBzdXNwZW5kIGFueSBwcm9tb3Rpb24gb3IgY2FtcGFpZ24gYXQgYW55IGdpdmVuIHRpbWUuPC9wPlxuLy8gPHA+PGI+MS4zMi48L2I+Jm5ic3A7V2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gdXBkYXRlIHRoZSBib251cyB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhdCBhbnl0aW1lLjwvcD5cbi8vIDxwPiZuYnNwOzwvcD5cbi8vIDxoMz4yLiBTcGVjaWZpYyBwcm9tb3Rpb25zPC9oMz5cbi8vIDxwPjxicj48Yj4yLjEuIERlcG9zaXQgRnJlZSBTcGluczwvYj48YnI+PGJyPkZvciBmcmVlIHNwaW5zIGNyZWRpdGVkIHdpdGggYSBkZXBvc2l0LCB0aGUgbWF4aW11bSB3aW5uaW5nIHdpdGhkcmF3YWwgY2FwIGlzIDUwMCBFVVIgKG9yIHRoZSBlcXVpdmFsZW50IGluIGFueSBvdGhlciBjdXJyZW5jeSkuICZuYnNwO1RoZSBoaWdoZXN0IHdhZ2VyaW5nIHJlcXVpcmVtZW50IGZvciBkZXBvc2l0LWZyZWUgc3BpbnMgaXMgNTB4IHRoZSB3aW5uaW5nIGFtb3VudCwgYnV0IHRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiB0aGUgcGxheWVyJnJzcXVvO3MgbG95YWx0eSBwcm9ncmFtIGxldmVsLCBhcyBzaG93biBiZWxvdy48L3A+XG4vLyA8ZGl2IGFsaWduPVwibGVmdFwiPlxuLy8gICAgIDx0YWJsZT5cbi8vICAgICAgICAgPHRib2R5PlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG95YWx0eSBMZXZlbHM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkZTIFdhZ2VyaW5nPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGg+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NTB4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MjwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NDV4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MzwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NDB4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MzV4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MzB4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NjwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MjV4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NzwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MjB4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+ODwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTV4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+OTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTV4PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjEweDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgPC90Ym9keT5cbi8vICAgICA8L3RhYmxlPlxuLy8gPC9kaXY+XG4vLyA8cD48YnI+PGJyPjwvcD5cbi8vIDxwPjxiPjIuMi4gTm8gRGVwb3NpdC1GcmVlIFNwaW5zPC9iPjxicj48YnI+Rm9yIGZyZWUgU3BpbnMgY3JlZGl0ZWQgd2l0aG91dCBuZWVkaW5nIGEgZGVwb3NpdCwgdW5sZXNzIGRpZmZlcmVudGx5IHNwZWNpZmllZCBpbiB0aGUgc3BlY2lmaWMgcHJvbW90aW9uLCB0aGUgbWF4aW11bSB3aW5uaW5nIHdpdGhkcmF3YWwgY2FwIGlzIDUwIEVVUiAob3IgdGhlIGVxdWl2YWxlbnQgaW4gYW55IG90aGVyIGN1cnJlbmN5KS4gV2lubmluZ3Mgd2lsbCBiZSB0cmFuc2ZlcnJlZCB0byB5b3VyIGNhc2ggYWNjb3VudCBhZnRlciB3YWdlcmluZyAxMDB4IHRoZSB3aW5uaW5nIGFtb3VudCBnZW5lcmF0ZWQgZnJvbSB0aGUgc3BpbnMgaXMgY29tcGxldGUuIFVubGVzcyBvdGhlcndpc2Ugc3RhdGVkLCB0byB3aXRoZHJhdyB3aW5uaW5ncyBmcm9tIGZyZWUgc3BpbnMsIHlvdSBtdXN0IGRlcG9zaXQgYSBtaW5pbXVtIG9mIDEwIEVVUiAob3IgdGhlIGVxdWl2YWxlbnQgaW4gYW55IG90aGVyIGN1cnJlbmN5KSBhbmQgd2FnZXIgaXQgb25jZSAxeC48YnI+PGJyPjwvcD5cbi8vIDxwPjxiPjIuMy4mbmJzcDtEYWlseSBDYXNoYmFjazwvYj48YnI+PC9wPlxuLy8gPHA+Mi4zLjEgQ2FzaGJhY2sgaXMgY2FsY3VsYXRlZCBkYWlseSBvbiBhbGwgZGVwb3NpdHMgYmV0d2VlbiAwMDowMSAtIDIzOjU5IENFVC48L3A+XG4vLyA8cD4yLjMuMiBDYXNoYmFjayBpcyBjYWxjdWxhdGVkIGFzIGZvbGxvd3M6IERlcG9zaXRzIC0gV2l0aGRyYXdhbHMgLSBCb251cyBSZWNlaXZlZCAtIEJhbGFuY2UuPC9wPlxuLy8gPHA+Mi4zLjMgQmFsYW5jZSB3aWxsIGJlIGNoZWNrZWQgdGhlIGZvbGxvd2luZyBtb3JuaW5nIGF0IDA2OjAwIENFVCwgYW5kIHBsYXllcnMgbXVzdCBoYXZlIGEgYmFsYW5jZSBvZiBub3QgbW9yZSB0aGFuICZldXJvOzUgdG8gcXVhbGlmeSBmb3IgY2FzaGJhY2suPGJyPjxicj4yLjMuNCBDYXNoIGJhY2sgYm9udXNlcyBhcmUgYXV0b21hdGljYWxseSBhdmFpbGFibGUgdG8gYWxsIHBsYXllcnMgZnJvbSBsZXZlbCAyIHVwd2FyZHMuPC9wPlxuLy8gPHA+Mi4zLjUgQ2FzaGJhY2sgd2lsbCBiZSBjcmVkaXRlZCB0byBxdWFsaWZ5aW5nIHBsYXllcnMgYnkgMTI6MDAgQ0VUIHRoZSBmb2xsb3dpbmcgbW9ybmluZy48L3A+XG4vLyA8cD4yLjMuNiBDYXNoIEJhY2sgY3JlZGl0cyB3aWxsIGJlIHJvdW5kZWQgdG8gdGhlIG5lYXJlc3QgRXVybyBvciBjdXJyZW5jeSBlcXVpdmFsZW50LjwvcD5cbi8vIDxwPjIuMy43IENhc2hiYWNrIHdpbGwgYmUgY3JlZGl0ZWQgdG8geW91ciBib251cyB3YWxsZXQgYW5kIGlzIHN1YmplY3QgdG8gdmFyeWluZyB3YWdlcmluZyByZXF1aXJlbWVudHMgZGVwZW5kaW5nIG9uIHRoZSBwbGF5ZXImcnNxdW87cyBMb3lhbHR5IGxldmVsIHN0YXR1cy48YnI+PGJyPlNlZSB0aGUgdGFibGUgYmVsb3cgZm9yIHRoZSBkaWZmZXJlbnQgd2FnZXJpbmcgcmVxdWlyZW1lbnRzIGJ5IHBsYXllciBsb3lhbHR5IGxldmVsOjwvcD5cbi8vIDxwPjxicj48L3A+XG4vLyA8ZGl2IGFsaWduPVwibGVmdFwiPlxuLy8gICAgIDx0YWJsZT5cbi8vICAgICAgICAgPHRib2R5PlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG95YWx0eSBMZXZlbHM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkNhc2hiYWNrIFdhZ2VyaW5nIFJlcXVpcm1lbnQ8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5OL0E8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4yPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD41MHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD40MHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD40PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zNXg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD41PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zMHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD42PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4yMHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD43PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xNXg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD44PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xMHg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD45PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD41eDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjEwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xeDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgPC90Ym9keT5cbi8vICAgICA8L3RhYmxlPlxuLy8gPC9kaXY+XG4vLyA8cD48YnI+PGJyPjwvcD5cbi8vIDxwPjIuMy44IElmIHlvdSBoYXZlIHJlYWwgbW9uZXkgYW5kIGNhc2hiYWNrIG1vbmV5IGluIHlvdXIgYWNjb3VudCwgdGhlIHJlYWwgbW9uZXkgd2lsbCBhbHdheXMgYmUgdXNlZCBmaXJzdCBhbmQgdGhlbiBjYXNoYmFjayBtb25leS48L3A+XG4vLyA8cD4yLjMuOSBDYXNoYmFjayBpcyBvbmx5IHBhaWQgdG8gb3BlbiBhY2NvdW50cy48L3A+XG4vLyA8cD4yLjMuMTAge3t7c2l0ZU5hbWV9fX0gcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIGRlY2xpbmUgY2FzaGJhY2sgdG8gYW55IHBsYXllcnMgd2hvIGFyZSBmb3VuZCB0byBhYnVzZSB0aGUgY2FzaGJhY2sgb2ZmZXIgZHVlIHRvIHN0cmF0ZWdpYyBnYW1lcGxheS4gRm9yIGV4YW1wbGUsIHVzaW5nIHRoZSBnYW1lIGZlYXR1cmUsIGxlYXZpbmcgdGhlIHZhbHVlIGluIHRoZSBnYW1lLCBhbmQgcmVkZWVtaW5nIGl0IHRoZSBkYXkgYWZ0ZXIgd2hlbiBjYXNoYmFjayBoYXMgYmVlbiBjcmVkaXRlZC4gVGhpcyBpcyBwcm9oaWJpdGVkIGFuZCBjb25zaWRlcmVkIGZyYXVkdWxlbnQuIEFueSBjYXNoYmFjayBhbmQgYXNzb2NpYXRlZCB3aW5uaW5ncyB3aWxsIGJlIGNvbmZpc2NhdGVkLiBUaGUgY2FzaGJhY2sgaXMgc3ViamVjdCB0byBzdGFuZGFyZCBib251cyB0ZXJtcyBhbmQgY29uZGl0aW9ucy4ge3t7c2l0ZU5hbWV9fX0gcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIGNhbmNlbCBvciBjaGFuZ2UgdGhlIGNhc2hiYWNrIG9mZmVyIGF0IGFueSB0aW1lLCBhdCBpdHMgc29sZSBkaXNjcmV0aW9uLjwvcD5cbi8vIDxwPjwvcD5cbi8vIDxwPjxicj4yLjMuMTEuJm5ic3A7VGhlIGRhaWx5IGNhc2hiYWNrIHBlcmNlbnRhZ2UgaXNzdWVkIGRlcGVuZHMgb24gdGhlIHBsYXllciZyc3F1bztzIGxveWFsdHkgbGV2ZWwsIGFzIGluZGljYXRlZCBiZWxvdy4gVGhlIG1pbmltdW0gY2FzaGJhY2sgY2xhaW1lZCBpcyAzJSwgYW5kIHRoZSBtYXhpbXVtIGlzIDE1JS48L3A+XG4vLyA8ZGl2IGFsaWduPVwibGVmdFwiPlxuLy8gICAgIDx0YWJsZT5cbi8vICAgICAgICAgPHRib2R5PlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG95YWx0eSBMZXZlbHM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkNCIFBlcmNlbnRhZ2U8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4xPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4wPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MjwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MyU8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD40JTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjQ8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjYlPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NyU8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD42PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD44JTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjc8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjklPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+ODwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTAlPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+OTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTIlPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjE1JTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgPC90Ym9keT5cbi8vICAgICA8L3RhYmxlPlxuLy8gPC9kaXY+XG5cbi8vIDxwPjIuMy4xMiBUaGUgZGFpbHkgY2FzaGJhY2sgcHJvZ3JhbSBoYXMgYSBtaW5pbXVtIGFuZCBtYXhpbXVtIGNhc2gtb3V0IHBvbGljeSBiYXNlZCBvbiB0aGUgcGxheWVyJnJzcXVvO3MgbG95YWx0eSBsZXZlbHMuIE1vbmV5IG92ZXIgYW5kIGFib3ZlIHRoZSBtYXhpbXVtIGNhc2hhYmxlIGFtb3VudHMgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSB0aGUgcGxheWVyJnJzcXVvO3Mgd2FsbGV0LiBUaGUgbWluaW11bSBjYXNoYmFjayBhd2FyZGVkIGlzICZldXJvOzAuNSwgYW5kIHRoZSBtYXhpbXVtIGF3YXJkZWQgY2FzaGJhY2sgaXMgJmV1cm87MTAwMCBkYWlseS48YnI+PGJyPlNlZSB0aGUgdGFibGUgYmVsb3cgZm9yIGNhc2hiYWNrIG1heGltdW0gd2l0aGRyYXdhbCBhbW91bnRzIHBlciBsZXZlbC4mbmJzcDs8L3A+XG5cbi8vIDxkaXYgYWxpZ249XCJsZWZ0XCI+XG4vLyAgICAgPHRhYmxlPlxuLy8gICAgICAgICA8dGJvZHk+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRoPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5Mb3lhbHR5IExldmVsczwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+Q2FzaGJhY2sgTWF4aW11bSBDYXNoIE91dDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjE8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPk4vQTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjI8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPiZldXJvOzUwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPiZldXJvOzYwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjQ8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPiZldXJvOzcwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjU8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPiZldXJvOzgwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjY8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPiZldXJvOzEsMDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NzwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+JmV1cm87MSw1MDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD44PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4mZXVybzsyLDAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjk8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPiZldXJvOzIsNTAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MTA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPiZldXJvOzUsMDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICA8L3Rib2R5PlxuLy8gICAgIDwvdGFibGU+XG4vLyA8L2Rpdj5cblxuLy8gPHA+PGJyPjwvcD5cbi8vIDxwPjIuMy4xMyBUaGUgY2FzaGJhY2sgYm9udXMgbXVzdCBiZSBjbGVhcmVkICh3YWdlcmVkKSBpbiAxIGRheSBmcm9tIHRoZSBpc3N1ZSBkYXRlLiBGYWlsaW5nIHRvIGNsYWltIG9yIGNvbXBsZXRlIHdhZ2VyaW5nIHdpbGwgcmVzdWx0IGluIGJvbnVzIGNhbmNlbGxhdGlvbiBhbmQgdm9pZGluZyBvZiB0aGUgdW53YWdlZCBiYWxhbmNlLjwvcD5cbi8vIDxwPjxicj48L3A+XG5cbi8vIDxwPjxiPjIuNC4mbmJzcDtJbnN0YW50ICZhbXA7IEdvb2QgV2lsbCBCb251c2VzPC9iPjwvcD5cbi8vIDxwPjIuNC4xLiBTdXBwb3J0IGFnZW50cyBtaWdodCBjb25zaWRlciBhd2FyZGluZyBhbiBpbnN0YW50IGRlcG9zaXQgYm9udXMsIGRlcG9zaXQgYm9udXMgc3BpbnMsIGZyZWUgc3BpbnMsIGZyZWUgYm9udXMgbW9uZXksIG9yIGZyZWUgY2FzaCBhcyBhbiBhY3Qgb2YgZ29vZHdpbGwgaW4gYSBjYXNlLWJ5LWNhc2Ugc2NlbmFyaW8uIEluIHN1Y2ggY2FzZXMgYW5kIGluZGVwZW5kZW50bHkgb2YgdGhlIHR5cGUgb3IgYW1vdW50IG9mIGJvbnVzIGdpdmVuLCB0aGUgbWF4aW11bSB3aW4gcmVzdWx0aW5nIGZyb20gdGhhdCBib251cyBjYW5ub3QgZXhjZWVkIDQgdGltZXMgdGhlIHZhbHVlIG9mIHRoZSBvcmlnaW5hbGx5IHJlbGVhc2VkIGJvbnVzIGFtb3VudC48L3A+XG4vLyA8cD4yLjQuMi4gWW91IGNhbiBhcHBseSBmb3IgcmVsb2FkIGJvbnVzZXMgb25seSBpZiB5b3UgaGF2ZSBubyBwZW5kaW5nIHdpdGhkcmF3YWwuPC9wPlxuLy8gPHA+Mi40LjMuIFVubGVzcyBzdGF0ZWQgaW4gdGhlIGluZGl2aWR1YWwgcHJvbW90aW9uYWwgdGVybXMsIHRoZSBnZW5lcmFsIGJvbnVzIHRlcm1zIHNoYWxsIGFwcGx5IHRvIGFsbCByZWxvYWQgYm9udXNlcy48YnI+PGJyPjwvcD5cbi8vIDxwPjxiPjIuNS4mbmJzcDtXZWxjb21lIE9mZmVyczwvYj48L3A+XG4vLyA8cD4yLjUuMS4gVGhlIHdlbGNvbWUgYm9udXMgaXMgb2ZmZXJlZCBvbiB0aGUgZmlyc3QgMyBkZXBvc2l0cyBldmVyIG1hZGUgYnkgcGxheWVycyBhbmQgaXMgc3BsaXQgaW50byAzIGRlcG9zaXQgYm9udXNlczo8L3A+XG4vLyA8cD48Yj5UaGUgZmlyc3Qgd2VsY29tZSBib251czwvYj4mbmJzcDtpcyBhIGRlcG9zaXQgYm9udXMgb2YgMTAwJSB1cCB0byA1MDAgRVVSLCBJTlIgNDUwMDAsIFVTRCA1MDAsIEpQWSA3NTAwMCwgTlpEIDUwMCwgQVVEIDUwMCwgVFJZIDEwMDAwLCBDQUQgMTAsIE5PSyA1MDAwLCBQTE4gMjUwMCwgSFVGIDIwMDAwMCAmbmJzcDsoIGVxdWl2YWxlbnQgaW4gYW55IG90aGVyIGN1cnJlbmN5KSArIDIwMCBTcGlucyBvbiBCaWcgQmFzcyBCb25hbnphLjwvcD5cbi8vIDxwPjxiPlRoZSBzZWNvbmQgd2VsY29tZSBib251czwvYj4mbmJzcDtpcyBhIGRlcG9zaXQgYm9udXMgb2YgNzUlIHVwIHRvIDUwMCBFVVIsIElOUiA0NTAwMCwgVVNEIDUwMCwgSlBZIDc1MDAwLCBOWkQgNTAwLCBBVUQgNTAwLCBUUlkgMTAwMDAsIENBRCAxMCwgTk9LIDUwMDAsIFBMTiAyNTAwLCBIVUYgMjAwMDAwICZuYnNwOyggZXF1aXZhbGVudCBpbiBhbnkgb3RoZXIgY3VycmVuY3kpICsgMTAwIFNwaW5zIGluIEdhdGVzIG9mIE9seW1wdXMuPC9wPlxuLy8gPHA+PGI+VGhlIHRoaXJkIHdlbGNvbWUgYm9udXM8L2I+Jm5ic3A7aXMgYSBkZXBvc2l0IGJvbnVzIG9mIDEwMCUgdXAgdG8gMTAwMCBFVVIsIElOUiA5MDAwMCwgVVNEIDEwMDAsIEpQWSAxNTAwMDAsIE5aRCAxMDAwLCBBVUQgMTAwMCwgVFJZIDIwMDAwLCBDQUQgMTAwMCwgTk9LIDEwMDAwLCBQTE4gNTAwMCwgSFVGIDQwMDAwMCAmbmJzcDsoIGVxdWl2YWxlbnQgaW4gYW55IG90aGVyIGN1cnJlbmN5KSAoZXF1aXZhbGVudCBpbiBhbnkgb3RoZXIgY3VycmVuY3kpICsgNTAgU3BpbnMgaW4gSmFtbWluIEphcnMuPC9wPlxuLy8gPHA+Mi41LjIuIFdlbGNvbWUgcGFja2FnZSBhbHNvIGluY2x1ZGVzIEZyZWUgc3BpbnMgb2ZmZXJlZCB3aXRoIHRoZSBmaXJzdCwgc2Vjb25kLCBhbmQgdGhpcmQgZGVwb3NpdHMgbWFkZSBieSBwbGF5ZXJzLiZuYnNwOzwvcD5cbi8vIDxwPlRoZXkgYXJlIHNwbGl0IGFzIGZvbGxvd3M6PC9wPlxuLy8gPHA+PGI+V2VsY29tZSBGcmVlIFNwaW5zIHBhcnQgMTwvYj46IDIwMCBGcmVlIFNwaW5zIGFyZSBkaXN0cmlidXRlZCBpbiB0aGUgcGxheWVyJnJzcXVvO3MgYWNjb3VudCBpbiBiYXRjaGVzIG9mIDIwIGluIDEwIGNvbnNlY3V0aXZlIGRheXMuIFRoZSBpbml0aWFsIDIwIGZyZWUgc3BpbnMgYXJlIGF2YWlsYWJsZSB3aGVuIHRoZSBwbGF5ZXIgbWFrZXMgdGhlIGZpcnN0IGRlcG9zaXQgYW5kIGNsYWltcyB0aGUgd2VsY29tZSBib251cy48YnI+PGJyPjxiPldlbGNvbWUgRnJlZSBTcGlucyBwYXJ0IDI8L2I+OiAmbmJzcDsxMDAgRnJlZSBTcGlucyB3aWxsIGJlIGRpc3RyaWJ1dGVkIHRvIHRoZSBwbGF5ZXImcnNxdW87cyBhY2NvdW50IGluIGJhdGNoZXMgb2YgMjAgaW4gNSBkYXlzIGNvbnNlY3V0aXZlIGRheXMuIFRoZSBpbml0aWFsIDIwIGZyZWUgc3BpbnMgYXJlIGF2YWlsYWJsZSB3aGVuIHRoZSBwbGF5ZXIgZGVwb3NpdHMgYW5kIGNsYWltcyB0aGUgc2Vjb25kIHdlbGNvbWUgYm9udXMuPGJyPjxicj48Yj5XZWxjb21lIEZyZWUgU3BpbnMgcGFydCAzPC9iPjogJm5ic3A7NTAgRnJlZSBTcGlucyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY3JlZGl0ZWQgdG8gdGhlIHBsYXllciZyc3F1bztzIGFjY291bnQgd2l0aCB0aGUgdGhpcmQgZGVwb3NpdCBhZnRlciB0aGUgdGhpcmQgd2VsY29tZSBib251cyBpcyBjbGFpbWVkLiZuYnNwOzwvcD5cbi8vIDxwPjxicj48L3A+XG4vLyA8cD4yLjUuMy4gSXQmYXBvcztzIGltcG9ydGFudCB0byBub3RlIHRoYXQgcGxheWVycyBtaWdodCBzZWUgYW5kIGNsYWltIGEgd2VsY29tZSBib251cyBkaWZmZXJlbnQgZnJvbSB0aGUgc3RhbmRhcmQgb2ZmZXIgYWR2ZXJ0aXNlZCBvbi1zaXRlLiBHZW5lcmFsbHksIHRoZXNlIHdlbGNvbWUgYm9udXNlcyBhcmUgcHJvbW90ZWQgYnkgYWZmaWxpYXRlIHNpdGVzIHdpdGggdGd0IHBlcm1pc3Npb24uIElmIHBsYXllcnMgY2xhaW0gc3VjaCAxc3QgZGVwb3NpdCBvZmZlcnMsIHRoZXkgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gY2xhaW0gYSBzZWNvbmQgZmlyc3QgZGVwb3NpdCBvZmZlciBmcm9tIG90aGVyIHNpdGUgc2VjdGlvbnMuIElmIHRoaXMgaXMgZGlzY292ZXJlZCBvciBhbGxvd2VkIGJ5IGEgc3lzdGVtIGdsaXRjaCwgdGhlIENhc2lubyByZXNlcnZlcyB0aGUgcmlnaHQgdG8gY2xvc2UgdGhlIHBsYXllciZhcG9zO3MgYWNjb3VudCBpbW1lZGlhdGVseS48YnI+PGJyPjwvcD5cbi8vIDxwPjxiPjIuNi4mbmJzcDtNb25kYXkgMjUlIFVubGltaXRlZCBCb251czwvYj48L3A+XG4vLyA8cD4yLjYuMS4gVGhlIE1vbmRheSBib251cyBpcyB0cmlnZ2VyZWQgd2l0aCBhIG1pbmltdW0gZGVwb3NpdCBvZiAxMCBFVVIsIElOUiAxMDAwLCBVU0QgMTAsIEpQWSAxNTAwLCBOWkQgMTAsIEFVRCAxMCwgVFJZIDIwMCwgQ0FEIDEwLCBOT0sgMTAwLCBQTE4gNTAsIGFuZCBIVUYgNDAwMC4mbmJzcDs8L3A+XG4vLyA8cD4yLjYuMi4gUGxheWVycyBtdXN0IGdvIHRvIHRoZSBjYXNoaWVyIG9yIHByb21vdGlvbnMgcGFnZSwgY2xhaW0gZnJvbSB0aGVyZSwgYW5kIHRoZW4gZGVwb3NpdCB0byBnZXQgdGhlIGJvbnVzIGNyZWRpdGVkIHRvIHRoZWlyIGFjY291bnQuPC9wPlxuLy8gPHA+Mi42LjMuIFRoaXMgZGVwb3NpdCBib251cyBjYW4gYmUgY2xhaW1lZCB1bmxpbWl0ZWQgdGltZXMgZHVyaW5nIHRoZSBkYXkuJm5ic3A7PC9wPlxuLy8gPHA+Mi42LjQuIEFueSBkZXBvc2l0IGJvbnVzIG9mZmVyZWQgaGFzIGEgbWF4IGNhc2gtb3V0IHBvbGljeSB3aGljaCB2YXJpZXMgYWNjb3JkaW5nIHRvIHRoZSBsb3lhbHR5IHByb2dyYW0gbGV2ZWwgdGhlIHBsYXllcnMgYXJlIGluLiBUaGVzZSBtYXggY2FzaC1vdXQgbGltaXRzIGFyZSBhbHNvIGFwcGxpY2FibGUgdG8gdGhlIHdlbGNvbWUgb2ZmZXJzIGFuZCBjYW4gYmUgdmlld2VkIGJlbG93OjwvcD5cbi8vIDxwPjxicj48L3A+XG4vLyA8ZGl2IGFsaWduPVwibGVmdFwiPlxuLy8gICAgIDx0YWJsZT5cbi8vICAgICAgICAgPHRib2R5PlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0aD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG95YWx0eSBMZXZlbHM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICAgICAgICA8dGg+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPk1heCBDYXNob3V0IHdpdGggZGVwb3NpdCBCb251czwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjE8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxMDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MjwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDIwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgMzAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjQ8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiA0MDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDUwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD42PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgNjAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjc8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxMDAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxNTAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjk8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxNTAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjEwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgMjUwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgIDwvdGJvZHk+XG4vLyAgICAgPC90YWJsZT5cbi8vIDwvZGl2PlxuLy8gPHA+PGJyPjwvcD5cbi8vIDxwPjIuNi41LiBXYWdlcmluZyBSZXF1aXJlbWVudDogNTB4IHdhZ2VyaW5nIGFwcGxpZXMgaW5kZXBlbmRlbnRseSBvZiB0aGUgbG95YWx0eSBwcm9ncmFtIGxldmVsIHRoZSBwbGF5ZXIgaXMgaW4uJm5ic3A7PC9wPlxuLy8gPHA+Mi42LjYgTWF4IGJldCBkdXJpbmcgYm9udXM6IDUgRVVSLCBJTlIgNTAwLCBVU0QgNSwgSlBZIDc1MCwgTlpEIDUsIEFVRCA1LCBUUlkgMTAwLCBDQUQgNSwgTk9LIDUwLCBQTE4gMjUsIEhVRiAyMDAwIChvciBlcXVpdmFsZW50IGluIGFueSBvdGhlciBjdXJyZW5jeSkgcGVyIGJldC9zcGluLjwvcD5cbi8vIDxwPjIuNi43LiBPbmNlIGNsYWltZWQsIHRoZSBib251cyBtdXN0IGJlIHdhZ2VyZWQgd2l0aGluIDcgZGF5cyBmcm9tIHRoZSBib251cyBpc3N1ZSBkYXRlLjxicj48YnI+PC9wPlxuLy8gPHA+Mi42LjguIFN0YW5kYXJkIGJvbnVzIHRlcm1zIGFuZCBHZW5lcmFsIFdlYnNpdGUgY29uZGl0aW9ucyBhcHBseS48L3A+XG4vLyA8cD48YnI+PC9wPlxuLy8gPHA+PGI+Mi43LlR1ZXNkYXkgRnJlZSBTcGlucyBCb251czwvYj48L3A+XG4vLyA8cD4yLjcuMS4gMjUgRnJlZSBTcGlucyBib251cyBpcyB0cmlnZ2VyZWQgd2l0aCBhIG1pbmltdW0gZGVwb3NpdCBvZiAxMCBFVVIsIElOUiAxMDAwLCBVU0QgMTAsIEpQWSAxNTAwLCBOWkQgMTAsIEFVRCAxMCwgVFJZIDIwMCwgQ0FEIDEwLCBOT0sgMTAwLCBQTE4gNTAsIEhVRiA0MDAwLjxicj48YnI+Mi43LjIgVG8gY2xhaW0gdGhlIDI1IGZyZWUgc3BpbnMgY3JlZGl0ZWQgb24gdGhlIHNlbGVjdGVkIGdhbWUgb2YgdGhlIHdlZWssIHBsYXllcnMgbmVlZCB0byBnbyB0byB0aGUgY2FzaGllciBvciBwcm9tb3Rpb25zIHBhZ2UsIGNsYWltIGZyb20gdGhlcmUsIGFuZCBwcm9jZWVkIHRvIGRlcG9zaXQuIEZyZWUgc3BpbnMgYm9udXMgaXMgb2ZmZXJlZCB3ZWVrbHkgYW5kIHN1YmplY3QgdG8gc3RhbmRhcmQgYm9udXMgdGVybXMuPGJyPjxicj48L3A+XG4vLyA8cD4yLjcuMy4gVGhpcyBPZmZlciBpcyBhdmFpbGFibGUgdG8gYWxsIHBsYXllcnMgd2hvIGhhdmUgYWxyZWFkeSBkZXBvc2l0ZWQgYXQge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vLjwvcD5cbi8vIDxwPjIuNy40LiBUaGUgMjUgZnJlZSBzcGlucyB3aWxsIGJlIGNyZWRpdGVkIGludG8gdGhlIHBsYXllciZhcG9zO3MgYWNjb3VudCBpbnN0YW50bHkgdXBvbiBtYWtpbmcgYSBxdWFsaWZ5aW5nIGRlcG9zaXQuPC9wPlxuLy8gPHVsPlxuLy8gICAgIDxsaT5cbi8vICAgICAgICAgPHA+TWF4IHdpdGhkcmF3YWwgYW1vdW50IHdpdGggdGhpcyBib251czogNTAwIEVVUiwgSU5SIDQ1MDAwLCBVU0QgNTAwLCBKUFkgNzUwMDAsIE5aRCA1MDAsIEFVRCA1MDAsIFRSWSAxMDAwMCwgQ0FEIDEwLCBOT0sgNTAwMCwgUExOIDI1MDAsIEhVRiAyMDAwMDAgJm5ic3A7KCBlcXVpdmFsZW50IGluIGFueSBvdGhlciBjdXJyZW5jeSkuPC9wPlxuLy8gICAgIDwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8cD5NYXggYmV0IGR1cmluZyBib251czogNSBFVVIsIElOUiA1MDAsIFVTRCA1LCBKUFkgNzUwLCBOWkQgNSwgQVVEIDUsIFRSWSAxMDAsIENBRCA1LCBOT0sgNTAsIFBMTiAyNSwgSFVGIDIwMDAgKG9yIGVxdWl2YWxlbnQgaW4gYW55IG90aGVyIGN1cnJlbmN5KSBwZXIgYmV0L3NwaW4uPC9wPlxuLy8gICAgIDwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8cD5XYWdlcmluZyBSZXF1aXJlbWVudDogNTB4IHdhZ2VyaW5nIGFwcGxpZXMgaW5kZXBlbmRlbnRseSBvZiB0aGUgbG95YWx0eSBwcm9ncmFtIGxldmVsIHRoZSBwbGF5ZXIgaXMgaW4uJm5ic3A7PC9wPlxuLy8gICAgIDwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8cD5PbmNlIGNsYWltZWQsIHRoZSBib251cyBtdXN0IGJlIHdhZ2VyZWQgd2l0aGluIDcgZGF5cyBmcm9tIHRoZSBib251cyBpc3N1ZSBkYXRlLjwvcD5cbi8vICAgICA8L2xpPlxuLy8gPC91bD5cbi8vIDxwPjxicj48L3A+XG4vLyA8cD48Yj4yLjguIFdlZG5lc2RheSBkb3VibGUgbG95YWx0eSBwb2ludHMgYm9udXM8L2I+PC9wPlxuLy8gPHA+Mi44LjEuIFRoZSBXZWRuZXNkYXkgZG91YmxlIGxveWFsdHkgcG9pbnRzIGdyYW50IHR3aWNlIHRoZSBsb3lhbHR5IHBvaW50cyB0byBhbnkgcGxheWVyIHBsYXlpbmcgYXQgdGhlIGNhc2lubyBldmVyeSBXZWRuZXNkYXkuPC9wPlxuLy8gPHA+Rm9yIGV4YW1wbGUsIGlmIGEgUGxheWVyIHVzdWFsbHkgcmVjZWl2ZXMgMSBscCBmb3IgZXZlcnkgMTAgRVVSLCBJTlIgMTAwMCwgVVNEIDEwLCBKUFkgMTUwMCwgTlpEIDEwLCBBVUQgMTAsIFRSWSAyMDAsIENBRCAxMCwgTk9LIDEwMCwgUExOIDUwLCBIVUYgNDAwMCBiZXQgcGxhY2VkIG9uIFdlZG5lc2RheSwgdGhleSB3aWxsIHJlY2VpdmUgMiBscCwgdGh1cyBzcGVlZGluZyB1cCB0aGVpciBsZXZlbC11cCBwb3RlbnRpYWwuPC9wPlxuLy8gPHA+PGJyPjxiPjIuOS4gVGh1cnNkYXkgZGVwb3NpdCBCb251cyZuYnNwOzwvYj48L3A+XG4vLyA8cD4yLjkuMS4gVGhlIDUwJSB1cCB0byA1MCBFVVIsIElOUiA1MDAwLCBVU0QgNTAsIEpQWSA3NTAwLCBOWkQgNTAsIEFVRCA1MCwgVFJZIDEwMDAsIENBRCA1MCwgTk9LIDUwMCwgUExOIDI1MCwgSFVGIDIwMDAwIFRodXJzZGF5IGJvbnVzIGlzIHRyaWdnZXJlZCB3aXRoIGEgbWluaW11bSBkZXBvc2l0IG9mIDEwIEVVUiwgSU5SIDEwMDAsIFVTRCAxMCwgSlBZIDE1MDAsIE5aRCAxMCwgQVVEIDEwLCBUUlkgMjAwLCwgQ0FEIDEwLCBOT0sgMTAwLCBQTE4gNTAsIEhVRiA0MDAwLjwvcD5cbi8vIDxwPjIuOS4yLiBQbGF5ZXJzIG11c3QgZ28gdG8gdGhlIGNhc2hpZXIgb3IgcHJvbW90aW9ucyBwYWdlIHRvIGNsYWltIHRoZSBUaHVyc2RheSBib251cywgY2xhaW0gZnJvbSB0aGVyZSwgYW5kIGRlcG9zaXQuJm5ic3A7PGJyPjxicj48YnI+Mi45LjMuIFRvIGNsYWltIHRoZSA1MCUgdXAgdG8gNTAgRVVSLCBJTlIgNTAwMCwgVVNEIDUwLCBKUFkgNzUwMCwgTlpEIDUwLCBBVUQgNTAsIFRSWSAxMDAwLCBDQUQgNTAsIE5PSyA1MDAsIFBMTiAyNTAsIEhVRiAyMDAwMCwgcGxheWVycyBuZWVkIHRvIGdvIHRvIHRoZSBjYXNoaWVyIG9yIHByb21vdGlvbnMgcGFnZSwgY2xhaW0gZnJvbSB0aGVyZSwgYW5kIHByb2NlZWQgdG8gZGVwb3NpdC4gVGhpcyBkZXBvc2l0IGJvbnVzIGlzIG9mZmVyZWQgd2Vla2x5IGFuZCBzdWJqZWN0IHRvIHN0YW5kYXJkIGJvbnVzIHRlcm1zLjwvcD5cbi8vIDxwPjIuOS40LiBUaGlzIE9mZmVyIGlzIGF2YWlsYWJsZSB0byBhbGwgcGxheWVycyB3aG8gaGF2ZSBhbHJlYWR5IGRlcG9zaXRlZCBhdCB7e3tzaXRlTmFtZX19fSBDYXNpbm8uPC9wPlxuLy8gPHA+Mi45LjUuIEFueSBkZXBvc2l0IGJvbnVzIG9mZmVyZWQgaGFzIGEgbWF4IGNhc2gtb3V0IHBvbGljeSB3aGljaCB2YXJpZXMgYWNjb3JkaW5nIHRvIHRoZSBsb3lhbHR5IHByb2dyYW0gbGV2ZWwgdGhlIHBsYXllcnMgYXJlIGluLiBUaGVzZSBtYXggY2FzaC1vdXQgbGltaXRzIGFyZSBhbHNvIGFwcGxpY2FibGUgdG8gdGhlIHdlbGNvbWUgb2ZmZXJzIGFuZCBjYW4gYmUgdmlld2VkIGJlbG93OjwvcD5cbi8vIDxwPjxicj48L3A+XG4vLyA8cD48YnI+PC9wPlxuLy8gPGRpdiBhbGlnbj1cImNlbnRlclwiPlxuLy8gICAgIDx0YWJsZT5cbi8vICAgICAgICAgPHRib2R5PlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+TG95YWx0eSBMZXZlbHM8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPk1heCBDYXNob3V0IHdpdGggZGVwb3NpdCBCb251czwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjE8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxMDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+MjwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDIwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD4zPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgMzAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjQ8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiA0MDAwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8L3RyPlxuLy8gICAgICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+NTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgICAgIDx0ZD5cbi8vICAgICAgICAgICAgICAgICAgICAgPHA+RVVSIDUwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgICAgICA8dHI+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD42PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgNjAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjc8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxMDAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjg8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxNTAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjk8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkVVUiAxNTAwMDwvcD5cbi8vICAgICAgICAgICAgICAgICA8L3RkPlxuLy8gICAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgICAgIDx0cj5cbi8vICAgICAgICAgICAgICAgICA8dGQ+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPjEwPC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICAgICAgPHRkPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5FVVIgMjUwMDA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDwvdHI+XG4vLyAgICAgICAgIDwvdGJvZHk+XG4vLyAgICAgPC90YWJsZT5cbi8vIDwvZGl2PlxuLy8gPHA+PGJyPjwvcD5cbi8vIDx1bD5cbi8vICAgICA8bGk+XG4vLyAgICAgICAgIDxwPk1heCBiZXQgZHVyaW5nIGJvbnVzOiBpcyA1IEVVUiwgSU5SIDUwMCwgVVNEIDUsIEpQWSA3NTAsIE5aRCA1LCBBVUQgNSwgVFJZIDEwMCwgQ0FEIDUsIE5PSyA1MCwgUExOIDI1LCBIVUYgMjAwMCAob3IgZXF1aXZhbGVudCBpbiBhbnkgb3RoZXIgY3VycmVuY3kpIHBlciBiZXQvc3Bpbi48L3A+XG4vLyAgICAgPC9saT5cbi8vICAgICA8bGk+XG4vLyAgICAgICAgIDxwPldhZ2VyaW5nIFJlcXVpcmVtZW50OiA1MHggd2FnZXJpbmcgYXBwbGllcyBpbmRlcGVuZGVudGx5IG9mIHRoZSBsb3lhbHR5IHByb2dyYW0gbGV2ZWwgdGhlIHBsYXllciBpcyBpbi4mbmJzcDs8L3A+XG4vLyAgICAgPC9saT5cbi8vICAgICA8bGk+XG4vLyAgICAgICAgIDxwPk9uY2UgY2xhaW1lZCwgdGhlIGJvbnVzIG11c3QgYmUgd2FnZXJlZCB3aXRoaW4gNyBkYXlzIGZyb20gdGhlIGJvbnVzIGlzc3VlIGRhdGUuPC9wPlxuLy8gICAgIDwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgICA8cD5TdGFuZGFyZCBib251cyB0ZXJtcyBhbmQgR2VuZXJhbCBXZWJzaXRlIGNvbmRpdGlvbnMgYXBwbHkuPC9wPlxuLy8gICAgIDwvbGk+XG4vLyA8L3VsPlxuLy8gPHA+PGJyPjwvcD5cbi8vIDxoMz4zLjAgT3RoZXIgYm9udXMgdGVybXM8YnI+PGJyPjwvaDM+XG4vLyA8cD4zLjAuMS4mbmJzcDtEaWZmZXJlbnQgZ2FtZXMgYW5kIGdhbWUgdHlwZXMgY29udHJpYnV0ZSB0b3dhcmRzIGZ1bGZpbGxpbmcgd2FnZXJpbmcgcmVxdWlyZW1lbnRzIHRvIGRpZmZlcmVudCBleHRlbnRzLiBGb3IgaW5zdGFuY2UsIGlmIGEgZ2FtZSB0eXBlIGRlbGl2ZXJzIDEwMCUgdG93YXJkcyB3YWdlcmluZywgaXQgbWVhbnMgdGhhdCBpZiB5b3UgYmV0ICZldXJvOzEsICZldXJvOzEgd2lsbCBjb3VudCB0b3dhcmRzIGNvbXBsZXRpbmcgdGhlIHdhZ2VyaW5nLjwvcD5cbi8vIDxwPkJlbG93IGFyZSB0aGUgZ2FtZSZhcG9zO3MgYm9udXMgd2FnZXJpbmcgY29udHJpYnV0aW9uIHJhdGVzOjwvcD5cbi8vIDxwPkFsbCBTbG90IEdhbWVzOiAxMDAlIChleGNlcHQgQW1hdGljOiBBenRlYyBFbWVyYWxkLCBGcnVpdCBMb29wLCBTY2FyYWIgVHJlYXN1cmUsIFByaW5jZXNzIG9mIFBlYXJscywgV2lsZCBIZWFydHM8YnI+PGJyPjwvcD5cbi8vIDxwPi0gQkdhbWluZzombmJzcDtSb2NrZXQgRGljZSwgQmxhY2tqYWNrIFN1cnJlbmRlciwgRm94eSBXaWxkIEhlYXJ0LCBQbGlua28sIFdCQyBSSW5nIG9mIFJpY2hlcywgWm9ycm8gV2lsZCBIZWFydDxicj48YnI+PC9wPlxuLy8gPHA+LSBCb29taW5nOiZuYnNwO1N1cmZpbiZhcG9zOyBSZWVscyAsIFdvbWJhcm9vPGJyPjxicj48L3A+XG4vLyA8cD4tIEJldHNvZnQ6Jm5ic3A7RHIuIEpla3lsbCAmYW1wOyBNci4gSHlkZSwgRnJ1aXRiYXQgQ3JhenksIE1heCBRdWVzdDogV3JhdGggb2YgUmEsIExhdmEgR29sZCwgUGlub2NjaGlvLCBTcGluZmluaXR5IE1hbiwgU3BsaXQgV2F5IFJveWFsLCBTdWdhciBQb3AsIFN1Z2FyIFBvcCAyOiBEb3VibGUgRGlwcGVkLCBTdXBlciA3IEJsYWNramFjaywgVGFrZSBUaGUgQmFuaywgVGFrZSBUaGUgS2luZ2RvbSwgVGFrZSBPbHltcHVzLCBUYWtlIFNhbnRhJmFwb3M7cyBTaG9wLCBUZW5zIG9yIEJldHRlciwgVGhlIEhpdmUhLCBUaGUgTXlzdGljIEhpdmUsIFRocmVlIENhcmQgUnVtbXksIFRyaXBsZSBFZGdlIFBva2VyLCBWaXAgRXVyb3BlYW4gUm91bGV0dGUsIFdob1NwdW5JdCBQbHVzLCBab29tIFJvdWxldHRlPGJyPjxicj48L3A+XG4vLyA8cD4tIEVuZG9ycGhpbmE6Jm5ic3A7TmluamE8YnI+PGJyPjwvcD5cbi8vIDxwPi0gRXBpYyBNZWRpYTombmJzcDsxNDI5IFVuY2hhcnRlZCBTZWFzIChUSyksIEhvcGUgRGlhbW9uZCAoQmx1ZXByaW50KTxicj48YnI+PC9wPlxuLy8gPHA+LSBFdm9wbGF5OiZuYnNwO0ZsdWZmeSBSYW5nZXJzLCBGb3Jnb3R0ZW4gRmFibGUsIFJvY2tldCBTdGFycywgTmlnaHQgb2YgdGhlIExpdmluZyBUYWxlczxicj48YnI+PC9wPlxuLy8gPHA+LSBGZWxpeCBHYW1pbmc6Jm5ic3A7RGVlcCBCbHVlIEphY2tib21iLCBMaW5lcyBvZiBNYWdpYzxicj48YnI+PC9wPlxuLy8gPHA+LSBIYWJhbmVybzombmJzcDtFZ3lwdGlhbiBEcmVhbXMgRGVsdXhlLCBDYW5keSBUb3dlciwgRmx5ISwgSmVsbHlmaXNoIEZsb3csIEtub2Nrb3V0IEZvb3RiYWxsLCBLbm9ja291dCBGb290YmFsbCBSdXNoLCBMb25kb24gSHVudGVyLCBNYWdpYyBPYWssIE1hcnZlbG91cyBGdXJsb25ncywgUHJlc3RvISwgUHVtcGtpbiBQYXRjaCwgU2FudGEmcnNxdW87cyBWaWxsYWdlPGJyPjxicj48L3A+XG4vLyA8cD4tIGlTb2Z0YmV0OiZuYnNwO0FtYmlhbmNlLCBNZWdhIEJveSwgUm9vIFJpY2hlcywgU3VwZXIgRmFzdCBIb3QgSG90IFJlc3BpbiwgVHJlZSBvZiBGb3J0dW5lLCBWZWdhcyBIaWdoIFJvbGxlcjxicj48YnI+PC9wPlxuLy8gPHA+LSBLYWxhbWJhOiZuYnNwO0Jhbmdrb2sgRHJlYW1zLCBDcnlzdGFsIENhdmVybiwgRGlubyBPZHlzc2V5PGJyPjxicj48L3A+XG4vLyA8cD4tIE1hc2NvdDombmJzcDtCYXN0ZXQgYW5kIENhdHM8YnI+PGJyPjwvcD5cbi8vIDxwPi0gTmV0RW50OiZuYnNwO0Jsb29kIFN1Y2tlcnMsIERlYWQgb3IgQWxpdmUsIERlYWQgb3IgQWxpdmUgMiwgRGVhZCBvciBBbGl2ZSAyIEZlYXR1cmUgQnV5LCBEZXZpbCZhcG9zO3MgRGVsaWdodCwgSmFja3BvdCA2MDAwLCBMdWNreSBBbmdsZXIsIE1lZ2EgSm9rZXIsIFJlZWwgUnVzaCAyLCBSZWVsIFN0ZWFsLCBSb2JpbiBIb29kOiBTaGlmdGluZyBSaWNoZXMsIFNjdWRhbW9yZSZhcG9zO3MgU3VwZXIgU3Rha2VzLCBTZWNyZXRzIG9mIEF0bGFudGlzLCBTZXJlbmdldGkgS2luZ3MsIFNpbmdsZSBEZWNrIEJsYWNramFjayBQcm9mZXNzaW9uYWwgU2VyaWVzLCBTdHJlZXQgRmlnaHRlciBJSTogVGhlIFdvcmxkIFdhcnJpb3IgU2xvdCwgVGhlIEZyZW5jaCBSb3VsZXR0ZSwgUm9tZTogVGhlIEdvbGRlbiBBZ2UsIFRoZSBXaXNoIE1hc3RlciwgVFhTIEhvbGQmYXBvcztlbSBQcm9mZXNzaW9uYWwgU2VyaWVzLCBXaWxkZXJsYW5kPGJyPjxicj48L3A+XG4vLyA8cD4tIE5vbGltaXQgQ2l0eTombmJzcDtCb29rIE9mIFNoYWRvd3M8YnI+TnVjbGV1czogV2lsZCBDaGVycnkgQmxhc3QsIFdpbnMgQWhveTxicj48YnI+PC9wPlxuLy8gPHA+LSBOWVg6Jm5ic3A7MzAwIFNoaWVsZHMsIEphY2twb3QgSmVzdGVyIDIwMDAwMCwgMTQyOSBVbmNoYXJ0ZWQgU2VhcyAsIExpbCBEZXZpbCAoQlRHKSwgUm95YWwgTWludCAoQlRHKTxicj48YnI+PC9wPlxuLy8gPHA+LSBPbmx5UGxheTombmJzcDtDcnlzdGFsIENydXNoLCBKdWljeSBDcnVzaCwgTXl0aHMgb2YgQmFzdGV0PGJyPjxicj48L3A+XG4vLyA8cD4tIFBsYXkmYXBvcztuR286IEJha2VyJmFwb3M7cyBUcmVhdCwgRXllIG9mIHRoZSBLcmFrZW4sIEdvbGRlbiBMZWdlbmQsIEhhcHB5IEhhbGxvd2VlbiwgSHVnbyAyLCBNYWhqb25nIDg4LCBNVUxUSUZSVUlUIDgxLCBQZWFybHMgb2YgSW5kaWEsIFBpbXBlZCwgUmFnZSB0byBSaWNoZXMsIFJveWFsIE1hc3F1ZXJhZGUsIFNlYSBIdW50ZXIsIFRvd2VyIFF1ZXN0PGJyPjxicj48L3A+XG4vLyA8cD4tIFBsYXlzb246Jm5ic3A7U29sYXIgVGVtcGxlIChJbmZpbmdhbWUpLCBTb2xhciBRdWVlbiAoSW5maW5nYW1lKSwgU29sYXIgS2luZyAoSW5maW5nYW1lKSZuYnNwOzxicj48YnI+PC9wPlxuLy8gPHA+LSBQbGF5dGVjaDombmJzcDtBZ2Ugb2YgdGhlIEdvZHM6IFJ1bGVyIG9mIHRoZSBTZWFzLCBTaGllbGRzIG9mIFJvbWUsIFN0b3JtcyBvZiBJY2UgUG93ZXIgUGxheSBKYWNrcG90LCBXaWxkIExhdmEsIFNhdmFnZSBKdW5nbGUsIFZpa2luZyBSdW5lY3JhZnQsIFByYWdtYXRpYywgMyBLaW5nZG9tcyAmbmRhc2g7IEJhdHRsZSBvZiBSZWQgQ2xpZmZzLCBCcm9uY28gU3Bpcml0LCBDYXNoIEVsZXZhdG9yLCBEcmFnb24gS2luZ2RvbSAtIEV5ZXMgb2YgRmlyZSwgR29sZGVuIEJlYXV0eSwgSmFkZSBCdXR0ZXJmbHksIEp1bmdsZSBHb3JpbGxhLCBRdWVlbiBvZiBHb2xkLCBUaGUgQ2hhbXBpb25zLCBXaWxkIERlcHRoPGJyPjxicj48L3A+XG4vLyA8cD4tIFB1c2ggR2FtaW5nOiZuYnNwO0Jpc29uIEJhdHRsZSwgSmFtbWluJmFwb3M7IEphcnMgMiAsIFdpbGQgU3dhcm0sIFdpemFyZCBTaG9wPGJyPjxicj48L3A+XG4vLyA8cD4tIFF1aWNrZmlyZTombmJzcDszIFRpbnkgR29kcywgMzAwIFNoaWVsZHMsIEFmcmljYSBYIFVQLCBBZnJpY2FuIFF1ZXN0LCBBZ2VudCBWYWxreXJpZSwgQWdlIG9mIENvbnF1ZXN0LCBBbGNoZW15IEJsYXN0LCBBc3RybyBMZWdlbmRzOiBMeXJhIGFuZCBFcmlvbiwgQXJ0IG9mIHRoZSBIZWlzdCwgQXVndXN0dXMsIEJlYXV0aWZ1bCBCb25lcywgQmlraW5pIFBhcnR5LCBCb29rIG9mIE96LCBCb29raWUgb2YgT2RkcywgQnJlYWsgRGEgQmFuayBBZ2FpbiBSZXNwaW4sIENhc3RsZSBCdWlsZGVyLCBDYXN0bGUgQnVpbGRlciBJSSwgQ29vbCBCdWNrLCBDcmFwcywgRHJhZ29uIERhbmNlLCBFbGl0ZSBvZiBFdmlsOiBQb3J0YWwgb2YgR29sZCAoR2FtZXZ5KSwgRmxvd2VyIEZvcnR1bmVzLCBGb3JzYWtlbiBLaW5nZG9tLCBHZW1zIE9keXNzZXksIEdlbXMgT2R5c3NleSA5MiwgR29kcyBPZiBQb3dlciwgR29sZGF1ciBHdWFyZGlhbnMsIEdvbGRlbiBTdGFsbGlvbiwgSG90IEluaywgTGUgS2FmZmVlIEJhciwgTGlsIERldmlsLCBMdWNreSBDbHVja3MgKENyYXp5dG9vdGgpLCBNYWdpYyBvZiBTYWhhcmEsIE1ham9yIE1pbGxpb25zLCBNZWR1c2EsIE1lZ2EgTW9vbGFoLCBNZWdhIE1vb2xhaCBJc2lzLCBNb25zdGVyIEJsYXN0LCBQZWVrLWEtQm9vIC0gNSBSZWVsLCBQZXRzIEdvIFdpbGQsIFJhYmJpdCBpbiB0aGUgSGF0LCBSZWVsIEdlbXMsIFJldHJvIFJlZWxzLCBSZXRybyBSZWVscyBEaWFtb25kIEdsaXR6LCBSZXRybyBSZWVscyBFeHRyZW1lIEhlYXQsIFNhbnRhIEdvZXMgV2lsZCwgU2Nyb29nZSwgU2lzdGVycyBvZiBPeiBXT1dQT1QsIFNvbGFyIFF1ZWVuIChQbGF5c29uKSwgU3BlY3RhY3VsYXIgV2hlZWwgb2YgV2VhbHRoLCBTdGFyZHVzdCwgU3dlZXQgQ2hpbGxpLCBUb21iIFJhaWRlciAtIFNlY3JldCBvZiB0aGUgU3dvcmQsIFRvbWIgUmFpZGVyLCBVbnRhbWVkIEJlbmdhbCBUaWdlciwgVW50YW1lZCBDcm93bmVkIEVhZ2xlLCBVbnRhbWVkIEdpYW50IFBhbmRhLCBVbnRhbWVkIFdvbGYgUGFjaywgVmFtcGlyZTogVGhlIE1hc3F1ZXJhZGUgLSBMYXMgVmVnYXMsIFZpbGxhZ2UgUGVvcGxlIE1hY2hvIE1vdmVzLCBXaGVlbCBvZiBXZWFsdGggU3BlY2lhbCBFZGl0aW9uLCBXaGVlbCBvZiBXZWFsdGgsIFdpbGQgT3JpZW50LCBab21iaWUgSG9hcmQ8YnI+PGJyPjwvcD5cbi8vIDxwPi0gUXVpY2tzcGluOiZuYnNwO1NrdWxscyBVcCE8YnI+PGJyPjwvcD5cbi8vIDxwPi0gUmVkIFRpZ2VyOiZuYnNwOzUgRmFtaWxpZXMsIEFuY2llbnRzIEJsZXNzaW5nLCBBenRlYyBTcGlucywgQm9tYnVzdGVyLCBEaWFtb25kIEJsaXR6LCBEeW5hbWl0ZSBSaWNoZXMsIEx1Y2t5IEZyaWRheXMsIFNwaW4gVG93biwgVGhyZWUgTXVza2V0ZWVycywgUmVlbCBIZWlzdCwgV2VsbCBPZiBXaXNoZXM8YnI+PGJyPjwvcD5cbi8vIDxwPi0gUmVsYXg6Jm5ic3A7MyBTZWNyZXQgQ2l0aWVzICg0VGhlUGxheWVyKSwgMTAwIEJpdCBEaWNlICg0VGhlUGxheWVyKSwgQm9vayBvZiA5OSwgRGVlcCBEZXNjZW50LCBGcmVxdWVudCBGbHllciwgSGVsbGNhdHJheiAsIEtpbmdtYWtlciAoQlRHKSwgTGlsIERldmlsIChCVEcpLCBNYXJjaGluZyBMZWdpb25zLCBSb3lhbCBNaW50IChCVEcpLCBTbG90IFZlZ2FzIE1lZ2FxdWFkcyAoQlRHKSwgVHJhaWwgQmxhemVyIChOb3J0aGVybmxpZ2h0cyksIFdpemFyZCBTaG9wIChQdXNoIEdhbWluZyk8YnI+PGJyPjwvcD5cbi8vIDxwPi0gU3Bpbm9tZW5hbDombmJzcDsxIFJlZWwgRWd5cHQsIDEgUmVlbCBGcnVpdHMsIDEgUmVlbCBIYWxsb3dlZW4sIDEgUmVlbCBNb25rZXksIDEgUmVlbCBYbWFzLCBDdXBpZHMgU3RyaWtlIDIsIERpdmluZSBGb3Jlc3QsIExlbXVyIERvZXMgVmVnYXMsIFN1bW1lciBTcGxhc2gsIE1pbmVzIG9mIEdvbGQsIEJsYWNrSmFjazxicj48YnI+PC9wPlxuLy8gPHA+LSBTbG90ZWdyYXRvcjombmJzcDtTb2xhciBLaW5nLCBTb2xhciBUZW1wbGU8YnI+PGJyPjwvcD5cbi8vIDxwPi0gU3dpbnR0OiZuYnNwO0VneXB0IEtpbmc8YnI+PGJyPjwvcD5cbi8vIDxwPi0gVGh1bmRlcmtpY2s6Jm5ic3A7MTQyOSBVbmNoYXJ0ZWQgU2VhcywgQmFyYmVyc2hvcDogVW5jdXQsIEJvcmsgVGhlIEJlcnplcmtlciwgRnJ1aXQgV2FycCwgVG9raSBUaW1lPGJyPjxicj48L3A+XG4vLyA8cD4tIFRydWVMYWI6Jm5ic3A7Q3J5cHRzIG9mIEZvcnR1bmUsIE1pbmluZyBGYWN0b3J5LCBWaWN0b3JpYSBXaWxkPGJyPjxicj48L3A+XG4vLyA8cD4tIFlnZ2RyYXNpbDombmJzcDtBbGNoeW1lZGVzLCBBbmNpZW50IEVjbGlwc2UsIENhdWxkcm9uLCBDYXppbm8gQ29zbW9zLCBEYXJrIFZvcnRleCwgRHdhcmYgTWluZSwgRG91YmxlIERyYWdvbnMsIEZvb3RiYWxsIEdsb3J5LCBIYW1tZXIgb2YgR29kcywgSG9sbWVzIGFuZCB0aGUgU3RvbGVuIFN0b25lcywgSmFja3BvdCBSYWlkZXJzICwgSm9obmFuIExlZ2VuZGFyaWFuLCBKb2tlcml6ZXIsIExlZ2lvbiBIb3QgMSwgT3p3aW4mcnNxdW87cyBKYWNrcG90cywgUmlzZSBvZiB0aGUgVmFsa3lyaWUgU3BsaXR6LCBSb2JpbiBTaGVyd29vZCBNYXJhdWRlcnMsIFNwaW5hIENvbGFkYSwgVGhlIEhvdCBPZmZlciwgVGhlIERhcmsgSm9rZXIgUml6ZXMsIFRoZSBSb3lhbCBGYW1pbHksIFRvd2VyaW5nIFBheXMgVmFsaGFsbGEsIFR1dCZhcG9zO3MgVHdpc3RlciwgVmlraW5ncyBHbyB0byBIZWxsLCBWaWtpbmdzIEdvIEJlcnplcmssIFZpa2luZ3MgR28gVG8gVmFsaGFsbGEsIFZpY3RvcmlhIFdpbGQsIFdpY2tlZCBDaXJjdXMsIFdvbGYgSHVudGVyczxicj48YnI+PC9wPlxuLy8gPHA+LSBXYXpkYW46Jm5ic3A7OSBMaW9ucywgQmxhY2sgSG9yc2UsIEJsYWNrIEhvcnNlIERlbHV4ZSwgQnV0dGVyZmx5IExvdmVycywgSG90IDc3NywgSG90IDc3NyBEZWx1eGUsIExhcnJ5IFRoZSBMZXByZWNoYXVuLCBMYXJyeSB0aGUgTGVwcmVjaGF1biBFYXN0ZXIsIFJlZWwgSGVybywgUmVsaWMgSHVudGVycyBhbmQgdGhlIEJvb2sgb2YgRmFpdGgsIFNvbmljIFJlZWxzOiAwJSkuPGJyPjxicj5XZSByZXNlcnZlIHRoZSByaWdodCB0byBmb3JmZWl0IHdpbm5pbmdzIGlmIGJvbnVzIGZ1bmRzIGFyZSB3YWdlcmVkIG9uIHRoZXNlIGdhbWVzLjwvcD5cbi8vIDxwPjxicj48L3A+XG4vLyA8cD5BbGwgVGFibGUgR2FtZXMgYW5kIExpdmUgQ2FzaW5vIGdhbWVzOiAwJTwvcD5cbi8vIDxwPkFsbCBWaWRlbyBQb2tlciBnYW1lczogMCU8L3A+XG4vLyA8cD5BbGwgb3RoZXIgZ2FtZXM6IDAlPC9wPlxuLy8gPHA+Mi40LiBXZSByZXNlcnZlIHRoZSByaWdodCB0byB1cGRhdGUgdGhpcyBsaXN0IGFuZCBmb3JmZWl0IGFueSB3aW5uaW5ncyBpZiBib251cyBmdW5kcyBhcmUgd2FnZXJlZCBvbiB0aGVzZSBnYW1lcy48L3A+XG4vLyA8cD4yLjUuIFRoZSBzdGFrZSBzaXplIG9uIGFueSBnYW1lIHdpdGggYSAmcXVvdDtib251cyBidXkmcXVvdDsgb3IgJnF1b3Q7ZmVhdHVyZSBidXlzJnF1b3Q7IG9wdGlvbiB3aWxsIGNvdW50IGFzIHRoZSB0b3RhbCBjb3N0IG9mIHRoZSBzcGluLCBub3QgdGhlIHN0YWtlIG9yIHZhbHVlIG9mIHRoZSBnYW1lIHJvdW5kIHRoZSBmZWF0dXJlIG9yIGJvbnVzIGlzIHBsYXllZCBhdC4gRm9yIGV4YW1wbGUsIGZvciBNb25leSBUcmFpbiBhdCAmZXVybzsxIHN0YWtlLCB0aGUgYm9udXMgYnV5IGlzIDgweCAoJmV1cm87ODApLCBzbyB0aGUgYmV0IHNpemUgZm9yIHRoaXMgcm91bmQgd291bGQgYmUgJmV1cm87ODAuPGJyPjxicj4yLjYuIEFsdGhvdWdoIHRoZSBydWxlcyBsaXN0ZWQgYWJvdmUgYXJlIHt7e3NpdGVOYW1lfX19IGRlZmF1bHQgd2FnZXJpbmcgc2V0dGluZ3MsIHBsYXllcnMmcnNxdW87IHBhcnRpY2lwYXRpb24gaW4gc3BlY2lmaWMgcHJvbW90aW9ucyBtYXkgbmVjZXNzaXRhdGUgc3BlY2lhbCByZXF1aXJlbWVudHMgdGhhdCBkaWZmZXIgZnJvbSB0aG9zZSBhYm92ZS4gRm9yIGV4YW1wbGUsIHRhYmxlIGdhbWVzLCBleGNsdWRlZCBmcm9tIHdhZ2VyaW5nIGJ5IGRlZmF1bHQsIG1pZ2h0IGJlY29tZSB0aGUgb25seSB0eXBlIG9mIGdhbWVzIGVsaWdpYmxlIGZvciB3YWdlcmluZyBib251cyBtb25leSB3aXRoaW4gc3BlY2lhbCBwcm9tb3Rpb25zIGZvciB0YWJsZSBnYW1lcy4gQW55IHByb21vdGlvbiB3aXRoIGFuIGlycmVndWxhciB3YWdlcmluZyBtb2RlIHdpbGwgaGF2ZSBhbiBhY2N1cmF0ZSBkZXNjcmlwdGlvbiBvZiB0aGlzIG1vZGUgaW4gaXRzIHRlcm1zIGFuZCBjb25kaXRpb25zLjwvcD5cbi8vIDxwPjxicj48L3A+XG4vLyA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIGBcbi8vICAgICAgICAgfSksXG4vLyAgICAgICAgIGlzX2FjdGl2ZTogdHJ1ZSxcbi8vICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKSxcbi8vICAgICAgICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKVxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdGl0bGU6IEpTT04uc3RyaW5naWZ5KHsgRU46ICdHZW5lcmFsIFRlcm1zICYgQ29uZGl0aW9ucycgfSksXG4vLyAgICAgICAgIHNsdWc6ICdnZW5lcmFsLXRlcm1zJyxcbi8vICAgICAgICAgY2F0ZWdvcnkgOiBDTVNfQ0FURUdPUklFUy5MRUdBTF9DT01QTElBTkNFLFxuLy8gICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgRU46IGBcbi8vICAgICAgICAgICA8aDM+MS4gSW50cm9kdWN0aW9uPC9oMz5cbi8vICAgICAgICAgICAxLjEge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIGlzIGxpY2Vuc2VkIGJ5IEhOQSBHYW1pbmcgQi5WLCBhIGNvbXBhbnkgYmFzZWQgaW4gRnJhbnNjaGUgQmxvZW13ZWcgNCwgV2lsbGVtc3RhZCwgQ3VyYcOnYW8sIHVuZGVyIHRoZSBnYW1pbmcgbGljZW5zZSBudW1iZXIgODA0OC9KQVogaXNzdWVkIGJ5IEFudGlsbGVwaG9uZSBTZXJ2aWNlcyBOLlYuLCBhdXRob3Jpc2VkIGFuZCByZWd1bGF0ZWQgYnkgdGhlIEdvdmVybm1lbnQgb2YgQ3VyYWNhby48YnI+XG4vLyAgICAgICAgICAgMS4yIHt7e3NpdGVOYW1lfX19IENhc2lubyBpcyBvcGVyYXRlZCBieSB0Z3QgR3JvdXAgTHRkIGFjdGluZyBhcyBhIE1lcmNoYW50IG9mIFJlY29yZCwgdGd0IEdyb3VwIEx0ZC4sIGEgY29tcGFueSBpbmNvcnBvcmF0ZWQgdW5kZXIgdGhlIExhd3Mgb2YgQ3lwcnVzIHdpdGggcmVnaXN0cmF0aW9uIG51bWJlciBIRSA0MzYwODgsIFZBVCBudW1iZXIgMTA0MzYwODhDLCBhbmQgcmVnaXN0ZXJlZCBhdCBQZWlyYWlvcywgMzRBIFN0cm92b2xvcywgMjAyMywgTmljb3NpYSwgQ3lwcnVzIHdpdGggY29udGFjdCBwaG9uZSBudW1iZXIgKzM1NyAyMjMyIDQyOTEuPGJyPlxuLy8gICAgICAgICAgIDEuMyB0Z3QgR3JvdXAgTHRkLiBpcyBhIDEwMCUgc3Vic2lkaWFyeSBvZiBITkEgR2FtaW5nIEIuVi48YnI+XG4vLyAgICAgICAgICAgMS40IHt7e3NpdGVOYW1lfX19IENhc2lubyByZXNlcnZlcyB0aGUgcmlnaHQgdG8gbW9kaWZ5IHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhdCBhbnkgdGltZS4gUGxheWVycyB3aG8gaGF2ZSBhbHJlYWR5IGFjY2VwdGVkIHRoZSBwcmV2aW91cyB2ZXJzaW9uIG9mIHRoZSB0ZXJtcyB3aWxsIGJlIG5vdGlmaWVkIHZpYSBlLW1haWwgYW5kIHJlcXVlc3RlZCB0byByZS1hY2NlcHQgdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSB0ZXJtcyB2aWEgcG9wdXAgdXBvbiBmaXJzdCBsb2dpbiBhZnRlciB0ZXJtcyB1cGRhdGUuIFRoZXNlIGJlY29tZSBlZmZlY3RpdmUgYXMgc29vbiBhcyB0aGV5IGFyZSBwdWJsaXNoZWQgb24gdGhpcyBwYWdlIHdpdGhvdXQgcmV0cm9hY3RpdmUgZWZmZWN0LlxuLy8gICAgICAgICAgIFdpdGggcmVnYXJkIHRvIGJvbnVzZXMgYW5kIHByb21vdGlvbnMgdGVybXMgJiBjb25kaXRpb25zLCBpdOKAmXMgdGhlIHVzZXIncyByZXNwb25zaWJpbGl0eSB0byByZWFkIHRoZXNlIHRlcm1zIGFuZCBjb25kaXRpb25zIGFuZCB0byByZWZlciB0byB0aGVtIHJlZ3VsYXJseS4gQW55IGRlcG9zaXQgb3IgZ2FtZSBvbiB7e3tzaXRlTmFtZX19fSBDYXNpbm8gaW1wbGllcyB0aGF0IGFueSB1c2VyIG9mIHRoZSBwbGF0Zm9ybSBhY2NlcHRzIHRoZXNlIHRlcm1zLjxicj5cbi8vICAgICAgICAgICAxLjUgUGF5bWVudHMgYXJlIHByb2Nlc3NlZCBieSB0Z3QgR3JvdXAgTHRkIGFuZCBmb3IgcGF5bWVudCBkaXNwdXRlcyBDeXByaW90IGxhdyBhcHBsaWVzLjxicj48YnI+XG4vLyAgICAgICAgICAgPGgzPjIuIEFjY291bnQ8L2gzPlxuLy8gICAgICAgICAgIDIuMSBUbyBiZSBhYmxlIHRvIHBsYXkgcmVhbCBtb25leSBnYW1lcyBvbiB7e3tzaXRlTmFtZX19fSBDYXNpbm8sIGFuIGFjY291bnQgbXVzdCBiZSBvcGVuZWQuPGJyPlxuLy8gICAgICAgICAgIDIuMiBUaGUgbWluaW11bSBhZ2UgcmVxdWlyZWQgdG8gY3JlYXRlIGFuIGFjY291bnQgaXMgMTggeWVhcnMgb2xkLjxicj5cbi8vICAgICAgICAgICAyLjMgUGxheWVycyByZXNpZGluZyBpbiBjb3VudHJpZXMgd2hpY2ggYXJlIG5vdCBhdmFpbGFibGUgb24gdGhlIHJlZ2lzdHJhdGlvbiBmb3JtIGNhbm5vdCBjcmVhdGUgYW4gYWNjb3VudCBvciBwbGF5IG9uIHt7e3NpdGVOYW1lfX19IENhc2luby48YnI+XG4vLyAgICAgICAgICAgMi40IFRoZSBDb21wYW55IG9ubHkgYWxsb3dzIG9uZSAoMSkgYWNjb3VudCBwZXIgcGxheWVyLCBob3VzZWhvbGQsIElQIGFkZHJlc3MsIGVtYWlsIGFkZHJlc3MsIHBob25lIG51bWJlciwgcGF5bWVudCBtZXRob2RzIChkZWJpdCBvciBjcmVkaXQgY2FyZHMpLiBJbiB0aGUgZXZlbnQgdGhhdCBvdXIgc2VjdXJpdHkgc3lzdGVtIGRldGVjdHMgdGhhdCBpbmZvcm1hdGlvbiBpcyBpZGVudGljYWwgb24gc2V2ZXJhbCBhY2NvdW50cywgd2UgdGhlbiBzcGVhayBvZiBcIm11bHRpLWFjY291bnRzXCIsIHdoaWNoIGlzIHN0cmljdGx5IGZvcmJpZGRlbiBhbmQsIGluIHRoaXMgY2FzZSwgYWxsIGFjY291bnRzIGNhbiBiZSBpbW1lZGlhdGVseSBjbG9zZWQgYnkgdGhlIGZyYXVkIGRlcGFydG1lbnQuPGJyPlxuXG4vLyAgICAgICAgICAgMi41IElmIHNldmVyYWwgcGxheWVycyB3aXNoIHRvIHBsYXkgaW4gb3VyIGNhc2lubyBmcm9tIGEgY29tbW9uIGNvbXB1dGVyIG5ldHdvcmsgKGRvcm1pdG9yaWVzLCBmcmF0ZXJuaXRpZXMsIGV0Yy4pLCBvciBmcm9tIHRoZSBzYW1lIGhvdXNlaG9sZCwgd2Ugc3Ryb25nbHkgc3VnZ2VzdCB0aGF0IHRoZXkgY29udGFjdCBvdXIgc3VwcG9ydCBzZXJ2aWNlLCBiZWZvcmUgY3JlYXRpbmcgYWNjb3VudHMuIG11bHRpcGxlLCB0byBhdm9pZCB1bm5lY2Vzc2FyeSBzZWN1cml0eSBwcm9jZWR1cmVzLjxicj5cbi8vICAgICAgICAgICAyLjYgSW4gb3JkZXIgdG8gb3BlbiBhbiBhY2NvdW50LCB0aGUgcGxheWVyIHdpbGwgYmUgaW52aXRlZCB0byBjb21wbGV0ZSBhIHJlZ2lzdHJhdGlvbiBmb3JtIGFuZCBwcm92aWRlIHRoZSBmb2xsb3dpbmcgcGVyc29uYWwgaW5mb3JtYXRpb246IGEgXCJ1c2VybmFtZVwiLCBhIFwicGFzc3dvcmRcIiwgXCJOYW1lXCIsIFwiRmlyc3QgbmFtZVwiLCBcImVtYWlsXCIgLCDigJxQaG9uZSBudW1iZXLigJ0sIOKAnGhvbWUgYWRkcmVzc+KAnSwg4oCcZ2VuZGVy4oCdLCDigJxkYXRlIG9mIGJpcnRo4oCdIGFuZCDigJxjdXJyZW5jeeKAnS4gVGhlIG5hbWUgcmVnaXN0ZXJlZCBvbiB0aGUgcGxheWVyJ3MgYWNjb3VudCBtdXN0IGRlcG9zaXQgdGhlIGxlZ2FsIG5hbWUgYW5kIGlkZW50aXR5IG9mIHRoZSBwbGF5ZXIuPGJyPlxuLy8gICAgICAgICAgIDIuNyBJdCBpcyB0aGUgcGxheWVyJ3MgcmVzcG9uc2liaWxpdHkgdG8gZW5zdXJlIHRoYXQgaGUgaXMgdGhlIG9uZSBhbmQgb25seSBwZXJzb24gYWJsZSB0byBhY2Nlc3MgaGlzIGFjY291bnQgYnkgZW5zdXJpbmcgdGhhdCBoaXMgbG9naW4gaW5mb3JtYXRpb24gaXMga2VwdCBzZWN1cmUuIFdlIHJlY29tbWVuZCB0aGF0IG91ciB1c2VycyBsb2cgb3V0IG9mIHRoZWlyIGFjY291bnQgYXQgdGhlIGVuZCBvZiBlYWNoIGdhbWUgc2Vzc2lvbiBmb3IgbW9yZSBzZWN1cml0eS4gPGJyPlxuLy8gICAgICAgICAgIDIuOCBUaGUgcGxheWVyIGlzIGFkdmlzZWQgdG8gY3JlYXRlIGEgc3Ryb25nIHBhc3N3b3JkIGNvbnRhaW5pbmcgdXBwZXIgYW5kIGxvd2VyIGNhc2UgbGV0dGVycywgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLCBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIG51bWJlcnMuIFRoZSBzdWdnZXN0ZWQgbWluaW11bSBsZW5ndGggaXMgZWlnaHQgY2hhcmFjdGVycyBpbmNsdWRpbmcgYSBjYXBpdGFsIGxldHRlciwgYSBudW1iZXIgYW5kIGEgc3ltYm9sLjxicj5cbi8vICAgICAgICAgICAyLjkgVGhlIENvbXBhbnkgcmVzZXJ2ZXMgdGhlIHJpZ2h0IHRvIHByb2hpYml0IHRoZSB1c2Ugb2YgcHNldWRvbnltcyBhbmQgLyBvciBhdmF0YXJzIHRoYXQgaXQgZGVlbXMgaW5hcHByb3ByaWF0ZSwgaW4gcGFydGljdWxhciB0aG9zZSBvZiBhIHBvbGl0aWNhbCwgcmFjaXN0LCBwb3Jub2dyYXBoaWMsIGluc3VsdGluZywgdmlvbGVudCBuYXR1cmUsIGNvbmRvbmluZyB0ZXJyb3Jpc20sIGRydWdzIGFuZCAvIG9yIHdlYXBvbnMuIFdlIGFsc28gcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gcmVmdXNlIHRvIGFjdGl2YXRlIGFuIGFjY291bnQgYXQgYW55IHRpbWUgYW5kIGZvciBhbnkgcmVhc29uLjxicj48YnI+XG4vLyAgICAgICAgICAgPHVsPjxoMz4yLjkuMSBJbmFjdGl2ZSBBY2NvdW50IDo8L2gzPlxuLy8gICAgICAgICAgIDIuOS4xLjEgQW4gYWNjb3VudCBvbiB3aGljaCBubyBhY3Rpdml0eSBoYXMgYmVlbiByZWNvcmRlZCBmb3IgYXQgbGVhc3QgNiBtb250aHMgd2lsbCBiZSBjb25zaWRlcmVkIGluYWN0aXZlLjxicj5cbi8vICAgICAgICAgICAyLjkuMS4yIFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIGFwcGx5IGFuIGFjY291bnQgbWFuYWdlbWVudCBmZWUgb2YgNSBFVVIsIElOUiA1MDAsIFVTRCA1LCBKUFkgNzUwLCBOWkQgNSwgQVVEIDUsIFRSWSAxMDAsIENBRCA1LCBOT0sgNTAsIFBMTiAyNSwgSFVGIDIwMDAgcGVyIG1vbnRoLCB0byBhbnkgaW5hY3RpdmUgY3JlZGl0IGFjY291bnQuIEluIHRoaXMgY2FzZSwgc2FpZCBjaGFyZ2VzIHdpbGwgYmUgZGVkdWN0ZWQgZnJvbSB0aGUgYWN0aXZlIGNhc2ggYmFsYW5jZSB1bnRpbCB0aGUgYWNjb3VudCBpcyBhY3RpdmUgYWdhaW4gYW5kIC8gb3IgdW50aWwgdGhlIGFjdGl2ZSBiYWxhbmNlIGlzIHplcm8uXG4vLyAgICAgICAgICAgMi45LjEuMyBPbmNlIHRoZSBiYWxhbmNlIGlzIHplcm8sIG5vIG1vcmUgaW5hY3Rpdml0eSBmZWVzIHdpbGwgYmUgYXBwbGllZCBieSB0aGUgQ29tcGFueS48YnI+XG4vLyAgICAgICAgICAgMi45LjEuNCBQbGF5ZXJzIGhhdmUgdGhlIHBvc3NpYmlsaXR5IHRvIHJlY292ZXIgdGhlIHJlbWFpbmluZyBmdW5kcyBvbiB0aGVpciBpbmFjdGl2ZSBhY2NvdW50cyBieSBsb2dnaW5nIGludG8gdGhlaXIgcGVyc29uYWwgYWNjb3VudCBhbmQgbWFraW5nIGEgd2l0aGRyYXdhbCByZXF1ZXN0Ljxicj5cbi8vICAgICAgICAgICAyLjkuMS41IEluIHRoZSBjYXNlIG9mIGJsb2NrZWQgYW5kIC8gb3IgZXhjbHVkZWQgYWNjb3VudHMsIHBsYXllcnMgbXVzdCBjb250YWN0IGN1c3RvbWVyIHN1cHBvcnQgdG8gcmVjb3ZlciB0aGVzZSBkb3JtYW50IGZ1bmRzLjwvdWw+PGJyPlxuLy8gICAgICAgICAgIDxoMz4zLiBBY2Njb3VudCBWZXJpZmljYXRpb248L2gzPlxuLy8gICAgICAgICAgIDMuMSBBbGwgYWNjb3VudHMgbmVlZCB0byBiZSB2ZXJpZmllZCBmb3IgYWdlIHZlcmlmaWNhdGlvbiwgZnJhdWQgcHJldmVudGlvbiwgd2l0aGRyYXdhbCBwcm9jZXNzaW5nLCBwcm9tb3Rpb25hbCByZXN0cmljdGlvbnMsIGFjY291bnQgY2xvc2luZ3MsIGV0Yy48YnI+XG4vLyAgICAgICAgICAgMy4yIEFueSB3aXRoZHJhd2FsIHJlcXVlc3QgcmVxdWlyZXMgcHJpb3IgYWNjb3VudCB2ZXJpZmljYXRpb24uIFRoZSByZXF1aXJlZCBkb2N1bWVudHMgYXJlIGFzIGZvbGxvd3M6XG4vLyAgICAgICAgICAgPHVsPjxsaT5BIHZhbGlkIHBlcnNvbmFsIGlkZW50aWZpY2F0aW9uIGRvY3VtZW50IChwYXNzcG9ydCwgZHJpdmluZyBsaWNlbnNlIG9yIG5hdGlvbmFsIGlkZW50aXR5IGNhcmQpLlxuLy8gICAgICAgICAgIDxsaT5Qcm9vZiBvZiBhZGRyZXNzIG9mIGxlc3MgdGhhbiAzIG1vbnRocyBpbiBQREYgZm9ybWF0IG9uIHdoaWNoIHRoZSBmdWxsIG5hbWUgYW5kIGFkZHJlc3Mgb2YgdGhlIHBsYXllciBhcmUgbWVudGlvbmVkLiBCYW5rIGFjY291bnQgc3RhdGVtZW50cywgcGF5c2xpcCwgd2F0ZXIsIGdhcyBhbmQgZWxlY3RyaWNpdHkgYmlsbHMgYXMgd2VsbCBhcyBsYW5kbGluZSAvIGludGVybmV0IGJpbGxzIGFyZSBjb25zaWRlcmVkIGFzIHByb29mIG9mIGFkZHJlc3MuXG4vLyAgICAgICAgICAgPGxpPkFueSBvZmZpY2lhbCBkb2N1bWVudCBmcm9tIHRoZSB1c2VyJ3MgYmFua2luZyBpbnN0aXR1dGlvbiBvbiB3aGljaCB0aGUgSUJBTiBjb2RlIGFuZCB0aGUgQklDIC8gU1dJRlQgY29kZSBhcHBlYXIuXG4vLyAgICAgICAgICAgRmFpbHVyZSB0byBwcm92aWRlIG9uZSBvZiB0aGVzZSBzdXBwb3J0aW5nIGRvY3VtZW50cywgdGhlIHVzZXIgbXVzdCBpbmZvcm0gY3VzdG9tZXIgc2VydmljZS48L3VsPlxuLy8gICAgICAgICAgIDMuMyBBbGwge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIGFjY291bnRzIG1heSBiZSBzdWJqZWN0IHRvIGEgZ2VuZXJhbCBvciBzcGVjaWZpYyB2ZXJpZmljYXRpb24gcmVsYXRpbmcgdG8gdGhlIHBsYXllcidzIGFnZSwgaWRlbnRpdHksIG1lYW5zIG9mIHBheW1lbnQgYXMgd2VsbCBhcyBjb21wbGlhbmNlIHdpdGggb3VyIHRlcm1zIG9mIHVzZS4gSW4gdGhlIGV2ZW50IHRoYXQgdGhlIHBsYXllciBkb2VzIG5vdCBtZWV0IHRoZSB0aW1lIGxpbWl0cyByZXF1aXJlZCB0byB2ZXJpZnkgdGhlIGFjY291bnQsIHt7e3NpdGVOYW1lfX19IENhc2lubyByZXNlcnZlcyB0aGUgcmlnaHQgdG8gdGVtcG9yYXJpbHkgc3VzcGVuZCBhY2Nlc3MgdG8gdGhlIGdhbWVzLjxicj5cbi8vICAgICAgICAgICAzLjQgSWYgeW91IHdpc2ggdG8gdmVyaWZ5IHlvdXIgYWNjb3VudCBiZWZvcmUgcmVxdWVzdGluZyBhIHdpdGhkcmF3YWwsIHlvdSBzaG91bGQgY29udGFjdCBvdXIgbGl2ZSBzdXBwb3J0LiBEb2N1bWVudHMgY2FuIGJlIGVtYWlsZWQgdG8gdmVyaWZpY2F0aW9uc0B7e3tzaXRlVXJsfX19IG9yIHRocm91Z2ggbGl2ZSBjaGF0Ljxicj5cbi8vICAgICAgICAgICAzLjUgT25jZSB5b3UgcmVjZWl2ZSBhbiBlbWFpbCBmcm9tIG91ciBLWUMgdGVhbSAoS25vdyBZb3VyIEN1c3RvbWVycyksIHBsZWFzZSBiZSBzdXJlIHRvIHVwbG9hZCBhbGwgcmVxdWVzdGVkIGRvY3VtZW50cyB3aXRoaW4gdGhlIGFsbG90dGVkIHRpbWUgZm9sbG93aW5nIHRoZSBpbnN0cnVjdGlvbnMuIEVhY2ggbGluayBhbGxvd3MgdGhlIGRvd25sb2FkIG9mIGEgc2luZ2xlIGRvY3VtZW50Ljxicj5cbi8vICAgICAgICAgICAzLjYgVGhlIGluZm9ybWF0aW9uIG9uIHRoZSBkb2N1bWVudHMgc3VibWl0dGVkIG11c3QgY29ycmVzcG9uZCB0byB0aGUgaW5mb3JtYXRpb24gcHJvdmlkZWQgYnkgdGhlIHBsYXllciB3aGVuIGNyZWF0aW5nIGhpcyB7e3tzaXRlTmFtZX19fSBDYXNpbm8gYWNjb3VudC4gVGhlIHBsYXllciBhZ3JlZXMgdG8gaW5mb3JtIGN1c3RvbWVyIHNlcnZpY2Ugb2YgYW55IGNoYW5nZSBpbiB0aGUgc2l0dWF0aW9uLCBpbiBvcmRlciB0byBrZWVwIGhpcyBhY2NvdW50IHVwIHRvIGRhdGUgYW5kIHZlcmlmaWVkIGJ5IHByb3ZpZGluZyBzdXBwb3J0aW5nIGRvY3VtZW50cy48YnI+XG4vLyAgICAgICAgICAgMy43IFRoZSBwbGF5ZXIgd2lsbCB0YWtlIGNhcmUgdG8gc3VibWl0IGEgY29tcGxldGUgZmlsZSBhbmQgaW5jbHVkaW5nIGF1dGhlbnRpYywgbGVnaWJsZSBhbmQgZ29vZCBxdWFsaXR5IGRvY3VtZW50cywgc28gdGhhdCB0aGUgcHJvY2Vzc2luZyB0aW1lcyBjYW4gYmUgcmVzcGVjdGVkLjxicj5cbi8vICAgICAgICAgICAzLjggVGhlIHByb2Nlc3NpbmcgdGltZSBmb3IgYWNjb3VudCB2ZXJpZmljYXRpb24gaXMgMSAob25lKSB3b3JraW5nIGRheSwgb25jZSBhbGwgdGhlIG5lY2Vzc2FyeSBzdXBwb3J0aW5nIGRvY3VtZW50cyBoYXZlIGJlZW4gcmVjZWl2ZWQuIEhvd2V2ZXIsIHRoZSBkZWxheSBtYXkgYmUgYWx0ZXJlZCBieSBhbiBleHRyYW9yZGluYXJ5IGFuZCB1bnVzdWFsIHNpdHVhdGlvbi48YnI+XG4vLyAgICAgICAgICAgMy45IFRoZSB2ZXJpZmljYXRpb24gb2YgeW91ciBkb2N1bWVudHMgaXMgY2FycmllZCBvdXQgYnkgb3VyIG9wZXJhdG9yIHRndCBHcm91cCBMdGQuIFNvIHlvdXIgZG9jdW1lbnRzIG1heSBoYXZlIGFscmVhZHkgYmVlbiByZWNlaXZlZCBhbmQgdmVyaWZpZWQgZnJvbSBhbm90aGVyIGNhc2lubyBvZiB0aGlzIG9wZXJhdG9yLjxicj48YnI+XG4vLyAgICAgICAgICAgPGgzPjQuIERlcG9zaXRzPC9oMz5cbi8vICAgICAgICAgICA0LjEgVGhlIG1pbmltdW0gZGVwb3NpdCBhbW91bnQgaXMgMTAgRVVSLCBJTlIgMTAwMCwgVVNEIDEwLCBKUFkgMTUwMCwgTlpEIDEwLCBBVUQgMTAsIFRSWSAyMDAsIENBRCAxMCwgTk9LIDEwMCwgUExOIDUwLCBIVUYgNDAwMCBhbmQgdGhlIG1heGltdW0gYW1vdW50IGlzIDI1MDAgRVVSLCBJTlIgMjAwMDAwLCBVU0QgMjUwMCwgSlBZIDM1MDAwMCwgTlpEIDI1MDAsIEFVRCAyNTAwLCBUUlkgNTAwMDAsIENBRCAyNTAwLCBOT0sgMjUwMDAsIFBMTiAxMDAwMCwgSFVGIDEwMDAwMDAgcGVyIHRyYW5zYWN0aW9uLjxicj5cbi8vICAgICAgICAgICA0LjIgV2hlbiBtYWtpbmcgYSBkZXBvc2l0LCB0aGUgcGxheWVyIGF1dGhvcml6ZXMge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIHRvIHVzZSBFbGVjdHJvbmljIFNlcnZpY2UgUHJvdmlkZXJzIChQU0UpIGFuZCAvIG9yIHRoaXJkIHBhcnR5IHBheW1lbnQgcHJvdmlkZXJzIGZvciB0aGUgcHJvY2Vzc2luZyBvZiB0aGUgdmFyaW91cyBmaW5hbmNpYWwgdHJhbnNhY3Rpb25zLCBoZSB0aGVyZWZvcmUgYWNjZXB0cyB0byBiZSBib3VuZCBkaXJlY3RseSB0byB0aGUgZ2VuZXJhbCBjb25kaXRpb25zIG9mIHVzZSBvZiBzYWlkIHBhcnRuZXJzLjxicj5cbi8vICAgICAgICAgICA0LjMgQnkgY2hvb3NpbmcgYSBkZXBvc2l0IG1ldGhvZCwgdGhlIHBsYXllciBhY2NlcHRzIHRoZSBjb25kaXRpb25zIGFuZCBhbGwgdGhlIGNvc3RzIHRoYXQgbWF5IGJlIGFwcGxpZWQgdG8gaGltIGJ5IGEgdGhpcmQgcGFydHksIHN1Y2ggYXMgaGlzIGJhbmtpbmcgZXN0YWJsaXNobWVudCAoY29udmVyc2lvbiBmZWVzLCBpbnRlcm5hdGlvbmFsIHRyYW5zYWN0aW9uIGZlZXMsIGV0Yy4pPGJyPlxuLy8gICAgICAgICAgIDQuNCBBbnkgZGVwb3NpdCBtZXRob2QgdXNlZCBtdXN0IGNvcnJlc3BvbmQgdG8gdGhlIGZpcnN0IGFuZCBsYXN0IG5hbWUgb2YgdGhlIHt7e3NpdGVOYW1lfX19IENhc2lubyBhY2NvdW50IGhvbGRlci48YnI+XG4vLyAgICAgICAgICAgNC41IFRoZSBsaXN0IG9mIGF2YWlsYWJsZSBwYXltZW50IG1ldGhvZHMgbWF5IGNoYW5nZSBhY2NvcmRpbmcgdG8gdGhlIHdpc2hlcyBvZiB0aGUgY29tcGFueSBhbmQgLyBvciBhY2NvcmRpbmcgdG8gdGhlIHBsYXllcidzIGdlb2dyYXBoaWNhbCBhcmVhLjxicj5cbi8vICAgICAgICAgICA0LjYgQnkgY2hvb3NpbmcgdG8gcGxheSBmb3IgbW9uZXkgb24gZ2FtZXMgb2YgY2hhbmNlLCB0aGUgdXNlciBhY2NlcHRzIHRoZSBwb3NzaWJsZSByaXNrIG9mIGxvc2luZy48YnI+XG4vLyAgICAgICAgICAgNC43IFN0YWtlcyBhbmQgZGVwb3NpdHMgbWFkZSBvbiB0aGUgc2l0ZSBtYXkgYmUgcmVmdW5kZWQgdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLiAoU2VlIDE1LiBSZWZ1bmRzKTxicj5cbi8vICAgICAgICAgICA0LjggRGVwb3NpdHMgYnkgY2hlY2ssIGNhc2ggb3Igd2lyZSB0cmFuc2ZlciBhcmUgbm90IHBlcm1pdHRlZCBvbiB0aGUgc2l0ZS48YnI+PGJyPlxuLy8gICAgICAgICAgIDxoMz41LiBXaXRoZHJhd2FsczwvaDM+XG4vLyAgICAgICAgICAgNS4xIEluIG9yZGVyIHRvIG1ha2UgYSB3aXRoZHJhd2FsLCB0aGUgdXNlcidzIGFjY291bnQgbXVzdCBiZSB2ZXJpZmllZCAoc2VlIDMuIFZlcmlmaWNhdGlvbnMpLjxicj5cbi8vICAgICAgICAgICA1LjIgVGhlIG1pbmltdW0gd2l0aGRyYXdhbCBhbW91bnQgaXMgMTAgRVVSLCBJTlIgMTAwMCwgVVNEIDEwLCBKUFkgMTUwMCwgTlpEIDEwLCBBVUQgMTAsIFRSWSAyMDAsIENBRCAxMCwgTk9LIDEwMCwgUExOIDUwLCBIVUYgNDAwMCwgdW5sZXNzIGV4cGxpY2l0bHkgc3RhdGVkIG90aGVyd2lzZSBpbiB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIHNwZWNpZmljIHByb21vdGlvbi48YnI+XG4vLyAgICAgICAgICAgNS4zIEEgZGVwb3NpdCBtdXN0IGJlIHdhZ2VyZWQgYXQgbGVhc3QgMSAob25jZSkgYmVmb3JlIHBhcnQgb3IgYWxsIG9mIHRoZSBiYWxhbmNlIGlzIHdpdGhkcmF3biwgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBzdGFuZGFyZHMgaW1wb3NlZCBvbiB1cyBpbiB0aGUgY29udGV4dCBvZiB0aGUgZmlnaHQgYWdhaW5zdCBtb25leSBsYXVuZGVyaW5nLjxicj5cbi8vICAgICAgICAgICA1LjQgVGhlIHdpdGhkcmF3YWwgbWVhbnMgYXJlIGxpbmtlZCB0byB0aGUgZGVwb3NpdCBtZXRob2RzIHVzZWQgZHVyaW5nIHRoZSBkZXBvc2l0cyBwcmV2aW91c2x5IG1hZGUuIElmIGEgcGF5bWVudCBtZXRob2QgZG9lcyBub3QgYWxsb3cgYSBwYXltZW50IHRvIHByb2NlZWQgc21vb3RobHksIHdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIGNob29zZSB0aGUgbWV0aG9kIG9mIHBheW1lbnQgZm9yIHRoZSB3aXRoZHJhd2FsLjxicj5cbi8vICAgICAgICAgICA1LjUgSW4gc3BlY2lhbCBjYXNlcywgZ2VuZXJhbGx5IHRvIHByZXZlbnQgbW9uZXkgbGF1bmRlcmluZywgd2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gcGF5IHRoZSB3aXRoZHJhd2FsIGJ5IGEgcGF5b3V0IG1ldGhvZCBvZiBvdXIgY2hvaWNlIGFuZCBldmVuIGlmIGl0IGlzIG5vdCB0aGUgb25lIGluaXRpYWxseSByZXF1aXJlZC4gV2l0aGRyYXdhbCByZXF1ZXN0cyBvbiBub24tcmVmdW5kYWJsZSBjcmVkaXQgY2FyZHMgd2lsbCBiZSBpc3N1ZWQgdG8gYW4gZWxlY3Ryb25pYyB3YWxsZXQgb2YgeW91ciBjaG9pY2Ugb3IgYnkgYmFuayB0cmFuc2Zlci4gSW4gdGhpcyBjYXNlLCBhbGwgcHJvY2Vzc2luZyBjb3N0cyBhcmUgdGhlIHJlc3BvbnNpYmlsaXR5IG9mIHRoZSBwbGF5ZXIuPGJyPlxuLy8gICAgICAgICAgIDUuNiBUaGUgbWF4aW11bSB3aXRoZHJhd2FsIGFtb3VudCBmb3IgYSBwbGF5ZXIgaXMgMjUwMCBFVVIsIElOUiAyMDAwMDAsIFVTRCAyNTAwLCBKUFkgMzUwMDAwLCBOWkQgMjUwMCwgQVVEIDI1MDAsIFRSWSA1MDAwMCwgQ0FEIDI1MDAsIE5PSyAyNTAwMCwgUExOIDEwMDAwLCBIVUYgMTAwMDAwMCBwZXIgNy1kYXkgcGVyaW9kLCB1bnRpbCBmdWxsIHBheW1lbnQgYW5kIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkIGluIHRoZSBQcm9tb3Rpb25hbCBUZXJtcyBhbmQgQ29uZGl0aW9ucywgb3IgZXhjZXB0IGF0IG91ciBkaXNjcmV0aW9uLCBpbiB0aGUgY2FzZSBvZiBwbGF5ZXJzIGhhdmluZyBhIHByaXZpbGVnZWQgc3RhdHVzIGZvciBleGFtcGxlLjxicj5cbi8vICAgICAgICAgICA1LjcgV2l0aGRyYXdhbCByZXF1ZXN0cyBtYXkgYmUgY2FuY2VsZWQgYXQgYW55IHRpbWUgYnkgdGhlIHBsYXllciBhcyBsb25nIGFzIHRoZXkgaGF2ZSBub3QgYmVlbiBwcm9jZXNzZWQgYnkgdGhlIGZpbmFuY2lhbCBkZXBhcnRtZW50LlxuLy8gICAgICAgICAgIDUuOCBJZiB0aGUgd2l0aGRyYXdhbCBhbW91bnQgaXMgbGltaXRlZCAoaW4gdGhlIGNhc2Ugb2YgcGxheWVyIHdpbnMgd2l0aCB0aGUgZnJlZSByZWdpc3RyYXRpb24gYm9udXMgZm9yIGV4YW1wbGUpLCBhbnkgYmFsYW5jZSBleGNlZWRpbmcgdGhlIG1heGltdW0gYXV0aG9yaXplZCBhbW91bnQgd2lsbCBiZSBjYW5jZWxlZCBhbmQgZGVsZXRlZCBmcm9tIHRoZSBhY2NvdW50Ljxicj5cbi8vICAgICAgICAgICA1LjkgQW55IHdpdGhkcmF3YWwgcmVxdWVzdCBtYWRlIGNhbmNlbHMgdGhlIGN1cnJlbnQgYWN0aXZlIGJvbnVzZXMsIGluY2x1ZGluZyBub24tYWN0aXZhdGVkIGZyZWUgc3BpbnMgKHNlZSBHZW5lcmFsIEJvbnVzIENvbmRpdGlvbnMpLjxicj5cbi8vICAgICAgICAgICA1LjEwIEluIHRoZSBldmVudCB0aGF0IG9uZSBvciBtb3JlIGRlcG9zaXRzIGFyZSBjYW5jZWxlZCBvciByZWZ1c2VkIGJ5IHRoZSBwYXltZW50IHByb3ZpZGVyLCB3ZSByZXNlcnZlIHRoZSByaWdodCB0byByZWZ1c2Ugb3Igd2l0aGhvbGQgYW55IGFzc29jaWF0ZWQgYm9udXMgYW1vdW50IG9yIHdpbm5pbmdzLjxicj5cbi8vICAgICAgICAgICA1LjExIFRoZSBwcm9jZXNzaW5nIHRpbWUgZm9yIHdpdGhkcmF3YWwgcmVxdWVzdHMgaXMgMyAodGhyZWUpIHdvcmtpbmcgZGF5cyBvbmNlIGFsbCBhY2NvdW50IHZlcmlmaWNhdGlvbiBkb2N1bWVudHMgaGF2ZSBiZWVuIHJlY2VpdmVkLCBhbmFseXplZCBhbmQgY29uZmlybWVkIGFuZCBpbiB0aGUgZXZlbnQgdGhhdCBubyBmdXJ0aGVyIHZlcmlmaWNhdGlvbiBpcyByZXF1aXJlZC48YnI+XG4vLyAgICAgICAgICAgNS4xMiBBbnkgd2l0aGRyYXdhbCByZXF1ZXN0IHdpbGwgYmUgc3ViamVjdCB0byB2ZXJpZmljYXRpb24gYnkgb3VyIGZyYXVkIGRlcGFydG1lbnQsIHdoaWNoIHJlc2VydmVzIHRoZSByaWdodCB0byBjYW5jZWwgYWxsIG9yIHBhcnQgb2YgdGhlIGZ1bmRzIGluIHRoZSBldmVudCBvZiBub24tY29tcGxpYW5jZSB3aXRoIG91ciBwcmVzZW50IFRlcm1zIGFuZCBDb25kaXRpb25zLiBUaGUgcGxheWVyIHdpbGwgdGhlbiBiZSBpbmZvcm1lZCBieSBlbWFpbCAoc2VlIDQuIEFjY291bnQgQ2xvc3VyZXMgYW5zIEhvbGRpbmdzIG9mIEZ1bmRzKS48YnI+XG4vLyAgICAgICAgICAgNS4xMyBJdCBpcyB1cCB0byB0aGUgcGxheWVyIHRvIGlucXVpcmUgYWJvdXQgdGhlIHRheGVzIGFuZCBkdXRpZXMgYXBwbGljYWJsZSB0byBoaXMgd2lubmluZ3MgaW4gaGlzIGp1cmlzZGljdGlvbi48YnI+PGJyPlxuLy8gICAgICAgICAgIDxoMz42LiBCb251c2VzIGFuZCBQcm9tb3Rpb25zPC9oMz5cbi8vICAgICAgICAgICA2LjEgVG8gdmlldyB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgZm9yIHVzaW5nIGJvbnVzZXMsIHBsZWFzZSBjbGljayA8YSBocmVmPVwie3t7c2l0ZVVybH19fS9lbi9ib251cy10ZXJtc1wiPjxzcGFuIGNsYXNzPVwiczFcIj5oZXJlPC9zcGFuPjwvYT48YnI+XG4vLyAgICAgICAgICAgPGgzPjcuIEN1c3RvbWVyIFNlcnZpY2U8L2gzPlxuLy8gICAgICAgICAgIDcuMSBDdXN0b21lciBzZXJ2aWNlIGlzIGF2YWlsYWJsZSAyNC83IHRocm91Z2ggbGl2ZSBjaGF0Ljxicj5cbi8vICAgICAgICAgICA3LjIgVGhlIHVzZXIgdW5kZXJ0YWtlcyB0byB1c2UgY29ycmVjdCBhbmQgcmVzcGVjdGZ1bCBsYW5ndWFnZSBpbiBoaXMgaW50ZXJhY3Rpb25zIHdpdGggdGhlIG1lbWJlcnMgb2YgdGhlIHt7e3NpdGVOYW1lfX19IENhc2lubyB0ZWFtLiBBbnkgYWJ1c2Ugb3IgYmVoYXZpb3IgZGVlbWVkIGluYXBwcm9wcmlhdGUgbWF5IGxlYWQgdG8gc3VzcGVuc2lvbnMgb3IgdGhlIGZpbmFsIGNsb3N1cmUgb2YgdGhlIGFjY291bnQuPGJyPjxicj5cbi8vICAgICAgICAgICA8aDM+OC4gVGhlIEZpZ2h0IGFnYWluc3QgTW9uZXkgTGF1bmRlcmluZyBhbmQgdGhlIGZpbmFuY2luZyBvZiBUZXJyb3Jpc20uPC9oMz5cbi8vICAgICAgICAgICA4LjEgV2UgYXJlIHN1YmplY3QgdG8gdGhlIGxhd3MgYWdhaW5zdCBtb25leSBsYXVuZGVyaW5nIGFuZCB0ZXJyb3Jpc3QgZmluYW5jaW5nIGFuZCBpbiB0aGlzIHJlZ2FyZCBtdXN0IGV4ZXJjaXNlIGR1ZSBkaWxpZ2VuY2Ugb24gYWxsIGFjY291bnRzLiBJbmZvcm1hdGlvbiBwcm92aWRlZCB0byB1cywgZm9yIGFjY291bnQgdmVyaWZpY2F0aW9uIG9yIG90aGVyIHNpdHVhdGlvbnMgc2V0IGZvcnRoIGluIG91ciB0ZXJtcyBhbmQgY29uZGl0aW9ucywgd2lsbCBiZSB0cmVhdGVkIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgcHJpdmFjeSBwb2xpY3kgYW5kIG1heSBub3QgYmUgdXNlZCBmb3IgYW55IG90aGVyIHB1cnBvc2UuPGJyPlxuLy8gICAgICAgICAgIDguMiBUaGUgcGxheWVyIGhlcmVieSBhY2tub3dsZWRnZXMgYW5kIGFncmVlcyB0aGF0IHdlIHdpbGwgdXNlIHRoZSBpbmZvcm1hdGlvbiBwcm92aWRlZCBmb3Igb3VyIGR1ZSBkaWxpZ2VuY2Ugb2JsaWdhdGlvbnMsIHRvIGNhcnJ5IG91dCBwdWJsaWMgcmVzZWFyY2ggYW5kIHRvIGNhcnJ5IG91dCBjaGVja3MgdG8gdmVyaWZ5IHRoZSB2ZXJhY2l0eSBvZiB0aGUgZGF0YSBwcm92aWRlZCB0byB1cy4gPGJyPlxuLy8gICAgICAgICAgIDguMyBXaGlsZSB3ZSBhcmUgYXBwbHlpbmcgb3VyIGR1ZSBkaWxpZ2VuY2UgbWVhc3VyZXMsIHRoZSBwbGF5ZXIgbWF5IGJlIGFsbG93ZWQgdG8gY29udGludWUgdG8gdXNlIHRoZWlyIGFjY291bnQuIEhvd2V2ZXIsIGhlIHdpbGwgbm90IGJlIGFsbG93ZWQgdG8gbWFrZSB3aXRoZHJhd2FscyBmcm9tIHRoaXMgYWNjb3VudCB1bnRpbCBvdXIgdmVyaWZpY2F0aW9uIHByb2NlZHVyZXMgYXJlIGNvbXBsZXRlZC48YnI+XG4vLyAgICAgICAgICAgOC40IFdoZXJlIHdlIGFyZSB1bmFibGUgdG8gZnVsZmlsbCBvdXIgZHVlIGRpbGlnZW5jZSBvYmxpZ2F0aW9ucyBiZWNhdXNlIHdlIGhhdmUgbm90IHJlY2VpdmVkIHRoZSByZXF1aXJlZCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwbGF5ZXIgb3IgYXJlIHVuYWJsZSB0byB2ZXJpZnkgdGhlaXIgaWRlbnRpdHksIG5vIGFjdGl2aXR5IGNhbiBiZSB1bmRlcnRha2VuIGZyb20gdGhlIGFjY291bnQgYW5kIHRoZSBhY2NvdW50IHdpbGwgYmUgYmxvY2tlZCBhbmQgLyBvciBjbG9zZWQuIEluIHN1Y2ggZXZlbnQsIHdlIHdpbGwgcmV0dXJuIGFueSBkZXBvc2l0IGZ1bmRzIHByZXNlbnQgaW4gdGhlIGFjY291bnQgYXQgdGhlIHRpbWUgb2YgYmxvY2tpbmcgYW5kIC8gb3IgY2xvc2luZywgdW5sZXNzIGl0IGlzIG5lY2Vzc2FyeSBmb3IgdXMgdG8gZGVsYXkgb3Igd2l0aGhvbGQgcGF5bWVudCBvZiBhbGwgb3IgcGFydCBvZiB0aGUgcGxheWVyJ3MgZnVuZHMgdG8gY29tcGx5IHdpdGggb3VyIGxlZ2FsIG9ibGlnYXRpb25zLjxicj5cbi8vICAgICAgICAgICA4LjUgVGhlIHVzZXIgYWdyZWVzIHRvIGNvb3BlcmF0ZSBhbmQgcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFuZCAvIG9yIHN1cHBvcnRpbmcgZG9jdW1lbnRzIG5lY2Vzc2FyeSBmb3IgdGhlIGZ1bGZpbGxtZW50IG9mIG91ciBvYmxpZ2F0aW9ucy4gQW55IGNvbW11bmljYXRpb24gZm9yIHRoZSBwcm92aXNpb24gb2YgaW5mb3JtYXRpb24gLyBkb2N1bWVudGF0aW9uIHNob3VsZCBub3QgYmUgY29uc2lkZXJlZCBhcyBhIGZpbmFsIGNvbW11bmljYXRpb24gaW4gdGhpcyByZWdhcmQuPGJyPlxuLy8gICAgICAgICAgIDguNiBJZiB3ZSBsZWFybiBvciBzdXNwZWN0IHRoYXQgdGhlIGluZm9ybWF0aW9uIHByb3ZpZGVkIGJ5IHRoZSBwbGF5ZXIgaXMgbWF0ZXJpYWxseSBmYWxzZSwgd2Ugd2lsbCBjYW5jZWwgdGhlIHJlZ2lzdHJhdGlvbiBhbmQgdGFrZSBhbnkgb3RoZXIgYWN0aW9uIHdlIG1heSByZXF1aXJlIHVuZGVyIHRoZSBsYXcuIFdlIHdpbGwgbm90IHBheSBhbnkgd2lubmluZ3MgaW4gc3VjaCBjaXJjdW1zdGFuY2VzLjxicj48YnI+XG4vLyAgICAgICAgICAgPGgzPjkuIFJlc3BvbnNpYmxlIEdhbWluZzwvaDM+XG4vLyAgICAgICAgICAgOS4xIFRoZSBwbGF5ZXIgY2FuIGNob29zZSwgYXQgaGlzIGRpc2NyZXRpb24sIGEgZGVwb3NpdCBsaW1pdCBieSBzZXR0aW5nIHRoZSBhbW91bnQgYW5kIHRoZSBkZXNpcmVkIHBlcmlvZC4gT25jZSByZWdpc3RlcmVkIGFuZCB3aGVuIHNhaWQgbGltaXQgaXMgcmVhY2hlZCwgdGhlIHBsYXllciB3aWxsIG5vIGxvbmdlciBiZSBhYmxlIHRvIGRlcG9zaXQgdW50aWwgaGlzIGxpbWl0IGlzIHJlc2V0LiBJdCBzaG91bGQgYmUgbm90ZWQgdGhhdCB0aGUgZGVwb3NpdHMgYWxyZWFkeSBtYWRlIG92ZXIgdGhlIHBlcmlvZCB3aWxsIGJlIHRha2VuIGludG8gYWNjb3VudCBpbiB0aGUgY2FsY3VsYXRpb24gb2YgdGhlIGxpbWl0Ljxicj5cbi8vICAgICAgICAgICA5LjIgVGhlIHBsYXllciBtYXksIGF0IGhpcyBkaXNjcmV0aW9uLCBjaG9vc2UgdG8gbGltaXQgaGlzIGFiaWxpdHkgdG8gYWNjZXNzIGhpcyBwbGF5ZXIgc3BhY2UgZm9yIGEgZGV0ZXJtaW5lZCBwZXJpb2QgdXNpbmcgdGhlIOKAnEFjY291bnQgZnJlZXpl4oCdIG9wdGlvbiBmcm9tIGhpcyBjYXNoaWVyLiBGb2xsb3dpbmcgdGhpcyBsaW1pdGF0aW9uLCB0aGUgYWN0aXZlIGZ1bmRzIHdpbGwgdGhlbiBiZSBmcm96ZW4gYW5kIG5vIHRyYW5zYWN0aW9uIGNhbiBiZSBjYXJyaWVkIG91dCBvbiBoaXMgYWNjb3VudC4gVGhlIHBsYXllciB3aWxsIGJlIGFibGUgdG8gZW5qb3kgaGlzIGZ1bmRzIGF0IHRoZSBlbmQgb2YgdGhlIGRlZmluZWQgZnJlZXplIHBlcmlvZC48YnI+XG4vLyAgICAgICAgICAgOS4zIEFsbCByZXN0cmljdGlvbnMgYW5kIGV4Y2x1c2lvbnMgd2lsbCB0YWtlIGVmZmVjdCBpbW1lZGlhdGVseSBhZnRlciBjb25maXJtaW5nIHRoZSBzZXR0aW5ncyBpbiB0aGUgQ2FzaGllciAvLyBMaW1pdCBzZWN0aW9uIG9mIHRoZSBwbGF5ZXIgYWNjb3VudC48YnI+XG4vLyAgICAgICAgICAgOS40IEFueSByZXF1ZXN0IGZvciBhY2NvdW50IGZyZWV6aW5nIGFuZCAvIG9yIGV4Y2x1c2lvbiB3aWxsIG9ubHkgYmUgdmFsaWQgZm9yIHRoZSBicmFuZCBvbiB3aGljaCB0aGUgcGxheWVyIGhhcyByZXF1ZXN0ZWQgaXQgKHt7e3NpdGVVcmx9fX0pIGFuZCBkb2VzIG5vdCBpbmNsdWRlIG90aGVyIHNpdGVzIHRoYXQgd2Ugb3BlcmF0ZS48YnI+XG4vLyAgICAgICAgICAgOS41IE91ciBzdGFmZiBoYXZlIG5vIGNvbnRyb2wgb3ZlciBjaGVja291dCBvcHRpb25zLCB3aGljaCBtZWFucyB0aGV5IGNhbiBvbmx5IGJlIGNoYW5nZWQgb3IgcmVtb3ZlZCBieSB0aGUgcGxheWVyLiBBbnkgaW5jcmVhc2Ugb3IgcmVtb3ZhbCBvZiB0aGUgbGltaXQgd2lsbCBiZSBlZmZlY3RpdmUgd2l0aGluIDI0IGhvdXJzIGV4YWN0bHkuPGJyPjxicj5cbi8vICAgICAgICAgICA8aDM+MTAuIERhdGEgUHJvdGVjdGlvbjwvaDM+XG4vLyAgICAgICAgICAgMTAuMSBXZSBoZXJlYnkgd2FycmFudCB0aGF0IHdlIGFkb3B0IGFkZXF1YXRlIHRlY2huaWNhbCBhbmQgb3JnYW5pemF0aW9uYWwgbWVhc3VyZXMgdG8gZW5zdXJlIHRoZSBzZWN1cml0eSBvZiBvdXIgc3lzdGVtcyBhbmQgdGhlIGludGVncml0eSBvZiBkYXRhIHRyYW5zbWl0dGVkIG9uIG91ciB3ZWJzaXRlLjxicj5cbi8vICAgICAgICAgICAxMC4yIFRoZSBwbGF5ZXIgaGVyZWJ5IGFja25vd2xlZGdlcyB0aGF0IGhpcyBwZXJzb25hbCBkYXRhIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoZSBsaWNlbnNlZSBvciBieSBhbnkgb3RoZXIgcGVyc29uLCBjb21wYW55IG9yIGJ1c2luZXNzIGFzc29jaWF0ZWQgaW4gYW55IHdheSBvciBvdGhlcndpc2UgZW5nYWdlZCBieSB0aGUgbGljZW5zZWUgdG8gcHJvdmlkZSBoaW0gd2l0aCBzZXJ2aWNlcyBhcyBzdGlwdWxhdGVkIGluIHRoZXNlIGNvbmRpdGlvbnMuIGdlbmVyYWwuIFdlIHdpbGwgcHJvY2VzcyBwbGF5ZXJzJyBwZXJzb25hbCBkYXRhIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgcHJpdmFjeSBwb2xpY3kgb2YgdGhpcyB3ZWJzaXRlLjxicj5cbi8vICAgICAgICAgICAxMC4zIFJlZ2lzdHJhdGlvbiBvZiBwZXJzb25hbCBkYXRhXG4vLyAgICAgICAgICAge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIGd1YXJhbnRlZXMgdGhhdCB0aGUgcGVyc29uYWwgZGF0YSBvZiBvdXIgcGxheWVycyBpcyBhbHdheXMgb2J0YWluZWQgbGF3ZnVsbHkgYW5kIHRyZWF0ZWQgZmFpcmx5LCBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIHJpZ2h0cyBvZiB0aGUgcGxheWVyIGNvbmNlcm5lZCBhbmQgb3VyIHJlZ3VsYXRvcnkgb2JsaWdhdGlvbnMgb3IgcmVjb21tZW5kYXRpb25zLiBUaGlzIGFsbG93cyB1cyB0byBndWFyYW50ZWUgc2FmZSBhbmQgdXNlci1mcmllbmRseSBzYWlsaW5nIGNvbmRpdGlvbnMgZm9yIG91ciBwbGF5ZXJzLiBUaGlzIGluZm9ybWF0aW9uIG1heSBiZSBkaXNjbG9zZWQgdG8gbGF3IGVuZm9yY2VtZW50IGF1dGhvcml0aWVzIG9yIG91ciBkYXRhIHByb2Nlc3Npbmcgc2VydmljZSBwcm92aWRlcnMgZm9yIHJldmlldyB3aGVyZSBpdCBjb21wbGllcyB3aXRoIG91ciBsZWdhbGx5IGJpbmRpbmcgZHV0aWVzIG9yIG9ibGlnYXRpb25zLiB7e3tzaXRlTmFtZX19fSBDYXNpbm8gaXMgY29tbWl0dGVkIHRvIHByb3RlY3RpbmcgeW91ciBwcml2YWN5IGFuZCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLjxicj48YnI+XG4vLyAgICAgICAgICAgMTAuNCBSZXRlbnRpb24gb2YgcGVyc29uYWwgZGF0YTxicj48YnI+XG4vLyAgICAgICAgICAgVGhlIHBlcnNvbmFsIGluZm9ybWF0aW9uIHdlIGNvbGxlY3QgaXMga2VwdCBzZWN1cmUgaW4gYWNjb3JkYW5jZSB3aXRoIGxlZ2FsIGRhdGEgc2VjdXJpdHkgYW5kIHJldGVudGlvbiByZXF1aXJlbWVudHMuIFVuZGVyIGFwcGxpY2FibGUgbGF3cyBhbmQgcmVndWxhdGlvbnMsIHt7e3NpdGVOYW1lfX19IENhc2lubyBpcyByZXF1aXJlZCB0byBtYWludGFpbiBhIHNlY3VyZSBvbmxpbmUgbGlzdCBvZiBhbGwgcmVnaXN0ZXJlZCBwbGF5ZXJzLiBJbiBhZGRpdGlvbiwge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIGlzIG9ibGlnZWQgdG8ga2VlcCBhbGwgcGVyc29uYWwgZGF0YSBzdWJtaXR0ZWQgZHVyaW5nIHJlZ2lzdHJhdGlvbiBhbmQgYWxsIGRhdGEgdHJhbnNtaXR0ZWQgZHVyaW5nIHRoZSBwZXJpb2Qgb2Ygb3BlcmF0aW9uIG9mIGEgcGxheWVyIGFjY291bnQgZm9yIGF0IGxlYXN0IGZpdmUgeWVhcnMgZnJvbSB0aGUgbGFzdCB0cmFuc2FjdGlvbiBvZiB0aGUgcGxheWVyIG9yIHRoZSBjbG9zaW5nIG9mIHRoZSBhY2NvdW50LiB7e3tzaXRlTmFtZX19fSBDYXNpbm8gd2lsbCByZXRhaW4gdGhpcyBpbmZvcm1hdGlvbiBmb3IgdGhlIHBlcmlvZCByZXF1aXJlZCBieSBnYW1ibGluZyBsYXdzIGFuZCByZWd1bGF0aW9ucy5cbi8vICAgICAgICAgICBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcGxlYXNlIHJlZmVyIHRvIHRoZSBQcml2YWN5IFBvbGljeS48YnI+PGJyPlxuLy8gICAgICAgICAgIDEwLjUgQ29va2llc1xuLy8gICAgICAgICAgIFRoZSB7e3tzaXRlTmFtZX19fSBDYXNpbm8gc2l0ZSByZXF1aXJlcyB0aGUgc3RvcmFnZSBvZiBzbWFsbCBkYXRhIHNlbnQgYnkgdGhlIHdlYiBzZXJ2ZXIgdG8gdGhlIGJyb3dzZXIsIGNvbW1vbmx5IGtub3duIGFzIOKAnENvb2tpZXPigJ0uXG4vLyAgICAgICAgICAgVGhlIHVzZSBvZiBhIGNvb2tpZSBpcyBpbiBubyB3YXkgbGlua2VkIHRvIHRoZSBwbGF5ZXIncyBwZXJzb25hbCBpbmZvcm1hdGlvbiwgYnV0IHdpdGggdGhlIGFpbSBvZiBvZmZlcmluZyBhbiBldmVyIG1vcmUgb3B0aW1pemVkIGFuZCBwZXJzb25hbGl6ZWQgZ2FtaW5nIGV4cGVyaWVuY2UuXG4vLyAgICAgICAgICAgUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlIHdlYnNpdGUge3t7c2l0ZVVybH19fSBjYW5ub3QgYmUgdXNlZCBjb3JyZWN0bHkgaWYgY29va2llcyBhcmUgZGlzYWJsZWQuPGJyPjxicj5cbi8vICAgICAgICAgICAxMC42IENvbW11bmljYXRpb25cbi8vICAgICAgICAgICB7e3tzaXRlTmFtZX19fSBDYXNpbm8gY2FuIGNvbW11bmljYXRlIHRvIGl0cyByZWdpc3RlcmVkIG1lbWJlcnMsIGluZm9ybWF0aXZlIGFuZCAvIG9yIHByb21vdGlvbmFsIGNvbnRlbnQgYnkgbWVhbnMgb2YgbmV3c2xldHRlcnMgYW5kIC8gb3IgU01TLlxuLy8gICAgICAgICAgIFRoZSB1c2VyIGNhbiB1bnN1YnNjcmliZSBmcm9tIG5ld3NsZXR0ZXJzIGF0IGFueSB0aW1lIGJ5IGNsaWNraW5nIG9uIHRoZSBcIlVuc3Vic2NyaWJlXCIgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIGUtbWFpbCBvciBieSByZXBseWluZyB0aGUgd29yZCBcIlNUT1BcIiB0byB0aGUgU01TIHJlY2VpdmVkLjxicj48YnI+XG4vLyAgICAgICAgICAgPGgzPjExLiBDb21wbGFpbnRzPC9oMz5cbi8vICAgICAgICAgICAxMS4xIFRoZSBwbGF5ZXIgY2FuIGNvbnRhY3Qgb3VyIGN1c3RvbWVyIHNlcnZpY2UgYXQge3t7c3VwcG9ydEVtYWlsQWRkcmVzc319fSBhbmQgYWNjb3JkaW5nIHRvIHRoZSBpbnN0cnVjdGlvbnMgbG9jYXRlZCBvbiB0aGUgd2Vic2l0ZSB0byBpbmZvcm0gdXMgb2YgYW55IGNvbXBsYWludCBhbmQgLyBvciBtYWxmdW5jdGlvbiBjb25jZXJuaW5nIG91ciBzZXJ2aWNlcyAocmVnaXN0cmF0aW9uIGZvcm0sIHRyYW5zYWN0aW9ucywgc3Rha2VzLCB3aW5uaW5ncywgZXRjLiAuKS48YnI+XG4vLyAgICAgICAgICAgMTEuMiBJbiB0aGUgZXZlbnQgb2YgYSB3YWdlciBub3QgYmVpbmcgcmVjb3JkZWQgb24gdGltZSBieSB0aGUgc2VydmVycywgdGhlIGNhc2lubyBjYW5ub3QgYmUgaGVsZCByZXNwb25zaWJsZSBvciBsaWFibGUgZm9yIHRoZSByZXN1bHQgb2YgdGhlIHJvdW5kLiBMaWtld2lzZSwgYW55IGFtb3VudCBlbmdhZ2VkIGNhbm5vdCBiZSB0aGUgc3ViamVjdCBvZiBhIHJlcXVlc3QgZm9yIHJlaW1idXJzZW1lbnQuPGJyPlxuLy8gICAgICAgICAgIDExLjMgQ29tcGxhaW50cyBhcmUgaGFuZGxlZCBieSB0aGUgc3VwcG9ydCB0ZWFtIGFuZCBmb3J3YXJkZWQgdG8gbWFuYWdlbWVudCBpZiBuZWNlc3NhcnkuIEFueSBjb21wbGFpbnRzIGNvbnNpZGVyZWQgcmVhc29uYWJsZSB3aWxsIGJlIGRlYWx0IHdpdGggd2l0aGluIDI0IGhvdXJzLjxicj5cbi8vICAgICAgICAgICAxMS40IFRoZSBwbGF5ZXIgaGFzIHRoZSByaWdodCB0byBzdWJtaXQgdW5yZXNvbHZlZCBkaXNwdXRlcyB0byBBbnRpbGxlcGhvbmUgU2VydmljZXMgTi5WLiB0aHJvdWdoIGNvbXBsYWludHNAeGNtLmNvbS48YnI+XG4vLyAgICAgICAgICAgMTEuNSBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGUgQXV0aG9yaXR5LCBwbGVhc2UgdmlzaXQgd3d3LmN1cmFjYW8tZWdhbWluZy5jb208YnI+XG4vLyAgICAgICAgICAgMTEuNiBUaGUgQ29tcGFueSBjYW5ub3QgYmUgaGVsZCByZXNwb25zaWJsZSBmb3IgYW55IHVuaW50ZW50aW9uYWwgaW50ZXJydXB0aW9uIG9mIG9wZXJhdGlvbiBvZiB0aGUgU2l0ZSBmb2xsb3dpbmcgdW5mb3Jlc2VlbiBjaXJjdW1zdGFuY2VzIG9yIGZvciByZWFzb25zIGJleW9uZCBpdHMgY29udHJvbCwgaW4gcGFydGljdWxhciwgYnV0IG5vdCBleGhhdXN0aXZlbHk6IG5hdHVyYWwgZGlzYXN0ZXJzLCBzdWNoIGFzIGVhcnRocXVha2VzLCBmbG9vZHMsIGZpcmVzLCBlYXJ0aHF1YWtlcywgaHVycmljYW5lcywgdHJvcGljYWwgc3Rvcm1zOyB3YXIsIGluc3VycmVjdGlvbiwgYXJzb24sIGVtYmFyZ29lcywgYWN0cyBvZiBjaXZpbCBvciBtaWxpdGFyeSBhdXRob3JpdGllcywgb3IgdGVycm9yaXNtOyBmaWJlciBvcHRpYyBjdXRzLCBzdHJpa2VzLCBvciBzaG9ydGFnZXMgb2YgdHJhbnNwb3J0YXRpb24sIGluZnJhc3RydWN0dXJlLCBmdWVsLCBlbmVyZ3ksIGxhYm9yIG9yIG1hdGVyaWFsczsgdGhlIGJyZWFrZG93biBvZiBpbmZyYXN0cnVjdHVyZSBwcm92aWRpbmcgdGVsZWNvbW11bmljYXRpb25zIGFuZCBpbmZvcm1hdGlvbiBzZXJ2aWNlczsgaGFja2luZy48YnI+PGJyPlxuLy8gICAgICAgICAgIDxoMz4xMi4gR292ZXJuaW5nIExhdzwvaDM+XG4vLyAgICAgICAgICAgMTIuMSBUaGVzZSBnZW5lcmFsIGNvbmRpdGlvbnMgYXJlIGdvdmVybmVkIGJ5IHRoZSBsYXdzIG9mIEN1cmHDp2FvLjxicj5cbi8vICAgICAgICAgICAxMi4yIFRoZSBwYXJ0aWVzIGFncmVlIHRoYXQgYW55IGRpc3B1dGUsIGNvbnRyb3ZlcnN5IG9yIGNsYWltIGFyaXNpbmcgb3V0IG9mIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGVzZSB0ZXJtcyBhbmQgY29uZGl0aW9ucywgb3IgdGhlaXIgYnJlYWNoLCB0ZXJtaW5hdGlvbiBvciBpbnZhbGlkaXR5LCB3aWxsIGJlIHN1YmplY3QgdG8gdGhlIGV4Y2x1c2l2ZSBqdXJpc2RpY3Rpb24gb2YgQ3VyYcOnYW8uPGJyPlxuLy8gICAgICAgICAgIDEyLjMgVGhlIHJlZ3VsYXRpb25zIG9mIHRoZSBnYW1lcyBhbmQgdGhlIHNlcnZpY2VzIG9mIHRoZSBwbGF0Zm9ybSBhcmUgZ292ZXJuZWQgYnkgdGhlIGxhd3Mgb2YgQ3VyYcOnYW8uPGJyPlxuLy8gICAgICAgICAgIDEyLjQgWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIGNvbXBseWluZyB3aXRoIGFueSBsYXcgYXBwbGljYWJsZSBpbiB5b3VyIGNvdW50cnkgb2YgcmVzaWRlbmNlIGFuZCBpZiB5b3UgYXJlIGF1dGhvcml6ZWQgYnkgdGhlIGxhdyBhcHBsaWNhYmxlIGluIHlvdXIgY291bnRyeSBvZiByZXNpZGVuY2UgdG8gcGxheSwgeW91IG1heSBvcGVuIGFuIGFjY291bnQgd2l0aCB1cy4gV2UgYWNjZXB0IG5vIGxpYWJpbGl0eSBmb3IgYW55IHZpb2xhdGlvbiBvciB2aW9sYXRpb24gb2YgYXBwbGljYWJsZSBsYXcuIE90aGVyd2lzZSwgd2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gcmVqZWN0IHlvdXIgcmVxdWVzdCB0byBvcGVuIGFuIGFjY291bnQgb3IgdG8gZGVhY3RpdmF0ZSB5b3VyIGFjY291bnQuIEluIGFkZGl0aW9uLCBwbGF5ZXJzIGRlY2xhcmUgdGhhdCB0aGV5IGFyZSBub3QgcmVzaWRlbnRzIG9mIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCBpdHMgZGVwZW5kZW5jaWVzIG9yIG9mIEN1cmFjYW8uIHt7e3NpdGVOYW1lfX19IENhc2lubyBhbHNvIHByb2hpYml0cyBwZXJzb25zIGxvY2F0ZWQgb3IgcmVzaWRpbmcgaW4gY2VydGFpbiBqdXJpc2RpY3Rpb25zLjxicj48YnI+XG4vLyAgICAgICAgICAgPGgzPjEzLiBHYW1lIFJlc3RyaWN0aW9uczwvaDM+XG4vLyAgICAgICAgICAgMTMuMSBUaGUgZm9sbG93aW5nIHRlcnJpdG9yaWVzIGFyZSByZXN0cmljdGVkIGJ5IHRoZSBnYW1lIHByb3ZpZGVyczpcbi8vICAgICAgICAgICBBZmdoYW5pc3RhbiwgQWxiYW5pYSwgQWxnZXJpYSwgQW5nb2xhLCBBdXN0cmFsaWEsIEJhaGFtYXMsIEJvdHN3YW5hLCBCZWxnaXVtLCBCdWxnYXJpYSwgQ3VyYWNhbywgQ29sb21iaWEsIENyb2F0aWEsIEN6ZWNoIFJlcHVibGljLCBEZW5tYXJrLCBFc3RvbmlhLCBFY3VhZG9yLCBFdGhpb3BpYSwgRnJhbmNlLCBHaGFuYSwgR3V5YW5hLCBIb25nIEtvbmcsIEl0YWx5LCBJcmFuLCBJcmFxLCBJc3JhZWwsIEt1d2FpdCwgTGF0dmlhLCBMaXRodWFuaWEsIE1leGljbywgTmFtaWJpYSwgTmljYXJhZ3VhLCBOZXRoZXJsYW5kcywgTm9ydGggS29yZWEsIFBha2lzdGFuLCBQYW5hbWEsIFBoaWxpcHBpbmVzLCBQb3J0dWdhbCwgUm9tYW5pYSwgU2luZ2Fwb3JlLCBTcGFpbiwgU3VkYW4sIFN5cmlhLCBUYWl3YW4sIFRyaW5pZGFkIGFuZCBUb2JhZ28sIFR1bmlzaWEsIFVnYW5kYSwgVW5pdGVkIEtpbmdkb20sIFVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYSwgWWVtZW4sIFppbWJhYndlLjxicj48YnI+XG4vLyAgICAgICAgICAgPGgzPjE0LiBBY2NvdW50IENsb3N1cmVzIGFuZCBIb2xkaW5ncyBvZiBGdW5kcy48L2gzPlxuLy8gICAgICAgICAgIDE0LjEgVGhlIHBsYXllciBjYW4gcmVxdWVzdCB0aGUgY2xvc3VyZSBvZiBoaXMgYWNjb3VudCBhdCBhbnkgdGltZSBieSBjb250YWN0aW5nIGN1c3RvbWVyIHN1cHBvcnQgdmlhIHRoZSBjaGF0IG9yIGJ5IHNlbmRpbmcgYW4gZW1haWwgdG8ge3t7c3VwcG9ydEVtYWlsQWRkcmVzc319fS4gQW55IHJlcXVlc3Qgd2lsbCBiZSBwcm9jZXNzZWQgd2l0aGluIDI0IHdvcmtpbmcgaG91cnMsIHRvIHRoZSBleHRlbnQgcG9zc2libGUuPGJyPlxuLy8gICAgICAgICAgIDE0LjIge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIHJlc2VydmVzIHRoZSByaWdodCwgYXQgaXRzIHNvbGUgZGlzY3JldGlvbiwgdG8gcGVybWFuZW50bHkgZGVhY3RpdmF0ZSB5b3VyIGFjY291bnQgYXQgYW55IHRpbWUgYW5kIGZvciBhbnkgcmVhc29uLiBJbiB0aGlzIGNhc2UsIHRoZSBwbGF5ZXIgaW1tZWRpYXRlbHkgbG9zZXMgYWxsIGhpcyByaWdodHMgdG8gdGhlIGJvbnVzZXMgYW5kIC8gb3IgYW55IG90aGVyIHByb21vdGlvbmFsIG9mZmVyIHdoaWNoIHdvdWxkIGhhdmUgYmVlbiBncmFudGVkIHRvIGhpbS48YnI+XG4vLyAgICAgICAgICAgMTQuMyBXaGVuIGFuIGFjY291bnQgaXMgY2xvc2VkIGFuZCB3aGF0ZXZlciB0aGUgb3JpZ2luLCBpZiB3ZSBub3RpY2UgY2hlYXRpbmcsIGlycmVndWxhciBnYW1ibGluZywgY29sbHVzaW9uLCBmcmF1ZCAvIGNyaW1pbmFsIGFjdGl2aXR5LCBvciBhIHZpb2xhdGlvbiBvZiB0aGUgdGVybXMgb2YgdGhlc2UgR2VuZXJhbCBDb25kaXRpb25zLCB3ZSB3aWxsIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHdpdGhob2xkIGZ1bmRzIHN0aWxsIGluIHRoZSBiYWxhbmNlLiBJZiBpdCBpcyBub3QgcG9zc2libGUgdG8gcGF5IHRoZSBlbnRpcmUgYmFsYW5jZSBhdCBvbmNlLCBkdWUgdG8gcGF5bWVudCBsaW1pdHMgb3Igb3RoZXIgcmVhc29ucywgdGhlIGFjY291bnQgd2lsbCByZW1haW4gb3BlbiB1bnRpbCB0aGUgZnVsbCBhbW91bnQgaGFzIGJlZW4gd2l0aGRyYXduIGJ5IHRoZSBwbGF5ZXIuPGJyPlxuLy8gICAgICAgICAgIDE0LjQgQW55IGFjdHVhbCBhY3RpdmUgYmFsYW5jZSBpbiB5b3VyIGFjY291bnQgd2hlbiBpdCBpcyBjbG9zZWQsIHdpbGwgYmUgY3JlZGl0ZWQgdG8gYSBwYXltZW50IG1ldGhvZCByZWNvcmRlZCBvbiB5b3VyIGFjY291bnQsIGFuZCBvZiBvdXIgY2hvaWNlLCB1bmxlc3Mgd2Ugd2l0aGhvbGQgdGhlc2Ugc3VtcyBmb3IgdGhlIHJlYXNvbnMgbWVudGlvbmVkIGFib3ZlLjxicj5cbi8vICAgICAgICAgICAxNC41IEFsc28sIHRoZSBDYXNpbm8gcmVzZXJ2ZXMgdGhlIHJpZ2h0LCBhdCBpdHMgc29sZSBkaXNjcmV0aW9uLCB0byBjYW5jZWwgYW55IHdpbm5pbmdzIGFuZCBjb25maXNjYXRlIGFueSBiYWxhbmNlIGluIGFueSBvZiB0aGUgZm9sbG93aW5nIGNpcmN1bXN0YW5jZXM6PGJyPjx1bD5cbi8vICAgICAgICAgICBhLiBJZiB5b3UgaGF2ZSBtb3JlIHRoYW4gb25lIGFjdGl2ZSBhY2NvdW50IHdpdGgge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vOzxicj5cbi8vICAgICAgICAgICBiLiBJZiB0aGUgbmFtZSBhcHBlYXJpbmcgb24geW91ciBwbGF5ZXIgYWNjb3VudCBkb2VzIG5vdCBkZXBvc2l0IHRoZSBuYW1lIGFwcGVhcmluZyBvbiB0aGUgcGF5bWVudCBvciB3aXRoZHJhd2FsIG1ldGhvZCB1c2VkIChpbmNsdWRpbmcgY3JlZGl0IGNhcmQgKHMpLCBlLXdhbGxldCwgbW9uZXkgdHJhbnNmZXJzLCBldGMuKTs8YnI+XG4vLyAgICAgICAgICAgYy4gSWYgeW91IHByb3ZpZGUgaW5jb3JyZWN0IG9yIG1pc2xlYWRpbmcgcmVnaXN0cmF0aW9uIG9yIHBsYXllciBwcm9maWxlIGluZm9ybWF0aW9uOzxicj5cbi8vICAgICAgICAgICBkLiBJZiB5b3UgYXJlIG5vdCBvZiBsZWdhbCBhZ2UgaW4gdGhlIHByb3ZpbmNlIC8gc3RhdGUgLyBjb3VudHJ5IGFuZCAvIG9yIGp1cmlzZGljdGlvbiB3aGVyZSB5b3UgcmVzaWRlOzxicj5cbi8vICAgICAgICAgICBlLiBJZiB5b3UgaGF2ZSBhdXRob3JpemVkIG9yIHBlcm1pdHRlZCAoaW50ZW50aW9uYWxseSBvciB1bmludGVudGlvbmFsbHkpIHNvbWVvbmUgZWxzZSB0byBhY2Nlc3Mgb3IgcGxheSBvbiB5b3VyIGFjY291bnQ7PGJyPlxuLy8gICAgICAgICAgIGYuIElmIHlvdSBoYXZlIG5vdCBwbGF5ZWQgaW5kaXZpZHVhbGx5IGZvciB5b3VyIG93biBwZXJzb25hbCBlbnRlcnRhaW5tZW50IChpLmUuIHlvdSBoYXZlIHBsYXllZCBpbiBhIHByb2Zlc3Npb25hbCBjYXBhY2l0eSwgd2l0aCB0aGUgaW50ZW50aW9uIG9mIGV4cGxvaXRpbmcgb3VyIGJvbnVzZXMgb3IgaW4gY29uY2VydCB3aXRoIG9uZSBvciBtb3JlIG90aGVyIHBsYXllcnMgaW4gYXMgcGFydCBvZiBhIGNsdWIsIGdyb3VwLCBldGMuKTs8YnI+XG4vLyAgICAgICAgICAgZy4gSWYgeW91IGhhdmUgcmVxdWVzdGVkIGEgcmVmdW5kIG9mIGFueSBvZiB0aGUgZGVwb3NpdHMgbWFkZSB3aXRoIHlvdXIgY3JlZGl0IGNhcmQgb3IgYW55IG90aGVyIGF2YWlsYWJsZSBwYXltZW50IG1ldGhvZCBhc3NvY2lhdGVkIHdpdGggeW91ciBhY2NvdW50IG9yIGlmIHlvdSBoYXZlIHRocmVhdGVuZWQgdG8gZG8gc287PGJyPlxuLy8gICAgICAgICAgIGguIElmIHlvdSBhcmUgZm91bmQgZ3VpbHR5IG9mIGNvbGx1c2lvbiwgY2hlYXRpbmcsIGNyaW1pbmFsIGFjdGl2aXR5IHN1Y2ggYXMgbW9uZXkgbGF1bmRlcmluZyBvciBmcmF1ZHVsZW50IGFjdGl2aXR5Ozxicj5cbi8vICAgICAgICAgICBpLiBJZiBpdCBpcyBlc3RhYmxpc2hlZCB0aGF0IHlvdSBoYXZlIGVtcGxveWVkIG9yIHVzZWQgYSBzeXN0ZW0gKGluY2x1ZGluZyB0aGUgZWxlbWVudHMgaGVyZWFmdGVyIGNpdGVkIGJ1dCBub3QgbGltaXRlZCB0byBtYWNoaW5lcywgY29tcHV0ZXJzLCBzb2Z0d2FyZSwgYWxnb3JpdGhtcyBvciBvdGhlciBhdXRvbWF0ZWQgXCJib3RcIiBzeXN0ZW1zKSBkZXNpZ25lZCBzcGVjaWZpY2FsbHkgdG8gZGVmZWF0IHt7e3NpdGVOYW1lfX19IENhc2lubywgaW5jcmVhc2UgaXRzIGNoYW5jZXMgb2Ygd2lubmluZyBvciB0aGF0IHlvdSBoYXZlIGFkb3B0ZWQgaGFiaXRzIGFuZCAvIG9yIGlycmVndWxhciBiZXR0aW5nIG9yIGJldHRpbmcgc3RyYXRlZ2llcy4gVGh1cywgYW55IHVzZSBvZiBhdXRvbWF0ZWQgcHJvZ3JhbXMgb3IgZGV2aWNlcyBidXQgYWxzbyBhbnkgZ2FtZSBtYW5pcHVsYXRpb24gc3VjaCBhcyB0aGUgdXNlIG9mIHRoZSBwcmFjdGljZSBvZiBNYXJ0aW5nYWxlLCB0aGUgUGFyb2xpIEJldHRpbmcgU3lzdGVtIG9yIHRoZSBCb251cyBIdW50IChub24tZXhoYXVzdGl2ZSBsaXN0KSBhcmUgbm90IGF1dGhvcml6ZWQuPGJyPlxuLy8gICAgICAgICAgIGouIElmIHlvdSBoYXZlIHVzZWQgdGhlIHNpdGUsIG9yIHlvdXIgYWNjb3VudCBpbiBhIG1hbGljaW91cyBtYW5uZXIuPGJyPlxuLy8gICAgICAgICAgIGsuIElmIHlvdSB1c2UgYW4gYW5vbWFseSB0byB5b3VyIGFkdmFudGFnZSBvZiB0aGUgZWxlbWVudHMgbWVudGlvbmVkIGJlbG93IGJ1dCBub3QgbGltaXRlZCB0byB0aGUgc3lzdGVtLCBiYWxhbmNlcywgYm9udXNlcywgZnJlZSBzcGlucy4gVGhlIHJlbGF0ZWQgd2lubmluZ3MgbWF5IGFsc28gYmUgZnJvemVuLCBhbmQgLyBvciBjb25maXNjYXRlZCBpbiBwYXJ0IG9yIGluIGZ1bGwuPGJyPlxuLy8gICAgICAgICAgIGwuIElmIHdlIGxlYXJuIHRoYXQgeW91IGhhdmUgcGxheWVkIGF0IGFub3RoZXIgb25saW5lIGNhc2lubyBpbiBhbnkgb2YgdGhlIGFib3ZlIGNpcmN1bXN0YW5jZXMuIDwvdWw+PGJyPlxuLy8gICAgICAgICAgIDxoMz4xNS4gUmVmdW5kczwvaDM+XG4vLyAgICAgICAgICAgMTUuMSBSZWZ1bmRzIGFyZSBpbiBhZGRpdGlvbiB0byBhIGN1c3RvbWVyJ3MgcmlnaHRzIGFzIGEgY29uc3VtZXIgdW5kZXIgYXBwbGljYWJsZSBjb25zdW1lciBwcm90ZWN0aW9uIGxhd3MgYW5kIHJlZ3VsYXRpb25zLjxicj5cbi8vICAgICAgICAgICAxNS4yIEFsbCBzdW1zIGRlcG9zaXRlZCBieSBwbGF5ZXJzIGFyZSBrZXB0IGluIHRoZSBwbGF5ZXIgYWNjb3VudC4gUGxheWVyIGZ1bmRzIGFyZSBrZXB0IGluIGJhbmsgYWNjb3VudHMgc2VwYXJhdGUgZnJvbSBwcm9mZXNzaW9uYWwgYWNjb3VudHMuPGJyPlxuLy8gICAgICAgICAgIDE1LjMgQWZ0ZXIgZmlsaW5nIGEgZGlzcHV0ZSByZWdhcmRpbmcgYSBkZXBvc2l0IHJlbGF0ZWQgaXNzdWUsIHRoZSBwbGF5ZXIgbWF5IHJlcXVlc3QgYSByZWZ1bmQuPGJyPlxuLy8gICAgICAgICAgIDE1LjQgVG8gcmVxdWVzdCBhIHJlZnVuZCwgdGhlIHBsYXllciBtdXN0IGNvbnRhY3QgY3VzdG9tZXIgc2VydmljZSwgY2xlYXJseSBkZXNjcmliZSB0aGUgcHJvYmxlbSBhbmQgc3BlY2lmeSB0aGUgYW1vdW50IG9mIHRoZSByZWZ1bmQgcmVxdWVzdGVkLjxicj5cbi8vICAgICAgICAgICAxNS41IFRoaXMgcmVxdWVzdCB3aWxsIGJlIHNlbnQgdG8gdGhlIGNvbXBldGVudCBzZXJ2aWNlLCBkZXBlbmRpbmcgb24gdGhlIG5hdHVyZSBvZiB0aGUgcmVxdWVzdC48YnI+XG4vLyAgICAgICAgICAgMTUuNiBUaGUgcmVpbWJ1cnNlbWVudCByZXF1ZXN0IGNhbiBiZSBleGFtaW5lZCBhdCBhbnkgdGltZSwgZGVwZW5kaW5nIG9uIHRoZSBuYXR1cmUgb2YgdGhlIHJlcXVlc3QuPGJyPlxuLy8gICAgICAgICAgIDE1LjcgVGhlIHJlZnVuZCByZXF1ZXN0IHdpbGwgYmUgZGlsaWdlbnRseSBpbnZlc3RpZ2F0ZWQgYW5kLCBpZiBuZWNlc3NhcnksIGluZm9ybWF0aW9uIHdpbGwgYmUgb2J0YWluZWQgZnJvbSB0aGUgcGxheWVyJ3MgYWNjb3VudCwgZ2FtZSBwcm92aWRlcnMsIFBTUHMsIGV0Yy4gdW50aWwgYSBwcmVjaXNlIGFuZCBzYXRpc2ZhY3RvcnkgY29uY2x1c2lvbiBjYW4gYmUgcmVhY2hlZC48YnI+XG4vLyAgICAgICAgICAgMTUuOCBJbiB0aGUgZXZlbnQgb2YgYSByZWltYnVyc2VtZW50IGFncmVlbWVudCwgdGhlIGFtb3VudCB0cmFuc2ZlcnJlZCB3aWxsIGJlIGEgdHJ1ZSByZWZsZWN0aW9uIG9mIHdoYXQgaXMgb3dlZCB0byB0aGUgcGxheWVyIGFuZCBwcm9wb3J0aW9uYWwgdG8gdGhlIHBsYXllcidzIGV4aXN0aW5nIGJhbGFuY2UgYW5kIHdpbm5pbmdzLjxicj5cbi8vICAgICAgICAgICAxNS45IFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHdpdGhob2xkIGFueSByZWZ1bmQgdW50aWwgdGhlIGlkZW50aXR5IG9mIHRoZSBhY2NvdW50IGhvbGRlciBpcyBlc3RhYmxpc2hlZCB0byBvdXIgc2F0aXNmYWN0aW9uLjxicj5cbi8vICAgICAgICAgICAxNS4xMCBXaGVyZSBwb3NzaWJsZSwgcmVmdW5kcyB3aWxsIGJlIG1hZGUgdXNpbmcgdGhlIHNhbWUgbWV0aG9kIHVzZWQgZm9yIGRlcG9zaXRzLiBJbiB0aGUgZXZlbnQgdGhhdCB0aGUgcGF5bWVudCBtZXRob2QgdXNlZCBmb3IgdGhlIGRlcG9zaXQgZG9lcyBub3Qgc3VwcG9ydCB3aXRoZHJhd2FscywgdGhlIHJlZnVuZCB3aWxsIGJlIHByb2Nlc3NlZCBvbmx5IGJ5IGJhbmsgdHJhbnNmZXIuIEluIGV4Y2VwdGlvbmFsIGNpcmN1bXN0YW5jZXMsIHdoZW4gdGhlIHBheW1lbnQgbWV0aG9kIHVzZWQgZm9yIGRlcG9zaXQgc3VwcG9ydHMgd2l0aGRyYXdhbHMgYW5kIHdlIGNhbm5vdCBzZW5kIGEgd2lyZSB0cmFuc2ZlciBkdWUgdG8gcmVzdHJpY3RlZCBhcmVhcywgdGhlIHJlZnVuZCBjYW4gYmUgbWFkZSB0byBhIGNyeXB0byB3YWxsZXQuPGJyPlxuLy8gICAgICAgICAgIDE1LjExIFJlaW1idXJzZW1lbnQgd2lsbCBiZSBtYWRlIGluIGZ1bGwsIHRvIHRoZSBleHRlbnQgcG9zc2libGUsIGFuZCBub3Qgb3ZlciBhIHBlcmlvZCBvZiB0aW1lLjxicj5cbi8vICAgICAgICAgICAxNS4xMiBJbiB0aGUgZXZlbnQgdGhhdCB0aGUgcmVxdWVzdCBpcyBub3QgYXBwcm92ZWQsIHRoZSBwbGF5ZXIgd2lsbCBiZSBpbmZvcm1lZCBvZiB0aGUgcmVhc29ucyB3aHkgaGlzIHJlcXVlc3Qgd2FzIHJlZnVzZWQuPGJyPlxuLy8gICAgICAgICAgIDE1LjEzIElmIHRoZSBwbGF5ZXIgaXMgc3RpbGwgbm90IHNhdGlzZmllZCwgdGhleSBzaG91bGQgc2VuZCBhbiBlbWFpbCB0byBjdXN0b21lciBzdXBwb3J0IGFuZCBhIG1hbmFnZXIgd2lsbCBjb250YWN0IHRoZW0gZGlyZWN0bHkgdG8gcmVzb2x2ZSB0aGUgc2l0dWF0aW9uLjxicj5cbi8vICAgICAgICAgICAxNS4xNCBJZiB0aGUgc2l0dWF0aW9uIHN0aWxsIGNhbm5vdCBiZSByZXNvbHZlZCwgdGhlIHBsYXllciBzaG91bGQgcmVmZXIgdG8gb3VyIGNvbXBsYWludHMgcHJvY2VkdXJlIHBvbGljeS4gKHNlZS4gMTEuIENvbXBsYWludHMpLjxicj5cbi8vICAgICAgICAgICAxNS4xNSBUbyB0aGUgZXh0ZW50IHBvc3NpYmxlLCB0aGUgdGltZSAvIHBlcmlvZCBiZXR3ZWVuIGEgcmVmdW5kIHJlcXVlc3QgYW5kIHJlc29sdXRpb24sIGFwcHJvdmluZyBvciBub3QgYXBwcm92aW5nIHRoZSByZWZ1bmQsIHdpbGwgbm90IGV4Y2VlZCA3MiBob3VycyBmcm9tIHJlY2VpcHQgb2YgdGhlIHJlcXVlc3QuPGJyPjxicj5cbi8vICAgICAgICAgICBMYXN0IFVwZGF0ZWQ6IDh0aCBNYXJjaCAyMDIzPGJyPlxuLy8gICAgICAgICAgIFYgMC4xXG4vLyAgICAgICAgICAgYFxuLy8gICAgICAgICB9KSxcbi8vICAgICAgICAgaXNfYWN0aXZlOiB0cnVlLFxuLy8gICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLFxuLy8gICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICB0aXRsZTogSlNPTi5zdHJpbmdpZnkoeyBFTjogJ1Jlc3BvbnNpYmxlIEdhbWJsaW5nJyB9KSxcbi8vICAgICAgICAgc2x1ZzogJ3Jlc3BvbnNpYmxlLWdhbWJsaW5nJyxcbi8vICAgICAgICAgY2F0ZWdvcnkgOiBDTVNfQ0FURUdPUklFUy5MRUdBTF9DT01QTElBTkNFLFxuLy8gICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgRU46IGBcbi8vICAgICAgICAgICA8aDM+UkVTUE9OU0lCTEUgR0FNSU5HPC9oMz5cbi8vICAgICAgICAgICA8cD5QbGF5aW5nIGF0IHt7e3NpdGVOYW1lfX19IENhc2luby4gc2hvdWxkIGJlIGZ1biBhbmQgZW5qb3lhYmxlLiBPdXIgbWlzc2lvbiBpcyB0byBlbnRlcnRhaW4geW91IGJ1dCB3ZSB1bmRlcnN0YW5kIHRoZSBwb3RlbnRpYWwgcmlza3Mgb2YgcHJvYmxlbSBnYW1ibGluZy4gV2UgaGF2ZSBwcm92aWRlZCBiZWxvdyBzb21lIHdheXMgdG8gbWFrZSBzdXJlIHlvdXIgZ2FtYmxpbmcgaXMgd2l0aGluIGNvbnRyb2xsYWJsZSBsaW1pdHMgYWxvbmcgd2l0aCBzdWdnZXN0aW5nIHNvbWUgcGxhY2VzIHRvIGdvIHRvIGlmIHlvdSBuZWVkIGhlbHAuPC9wPlxuLy8gICAgICAgICAgIDxwPiZuYnNwOzwvcD5cbi8vICAgICAgICAgICA8cD5IZXJlIGFyZSBzb21lIHRpcHM6PC9wPlxuLy8gICAgICAgICAgIDx1bD5cbi8vICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgPHA+Sm9icyBhcmUgZm9yIG1ha2luZyBtb25leSwgYnV0IGdhbWJsaW5nIGlzIGZvciBlbnRlcnRhaW5tZW50LiBUcmVhdCBpdCBhcyBhbiBlbnRlcnRhaW5tZW50IGV4cGVuc2UsIGxpa2UgYSB0aWNrZXQgdG8gdGhlIGNpbmVtYSwgcmF0aGVyIHRoYW4gYSB3YXkgdG8gbWFrZSBtb25leS48L3A+XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgPHA+T25seSBnYW1ibGUgd2l0aCBtb25leSB5b3UgY2FuIGFmZm9yZCB0byBsb3NlLjwvcD5cbi8vICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICA8cD5Lbm93IHlvdXIgbGltaXRzIGFuZCBiZSBjbGVhciBhYm91dCB0aGVtIGJlZm9yZSB5b3Ugc3RhcnQgYmV0dGluZy48L3A+XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgPHA+VGFrZSBhIGJyZWFrLiBHYW1ibGluZyBjb250aW51b3VzbHkgd2l0aG91dCB0YWtpbmcgYSBicmVhayB3aWxsIGltcGFjdCB5b3VyIGp1ZGdlbWVudC48L3A+XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgPHA+RG9uJnJzcXVvO3QgZ2FtYmxlIHdoZW4geW91JnJzcXVvO3JlIHVwc2V0IG9yIGRlcHJlc3NlZC4gVGFsayB0byBtYXRlcyBvciBmYW1pbHkgb3IgZ2V0IGluIHRvdWNoIHdpdGggYSBIZWxwIE9yZ2FuaXphdGlvbi48L3A+XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgPHA+RG8gb3RoZXIgc3R1ZmYuIFNvbWV0aW1lcyBsZXNzIGlzIG1vcmUsIHNvIG1ha2UgZ2FtYmxpbmcgYSBwYXJ0IG9mIGEgd2VsbC1iYWxhbmNlZCBsaWZlc3R5bGUuPC9wPlxuLy8gICAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgIDxwPkRvbiZyc3F1bzt0IGdvIGNoYXNpbmcgbG9zc2VzLiBTZXQgeW91ciBsaW1pdHMsIHN0YXkgaW4gY29udHJvbC48L3A+XG4vLyAgICAgICAgICAgPC9saT5cbi8vICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICAgIDxwPiZuYnNwOzwvcD5cbi8vICAgICAgICAgICA8cD5LTk9XIFlPVVIgTElNSVRTPC9wPlxuLy8gICAgICAgICAgIDxwPlNpbmNlIGF0IHt7e3NpdGVOYW1lfX19IENhc2lubyB3ZSBiZWxpZXZlIHRoYXQgeW91ciBhYmlsaXR5IHRvIHBsYXkgc2FmZWx5IGlzIHZlcnkgaW1wb3J0YW50LCB3ZSBoYXZlIHRvb2xzIHRoYXQgYXJlIHRoZXJlIGZvciB5b3UgdG8gdXNlIGlmIHlvdSBmZWVsIHRoZSBuZWVkIHRvIGhhdmUgYSBicmVhay48L3A+XG4vLyAgICAgICAgICAgPHA+SW4gdGhlIExpbWl0cyBzZWN0aW9uIG9mIHlvdXIgYWNjb3VudCB5b3Ugd2lsbCBmaW5kOjwvcD5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPkRlcG9zaXQgTGltaXRzPC9zdHJvbmc+PC9wPlxuLy8gICAgICAgICAgIDxwPlRoaXMgd2lsbCBsaW1pdCB0aGUgYW1vdW50IHlvdSBjYW4gZGVwb3NpdCBkdXJpbmcgYSBjZXJ0YWluIHBlcmlvZC4gT25jZSB5b3UgaGF2ZSByZWFjaGVkIHRoaXMgc3VtIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIG1ha2UgYW55IG5ldyBkZXBvc2l0cyB1bnRpbCB5b3VyIGxpbWl0IGlzIHJlc2V0LjwvcD5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPldhZ2VyIExpbWl0czwvc3Ryb25nPjwvcD5cbi8vICAgICAgICAgICA8cD5UaGlzIHdpbGwgbGltaXQgdGhlIHRvdGFsIGFtb3VudCB5b3UgY2FuIGJldCBkdXJpbmcgYSBjZXJ0YWluIHBlcmlvZC4gV2hlbiB5b3UgaGF2ZSByZWFjaGVkIHRoZXNlIHN1bXMsIHlvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHBsYWNlIGFueSBuZXcgYmV0cyB1bnRpbCB5b3VyIGxpbWl0IGlzIHJlc2V0LjwvcD5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPkxvc3MgTGltaXRzPC9zdHJvbmc+PC9wPlxuLy8gICAgICAgICAgIDxwPlRoaXMgbGltaXQgd2lsbCBwcmV2ZW50IHlvdSBmcm9tIGxvc2luZyBtb3JlIHRoYW4geW91IGFyZSB3aWxsaW5nIHRvIGxvc2UuICh3aW5uaW5ncyBhcmUgbm90IGluY2x1ZGVkIGluIHRoZSBjYWxjdWxhdGlvbikuIE9uY2UgeW91IHJlYWNoIHRoZSBsb3NzIGxpbWl0IHRoZXkgd2lsbCBiZSB1bmFibGUgdG8gbG9zZSBiZXlvbmQgdGhlIHNldCBsaW1pdC48L3A+XG4vLyAgICAgICAgICAgPHA+PHN0cm9uZz5TZXNzaW9uIExpbWl0czwvc3Ryb25nPjwvcD5cbi8vICAgICAgICAgICA8cD5JdCZyc3F1bztzIGltcG9ydGFudCB0aGF0IHlvdSBrZWVwIHRyYWNrIG9mIHRoZSBhbW91bnQgb2YgdGltZSB5b3Ugc3BlbmQgZ2FtYmxpbmcuIFdlIHJlY29tbWVuZCB5b3UgdGFrZSBub3RlIG9mIHRoZSB0aW1lIHlvdSBzdGFydCBnYW1ibGluZyBzZXQgU2Vzc2lvbiBMaW1pdHMgYW5kIGtlZXAgYW4gZXllIG9uIHRoZSBjbG9jayB0byBtYWtlIHN1cmUgdGhhdCB5b3UgYXJlbiZyc3F1bzt0IHNwZW5kaW5nIG1vcmUgdGltZSB0aGFuIHlvdSBzaG91bGQgYmUuIFdlIGFsc28gc3Ryb25nbHkgYWR2aXNlIHlvdSB0byBrZWVwIHlvdXIgZGV2aWNlIGNsb2NrIGVuYWJsZWQgd2hpbHN0IGdhbWJsaW5nIHNvIHlvdSBjYW4gZWFzaWx5IHJlZmVyIHRvIGl0LjwvcD5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPlRha2UgYSBCcmVhazwvc3Ryb25nPjwvcD5cbi8vICAgICAgICAgICA8cD5Zb3UgbWF5IGZlZWwgaW4gY29udHJvbCBidXQgd291bGQgbGlrZSBhIGJyZWFrIHRvIGNvbnNpZGVyIHlvdXIgZ2FtYmxpbmcsIG9yIG1heWJlIHlvdSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIGJ1c3kgdGltZSBhbmQgZG9uJnJzcXVvO3Qgd2FudCB0byBzcGVuZCB0aW1lIG9yIGVuZXJneSBvbiBnYW1ibGluZy4gSWYgdGhpcyBpcyB0aGUgY2FzZSwgdGFraW5nIGEgYnJlYWsgbWF5IGhlbHAgeW91LjwvcD5cbi8vICAgICAgICAgICA8cD5UYWtlIGEgQnJlYWsgY2FuIGJlIGFwcGxpZWQgdG8geW91ciBhY2NvdW50IGZyb20gMjQgaG91cnMgdXAgdG8gYSBtYXhpbXVtIG9mIDMwIGRheXMgRHVyaW5nIHRoaXMgcGVyaW9kLCB5b3Ugd2lsbCBiZSByZXN0cmljdGVkIGZyb20gYWNjZXNzaW5nIHlvdXIge3t7c2l0ZU5hbWV9fX0gQ2FzaW5vIGFjY291bnQgYW5kIHdlIHdpbGwgc3RvcCBhbnkgY29udGFjdCBvciBtYXJrZXRpbmcgb2ZmZXJzLjwvcD5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPlNlbGYtRXhjbHVzaW9uPC9zdHJvbmc+PC9wPlxuLy8gICAgICAgICAgIDxwPlNob3VsZCB5b3UgYmUgdW5hYmxlIHRvIGNvbnRyb2wgeW91ciBnYW1ibGluZyBhbmQgZGVjaWRlIHRvIG1ha2UgYSBtdWNoIGxvbmdlciBicmVhayBvciBldmVuIHBlcm1hbmVudCwgdGhlbiBpdCBpcyBwb3NzaWJsZSB0byBzZWxmLWV4Y2x1ZGUuIENob29zaW5nIHRvIHNlbGYtZXhjbHVkZSB3aWxsIG1lYW4gdGhhdCBpdCB3aWxsIG5vdCBiZSBwb3NzaWJsZSB0byByZW9wZW4geW91ciBhY2NvdW50IG9uY2UgaW4gZWZmZWN0IGZvciBwZXJpb2RzIHJhbmdpbmcgZnJvbSBzaXggbW9udGhzIHRvIDEgeWVhciBvciBldmVuIFBlcm1hbmVudCBieSBjbGlja2luZyZuYnNwOzxhIGhyZWY9XCJ7e3tzaXRlVXJsfX19L2VuL2FjY291bnQvbGltaXRzXCI+aGVyZTwvYT4uJm5ic3A7SW4gb3JkZXIgdG8gcmVxdWVzdCBhIGxvbmdlciBzZWxmLWV4Y2x1c2lvbiBwbGVhc2UgY29udGFjdCB1cyB2aWEgbGl2ZSBjaGF0IG9yIGVtYWlsJm5ic3A7e3t7c3VwcG9ydEVtYWlsQWRkcmVzc319fS48L3A+XG4vLyAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuLy8gICAgICAgICAgIDxwPjxzdHJvbmc+U0VMRiBBU1NFU1NNRU5UIFRFU1Q8L3N0cm9uZz48L3A+XG4vLyAgICAgICAgICAgPHA+SWYgeW91IGFyZSBub3Qgc3VyZSBhYm91dCB5b3VyIGdhbWJsaW5nIGFjdGl2aXR5IHBsZWFzZSBmZWVsIGZyZWUgdG8gY29uZHVjdCB0aGUgR2FtQ2FyZSBTZWxmLUFzc2Vzc21lbnQgVGVzdCBieSBjbGlja2luZyZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy5nYW1jYXJlLm9yZy51ay9zZWxmLWhlbHAvc2VsZi1hc3Nlc3NtZW50LXRvb2wvXCI+aGVyZTwvYT48L3A+XG4vLyAgICAgICAgICAgPHA+VGhlIGFzc2Vzc21lbnQgY29uc2lzdHMgb2Ygc3RhdGVtZW50cyB0byBldmFsdWF0ZSBhbmQgZ2l2ZSBhIHNjb3JlIG9uIGEgc2NhbGUgb2YgMS0xMCBhY2NvcmRpbmcgdG8gaG93IG11Y2ggdGhleSBhcHBseSB0byB5b3UuIFRoZSByZXN1bHQgd2lsbCBwcm92aWRlIHlvdSB3aXRoIGEgYnJlYWtkb3duIG9mIGhvdyBnYW1ibGluZyBpcyBhZmZlY3RpbmcgeW91ciBsaWZlIGFuZCB3aWxsIGdpdmUgeW91IHBlcnNvbmFsaXNlZCByZWNvbW1lbmRhdGlvbnMgZm9yIHlvdXIgbmV4dCBzdGVwcy48L3A+XG4vLyAgICAgICAgICAgPHA+Jm5ic3A7PC9wPlxuLy8gICAgICAgICAgIDxwPjxzdHJvbmc+UFJPRkVTU0lPTkFMIFNVUFBPUlQ8L3N0cm9uZz48L3A+XG4vLyAgICAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmdhbWJsZXJzYW5vbnltb3VzLm9yZy51ay9cIj5HYW1ibGVycyBBbm9ueW1vdXM8L2E+PC9wPlxuLy8gICAgICAgICAgIDxwPmlzIGEgZmVsbG93c2hpcCBvZiBtZW4gYW5kIHdvbWVuIHdobyBzaGFyZSB0aGVpciBleHBlcmllbmNlLCBzdHJlbmd0aCBhbmQgaG9wZSB3aXRoIGVhY2ggb3RoZXIgdGhhdCB0aGV5IG1heSBzb2x2ZSB0aGVpciBjb21tb24gcHJvYmxlbSBhbmQgaGVscCBvdGhlcnMgdG8gZG8gdGhlIHNhbWUuIFRoZXkgb2ZmZXIgdmFyaW91cyBhaWRzIGZvciB0aGUgY29tcHVsc2l2ZSBnYW1ibGVyIGluY2x1ZGluZyBhIGZvcnVtLCBhIGNoYXQgcm9vbSwgbGl0ZXJhdHVyZSBhbmQgbW9zdCBpbXBvcnRhbnRseSBhIG1lZXRpbmcgZmluZGVyLjwvcD5cblxuLy8gICAgICAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL3d3dy5nYW1jYXJlLm9yZy51ay9cIj5HYW1DYXJlPC9hPjwvcD5cbi8vICAgICAgICAgICA8cD5Gb3VuZGVkIGluIDE5OTcsIEdhbUNhcmUgaXMgdGhlIGxlYWRpbmcgcHJvdmlkZXIgb2YgaW5mb3JtYXRpb24sIGFkdmljZSBhbmQgc3VwcG9ydCBmb3IgYW55b25lIGFmZmVjdGVkIGJ5IHByb2JsZW0gZ2FtYmxpbmcuIFRoZXkgb3BlcmF0ZSB0aGUgTmF0aW9uYWwgR2FtYmxpbmcgSGVscGxpbmUsIHByb3ZpZGUgdHJlYXRtZW50IGZvciBwcm9ibGVtIGdhbWJsZXJzIGFuZCB0aGVpciBmYW1pbGllcywgY3JlYXRlIGF3YXJlbmVzcyBhYm91dCByZXNwb25zaWJsZSBnYW1ibGluZyBhbmQgdHJlYXRtZW50LCBhbmQgZW5jb3VyYWdlIGFuIGVmZmVjdGl2ZSBhcHByb2FjaCB0byByZXNwb25zaWJsZSBnYW1ibGluZyB3aXRoaW4gdGhlIGdhbWJsaW5nIGluZHVzdHJ5PC9wPlxuLy8gICAgICAgICAgIDxicj5cbi8vICAgICAgICAgICA8cD48c3Ryb25nPkFERElUSU9OQUwgVElQUzwvc3Ryb25nPjwvcD5cbi8vICAgICAgICAgICA8cD5NYW55IGJhbmtzLCBmaW50ZWNoIGJhbmtzIGFuZCBlLXdhbGxldCBwcm92aWRlcnMgYWNyb3NzIEV1cm9wZSBub3cgb2ZmZXIgZ2FtYmxpbmcgYmxvY2tzIHRoYXQgYWxsb3cgdGhlaXIgY3VzdG9tZXJzIHRvIGJsb2NrIGdhbWJsaW5nIHRyYW5zYWN0aW9ucyBvbiB0aGVpciBhY2NvdW50cy4gSWYgeW91IHdhbnQgdG8gaW1wbGVtZW50IHRoZXNlLCB5b3VyIGJhbmsgc2hvdWxkIGV4cGxhaW4gaG93IHRvIGRvIHRoaXMsIG9yIGNvdWxkIGV2ZW4gZG8gaXQgZm9yIHlvdS4gUGxlYXNlIGJlIGF3YXJlIHRoYXQgdGhlc2UgYmxvY2tzIGFyZSBub3QgcGVybWFuZW50LCB0aGV5IGNhbiBiZSBzd2l0Y2hlZCBvbiBhbmQgb2ZmIHdpdGggdmFyeWluZyBkZWxheXMsIHNvIGl0JnJzcXVvO3MgYWxzbyBhIGdvb2QgaWRlYSB0byBoYXZlIG90aGVyIHN1cHBvcnQgaW4gcGxhY2UgaWYgeW91IHdhbnQgdG8gc3RvcCBnYW1ibGluZyBjb21wbGV0ZWx5LjwvcD5cbi8vICAgICAgICAgICA8cD5Tb21lIGJhbmtzIG1heSBhbHNvIGFsbG93IHlvdSB0byBzZXQgYSBzcGVuZGluZyBsaW1pdCBmb3IgYSBzaW5nbGUgZGViaXQgY2FyZCB0cmFuc2FjdGlvbiwgb3IgdGVtcG9yYXJpbHkgZnJlZXplIHlvdXIgY2FyZCBpZiB5b3UgZmVlbCBsaWtlIHlvdXIgc3BlbmRpbmcgaXMgZ2V0dGluZyBvdXQgb2YgY29udHJvbC4gVGhpcyB3aWxsIHZhcnkgZnJvbSBiYW5rIHRvIGJhbmsgc28gY2hlY2sgd2hhdCBwcm90ZWN0aW9ucyB5b3VyIGJhbmsgY2FuIHB1dCBpbiBwbGFjZSBmb3IgeW91LjwvcD5cbi8vICAgICAgICAgICA8cD5Bbm90aGVyIHdheSBvZiB0YWtpbmcgc29tZSB0aW1lIGF3YXkgZnJvbSBvbmxpbmUgZ2FtYmxpbmcgaXMgdG8gcHV0IGEgJmxkcXVvO2Jsb2NrZXImcmRxdW87IG9uIHlvdXIgZGV2aWNlLCB3ZWxsLWtub3duIG9uZXMgYXJlIEdhbWJsb2NrIG9yIEJldGJsb2NrZXIuPC9wPlxuLy8gICAgICAgICAgIDxwPlBsZWFzZSBub3RlJm5ic3A7dGhhdCB0Z3QgR3JvdXAgdGFrZXMgbm8gcmVzcG9uc2liaWxpdHkgZm9yIHRoZSBwZXJmb3JtYW5jZSBvciBxdWFsaXR5IG9mIHRoZSBzb2Z0d2FyZSBzdWdnZXN0ZWQgb24gdGhpcyBwYWdlIHRoYXQgaXMgbm90IHN1cHBsaWVkIGJ5IG91cnNlbHZlcy48L3A+XG4vLyAgICAgICAgICAgPGJyPlxuLy8gICAgICAgICAgIDxwPjxzdHJvbmc+UFJFVkVOVElORyBVTkRFUkFHRSBHQU1CTElORzwvc3Ryb25nPjwvcD5cbi8vICAgICAgICAgICA8cD5JdCBpcyBpbGxlZ2FsIGZvciBhbnlib2R5IHVuZGVyIHRoZSBhZ2Ugb2YgMTggdG8gb3BlbiBhbiBhY2NvdW50IG9yIGdhbWJsZSB3aXRoIHt7e3NpdGVOYW1lfX19IENhc2luby4gV2UgdGFrZSBvdXIgcmVzcG9uc2liaWxpdGllcyBpbiB0aGlzIGFyZWEgdmVyeSBzZXJpb3VzbHkgYW5kIGZvbGxvdyBhIGZldyBzdGVwcyB0byB2ZXJpZnkgb3VyIGN1c3RvbWVycyBhcmUgb3ZlciAxOC48L3A+XG4vLyAgICAgICAgICAgPHA+QW55b25lIHVuZGVyIHRoZSBhZ2Ugb2YgMTggZm91bmQgdXNpbmcgdGhpcyBzaXRlIHdpbGwgaGF2ZSB3aW5uaW5ncyBmb3JmZWl0ZWQgYW5kIHRoZSBhY2NvdW50IHdpbGwgYmUgY2xvc2VkIHdpdGggaW1tZWRpYXRlIGVmZmVjdC48L3A+XG4vLyAgICAgICAgICAgPHA+V2UgYWxzbyBhZHZpc2UgdGhhdCB5b3UgZmFtaWxpYXJpc2UgeW91cnNlbGYgd2l0aCB0aGUgYnVpbHQtaW4gcGFyZW50YWwgdG9vbHMgb24geW91ciBNb2JpbGUvVGFibGV0L1BDL1RWIGRldmljZXM8L3A+XG4vLyAgICAgICAgICAgPHA+TGltaXQgdGhlIGFtb3VudCBvZiB0aW1lIHlvdXIgY2hpbGRyZW4gc3BlbmQgb25saW5lLjwvcD5cbi8vICAgICAgICAgICA8cD48YnI+PC9wPlxuLy8gICAgICAgICAgIDxwPjxicj48L3A+XG4vLyAgICAgICAgICAgPHA+PGJyPjwvcD5cbi8vICAgICAgICAgICBgXG4vLyAgICAgICAgIH0pLFxuLy8gICAgICAgICBpc19hY3RpdmU6IHRydWUsXG4vLyAgICAgICAgIGNyZWF0ZWRfYXQ6IG5ldyBEYXRlKCksXG4vLyAgICAgICAgIHVwZGF0ZWRfYXQ6IG5ldyBEYXRlKClcbi8vICAgICAgIH1cbi8vICAgICBdKVxuICB9LFxuXG4gIGFzeW5jIGRvd24gKHF1ZXJ5SW50ZXJmYWNlLCBEYXRhVHlwZXMpIHtcbiAgICAvLyBhd2FpdCBxdWVyeUludGVyZmFjZS5idWxrRGVsZXRlKHsgdGFibGVOYW1lOiAnY21zX3BhZ2VzJywgc2NoZW1hOiAncHVibGljJyB9LCBudWxsLCB7fSlcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaLE1BQU07RUFBRUE7QUFBZSxDQUFDLEdBQUdDLE9BQU8seUNBQXdDLENBQUM7QUFFM0VDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2YsTUFBTUMsRUFBRUEsQ0FBRUMsY0FBYyxFQUFFQyxTQUFTLEVBQUU7SUFDdkM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBOztJQUVBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFBQSxDQUNHO0VBRUQsTUFBTUMsSUFBSUEsQ0FBRUYsY0FBYyxFQUFFQyxTQUFTLEVBQUU7SUFDckM7RUFBQTtBQUVKLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=