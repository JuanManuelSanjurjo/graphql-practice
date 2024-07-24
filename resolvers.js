import { games, reviews, authors } from "./_db.js";

let mygames = [...games]; // creamos una copia de la lista de juegos poruque no permite modificar la lista original, al ser una constante

export const resolvers = {
  Query: {
    games: () => mygames,
    game: (parent, args) => games.find((game) => game.id === args.id),
    reviews: () => reviews,
    review: (parent, args) => reviews.find((review) => review.id === args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id === args.id),
  },
  Game: {
    reviews: (parent) =>
      reviews.filter((review) => review.game_id === parent.id),
  },
  Review: {
    game: (parent) => games.find((game) => game.id === parent.game_id),
    author: (parent) =>
      authors.find((author) => author.id === parent.author_id),
  },
  Author: {
    reviews: (parent) =>
      reviews.filter((review) => review.author_id === parent.id),
  },
  Mutation: {
    deleteGame: (parent, args) => games.filter((game) => game.id !== args.id),
    addGame: function (parent, args) {
      games.push({ ...args.game, id: Math.floor(Math.random() * 1000) });
      return games;
    },
    updateGame: function (parent, args) {
      mygames = games.map((game) => {
        if (game.id === args.id) {
          return { ...game, ...args.edits };
        }
        return game;
      });
      return mygames.find((game) => game.id === args.id);
    },
  },
};

// los resolvers son funciones que resolverán las consultas
// tienen que tener el mismo nombre que el tipo de dato
// en este caso Game, Review, Author
// y devuelven el objeto correspondiente
// en este caso devuelve un array de objetos
