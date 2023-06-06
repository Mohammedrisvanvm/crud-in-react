import { Router } from "express";
import { adminHome, authAdmin, deleteUser, updateUserProfile, userUnique } from "../controllers/adminController.js";
import router from "./userRouter.js";

const route=Router()

route.get('/', adminHome)
route.post('/adminAuth',authAdmin)
route.get('/userUnique/:id',userUnique)
route.put('/profile',updateUserProfile)
route.post('/delete',deleteUser)





export default route