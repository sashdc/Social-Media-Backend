const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
// const { Thought, Reaction } = require('../models/Thought.js');

const now = new Date()

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});
  

  const users = [ 
     {username:"jeff", email:"jeff@jeff.com"},
     {username:"lisa", email:"lisa@gmail.com"},
     {username:"mishanta", email:"alsolisa@gmail.com"},
     {username:"kravanz", email:"eleganza@iname.com"},
     {username:"ekkley", email:"tunacanstan@hotmail.com"},
     {username:"nanook", email:"ofthe@north.com"},
     {username:"jeffthe2", email:"jeff2@notjeff.com"},
     {username:"evilyn", email:"evil@apple.com"},
     {username:"adamant", email:"adam@nt.com"},
     {username:"keerio", email:"keff@jeff.com"},
     {username:"ffej", email:"what@joke.com"},
                ];
  const thoughts = [
    {thoughtText:"i have feelings!", createdAt: now, username:"jeff"},
    {thoughtText:"i have thoughts!",createdAt: now, username:"ekkley"},
    {thoughtText:"I ate a thing, ya me.",createdAt: now, username:"kravanz"},
    {thoughtText:"Please validate me.",createdAt: now, username:"evilyn"},
    {thoughtText:"i am offended",createdAt: now, username:"jeff"},
    {thoughtText:"i am defended",createdAt: now, username:"keerio"},
    {thoughtText:"i am unfriended",createdAt: now, username:"lisa"},
    {thoughtText:"i have indigestion!",createdAt: now, username:"ekkley"},
  ];

const reactions =[
  {reactionBody:"indeed", username: "adamant"},
  {reactionBody:"boo", username: "nanook"},
  {reactionBody:"yay", username: "jeffthe2"},
  {reactionBody:"neutral yell", username: "mishanta"},
  {reactionBody:"hmmmm", username: "jeff"},
  {reactionBody:"heart eye thing", username: "jeff"},
  {reactionBody:"delete this", username: "lisa"},
  {reactionBody:"promote this", username: "adamant"},
]


  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);
  // await Reaction.collection.insertMany(reactions);


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  // console.table(reactions);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
