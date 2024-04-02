const useSelectedValue = (name, selected, setSelected) => {
  const handleChange = e => {
    const inputValue = e.target.value;
    setSelected({
      formatted: inputValue,
      value: inputValue,
    });
  };
  const handleBlur = () => {
    if (!isNaN(selected?.value)) {
      setSelected({
        formatted: `${name} ${(+selected.value).toLocaleString('en-US')}`,
        value: selected.value,
      });
    }
  };

  const handleFocus = () => {
    setSelected({
      formatted: selected?.value,
      value: selected?.value,
    });
  };

  return {
    handleChange,
    handleBlur,
    handleFocus,
  };
};

export default useSelectedValue;
