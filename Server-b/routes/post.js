import express from "express";
import { createPosts, getPosts ,updatePost} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id",updatePost)
// router.delete("/delete/:id",delete)

export default router;
