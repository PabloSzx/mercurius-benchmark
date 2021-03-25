import Fastify from "fastify";
import mercurius from "mercurius";
import { gql } from "mercurius-codegen";

const app = Fastify({
  logger: {
    level: "error",
  },
});

app.register(mercurius, {
  schema: gql`
    extend type Query {
      hello2: String!
    }
  `,
  resolvers: {
    hello2() {
      return "Hello World!";
    },
  },
  federationMetadata: true,
});

app.listen(4002).then(() => {
  console.log("Listening on port 4001");
});
