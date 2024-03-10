import express from "express"
import { 
    categories_all, 
    category_create, 
    category_edit, 
    category_id, 
    category_delete 
} from "../controllers"

const categories_route = express.Router()

//categories routes
categories_route.post('/category', category_create)
categories_route.get('/categories', categories_all)
categories_route.get('/category/:id', category_id)
categories_route.patch('/category/:id', category_edit)
categories_route.delete('/category/:id', category_delete)


export default categories_route


