const Message = require("../models/Message");


const getIndex = async (req, res) => {
    try {
        const messages = await Message.find();
        res.render("index", { messages });
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).send("Internal Server Error");
    }

}
module.exports = {
    getIndex
};