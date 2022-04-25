import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/AuthenticateUser";
import { authenticate } from "./authenticate.routes";
import { ListProducts } from "./listProducts.routes";
import { regProd } from "./regProd.routes";
import { register } from "./regUser.routes";

const router = Router();

router.use("/authenticate", authenticate)
router.use("/register", register)
router.use("/listProducts" , ensureAuthenticated, ListProducts)
router.use("/regProducts" , ensureAuthenticated, regProd)

export {router}