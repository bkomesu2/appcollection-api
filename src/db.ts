import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const serviceAccountPath = path.resolve(__dirname, "../serviceAccountKey.json");
const rawdata = fs.readFileSync(serviceAccountPath, "utf8");
const serviceAccount = JSON.parse(rawdata);

admin.initializeApp({
  credential: admin.credential.cert({
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    projectId: serviceAccount.project_id,
  }),
});

const db = admin.firestore();

export default db;
