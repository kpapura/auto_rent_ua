# Auto Rent application
[Live page](https://kpapura.github.io/auto_rent_ua/)

_Role: developer_

_Individual project_

This website serves as a platform for a car rental company operating in Ukraine. It allows users to explore available cars for rent, filter them based on various criteria such as brand and rental price, add favorite listings, and contact the company for rental inquiries. It simplifies the process of finding and renting a car for individuals seeking transportation solutions in Ukraine. It consists of three main pages:
1. _Home page_: contains general information about the services provided by the company. Users can navigate between pages using the menu. Clicking on the logo also redirects users to the home page.
2. _Catalog page_: displays a list of cars available for rent. Initially, 12 advertisements are shown, and additional ones can be loaded by clicking the "Load more" button. Users can filter advertisements by brand, rental price, and mileage range using a dropdown menu. Each advertisement card includes detailed information about the car. Users can add advertisements to their favorites by clicking the heart icon on each card. This action is accompanied by a notification implemented using the react-toastify library. Clicking on the "Learn more" button opens a modal window with detailed information about the car and its rental conditions. The "Rental car" button provides users with a direct link to contact a manager. Additionally, there is a "Scroll to Top" button that returns users to the top of the page.
3. _Favorites page_: shows advertisements that the user has added to favorites. Advertisement can be removed by clicking again on the heart icon.
---
## Technical Specifications

### Frontend:
- Developed using React.js with React Router for routing.
- State management is handled using Redux.
- Axios library is used for making API requests.
- Semantic and valid HTML markup with responsive design.
- Styled with CSS modules.
- Loader component is displayed while asynchronous data is being fetched. It also responds to changes in the Redux store.
- Navigation is facilitated through a list of NavLink components, directing users to different routes such as the home page, catalog page, and favorites page.

### Backend:
- Backend is implemented using mockapi.io service.
- Advertisements resource is created with the following fields: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, and mileage.
- Pagination is implemented on the backend.
- Filtering options are available for car brands, hourly rental prices and mileage.

### Additional Features:
- Dropdown for selecting car brands.
- Dropdown for selecting rental prices with a $10 increment.
- Input fields to specify the mileage range for searching advertisements.
---

### Technologies

This application has the following technologies:

- __HTML__ - a markup language for creating web pages
- __CSS__ - a stylesheet language for styling web pages
- __module-css__ - let to write styles in CSS files but consume them as JavaScript objects for additional processing and safety
- __react__ - a library for web and native user interfaces
- __redux__ - a library that provides a structured and predictable way to manage the state of an application
- __react-dom__ - a library for working with the DOM in React
- __redux-toolkit__ - a library for working with global state of app
- __redux-persist__ - a state management tool that allows the state in a Redux store to persist across browser and app sessions
- __axios__ - a library for making HTTP requests
- __react router__ - a JavaScript framework that lets handle client and server-side routing in React applications
- __react-select__ - a library component used for dynamic form input or as a select menu.
- __react-icons__ - a library of popular icons
- __react-hook-form__ - a library that helps to manage complex forms
- __react-toastify__ - a library for adding toast notifications to the React application

---
### Instalation
To run this project just follow these steps:
- clone the repository using the command _`git clone https://github.com/kpapura/auto_rent_ua`_
-  install the dependencies using the command _`npm install`_
-  start the project using the command _`npm start`_
- you will be redirected to the following address _`http://localhost:3000`_