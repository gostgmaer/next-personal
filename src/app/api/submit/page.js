// pages/api/submit.js

import { connectToDatabase } from "@/util/mongodb";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const { db } = await connectToDatabase();

    const collection = db.collection('contacts');

    try {
      await collection.insertOne({
        name,
        email,
        message,
      });

      res.status(201).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Error submitting form' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
