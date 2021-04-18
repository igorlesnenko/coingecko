import * as React from 'react';
import { Router } from '@gatsbyjs/reach-router';

import Layout from '../components/layout';
import { Exchanges } from '../components/Exchanges.tsx';
import SEO from '../components/seo';

const ExchangesPage = () => (
  <Layout>
    <SEO title="Exchanges" />
    <Router>
      <Exchanges path="/exchanges/:page" component={Exchanges} />
      <Exchanges path="/exchanges" component={Exchanges} />
    </Router>
  </Layout>
);

export default ExchangesPage;
