import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { apiUrl } from '../../config';

const ExchangeRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #efefef;
  img {
    margin: 0;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
`;

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
      {exchanges.map((exchange) => (
        <ExchangeRow key={exchange.id}>
          <img src={exchange.image} alt={exchange.name} />

          <div
            style={{
              marginLeft: '10px',
            }}
          >
            <Link to={`/exchange/${exchange.id}`}>{exchange.name}</Link>
            {' '}
            •
            {' '}
            {exchange.country}
            {' '}
            • Trust score:
            {exchange.trust_score}
            {' '}
            •
            {' '}
            <a href={exchange.url}>{exchange.url}</a>
          </div>
        </ExchangeRow>
      ))}

      <PaginationContainer>
        pagination
        {page}
        {' '}
        {total}
      </PaginationContainer>
    </>
  );
};
