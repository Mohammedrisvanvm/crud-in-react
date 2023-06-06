import { Router } from "express";
import { adminHome, authAdmin, updateUserProfile, userUnique } from "../controllers/adminController.js";
import router from "./userRouter.js";

const route=Router()

route.get('/', adminHome)
route.post('/adminAuth',authAdmin)
route.get('/userUnique/:id',userUnique)
router.put('/profile',updateUserProfile)





export default route