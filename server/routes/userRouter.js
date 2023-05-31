import { Router } from "express";
import { authUser, getUserProfile, logoutUser, updateUserProfile } from "../controllers/userController.js";
const router=Router()

router.post('/',authUser)
router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)



export default router