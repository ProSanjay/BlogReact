import conf from "../../conf/Conf";
import { Client, Account } from "appwrite";
import { ID } from "appwrite";

// export const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('<YOUR_PROJECT_ID>'); // Replace with your project ID

// export const account = new Account(client);
// export { ID } from 'appwrite';
class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID); // Replace with your project ID
      this.account = new Account(this.client)
  }

  login = async ({Email, Password}) => {
    return await this.account.createEmailPasswordSession(Email, Password);
  };

  register = async (email,password,name) => {
    console.log(email,password,name,"dfdsfsdfsdf");
    
    let account = await this.account.create(ID.unique(), email, password, name);
    console.log(account,"account and sanjay");
    
    if(account){
        return true
    }else{
        throw new Error("Internal server error");
    }
  };

  getCurrentUser  =  async() =>{
    try {
      return await this.account.get();
      // Logged in
  } catch (err) {
      // Not logged in
  }
  }

  logOut = async () =>{
    console.log("logout");
    
   return  await this.account.deleteSessions();

  }

 
 
}

const authServiceObj = new AuthService()
export default authServiceObj
