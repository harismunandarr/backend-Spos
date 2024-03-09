import express from "express"
import { category_create } from "../controllers/categories/CategoriesControllers"

const categories_route = express.Router()

//categories routes
categories_route.post('/category', category_create)

export default categories_route


