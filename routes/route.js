import express from "express";
const router = express.Router();
import Zamer from '../controllers/zamer.js'

// router.post("/createzamer", Zamer.create)
router.get("/test", Zamer.test)
router.post("/go", Zamer.mongopost)
router.post("/goExtensive", Zamer.mongopostExtensive)
// router.get("/", Zamer.site)

export default router