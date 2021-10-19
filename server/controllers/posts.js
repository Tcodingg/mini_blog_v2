const mongoose = require("mongoose");
const express = require("express");

const PostMessage = require("../models/postMessage");

const router = express.Router();

// ==== Get all posts ====
const getPost = async (req, res) => {
   try {
      const postMessage = await PostMessage.find({});
      res.status(200).json(postMessage);
   } catch (error) {
      console.log(error);
   }
};

// ==== create a post ====
const createPost = async (req, res) => {
   const post = req.body.post;
   const newPost = new PostMessage(post);

   try {
      await newPost.save();

      res.status(201).json(newPost);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

// ==== delete a post ====
const deletePost = async (req, res) => {
   const { id } = req.params;
   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No post with that id.");
   await PostMessage.findByIdAndRemove(id);
   res.json({ message: "item deleted" });
};

// ==== like a post ====

const likePost = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

   const post = await PostMessage.findById(id);

   const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { likeCount: post.likeCount + 1 },
      { new: true }
   );

   res.json(updatedPost);
};
module.exports = { getPost, createPost, deletePost, likePost, router };
