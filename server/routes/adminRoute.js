import { Router } from "express";
import { adminHome, authAdmin } from "../controllers/adminController.js";

const route=Router()

route.get('/', adminHome)
route.post('/adminAuth',authAdmin)




export default route