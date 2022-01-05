import mongoose from 'mongoose';
const user = require('./User');
const chatroom = require('./ChatRoom');

const ParticipateSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        ref: 'Users',
    },
    chatroom: {
        type: String,
        required: true,
        ref: 'Chatrooms'
    }
});

mongoose.models = {};

const Participate = mongoose.model("Participate", ParticipateSchema);

export default Participate;