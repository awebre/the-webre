import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Posts from 'components/Posts';
import WorkInProgress from 'components/WorkInProgress';

const BlogPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <WorkInProgress />
    </Layout>
  );
};

export default BlogPage;
