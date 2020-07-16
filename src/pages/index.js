import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

// Screenshot
import screenshot from '../../screenshot.png';

const IndexTemplate = ({
  childWordPressAcfAbout: about,
  childWordPressAcfSkills: skills,
  childWordPressAcfProjects: projects,
}) => (
  <main>
    <div className="grid-container">
      <About {...about} />
      <Skills {...skills} />
      <Projects {...projects} />
    </div>
  </main>
);

IndexTemplate.propTypes = {
  childWordPressAcfAbout: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  childWordPressAcfSkills: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    capabilities: PropTypes.array.isRequired,
  }).isRequired,
  childWordPressAcfProjects: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    work: PropTypes.array.isRequired,
  }).isRequired,
};

const Index = ({ data }) => {
  const { wordpressPage: page, wordpressSiteMetadata: meta } = data;
  const { name, description } = meta;

  return (
    <Layout>
      <Helmet>
        <title>{name}</title>
        <meta name="author" content={name} />
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:image" content={screenshot} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:description" content={description} />
        <html lang="en" />
      </Helmet>
      <IndexTemplate {...page} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object.isRequired,
    wordpressSiteMetadata: PropTypes.object.isRequired,
  }).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query {
    wordpressPage(slug: { eq: "home" }) {
      childWordPressAcfAbout {
        title
        subtitle
        content
      }
      childWordPressAcfSkills {
        title
        subtitle
        capabilities {
          name
          content
          height
        }
      }
      childWordPressAcfProjects {
        title
        subtitle
        work {
          name
          content
          links
          image {
            source_url
          }
        }
      }
    }
    wordpressSiteMetadata {
      name
      description
    }
  }
`;
