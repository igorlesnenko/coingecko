import * as React from 'react';
import { Router } from '@gatsbyjs/reach-router';
import Layout from '../components/layout';
import { Exchange } from '../components/Exchange';
import SEO from '../components/seo';

const ExchangePage = () => (
  <Layout>
    <SEO title="Exchange" />
    <Router>
      <Exchange path="/exchange/:id" component={Exchange} />
    </Router>
  </Layout>
);

export default ExchangePage;
