import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config('./.env');

const mongooseUrl = process.env.MONGOOSE_URL;

export default () => {
    try {
        mongoose.connect(mongooseUrl,
        ).then(console.log("MongoDB Connected"));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};