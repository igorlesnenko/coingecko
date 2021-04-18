import * as React from 'react';
import { Router } from '@gatsbyjs/reach-router';

import Layout from '../components/layout';
import { Exchanges } from '../components/Exchanges.tsx';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Exchanges" />
    <Router>
      <Exchanges path="/" component={Exchanges} />
    </Router>
  </Layout>
);

export default IndexPage;
