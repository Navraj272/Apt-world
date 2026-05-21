import express from "express"

// Import routers
import { adminRouter } from "./admin.router"
import { amoeRouter } from "./amoe.router"
import { bonusRouter } from "./bonus.router"
import { casinoRouter } from "./casino.router"
import { cmsRouter } from "./cms.router"
import { crmRouter } from "./crm.router"
import { internalRouter } from "./internal.router"
import { liveChatRouter } from "./liveChat.router"
import { packageRouter } from "./package.router"
import { reportRouter } from "./report.router"
import { settingsRouter } from "./settings.router"
import { statesRouter } from "./state.router"
import { userRouter } from "./user.router"
import { userEngagementRouter } from "./userEngagement.router"
import { walletRouter } from "./wallet.router"
import { affiliateRouter } from "./affiliate.router"
import { ipAddressRouter } from "./ipAddress.router"


const v1Router = express.Router()

// Attach routers (sorted alphabetically)
v1Router.use("/admin", adminRouter)
v1Router.use("/amoe", amoeRouter)
v1Router.use("/bonus", bonusRouter)
v1Router.use("/casino", casinoRouter)
v1Router.use("/cms", cmsRouter)
v1Router.use("/crm", crmRouter)
v1Router.use("/internal", internalRouter)
v1Router.use("/live-chat", liveChatRouter)
v1Router.use("/package", packageRouter)
v1Router.use("/reports", reportRouter)
v1Router.use("/settings", settingsRouter)
v1Router.use("/user", userRouter)
v1Router.use("/user-engagement", userEngagementRouter)
v1Router.use("/wallet", walletRouter)
v1Router.use("/state", statesRouter)
v1Router.use("/affiliate", affiliateRouter)
v1Router.use("/ip-address", ipAddressRouter)

export default v1Router
