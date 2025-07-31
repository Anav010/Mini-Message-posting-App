const mongoose  = require("mongoose");
const chat = require("./models/chat.js");

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main()
.then(()=>{
    console.log("Connection with mongoose established");
})
.catch((err)=>{
    console.log(err);
})

chat.insertMany([
    {
        from: "Anav",
        to:"Neha",
        msg: "How are you",
        created_at: new Date()
    },
    {
        from: "Neha",
        to:"Anav",
        msg: "I am good",
        created_at: new Date()
    },
    {
        from: "Anav",
        to:"Medha",
        msg: "Good Morning",
        created_at: new Date()
    },
    {
        from: "Saiesha",
        to:"Anav",
        msg: "Kya kar rhe ho",
        created_at: new Date()
    },
    {
        from: "Tanmay",
        to:"Anav",
        msg: "Chotu uth jaa",
        created_at: new Date()
    },
    {
        from: "Anav",
        to:"Harshul",
        msg: "Send my money back ASAP!!",
        created_at: new Date()
    },
    {
        from: "Anav",
        to:"Ananya",
        msg: "Hello Dear",
        created_at: new Date()
    },

]);
