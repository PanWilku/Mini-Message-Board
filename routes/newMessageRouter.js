const Router = require("express").Router;
const { getNewMessage } = require("../controllers/newMessageController");
const { createNewMessage } = require("../controllers/newMessageController");


const newMessageRouter = Router();

newMessageRouter.get("/new", getNewMessage);
newMessageRouter.post("/new", createNewMessage);






module.exports = {
    newMessageRouter,
};