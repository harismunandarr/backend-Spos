import express from "express";
import cors from 'cors';
import categories_route from "./routes/CategoriesRoutes";
import env from "dotenv"

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

//routing
app.use(categories_route)

app.listen(PORT, () => {
    console.info("server has running on port " + PORT)
})