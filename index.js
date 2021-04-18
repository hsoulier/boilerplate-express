import dotenv from "dotenv"
import express, { json } from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import baseRoute from "./routes/index.js"
import userRoute from "./routes/user.js"
import { Db } from "./utils/db.js"
dotenv.config()

const db = new Db({
	dbUri: process.env.DB_URI,
})

const app = express()
const PORT = process.env.PORT || 3000
const VERSION = 1
const BASE_URL = `/api/v${VERSION}`

app.use(helmet())
app.use(cors())
app.use(json())
app.use(morgan("tiny"))

app.use(`${BASE_URL}/`, baseRoute)
app.use(`${BASE_URL}/users`, userRoute)
app.get("*", (req, res) => {
	console.dir(`${req.protocol}://${req.get("host")}`)
	res.status(404).json({
		message: "Route doesn't exist",
		message: `The base route is ${req.protocol}://${req.get(
			"host"
		)}/${BASE_URL}`,
	})
})

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))
