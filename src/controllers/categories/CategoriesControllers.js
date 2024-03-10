import { request, response } from "express";
import db from "../../../prisma/db";

// create category
const category_create = async ( req = request, res = response) => {
    try {
        const {name} = req.body;

        const createCategory = await db.categories.create({
            data : {
                name : name
            }
        })
        return res.status(201).json({
            status: 201,
            message: "Category Created",
            data: createCategory
        })
    } catch (error) {
        console.error(error)
    }
}

// get all category
const categories_all = async ( req = request, res = response ) => {
    try {
        const categoryData = await db.categories.findMany({
            include: {
                product:true
            }, orderBy : {
                createdAt: "desc"
            }
        })

        return res.status(201).json({
            status: 201,
            message: "Ok",
            data: categoryData
        })
    } catch (error) {
        
    }
}

//get category by id
const category_id = async ( req = request, res = response ) => {
    try {
        const id = parseInt(req.params.id);
        const categoryId = await db.categories.findUnique({
            where: {
                id : id
            },
            include : {
                product: true
            }
        }) 

        return res.status(200).json({
            status: 200,
            message: "Read by id",
            data: categoryId
        })
    } catch (error) {
        console.error(error)
    }
}


export {
    category_create,
    categories_all,
    category_id
}