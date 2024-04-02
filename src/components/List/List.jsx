import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllAdverts, selectFilterData, selectPage, selectPartOfAdverts} from '../../redux/adverts/advertsSlice';
import { fetchByPaginationAdvertsThunk } from '../../redux/adverts/advertsOperations';

import ListItem from 'components/ListItem/ListItem';

import { filterAdverts } from 'helpers/filterAdverts';
import s from './List.module.css';
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTop';

const List = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterData);
  const allAdverts = useSelector(selectAllAdverts);
  const partOfAdverts = useSelector(selectPartOfAdverts);
  const page = useSelector(selectPage);
  
  useEffect(() => {
  if (!partOfAdverts.length) {
  dispatch(fetchByPaginationAdvertsThunk(page));
  }
}, [dispatch,page,partOfAdverts]);

  const filteredAdverts = useMemo(() => {
    return filterAdverts(filter, partOfAdverts, allAdverts);
  }, [filter, partOfAdverts, allAdverts]);
  
  const handleLoadMore = (e) => {
    e.preventDefault();
    dispatch(fetchByPaginationAdvertsThunk(page));
  }

  return (
    <div className={s.advertsContainer}>
      <ul className={s.list}>
        {filteredAdverts?.map(advert => {
          return <ListItem key={advert.id} advert={advert} />;
        })}
      </ul>
      {filteredAdverts?.length !== 0 && filteredAdverts?.length % 12 === 0 && (
        <button className={s.listBtn} type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
      <ScrollToTopButton/>
    </div>
  );
};

export default List;
