import { Router } from "express";
import { RegUserController } from "../controller/Users/Register/RegUserController";

const register = Router()

const regUserController = new RegUserController();

register.post("/", regUserController.handle)

export {register}