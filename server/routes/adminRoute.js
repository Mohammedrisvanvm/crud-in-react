import { Router } from "express";
import { adminHome } from "../controllers/adminController.js";
const route=Router()

route.get('/', adminHome)




export default route