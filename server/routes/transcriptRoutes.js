import express from "express";
import { processVideo } from "../controllers/transcriptController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/process", protect, processVideo);

export default router;