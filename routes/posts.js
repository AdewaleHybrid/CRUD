const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET ALL POSTS USING ASYNC
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ Error: err });
  }
});

// GET A SINGLE POST
router.get("/:postID", async (req, res) => {
  try {
    // console.log(req.params.postID);
    const post = await Post.findById(req.params.postID);
    res.json(post);
  } catch (err) {
    res.json({ Error: err });
  }
});

// ADD A POST USING PROMISE
router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
  });
  // save post to database
  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ Error: err });
    });
});

// DELETE A POST
router.delete("/:postID", async (req, res) => {
  try {
    const removedPost = await Post.deleteOne({ title: req.params.postID });
    res.json(removedPost);
  } catch (err) {
    res.json({ Error: err });
  }
});

// UPDATE A POST
router.patch("/:postID", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postID },
      { $set: { title: req.body.title, description: req.body.description, body: req.body.body } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ Error: err });
  }
});

module.exports = router;
