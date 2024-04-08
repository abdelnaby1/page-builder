import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";
import { FirebaseError } from "firebase/app";

export const uploadImage = async (image: File) => {
  let url;
  try {
    const uploadPath = `images/${Date.now()} ${image?.name}`;
    const storageRef = ref(storage, uploadPath);
    const snapshot = await uploadBytes(storageRef, image);
    url = await getDownloadURL(snapshot.ref);
  } catch (error) {
    const errorObj = error as FirebaseError;
    console.log(error);
  }
  return url;
};
