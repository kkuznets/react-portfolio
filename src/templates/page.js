/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';

export function PageTemplate({ title, content }) {
  return (
    <main className="grid-container">
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  );
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

const Page = ({ data }) => {
  const { wordpressPage: page } = data;

  return (
    <Layout>
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object.isRequired,
  }).isRequired,
};

export default Page;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`;
