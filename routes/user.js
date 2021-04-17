import { Router } from "express"
const router = Router()

//  ROUTES /api/v1/users
router.get("/", (req, res) => {
	res.json({ message: "List of all the users" })
})

export default router
