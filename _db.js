let games = [
  {
    id: "1",
    title: "Super Mario Bros",
    platform: ["Nintendo"],
  },
  {
    id: "2",
    title: "The Legend of Zelda: Ocarina of Time",
    platform: ["Nintendo"],
  },
  {
    id: "3",
    title: "The Legend of Zelda: Majora's Mask",
    platform: ["Nintendo"],
  },
  {
    id: "4",
    title: "The Legend of Zelda: Twilight Princess",
    platform: ["Nintendo"],
  },
  {
    id: "5",
    title: "The Legend of Zelda: Skyward Sword",
    platform: ["Nintendo"],
  },
];

let reviews = [
  {
    id: "1",
    rating: 4,
    content: "This game is amazing!",
    author_id: "1",
  },
  {
    id: "2",
    rating: 5,
    content: "This game is awesome!",
    author_id: "2",
    game_id: "4",
  },
  {
    id: "3",
    rating: 3,
    content: "This game is okay.",
    author_id: "3",
    game_id: "3",
  },
  {
    id: "4",
    rating: 2,
    content: "This game is not so good.",
    author_id: "4",
    game_id: "2",
  },
  {
    id: "5",
    rating: 1,
    content: "This game is terrible.",
    author_id: "1",
    game_id: "1",
  },
];

let authors = [
  {
    id: "1",
    name: "Mario",
    verified: true,
  },
  {
    id: "2",
    name: "Luigi",
    verified: false,
  },
  {
    id: "3",
    name: "Yoshi",
    verified: true,
  },
  {
    id: "4",
    name: "Bowser",
    verified: false,
  },
];

export { games, reviews, authors };
