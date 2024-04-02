import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';

import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.mainContainer}>
      <Header />
      <div className={s.secondaryContainer}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
