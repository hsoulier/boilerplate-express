import mongoose from "mongoose"

const { Schema, model } = mongoose
const userSchema = new Schema({
	name: String,
	email: String,
	password: String,
	isSuperAdmin: Boolean,
	createdAt: { type: Date, default: Date.now() },
})

export default model("user", userSchema)
