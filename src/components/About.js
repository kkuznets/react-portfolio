/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

function About({ title, subtitle, content }) {
  return (
    <article className="about">
      <div className="grid-x">
        <div className="cell medium-6">
          <div className="about__heading">
            <span>{subtitle}</span>
            <h1>{title}</h1>
          </div>
        </div>
        <div className="cell medium-6">
          <div className="about__content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </article>
  );
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default About;
