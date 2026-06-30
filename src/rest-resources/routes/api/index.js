import express from "express"

// Import routers
import { adminRouter } from "./admin.router"
import { categoryRouter } from "./category.router"
import { subcategoryRouter } from "./subcategory.router"
import { productRouter } from "./product.router"
import { enquiryRouter } from "./enquiry.router"
import { franchiseLocationRouter } from "./franchise-location.router"
// import { amoeRouter } from "./amoe.router"
// ... (rest of imports)

const v1Router = express.Router()

// Attach routers (sorted alphabetically)
v1Router.use("/admin", adminRouter)
v1Router.use("/categories", categoryRouter)
v1Router.use("/subcategories", subcategoryRouter)
v1Router.use("/products", productRouter)
v1Router.use("/enquiries", enquiryRouter)
v1Router.use("/franchise-locations", franchiseLocationRouter)

export default v1Router
