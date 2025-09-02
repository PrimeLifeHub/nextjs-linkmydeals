
import { useEffect, useState } from 'react';

export default function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch('/api/fetch_offers')
      .then(res => res.json())
      .then(data => {
        if (data.Result) setOffers(data.Offers);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Офферы с LinkMyDeals</h1>
      {offers.length === 0 && <p>Загрузка офферов...</p>}
      <div>
        {offers.map((offer, idx) => (
          <div key={idx} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
            <h3>{offer.Title}</h3>
            <p>{offer.Description}</p>
            <a href={offer['Affiliate Link']} target="_blank" rel="noopener noreferrer">
              Перейти к предложению
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
