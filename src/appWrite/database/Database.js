import conf from "../../conf/Conf";
import { Client, Account , Storage ,Query} from "appwrite";
import { Databases, ID } from "appwrite";

// export const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('<YOUR_PROJECT_ID>'); // Replace with your project ID

// export const account = new Account(client);
// export { ID } from 'appwrite';
class DatabaseService {
  client = new Client();
  databases;
  bucket;

  constructor(){
   this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);
      this.databases = new Databases(this.client);
      this.bucket = new Storage(this.client)
  }

  async createPost({tittle,content,slug,FeatureImage,Status,UserId}){
    console.log(Status,"dfsdfs");
    
    try {
      return await this.databases.createDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        slug,
        {  content,
            tittle  ,
            FeatureImage,
            Status :Boolean(Status),
            UserId
        }
    );
    } catch (error) {
      console.log(error,"error while creating post");
      return false
    }
    
  }
   
  async updatePost(slug,{tittle,content,FeatureImage,Status}){
    return  result = await this.databases.updateDocument(
        conf.APPWRITE_DATABASE_ID, // databaseId
        conf.APPWRITE_COLLECTION_ID, // collectionId
        slug, // documesluntId
        {
            tittle,
            content,
            FeatureImage,
            Status
        }, // data (optional)
         // permissions (optional)
    );
  }

  async deletePost(slug){
    return await this.databases.deleteDocument(
        conf.APPWRITE_DATABASE_ID, // databaseId
        conf.APPWRITE_COLLECTION_ID, // collectionId
        slug 
    );
  }

 async getPost(slug){
  try {
    const result = await this.databases.getDocument(
      conf.APPWRITE_DATABASE_ID, // databaseId
      conf.APPWRITE_COLLECTION_ID, // collectionId
      slug, // documentId
      [] // queries (optional)
  );
  return result
  } catch (error) {
     return false
  }

 }

 async getAllPost(queries = [Query.equal('Status', true)]){
   try {
    const result = await this.databases.listDocuments(
      conf.APPWRITE_DATABASE_ID, // databaseId
      conf.APPWRITE_COLLECTION_ID, // collectionId
      queries// queries (optional)
    );
    return result
   } catch (error) {
      console.log(error,"get all post");
      
      return false
   }
 }


  async uploadFile(file){
    
    try {
      return await this.bucket.createFile(
        conf.APPWRITE_BUCKET_ID, 
        ID.unique(),
        file
    );
    } catch (error) {
      console.log(error,"Dfsdf");
      
       return false
    }
    
  }

  async deleteFile(fileId){
    try {
      const result = await this.bucket.deleteFile(
        conf.APPWRITE_BUCKET_ID,  // bucketId
        fileId // fileId
    );
    return result
    } catch (error) {
      console.log(error);
      return false
    }
  }

  async getFilePreview(fileId){
    console.log(fileId,"dsfsdfsdfsdfsdfsdfsfsfsdfs");
    
    return this.bucket.getFilePreview(
      conf.APPWRITE_BUCKET_ID, // bucketId
      fileId, // fileId
    );
  }

}

const StorageService = new  DatabaseService()

export default StorageService
 