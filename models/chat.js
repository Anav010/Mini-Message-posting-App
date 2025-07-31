const mongoose = require ("mongoose");


const ChatSchema = new mongoose.Schema({
    from: {
        type: String
    },
    to:{
        type: String
    },
    msg:{  
        type: String,
        maxLength: 50
    },
    created_at:{
        type: Date
    }
});

const chat = mongoose.model("chat" , ChatSchema);

module.exports = chat;