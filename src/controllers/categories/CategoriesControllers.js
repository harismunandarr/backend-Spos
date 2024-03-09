import { request, response } from "express";
import db from "../../../prisma/db";

// create category
export const category_create = async (req=request, res=response) => {
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