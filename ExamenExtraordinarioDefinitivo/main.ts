import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./gql/schema.ts";
import { Character } from "./resolvers/CharacterRes.ts";
import { Query } from "./resolvers/Query.ts";
import { Episode } from "./resolvers/Episode.ts";
import { Location } from "./resolvers/Location.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode,
    Location,
  },
});

const { url } = await startStandaloneServer(server);

console.log("El servidor corre en la " + url);
