import { Router } from "express";
import { RegProductsController } from "../controller/Products/RegProducts/RegProductsController";

const regProd = Router()

const regProductsController = new RegProductsController();

regProd.post("/",regProductsController.handle)

export {regProd}