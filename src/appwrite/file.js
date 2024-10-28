import conf from "../conf/conf.js";
import { Client, ID, Storage } from "appwrite";
export class FileService {
  client = new Client();
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjId);
    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadFile error ", error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deleteFile error ", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service :: getFilePreview error ", error);
    }
  }
}

const fileService = new FileService();

export default fileService;
