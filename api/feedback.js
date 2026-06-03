import clientPromise from './lib/mongodb.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { category, name, email, subject, message } = req.body;

    // Server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, and message are required.' });
    }

    const client = await clientPromise;
    const db = client.db(); // Connects to the database in connection string, or default
    const feedbackCollection = db.collection('feedback');

    const feedbackDoc = {
      category: category || 'general-request',
      name,
      email,
      subject: subject || '',
      message,
      createdAt: new Date(),
    };

    const result = await feedbackCollection.insertOne(feedbackDoc);

    return res.status(200).json({
      success: true,
      message: 'Feedback submitted successfully.',
      insertedId: result.insertedId,
      txHash: '0x' + result.insertedId.toString(), // Creating a realistic hex-based ID matching the UI design
    });
  } catch (error) {
    console.error('Error saving feedback:', error);
    return res.status(500).json({ error: 'Internal Server Error: Failed to write to database.' });
  }
}
