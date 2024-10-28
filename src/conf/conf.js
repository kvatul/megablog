const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPRITE_URL),
  appwriteProjId: String(import.meta.env.VITE_APPRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPRITE_BUCKET_ID),
};

export default conf;
