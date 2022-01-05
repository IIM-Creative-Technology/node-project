import mongoose from 'mongoose';
const user = require('./User');

const ChatRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  messages: [{
    type: mongoose.Types.ObjectId,
    ref: 'Messages'
  }],
  users: [{
      type: mongoose.Types.ObjectId,
      ref: 'Users'
  }]
});

mongoose.models = {};

const ChatRooms = mongoose.model("ChatRooms", ChatRoomSchema);

export default ChatRooms;