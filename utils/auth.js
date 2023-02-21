const jwt = require("jsonwebtoken");
const {AuthenticationError} = require("apollo-server-express");

module.exports = (context) => {
    const authHeader = context.req.headers.authorization; 
    if (authHeader) {
        const token = authHeader.split("")[1];
        if(token){
            try{
                const user = jwt.verify(token);
                return user;

            }
            catch(error){
                throw new AuthenticationError("Invalid token");

            }
        }
        throw new Error("Authentication token invalid");
    }
    throw new Error("Authorization header invalid");


};