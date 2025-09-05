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
    console.log("Firebase config:", {
      projectId: firebaseConfig.projectId,
      authDomain: firebaseConfig.authDomain,
    });

    const emails = [];
    const messagesRef = collection(db, "messages");
    console.log("Querying collection: messages");

    const snapshot = await getDocs(messagesRef);
    console.log(`Found ${snapshot.size} documents in messages collection`);

    snapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Document data:", data);
      if (data.email) {
        emails.push({ email: data.email });
        console.log("Added email:", data.email);
      } else {
        console.log("No email field found in document:", doc.id);
      }
    });

    console.log(`Total emails collected: ${emails.length}`);

    if (emails.length === 0) {
      console.log("No emails found. Please check:");
      console.log("1. The collection name is correct (should be 'messages')");
      console.log("2. The field name is correct (should be 'email')");
      console.log("3. There are actually documents in the collection");
      return;
    }

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
