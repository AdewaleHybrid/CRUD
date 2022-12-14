const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  body: { type: String, require: true },
});

module.exports = mongoose.model("Post", PostSchema);
