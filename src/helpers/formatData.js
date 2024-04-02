import { nanoid } from "nanoid";

export const formatCity = (address) => {
return address.split(',')[1];
}
export const formatCountry = (address) => {
return address.split(',')[2];
}
export const formattedConditions = (rentalConditions) => {
 return rentalConditions.split("\n").map(elem => {
        if (elem.includes(":")) {
        return <p key={nanoid()}>{elem.split(":")[0]}<span style={{color:"rgb(52, 112, 255)", fontWeight:"600"}}>{elem.split(":")[1]}</span></p>
        }
        return <p key={nanoid()}>{elem}</p>
    })
}
export const formattedFunctionality = (functionality) => {
    return functionality.slice().split(' ').slice(0, 2).join(' ').slice(0, 11);
}
  
