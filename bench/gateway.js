import Fastify from "fastify";
import mercurius from "mercurius";

const app = Fastify({
  logger: {
    level: "error",
  },
});

app.register(mercurius, {
  gateway: {
    services: [
      {
        name: "service1",
        url: "http://localhost:4001/graphql",
        mandatory: true,
      },
      {
        name: "service2",
        url: "http://localhost:4002/graphql",
        mandatory: true,
      },
    ],
  },
});

app.listen(4000).then(() => {
  console.log("Listening on port 4000");
});
