import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/logo.jpeg"
import Navigation from 'components/Navigation/Navigation';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.logoBox}>
          <Link to="/">
            <img src={img} width="150px" height="100px" alt="" />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
