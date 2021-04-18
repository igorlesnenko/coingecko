import * as React from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import SEO from './seo';
import { apiUrl } from '../../config';

export const Exchange = ({ id }) => {
  const [exchange, setExchange] = React.useState(null);
  React.useEffect(async () => {
    const { data } = await axios.get(`${apiUrl}/exchanges/${id}`);
    setExchange(data);
  }, []);

  if (exchange === null) {
    return <h2>Loading exchange...</h2>;
  }

  return (
    <>
      <SEO title={`Exchange ${exchange.name}`} />
      <div
        style={{
          marginBottom: '20px',
        }}
      >
        <Link to="/">← Back to main page</Link>
      </div>
      <div>
        <img src={exchange.image} alt={exchange.name} />
      </div>
      <div>{exchange.name}</div>
      <div>{exchange.country}</div>
      <div>
        Trust score:
        {exchange.trust_score}
      </div>
      <div>
        Year established:
        {exchange.year_established}
      </div>
      {exchange.facebook_url !== '' && (
        <div>
          <a href={exchange.facebook_url}>{exchange.facebook_url}</a>
        </div>
      )}
    </>
  );
};
