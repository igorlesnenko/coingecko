import * as React from 'react';
import axios from 'axios';
import { apiUrl } from '../../config';

export const Exchanges = ({ page }) => {
  const [exchanges, setExchanges] = React.useState(null);
  const [total, setTotal] = React.useState(null);

  React.useEffect(async () => {
    const { data, headers } = await axios.get(
      `${apiUrl}/exchanges?per_page=10&page=${page ?? 1}`,
    );
    setExchanges(data);
    setTotal(headers.total);
  }, []);

  if (exchanges === null) {
    return <h2>Loading exchanges...</h2>;
  }

  return (
    <>
      {page}
      {' '}
      {total}
      <ul>
        {exchanges.map((exchange) => (
          <li key={exchange.id}>{exchange.name}</li>
        ))}
      </ul>
    </>
  );
};
