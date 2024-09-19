import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'defaultsecret'

const generateToken = (payload: object) => {
    return jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'})
}


const verifyToken = (token: string) => {
    return jwt.verify(token, SECRET_KEY)
}

export default {generateToken, verifyToken}