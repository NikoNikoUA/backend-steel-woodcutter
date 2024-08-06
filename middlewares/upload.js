import multer from "multer";
import path from "path";
// import helpers from "../helpers/index.js";

const destination = path.resolve("temp");

const storage = multer.diskStorage({
  destination,
  filename: (req, file, callback) => {
    const uniquePreffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
    const filename = `${uniquePreffix}_${file.originalname}`;
    callback(null, filename);
  },
});

const limits = {
  fileSize: 1024 * 1024 * 5,
};

// const fileFilter = (req, file, callback) => {
//   const extension = req.originalname.split(".").pop();
//   if (extension === "exe") {
//     callback(helpers.HttpError(400, ".exe is not valid extension"));
//   }
// };

const upload = multer({
  storage,
  limits,
  // fileFilter,
});

export default upload;
