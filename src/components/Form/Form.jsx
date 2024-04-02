import React, { useMemo } from 'react';
import Select from 'react-select';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { getFilterData } from '../../redux/adverts/advertsSlice';
import useSetSelectedValues from 'hooks/useSetState';

import { Input } from './Input/Input';

import makes from '../../data/makes.json';
import prices from '../../data/rentalPrice.json';

import { options } from 'helpers/selectOptions';

import s from './Form.module.css';
import './select.css';

const Form = () => {
  const {
    selectedMake,
    setSelectedMake,
    selectedPrice,
    setSelectedPrice,
    selectedFrom,
    setSelectedFrom,
    selectedTo,
    setSelectedTo,
    clearSelectedValues,
  } = useSetSelectedValues();
  const { register, handleSubmit, setValue, reset } = useForm();
  const dispatch = useDispatch();

  const makesValues = useMemo(() => {
    return options(makes);
  }, []);

  const rentalPricesValues = useMemo(() => {
    return options(prices);
  }, []);

  const submit = data => {
    dispatch(
      getFilterData({
        ...data,
        from: selectedFrom ? selectedFrom.value : '',
        to: selectedTo ? selectedTo.value : '',
      })
    );
    reset();
    clearSelectedValues();
  };

  return (
    <div className={s.formContainer}>
      <form onSubmit={handleSubmit(submit)} className={s.form}>
        <div className="selectContainer">
          <label htmlFor="make" className="label">
            Car brand
          </label>
          <Select
            id="make"
            name="make"
            className="react-select-make"
            classNamePrefix="react-select"
            options={makesValues}
            value={selectedMake}
            placeholder="Enter the text"
            onChange={value => {
              setValue('make', value.value);
              setSelectedMake(value);
            }}
          />
        </div>
        <div className="selectContainer">
          <label htmlFor="rentalPrice" className="label">
            Price/ 1 hour
          </label>
          <Select
            id="rentalPrice"
            name="rentalPrice"
            className="react-select-rentalPrice"
            classNamePrefix="react-select"
            options={rentalPricesValues}
            value={selectedPrice}
            placeholder="To $"
            onChange={value => {
              setValue('rentalPrice', value.value);
              setSelectedPrice({ ...value, label: `To ${value.value}$` });
            }}
          />
        </div>

        <div className={s.inputContainer}>
          <label>Сar mileage / km</label>
          <div className={s.box}>
            <Input
              className="input"
              name="From"
              placeholder="From"
              register={register}
              selected={selectedFrom}
              setSelected={setSelectedFrom}
            />
            <Input
              className="input"
              name="To"
              placeholder="To"
              register={register}
              selected={selectedTo}
              setSelected={setSelectedTo}
            />
          </div>
        </div>
        <div className={s.btnContainer}>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
