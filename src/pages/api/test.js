export default function handler(req, res) {
  res.json({ uri: process.env.MONGODB_URI });
}
