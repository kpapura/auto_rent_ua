export const filterAdverts = (filter, partOfAdverts, allAdverts) => {
  if (!filter) return partOfAdverts;
  if (filter.make === 'All') return partOfAdverts;
  return allAdverts.filter(({ make, rentalPrice, mileage }) => {
    const price = parseInt(rentalPrice.split('$')[1]);
    const filterPrice = +filter.rentalPrice;
    const makeMatch = filter.make ? make === filter.make : make;
    const rentalPriceMatch = filterPrice ? filterPrice >= price : price;
    const mileageMatch =
      (filter.from && filter.to
        ? mileage >= filter.from && mileage <= filter.to
        : mileage) &&
      (filter.from ? mileage >= filter.from : mileage) &&
      (filter.to ? mileage <= filter.to : mileage);

    return makeMatch && rentalPriceMatch && mileageMatch;
  });
};
