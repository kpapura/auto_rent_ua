import React from 'react';

import useSelectedValue from "hooks/useInputValue";
import s from "../Form.module.css"

export const Input = ({ name, register, placeholder, className, selected, setSelected}) => {
    const { handleChange, handleBlur, handleFocus } = useSelectedValue(name,selected,setSelected);

    return (
     
        <input
              autoComplete='off'
              className={`${s.input} ${className}`}
              {...register(name)}
              placeholder={placeholder}
              value={selected?.formatted || ''}

              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />      
  );
};