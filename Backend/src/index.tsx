import fastify from "fastify";
import { authRoutes } from "./routes/authRoutes";

const app = fastify();

app.register(authRoutes, { prefix: "/auth" });

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
