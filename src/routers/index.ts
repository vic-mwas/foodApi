
import express from "express";
import { postUser } from "../controllers/users";

const routes = express.Router()


routes.post('/user',postUser)

export default routes