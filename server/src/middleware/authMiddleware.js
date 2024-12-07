import {tokenDecode} from "../utility/json-token.js";

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
          return  res.status(401).send('No token provided');
        }
        const verifyToken = tokenDecode(token);
        if (!verifyToken) {
           return  res.status(401).send('failed to decode access token');
        }

        req.headers.user = verifyToken.user;

        next();

    } catch (error) {
        return res.status(400).send('Failed to verify token.');
    }
}


export const isAdmin = async (req, res, next) => {
    try {
        const admin = req.headers.user?.isAdmin;

        if (!admin) {
            return res.status(200).json({
                status: "fail",
                message: "You must be an admin"
            }); // Return to ensure no further execution
        }

        next();

      // Proceed to the next middleware if admin is true
    } catch (err) {
        return res.status(401).json({
            status: "fail",
            message: "Only admins can access this resource"
        });
    }
};
