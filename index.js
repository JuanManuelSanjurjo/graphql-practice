import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";

// import the schema
import { typeDefs } from "./schema.js";

// resolvers
import { resolvers } from "./resolvers.js";

// server setup
const server = new ApolloServer({
  // typeDefs, los tipos de datos que graphQL usará para resolver las consultas
  typeDefs: typeDefs /* GraphQL */,
  // resolvers, funciones que resolverán las consultas
  resolvers: resolvers,
});

// start the server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
