import { getFirestore, collection, getDocs } from "firebase/firestore";
import { createObjectCsvWriter } from "csv-writer";
import path from "path";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";

// Initialize Firebase with your config
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function exportEmailsToCSV() {
  try {
    const emails: { email: string }[] = [];
    const messagesRef = collection(db, "messages");
    const snapshot = await getDocs(messagesRef);

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
    console.log(
      `Emails exported successfully to emails.csv. Total emails: ${emails.length}`
    );
  } catch (error) {
    console.error("Error exporting emails:", error);
  }
}

exportEmailsToCSV();
