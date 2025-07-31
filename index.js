const express = require('express');
const app = express();
const mongoose  = require("mongoose");
const port = 8080;
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require('method-override');

app.use(methodOverride('_method'))


app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");

app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended : true}));


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

app.get("/chats" , async (req , res)=>{
    let chats = await chat.find();
    res.render("index.ejs" , {chats});
})

//Destroy route
app.delete("/chats/:id" , async(req , res)=>{
    let { id } = req.params;
    await chat.deleteOne({_id: id});
    res.redirect("/chats");
})

app.get("/chats/new" , (req , res)=>{
    res.render("new.ejs");
})

app.put("/chats/:id" , async(req , res)=>{
    let { id } = req.params;
    let { msg: newMessage } = req.body;
    let updatedChat = await chat.findByIdAndUpdate(id , {msg: newMessage});
    res.redirect("/chats");
})

app.post("/chats" , (req , res)=>{
    let {from , to , msg} = req.body;
    let newChat = new chat(
        {
            to: to,
            from: from,
            msg: msg,
            created_at: Date()
        }
    )
    newChat.save()
    .then(()=>{
        res.redirect("/chats");
    })
    .catch((err)=>{
        console.log(err);
        res.send("Error in adding Chat");
    })
})

app.get("/chats/:id/edit" , async(req , res)=>{
    let {id} = req.params;
    let EditChat = await chat.findById(id);
    console.log(EditChat);
    res.render("edit.ejs" , {EditChat});
})

app.get("/" , (req , res)=>{
    res.send("route is working");
})

app.listen(port , ()=>{
    console.log("App is listening");
})