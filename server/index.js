import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongoDB/connectDB.js'

dotenv.config();

const app = express();

app.use(express.json({ limit: '50mb' }))
app.use(cors());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from DALL-E'
    })
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch (error) {
        console.log(error);
    }
}

startServer();


