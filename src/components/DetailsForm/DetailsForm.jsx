import React from 'react';
import s from './DetailsForm.module.css';
import { nanoid } from 'nanoid';
import { formatCity, formatCountry, formattedConditions } from 'helpers/formatData';

const DetailsForm = ({ advert }) => {
  const { img, make, model, year, address, id, type, fuelConsumption, engineSize, description, functionalities, accessories, rentalConditions, rentalPrice, mileage} = advert;
      
const city = formatCity(address)
const country = formatCountry(address)
const conditions = formattedConditions(rentalConditions)

    return (
      <div className={s.card}>
          
      <div className={s.imgBox}>
        <img className={s.img} src={img} alt={model} width="450px" />
      </div>

      <p className={s.title}>{make} <span>{model}</span>, {year}</p>

      <div className={s.desc}>
        <p>{city}<span style={{padding:"0 6px"}}>|</span>{country}<span style={{padding:"0 6px"}}>|</span>Id: {id}<span style={{padding:"0 6px"}}>|</span>Year: {year}<span style={{padding:"0 6px"}}>|</span>Type: {type}</p>
        <p>Fuel Consumption: {fuelConsumption}<span style={{padding:"0 6px"}}>|</span>Engine Size: {engineSize}</p>    
      </div>

      <p className={s.description}>{description}</p>
          
      <p className={s.addTitle}>Accessories and Functionalities:</p>
            <div className={s.accessories}>{accessories.map(elem => <p key={nanoid()}>{elem.split(' ').slice(0,2).join(' ')}<span style={{padding:"0 0 0 6px"}}>|</span></p>)}</div>
            <div className={s.accessories}>{functionalities.map(elem => <p key={nanoid()}> {elem.split(' ').slice(0,2).join(' ')}<span style={{padding:"0 0 0 6px"}}>|</span></p>)}</div>
      
      <p className={s.titleConditions}>Rental Conditions:</p>
      
            <div className={s.rentalConditions}><p>Price: <span style={{color:"rgb(52, 112, 255)", fontWeight:"600"}}>{rentalPrice}</span></p>
                {conditions}
                <p>Mileage: <span style={{color:"rgb(52, 112, 255)", fontWeight:"600"}}>{mileage.toLocaleString('en-US')}</span></p>
            </div>   
       
      <a className={s.btn} href="tel:+380730000000">Rental car</a>
    </div>
  );
};

export default DetailsForm;

