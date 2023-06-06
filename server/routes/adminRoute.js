import { Router } from "express";
import { adminHome, authAdmin, userUnique } from "../controllers/adminController.js";

const route=Router()

route.get('/', adminHome)
route.post('/adminAuth',authAdmin)
route.get('/userUnique/:id',userUnique)





export default route