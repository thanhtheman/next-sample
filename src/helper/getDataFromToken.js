import jwt from "jsonwebtoken"

export function getDataFromToken (request) {
    try {
        const token = request.cookies.get("token")
        console.log(token)
        const decodedToken = jwt.verify(token.value, process.env.TOKEN_SECRET)
        console.log(decodedToken)
        return decodedToken.id
    } catch (error) {
        throw new Error(error.message);
    }
}