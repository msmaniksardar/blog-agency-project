import jwt from 'jsonwebtoken';
import { JSON_TOKEN_KEY } from "../config/config.js";

export const tokenEncode = (payload) => {
    try {
        const options = { expiresIn: "1d" }; // Token expires in 1 day
        return jwt.sign(payload, JSON_TOKEN_KEY, options);
    } catch (error) {
        console.error("Error encoding token:", error.message);
        throw new Error("Token encoding failed.");
    }
};

export const tokenDecode = (token) => {
    try {
        return jwt.verify(token, JSON_TOKEN_KEY);
    } catch (error) {
        console.error("Error decode token:", error.message);
       return  null
    }
};
