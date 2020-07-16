/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

// Images
import Moon from '../icons/moon.svg';
import Sun from '../icons/sun.svg';

// Utils
import useDarkMode from '../utils/useDarkMode';

export function HeaderTemplate({ email }) {
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    const defaultElement = window.document.body;
    const classNameDark = 'dark-mode';
    const classNameLight = 'light-mode';

    defaultElement.classList.add(theme === 'light' ? classNameDark : classNameLight);
    defaultElement.classList.remove(theme === 'light' ? classNameLight : classNameDark);
  }, [theme]);

  return (
    <header className="header" role="banner">
      <div className="grid-container">
        <div className="grid-x align-middle">
          <div className="cell small-4 large-6">
            <div className="header__branding">
              <span className="icon-logo" />
            </div>
          </div>
          <div className="cell small-8 large-6">
            <div className="header__contact">
              <div className="grid-x align-right align-middle">
                <button
                  onClick={() => toggleTheme(!theme)}
                  aria-label={
                    theme === 'light'
                      ? 'Activate light mode'
                      : 'Activate dark mode'
                  }
                  className="mode"
                >
                  {theme === 'light' ? <Sun /> : <Moon />}
                </button>
                <a href={`mailto:${email}`} className="button">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

HeaderTemplate.propTypes = {
  email: PropTypes.string.isRequired,
};

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            email
          }
        }
      }
    `}
    render={(query) => {
      const { site: { siteMetadata: props } } = query;

      return <HeaderTemplate {...props} />;
    }}
  />
);

export default Header;
