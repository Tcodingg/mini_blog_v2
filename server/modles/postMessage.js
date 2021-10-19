const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
   title: String,
   note: String,
   img: String,
   likes: {
      type: Number,
      default: 0,
   },
});
