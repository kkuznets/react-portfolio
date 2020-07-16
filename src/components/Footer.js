/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

export function FooterTemplate({ copyright, email }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell small-12">
            <div className="footer__contact">
              <h2>Do you have any projects?</h2>
              <a href={`mailto:${email}`} className="button">
                Contact
              </a>
            </div>
            <div className="footer__copyright">
              <p dangerouslySetInnerHTML={{ __html: copyright }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

FooterTemplate.propTypes = {
  copyright: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            copyright
            email
          }
        }
      }
    `}
    render={(query) => {
      const { site: { siteMetadata: props } } = query;

      return <FooterTemplate {...props} />;
    }}
  />
);

export default Footer;
