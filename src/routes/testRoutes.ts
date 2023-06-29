import { FastifyInstance } from "fastify";
import db from "../db.js";
import deleteCollection from "../Utils/FireBase/deleteCollections.js";

async function userRoutes(server: FastifyInstance, options: unknown) {
  server.get("/ping", async () => {
    return { hello: "world" };
  });

  server.post("/post", async () => {
    var docRef = db.collection("test").doc("test-x");

    docRef.set({
      id: `user-${docRef.id}`,
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
  });

  server.put("/update", async () => {
    var docRef = db.collection("test").doc("test-x");

    docRef.update({
      first: "Ada2",
      last: "Lovelace2",
      born: 18152,
    });
  });

  server.delete("/delete", async (request, reply) => {
    await deleteCollection(db, "test", 100);
    reply.send("collection deleted");
  });
}

export default userRoutes;
