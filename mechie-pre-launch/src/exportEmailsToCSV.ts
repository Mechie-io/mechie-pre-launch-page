import * as admin from "firebase-admin";
import { createObjectCsvWriter } from "csv-writer";
import path from "path";

// Load the Firebase service account key
const serviceAccount = require("./firebase.json"); // Update the path if needed

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore instance
const db = admin.firestore();

async function exportEmailsToCSV() {
  try {
    const emails: { email: string }[] = [];
    const snapshot = await db.collection("messages").get();

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.email) {
        emails.push({ email: data.email });
      }
    });

    const csvWriter = createObjectCsvWriter({
      path: path.resolve(__dirname, "emails.csv"),
      header: [{ id: "email", title: "Email" }],
    });

    await csvWriter.writeRecords(emails);
    console.log("Emails exported successfully to emails.csv");
  } catch (error) {
    console.error("Error exporting emails:", error);
  }
}

exportEmailsToCSV();
