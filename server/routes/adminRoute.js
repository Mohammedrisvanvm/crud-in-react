import { Router } from "express";
import { adminHome, authAdmin, deleteUser, logoutadmin, updateUserProfile, userUnique } from "../controllers/adminController.js";


const route=Router()

route.get('/', adminHome)
route.post('/adminAuth',authAdmin)
route.get('/userUnique/:id',userUnique)
route.put('/profile',updateUserProfile)
route.post('/delete',deleteUser)
route.get('/adminLogout', logoutadmin)





export default route