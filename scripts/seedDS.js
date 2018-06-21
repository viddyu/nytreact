const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "The Dead Zone",
    date: new Date(Date.now()),
    url: "www.google.com",
    summary: "This is a great article"
  
  },
  {
    title: "The Dead Zone",
    date: new Date(Date.now()),
    url: "www.google.com",
    summary: "This is a great article"
    
  },
  {
    title: "The Dead Zone",
    date: new Date(Date.now()),
    url: "www.google.com",
    summary: "This is a great article"
} 
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });