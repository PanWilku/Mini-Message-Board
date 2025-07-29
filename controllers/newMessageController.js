const getNewMessage = (req, res) => {
    res.render("newMessage");
}

const createNewMessage = (req, res) => {
const { message } = req.body;   
    // Here you would typically save the message to a database
    console.log("New message created:", message);
    res.redirect("/");
}

module.exports = {
    getNewMessage,
    createNewMessage
};