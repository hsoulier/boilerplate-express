import mongoose from "mongoose"
import { config } from "dotenv"
config()
const { DB_URI } = process.env

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error:"))

export default db
