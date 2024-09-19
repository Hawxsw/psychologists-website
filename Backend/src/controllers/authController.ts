import { FastifyReply, FastifyRequest } from "fastify";
import { login, register } from "../services/authService";


export const loginController = async (request: FastifyRequest, reply: FastifyReply) => {
    const { username, password } = request.body as { username: string, password: string };
  
    try {
      const token = await login(username, password);
      return reply.send({ token });
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(400).send({ message: error.message });
      }
      return reply.status(400).send({ message: 'An unexpected error occurred' });
    }
  };
  
  export const registerController = async (request: FastifyRequest, reply: FastifyReply) => {
    const { name, username, password, permissions } = request.body as { name: string, username: string, password: string, permissions: string };
  
    try {
      await register(name, username, password, permissions);
      return reply.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(400).send({ message: error.message });
      }
      return reply.status(400).send({ message: 'An unexpected error occurred' });
    }
  };
  