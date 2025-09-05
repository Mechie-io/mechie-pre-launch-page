require("dotenv").config();
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require("firebase/firestore");
const { createObjectCsvWriter } = require("csv-writer");
const path = require("path");

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function exportEmailsToCSV() {
  try {
    console.log("Starting email export...");

    const emails = [];
    const messagesRef = collection(db, "messages");
    const snapshot = await getDocs(messagesRef);
    console.log(`Found ${snapshot.size} documents in messages collection`);

    snapshot.forEach((doc) => {
      const data = doc.data();
      if (data.email) {
        emails.push({ email: data.email });
      }
    });

    console.log(`Total emails collected: ${emails.length}`);

    const csvWriter = createObjectCsvWriter({
      path: path.resolve(__dirname, "src", "emails.csv"),
      header: [{ id: "email", title: "Email" }],
    });

    await csvWriter.writeRecords(emails);
    console.log(
      `Emails exported successfully to emails.csv. Total emails: ${emails.length}`
    );
  } catch (error) {
    console.error("Error exporting emails:", error);
    process.exit(1);
  }
}

// Run the export
exportEmailsToCSV();
