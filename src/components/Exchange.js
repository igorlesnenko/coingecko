import * as React from 'react';
import SEO from './seo';

export const Exchange = () => {
  const [exchange, setExchange] = React.useState(null);

  React.useEffect(() => {
    setExchange({ name: 'test' });
  }, []);

  if (exchange === null) {
    return (
      <>
        <SEO title="Exchange" />
        <h2>Loading exchange...</h2>
      </>
    );
  }

  return (
    <>
      <SEO title="Exchange" />
      <div>{exchange.name}</div>
    </>
  );
};
