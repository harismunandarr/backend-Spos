import express from "express";
import cors from 'cors';

const app = express();

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.listen(5000, () => {
    console.info("server has running")
})