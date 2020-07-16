import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';

const NotFoundTemplate = () => (
  <main>
    <div className="grid-container">
      <div className="error-404">
        <h1>404</h1>
        <p>Page Not Found</p>
      </div>
    </div>
  </main>
);

const NotFound = ({ data }) => {
  const { wordpressSiteMetadata: meta } = data;
  const { name } = meta;

  return (
    <Layout>
      <Helmet title={`${name} | 404`} />
      <NotFoundTemplate />
    </Layout>
  );
};

NotFound.propTypes = {
  data: PropTypes.shape({
    wordpressSiteMetadata: PropTypes.object.isRequired,
  }).isRequired,
};

export default NotFound;

export const pageQuery = graphql`
  query {
    wordpressSiteMetadata {
      name
      description
    }
  }
`;
