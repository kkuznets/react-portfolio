/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

function Projects({ title, subtitle, work }) {
  return (
    <article className="projects">
      <div className="grid-x align-middle">
        <div className="cell small-12">
          <div className="projects__heading">
            <h2>{title}</h2>
            <span>{subtitle}</span>
          </div>
        </div>
        <div className="cell medium-12">
          <div className="projects__content">
            <div className="grid-x">
              {work.map((val, key) => {
                const {
                  name,
                  content,
                  links,
                  image: { source_url },
                } = val;
                const oddOrEven = (key % 2) ? 'projects__box--even' : 'projects__box--odd';

                return (
                  <div key={name} className="cell medium-6 large-12">
                    <div className={ClassNames('projects__box', oddOrEven)}>
                      <div className="grid-x">
                        <div className="cell medium-12 large-6">
                          <img src={source_url} alt={name} />
                        </div>
                        <div className="cell medium-12 large-6">
                          <h3>{name}</h3>
                          <div className="projects__paragraph" dangerouslySetInnerHTML={{ __html: content }} />
                          <a target="_blank" rel="noopener noreferrer nofollow" href={links} className="button hollow">
                            Live Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  work: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      links: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    }),
  ).isRequired,
};

export default Projects;
