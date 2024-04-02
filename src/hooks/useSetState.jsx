import { useState } from 'react';

const useSetSelectedValues = () => {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);

  const clearSelectedValues = () => {
    setSelectedMake(null);
    setSelectedPrice(null);
    setSelectedFrom({ formatted: '' });
    setSelectedTo({ formatted: '' });
  };

  return {
    selectedMake,
    setSelectedMake,
    selectedPrice,
    setSelectedPrice,
    selectedFrom,
    setSelectedFrom,
    selectedTo,
    setSelectedTo,
    clearSelectedValues,
  };
};

export default useSetSelectedValues;
