import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavAdverts } from '../../redux/adverts/advertsSlice';
import ListItem from 'components/ListItem/ListItem';

import s from "./FavoritesPage.module.css"
import { NavLink } from 'react-router-dom';

const FavoritesPage = () => {
  const favAdverts = useSelector(selectFavAdverts);

  return (
    <div className={s.favList}>
      {!favAdverts.length ? 
        <>
        <h1 className={s.empty}>Your list is empty</h1>
        <NavLink className={s.link} to="/catalog">Start research</NavLink>
        </>
    :
        <ul className={s.list}>
          {favAdverts.map(advert => {
            return <ListItem key={advert.id} advert={advert} />;
          })}
        </ul>}
        
    </div>
  );
};

export default FavoritesPage;
