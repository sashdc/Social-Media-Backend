const connection = require('../config/connection');
const { User, Thought, } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Create empty array to hold the students
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
     {username:"keerio", email:"jeff@jeff.com"},
     {username:"ffej", email:"what@joke.com"},
                ];
  const thoughts = [
    {thoughtText:"i have feelings!", username:"jeff"},
    {thoughtText:"i have thoughts!", username:"ekkley"},
    {thoughtText:"I ate a thing, ya me.", username:"kravanz"},
    {thoughtText:"Please validate me.", username:"evilyn"},
    {thoughtText:"i am offended", username:"jeff"},
    {thoughtText:"i am defended", username:"keerio"},
    {thoughtText:"i am unfriended", username:"lisa"},
    {thoughtText:"i have indigestion!", username:"ekkley"},

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
  console.table(students);
  console.table(thoughts);
  // console.table(reactions);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
