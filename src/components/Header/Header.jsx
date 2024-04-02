import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';

import sprite from '../../icons/symbol-defs.svg';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.logoBox}>
          <Link to="/">
            <svg width="80" height="40">
              <use xlinkHref={`${sprite}#icon-logo`}></use>
            </svg>
          </Link>
          <p>Auto Rent UA</p>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
