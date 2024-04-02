import React from 'react';
import s from './ListItem.module.css';
import {
  addToFav,
  removeFromFav,
  selectFavAdverts,
} from '../../redux/adverts/advertsSlice';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../icons/symbol-defs.svg';
import { useModal } from 'hooks/useModal';
import Modal from 'components/Modal/Modal';
import DetailsForm from 'components/DetailsForm/DetailsForm';
import { formatCity, formatCountry, formattedFunctionality } from 'helpers/formatData';

const ListItem = ({ advert }) => {
  const { isOpen, toggle } = useModal();
  const dispatch = useDispatch();
  const favAdverts = useSelector(selectFavAdverts);
  const {img, model, address, rentalCompany, type, id, functionalities, make, rentalPrice, year} = advert;
  
  const city = formatCity(address);
  const country = formatCountry(address);
  const functionality = formattedFunctionality(functionalities[0])

  const handleAddToFav = data => {
    if (favAdverts.find(advert => advert.id === data.id)) {
      return dispatch(removeFromFav(data.id));
    }
    dispatch(addToFav(data));
  };
  const favAdvert = favAdverts.find(favAdvert => favAdvert.id === advert.id);
  const formattedModel =
    (model === 'SLK-Class' && 'Mercedes') ||
    (model === 'Range Rover Sport' && 'Range Rover') ||
    model;
  const formattedType = type.includes('Sedan') ? 'Sedan' : type;
  
  const learnMore = () => {
  toggle()
  }
  if (isOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
  return (
    <li className={s.item}>
      <div className={s.imgBox}>
        <img className={s.img} src={img} alt={model} width="350px" />
        <button onClick={() => handleAddToFav(advert)} className={s.btnIcon}>
          <svg className={favAdvert ? s.active : ''} width="18" height="18">
            <use xlinkHref={`${sprite}#icon-heart`}></use>
          </svg>
        </button>
      </div>
      <div className={s.titleBox}>
        <p className={s.title}>
          {make} <span>{model.length > 8 ? '' : model}</span>, {year}
        </p>
        <p className={s.title}>{rentalPrice}</p>
      </div>
      <div className={s.desc}>
        <p>{city}</p>|<p>{country}</p>|<p>{rentalCompany}</p>{' '}
      </div>
      <div className={s.desc}>
        <p>{formattedType}</p>|<p>{model === type ? make : formattedModel}</p>|
        <p>{id}</p>|<p>{functionality}...</p>{' '}
      </div>
      <button onClick={learnMore} className={s.btn}>Learn more</button>
      {isOpen && (<Modal closeModal={toggle}><DetailsForm toggle={toggle} advert={advert} /></Modal>) }  
    </li>
    
  );
};

export default ListItem;
