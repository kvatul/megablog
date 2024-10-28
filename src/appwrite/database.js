import conf from "../conf/conf.js";
import { Client, Databases, Query, ID } from "appwrite";

export class DataService {
  client = new Client();
  database;
  a;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjId);
    this.database = new Databases(this.client);
  }

  //async createPost({title, slug, content, featuredImage, status, userId}){

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Appwite Service:: CreateDocument Error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: UpdatePost Error ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwirte Service :: getPost error ", error);
      return false;
    }
  }

  //async listPost(queries=[Query.equal("status","active")]) {
  //or
  async listPost() {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      console.log("Appwirte Service :: listPost error ", error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.database.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: deletePost error", error);
    }
  }
}

const dataService = new DataService();

export default dataService;
