import { server } from "./server.js";

server.listen({ port: 3000, host: "0.0.0.0" }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  } else {
    server.log.info(`Server running on http://0.0.0.0:3000`);
  }
});
