import { ID } from "appwrite";
import { toast } from "react-toastify";
import { storage } from "../../lib/appwrite";

/**
 * Uploads a file to Appwrite storage and returns its preview URL.
 * @param {File} file - The file to upload.
 * @param {string} bucketId - The Appwrite storage bucket ID.
 * @returns {Promise<string|null>} - The file preview URL or null if upload fails.
 */
const Upload = async (file, bucketId) => {
  try {
    // Upload the file to the specified bucket
    const res = await storage.createFile(bucketId, ID.unique(), file);
    console.log("File uploaded successfully:", res);

    // Generate and return the file preview URL
    return storage.getFilePreview(bucketId, res.$id);
  } catch (error) {
    console.error("File upload error:", error);
    toast.error("File not uploaded. Please try again.");
    return null; 
  }
};

export default Upload;
