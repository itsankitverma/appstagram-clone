import { config } from "./firebase-config";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

let app = null;

if (getApps().length == 0) {
  app = initializeApp(config);
}

export const db = getFirestore();
export default app;
