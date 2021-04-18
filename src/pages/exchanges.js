import * as React from 'react';
import { Router } from '@gatsbyjs/reach-router';

import Layout from '../components/layout';
import { Exchanges } from '../components/Exchanges';

const ExchangesPage = () => (
  <Layout>
    <Router>
      <Exchanges path="/exchanges/:page" component={Exchanges} />
      <Exchanges path="/exchanges" component={Exchanges} />
    </Router>
  </Layout>
);

export default ExchangesPage;
