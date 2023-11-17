import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import morgan from 'morgan';
import dbConnect from './dbConnect.js';
import routes from './routes/index.js';

const app = express();
dotenv.config('./.env');

app.use(express.json());
app.use(morgan('common'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));


// using routes
app.use(routes);


app.get('/', (req, res) => {
    res.status(200).send("Hello from server")
})

dbConnect();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("listening to port : ", PORT);
});