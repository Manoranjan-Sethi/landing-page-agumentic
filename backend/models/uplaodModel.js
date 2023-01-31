const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema(
  {
    caption: {
      type: String,
      require: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const uploadModel = mongoose.model("upload", uploadSchema);

module.exports = uploadModel;
