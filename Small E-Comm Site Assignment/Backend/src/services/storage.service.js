import Imagekit, { toFile } from "@imagekit/nodejs";
import config from "../config/config.js";

const client = new Imagekit({
  privateKey: config.IK_PRIVATE_KEY,
});  

const uploadFiles = async (buffer, fileName) => {
  const response = await client.files.upload({
    file: await toFile(buffer),
    fileName: fileName,
    folder: "small-e-comm",
  });
  return response;
};

export default uploadFiles;
