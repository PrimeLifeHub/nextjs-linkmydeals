export default async function handler(req, res) {
  const api_key = '7ef866099caa3b69cc46c9d44a7f8284';

  try {
    const response = await fetch(`https://feed.linkmydeals.com/getOffers/?API_KEY=${api_key}&format=json`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ Result: false, error: error.message });
  }
}
