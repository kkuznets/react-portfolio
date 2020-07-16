/* eslint-disable react/no-danger */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import styled from 'styled-components';

// Utils
import useMediaQuery from '../utils/useMediaQuery';
import useMeasure from '../utils/useMeasure';

function Skills({ title, subtitle, capabilities }) {
  const [bind, { width }] = useMeasure();
  const [items] = useState(capabilities);
  const columnCount = useMediaQuery(['(max-width: 639px)', '(max-width: 1199px)'], [1, 2], 3);

  // Each column gets a height (start at 0)
  const heights = new Array(columnCount).fill(0);

  const display = items.map((item) => {
    const { height } = item;
    const column = heights.indexOf(Math.min(...heights));
    const xy = [
      (width / columnCount) * column,
      (heights[column] += Number(height)) - Number(height),
    ];

    return {
      ...item,
      xy,
      width: width / columnCount,
      height: Number(height),
    };
  });

  return (
    <article className="skills">
      <div className="grid-x">
        <div className="cell medium-12">
          <div className="skills__heading">
            <h2>{title}</h2>
            <span>{subtitle}</span>
          </div>
        </div>
        <div className="cell medium-12">
          <div
            {...bind}
            className="skills__content"
            style={{ height: Math.max(...heights) }}
          >
            {display.map((item, key) => {
              const {
                name,
                content,
                xy,
                height,
                ...rest
              } = item;

              const icon = name.replace(/ /g, '-').toLowerCase();
              const paragraph = content.replace(/(<([^>]+)>)/gi, '');

              // Translate
              const translate = key <= 2
                ? key * -Math.round(height / 3.6)
                : (key - 2) * -Math.round(height / 3.6);

              // Styled
              const Item = styled.div(val => (
                `@media (min-width: 1200px) {
                  margin-top: ${val.options.margin}px;
                  transform: translateY(${val.options.translate}px) translate3d(${val.options.x}px,${val.options.y}px,0);
                }`
              ));

              return (
                <Item
                  key={name}
                  options={{
                    translate: translate.toString(),
                    margin: Math.round(height / 4).toString(),
                    x: Math.round(xy[0]).toString(),
                    y: Math.round(xy[1]).toString(),
                  }}
                  className="skills__item"
                  style={{ ...rest }}
                >
                  <div className="skills__box">
                    <span className={ClassNames(`icon-${icon}`)} />
                    <h3>{name}</h3>
                    <p>{paragraph}</p>
                  </div>
                </Item>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  capabilities: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Skills;
