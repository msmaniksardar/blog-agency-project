import express from 'express';
import cors from 'cors';
import MongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit"
import helmet from "helmet";
import xss from "xss-clean"
import mongoose from "mongoose";
import {SERVER_URL} from "./src/config/config.js";
const app = express();
import router from "./src/routes/api.js";




app.use(cookieParser());
app.use(MongoSanitize());
app.use(cors());
app.use(helmet());
app.use(xss());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({windowMs: 60 * 60 * 1000 , limit:300});

mongoose.connect(SERVER_URL ,{autoIndex:true} )
    .then(()=>{
        console.log("Database Connected successfully.");
    })
    .catch((err)=>{
        console.log(`Failed to connect to Database ${err}`);
    })



app.set("etag" , false);

app.use("/api/v1" , router);





app.use((error, req, res, next) => {
    res.status( error.status || 500).json({
        error: error.message || "INTERNAL SERVER ERROR", // Use the error message if available
    });
});



export default  app;