import { Router } from "express";
import { AuthenticateController } from "../controller/Users/Authenticate/AuthenticateController";

const authenticate = Router()

const authenticateController = new AuthenticateController();

authenticate.post("/",authenticateController.handle)

export {authenticate}