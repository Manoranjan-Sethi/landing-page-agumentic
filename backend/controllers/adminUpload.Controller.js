const Upload = require("../models/uplaodModel");

const upload = require("../utils/imageStorage");

//post
const uploadData = async (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    }
    const newImage = new Upload({
      caption: req.body.caption,
      image: {
        data: req.file.filename,
        contentType: "image/png/jpeg",
      },
    });
    newImage
      .save()
      .then(() => res.send("successfully Uploaded"))
      .catch((err) => console.log(err));
  });
};

const fetchData = async (req, res) => {
  const newData = await Upload.find();
  res.send(newData);
};

module.exports = {
  uploadData,
  fetchData,
};
