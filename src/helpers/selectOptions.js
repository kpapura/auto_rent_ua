export const options = (data) => {
    return data.map(option => {
      return { value: option, label: option };
    });
  };
