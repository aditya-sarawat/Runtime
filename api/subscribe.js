import clientPromise from './lib/mongodb.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { email } = req.body;

    // Simple validation
    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    const client = await clientPromise;
    const db = client.db();
    const subscriptionsCollection = db.collection('subscriptions');

    // Upsert to ensure unique email subscription records
    const cleanEmail = email.toLowerCase().trim();
    await subscriptionsCollection.updateOne(
      { email: cleanEmail },
      {
        $set: { email: cleanEmail },
        $setOnInsert: { subscribedAt: new Date() }
      },
      { upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: 'Subscription logged successfully.',
    });
  } catch (error) {
    console.error('Error saving subscription:', error);
    return res.status(500).json({ error: 'Internal Server Error: Failed to write subscription.' });
  }
}
