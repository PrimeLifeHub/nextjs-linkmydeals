import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  const api_key = process.env.LINKMYDEALS_API_KEY;

  try {
    const response = await fetch(`https://feed.linkmydeals.com/getOffers/?API_KEY=${api_key}&format=json`);
    const data = await response.json();

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'https://myprimelifehub.com');
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ Result: false, error: error.message });
  }
}
