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
                createdAt: "asc"
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

//edit category
const category_edit = async ( req = request, res = response ) => {
    try {
        const id = req.params.id
        const name = req.body.name

        const categoryEdit = await db.categories.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name: name
            }
        })
        
        return res.status(200).json({
            status: 200,
            message: "Category edited",
            data: categoryEdit
        })
    } catch (error) {
        console.error(error)
    }
}

//delete category
const category_delete = async ( req = request, res = response ) => {
    try {
        const id = parseInt(req.params.id)

        const categoryDelete = await db.categories.delete({
            where: {
                id: id
            }
        })

        return res.status(200).json({
            status: 200,
            message: "Category deleted",
            data: categoryDelete
        })
    } catch (error) {
        
    }
}


export {
    category_create,
    categories_all,
    category_id,
    category_edit,
    category_delete
}