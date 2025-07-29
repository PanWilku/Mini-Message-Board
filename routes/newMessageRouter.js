const Router = require("express").Router;
const { getNewMessage } = require("../controllers/newMessageController");


const newMessageRouter = Router();

newMessageRouter.get("/new", getNewMessage);





module.exports = {
    newMessageRouter,
};