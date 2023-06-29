import fastify, { FastifyRequest, FastifyReply } from "fastify";
import userRoutes from "./routes/userRoutes.js";
import testRoutes from "./routes/testRoutes.js";

export const server = fastify();

server.register(testRoutes, { prefix: "test" });
server.register(userRoutes, { prefix: "user" });

server.addHook("preHandler", (req: FastifyRequest, reply: FastifyReply, done) => {
  req.log.info(
    {
      method: req.method,
      url: req.url,
      parameters: req.params,
      headers: req.headers,
    },
    "REQUEST",
  );

  done();
});
