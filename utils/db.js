import mongoose from "mongoose"

export class Db {
	constructor({ dbUri }) {
		this.dbUri = dbUri
		console.log(this.dbUri)
		this.connect()
	}
	async connect() {
		try {
			await mongoose.connect(this.dbUri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			console.info(`Connected to database`)
		} catch (error) {
			console.error(`Connection error: ${error.stack}`)
		}
	}
}
