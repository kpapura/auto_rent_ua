This web application is designed for a company that provides car rental services
in Ukraine. It consists of three main pages:

Home Page: Provides a general overview of the services offered by the company.
Catalog: Displays a catalog of cars available for rent, with the ability to
filter by brand, hourly rental price, and mileage. Favorites: Shows
advertisements that users have added to their favorites. Functionality:

Home Page: Contains a description of the company's services and highlights its
key features. Users can navigate between pages using the menu. Also, clicking on
the logo redirects users to the homepage. A logo was also added to the Header,
and the favicon and web application name were changed. Catalog: Displays a list
of cars available for rent. Initially, 12 advertisements are displayed, and
additional ones can be loaded by clicking the "Load more" button. Users can
filter advertisements by brand, hourly rental price, and mileage range using the
dropdown menu. Each advertisement card contains details about the car. Users can
add advertisements to their favorites by clicking the heart icon on each card.
This is accompanied by a notification implemented using the react-toastify
library. When the heart is clicked again, the advertisement is removed from
favorites, and a notification appears informing the user that the advertisement
has been removed from favorites. Clicking the "Learn more" button opens a modal
window with detailed information about the car and its rental conditions. The
rental car button provides users with the ability to contact a manager. Also,
there is a scrollToTop button that returns the user to the top of the page.
Favorites: Displays advertisements that users have added to their favorites.
Users can remove advertisements from their favorites by clicking the heart icon
again. Technical Details:

Frontend: Developed using React.js and styled using module CSS. Redux is used
for state management, and React Router is used for navigation between pages.
Backend: Mockapi.io is used for storing and retrieving advertisement data. The
Advert resource contains fields such as id, year, make, model, rentalPrice,
mileage, etc. Pagination: Implemented on the backend to display advertisements
in groups of 12 per page. Filtering: Users can filter advertisements by brand
using the dropdown menu. Additional filtering options, such as hourly rental
price range and mileage range, are also available. Contact: The "Rent a car"
button provides users with a direct link to contact the company by phone.
Persist was used to store the status of adding advertisements to the backend, as
well as arrays of allAdverts and favoriteAdverts. Deployment: The project is
deployed on GitHub Pages.
