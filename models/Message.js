import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  },
  user: {
      type: mongoose.Types.ObjectId,
      ref: 'Users'
  },
  chatroom: {
    type: mongoose.Types.ObjectId,
    ref: 'ChatRooms'
  }
});

mongoose.models = {};

const Messages = mongoose.model("Messages", MessageSchema);

export default Messages;