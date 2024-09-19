import bcrypt from 'bcrypt'

const saltRounds = 10;

const hash = (password: string) => bcrypt.hash(password, saltRounds)
const compare = (password: string, hashedPassword: string) => bcrypt.compare(password, hashedPassword)

export default {hash, compare}