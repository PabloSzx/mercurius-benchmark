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
      hello1: String!
    }
  `,
  resolvers: {
    hello1() {
      return "Hello World!";
    },
  },
  federationMetadata: true,
});

app.listen(4001).then(() => {
  console.log("Listening on port 4001");
});
