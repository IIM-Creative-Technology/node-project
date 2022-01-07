import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  status: {
      type: Boolean,
      required: true
  },
  messages: [{
      type: mongoose.Types.ObjectId,
      ref: 'Messages'
  }],
  chatrooms: [{
      type: mongoose.Types.ObjectId,
      ref: 'ChatRooms'
  }]
});

mongoose.models = {};

const Users = mongoose.model("Users", UserSchema);

export default Users;