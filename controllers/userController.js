const { User , Thought } = require('../models');
const {Types} = require('mongoose');


module.exports = {
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // Get a user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      // .populate(['friends', 'thoughts'])
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({_id: Types.ObjectId(req.params.userId)})
    .then(() => res.json({ message: 'User deleted!' }))
    .catch((err) => res.status(500).json(err));
  },

  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

   // Add a friend to a user
   addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: Types.ObjectId(req.params.userId) },
      { $addToSet: {friends: [Types.ObjectId(req.params.friendId)]} },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete a friend from user
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: {friends: req.params.friendId} },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
