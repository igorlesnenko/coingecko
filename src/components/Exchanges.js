import * as React from 'react';

export const Exchanges = ({ page }) => {
  const [exchanges, setExchanges] = React.useState(null);

  React.useEffect(() => {
    setExchanges([{ name: 123 }]);
  }, []);

  if (exchanges === null) {
    return <h2>Loading exchanges...</h2>;
  }

  return (
    <>
      {page}
      <ul>
        {exchanges.map((exchange) => (
          <li key={exchange.id}>{exchange.name}</li>
        ))}
      </ul>
    </>
  );
};
