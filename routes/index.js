import { Router } from "express"
import { sayHello } from "../controllers/index.js"
const router = Router()

//  ROUTES /api/v1/
router.get("/", sayHello)

export default router
