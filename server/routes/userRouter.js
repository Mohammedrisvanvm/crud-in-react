import { Router } from "express";
import multer from "multer";
const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + ".jpg";
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
import {
  authUser,
  editProfile,
  getUserProfile,
  logoutUser,
  registerUser,
  userCheck,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protect, getUserProfile);

router.post("/editProfile", upload.single("file"), editProfile);
router.get('/userCheck',userCheck)

export default router;
