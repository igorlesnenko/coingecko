import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { apiUrl } from '../../config';
import {Pagination} from "../controls/Pagination";

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
`;

type Exchange = {
  id: string,
  image: string,
  name: string,
  country: string,
  trust_score: number,
  url: string
}

export const Exchanges = ({ page }: { page: string }) => {
  const [exchanges, setExchanges] = React.useState(null);
  const [total, setTotal] = React.useState(0);
  
  const itemsPerPage = 10;
  const pageNumber = page ?? 1;
  
  const fetchExchanges = async () => {
    const { data, headers } = await axios.get(
        `${apiUrl}/exchanges?per_page=${itemsPerPage}&page=${pageNumber}`,
    );
    setExchanges(data);
    setTotal(headers.total);
  };
  
  React.useEffect( () => {
    fetchExchanges()
  }, [pageNumber]);

  if (exchanges == null) {
    return <h2>Loading exchanges...</h2>;
  }
  
  // coingecko API for some reason returns 'missing_small.png' when no image
  const isNoImageResponse = (image: string) => image === 'missing_small.png';

  return (
    <>
      {(exchanges ?? []).map((exchange : Exchange) => (
        <ExchangeRow key={exchange.id}>

          {!isNoImageResponse(exchange.image) &&
            <img src={exchange.image} alt={exchange.name}/>
          }

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
        <Pagination
            page={Number.parseInt(pageNumber)}
            perPage={itemsPerPage}
            total={total}
        />
        <div>{total} results</div>
      </PaginationContainer>
    </>
  );
};
