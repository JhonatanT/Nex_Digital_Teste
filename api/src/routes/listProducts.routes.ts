import { Router } from "express";
import { ListProductsController } from "../controller/Products/ListsProducts/ListProductsController";

const ListProducts = Router()

const listProductsController = new ListProductsController();

ListProducts.post("/", listProductsController.handle)

export {ListProducts}