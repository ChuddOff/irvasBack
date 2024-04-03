import express from "express";
const router = express.Router();
import Zamer from '../controllers/zamer.js'

// router.post("/createzamer", Zamer.create)
router.get("/test", Zamer.test)
router.post("/go", Zamer.mongopost)
// router.get("/", Zamer.site)

export default router