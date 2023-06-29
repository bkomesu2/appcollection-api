import { FastifyInstance } from "fastify";

async function userRoutes(server: FastifyInstance, options: unknown) {
  server.get("/ping", async () => {
    return { hello: "world" };
  });
}

export default userRoutes;
