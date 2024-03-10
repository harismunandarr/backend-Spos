import express from "express"
import { categories_all, category_create } from "../controllers"

const categories_route = express.Router()

//categories routes
categories_route.post('/category', category_create)
categories_route.get('/categories', categories_all)


export default categories_route


