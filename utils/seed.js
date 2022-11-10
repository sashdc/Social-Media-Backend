const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

  // Create empty array to hold the students
  const users = [ 
     {username:"jeff", email:"jeff@jeff.com"}

];
  const thoughts = [];


  // // Loop 20 times -- add students to the students array
  // for (let i = 0; i < 20; i++) {
  //   // Get some random assignment objects using a helper function that we imported from ./data
  //   const assignments = getRandomAssignments(20);

  //   const fullName = getRandomName();
  //   const first = fullName.split(' ')[0];
  //   const last = fullName.split(' ')[1];
  //   const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  //   students.push({
  //     first,
  //     last,
  //     github,
  //     assignments,
  //   });
  // }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.table(thoughts);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});
