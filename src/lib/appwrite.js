import { Client, Storage } from "appwrite";

const client = new Client();

// Replace with your Appwrite URL and Project ID
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6755c3df002bd1be8cac");
const storage = new Storage(client);

export { client, storage };
