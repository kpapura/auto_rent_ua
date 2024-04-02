import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllAdverts, selectIsAdded, selectIsLoading } from '../../redux/adverts/advertsSlice';
import { addAdvertsThunk, fetchAllAdvertsThunk } from '../../redux/adverts/advertsOperations';

import adverts from '../../data/data.json';

import Form from 'components/Form/Form';
import List from 'components/List/List';
import Loader from 'components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isAdded = useSelector(selectIsAdded);
  const allAdverts = useSelector(selectAllAdverts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!allAdverts.length) {
        dispatch(fetchAllAdvertsThunk());
    }
  
    else if (!isAdded && !allAdverts.length) {
      for (let advert of adverts) {
        dispatch(addAdvertsThunk(advert));
      }
    }
  }, [dispatch, isAdded, allAdverts]);

  return(
    <div>
    <Form />
   {isLoading ? <Loader /> :  <List/>}
  </div>
  )
};

export default CatalogPage;
