import express from "express";
import { createPosts, getPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
// router.put("/put/:id",createput)
// router.delete("/delete/:id",delete)

export default router;
