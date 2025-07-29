const Message = require("../models/Message");


const getNewMessage = (req, res) => {
    res.render("newMessage");
}

const createNewMessage = (req, res) => {
    console.log(req.body);
const { name, message } = req.body;
console.log("Received message:", message);  
    const newMessage = new Message({
        name: name,
        message: message
    });

    newMessage.save()
    .then(() => {
        console.log("Message saved successfully");
    })
    .catch((error) => {
        console.error("Error saving message:", error);
    });
    res.redirect("/");
}

module.exports = {
    getNewMessage,
    createNewMessage
};