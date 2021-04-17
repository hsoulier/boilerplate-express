import { Router } from "express"
const router = Router()

//  ROUTES /api/v1/
router.get("/", (req, res) => {
	res.json({ message: "Hello There 👋" })
})

export default router
