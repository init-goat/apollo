import mongoose from 'mongoose'
import { env } from '../config.js'

// import schema here
import { personSchema } from './schema.js'

const run = 'development' // Change to production when in production

mongoose.connect(env[run].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

// Add model here
const person = mongoose.model('collectionName', personSchema)

// Export model here to use in gql resolver
export { person }