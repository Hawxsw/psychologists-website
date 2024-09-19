import type { FastifyInstance } from 'fastify'
import {
  loginController,
  registerController,
} from '../controllers/authController'

export const authRoutes = async (app: FastifyInstance) => {
  app.post('/login', loginController)
  app.post('/register', registerController)
}
