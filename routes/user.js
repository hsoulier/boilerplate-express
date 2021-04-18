import { Router } from "express"
import { getAllUsers } from "../controllers/user.js"
const router = Router()

//  ROUTES /api/v1/users
router.get("/", (req, res) => {
	res.json({ message: "List of all the users" })
})
router.get("/all", getAllUsers)

export default router
