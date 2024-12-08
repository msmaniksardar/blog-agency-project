import dotenv from 'dotenv'
dotenv.config();


export const PORT = process.env.PORT || 3000;
export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000';
export const JSON_TOKEN_KEY = process.env.JSON_TOKEN_KEY || '';

// cloudinary config
export const CLOUD_NAME = process.env.CLOUD_NAME || '';
export const API_KEY = process.env.API_KEY || '';
export const API_SECRET_KEY = process.env.API_SECRET_KEY || '';