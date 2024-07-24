export const typeDefs = `
  type Game {
    id: ID!,
    title: String!,
    platform: [String!]!,
    reviews: [Review!],
  }
  type Review {
    id: ID!,
    rating: Int!,
    content: String!,
    author: Author!,
    game: Game!,
  }
  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
    reviews: [Review!],
  }
  type Query {
    games: [Game!]!,
    game(id: ID!): Game!,
    reviews: [Review!]!,
    review(id: ID!): Review!,
    authors: [Author!]!,
    author(id: ID!): Author!,
   }
  type Mutation {
    deleteGame(id: ID!): [ Game ],
    addGame(game: GameInput!): [ Game ],
    updateGame(id: ID!, edits: EditGameInput!): Game,
  }
  input GameInput {
    title: String!,
    platform: [String!]!,
  }
  input EditGameInput {
    title: String,
    platform: [String!],
  }
`;
// tambien se puede declarar tipos de inputs, para poder reutilizarlos en diferentes mutaciones de datos
// por ejemplo GameImput enb vez de  'addGame(title: String!, platform: [String!]!): Game ,'

// type Qyery defines the operations that can be performed on the data
// typeDefs is a string that contains the GraphQL schema
// ! means required
// ! dentro del array significa que si tiene reviews el array debe tener al menos un elemento
