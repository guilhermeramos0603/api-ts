import express from "express";
import UserController from "./controllers/UserController";

const router = express.Router();

//USER
router.post("/user", UserController.create)
router.get("/user", UserController.findAll)
router.get("/user/:userId", UserController.findOne)
router.put("/user/:userId", UserController.update)
router.delete("/user/:userId", UserController.destroy)

export { router };