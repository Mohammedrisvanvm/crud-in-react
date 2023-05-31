import { Router } from "express";
import { authUser } from "../controllers/userController.js";
const router=Router()

router.post('/auth',authUser)



export default router