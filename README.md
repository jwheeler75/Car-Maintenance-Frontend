# The Car Maintenance App

## Project Overview


## Project Description
This is a full stack Car Maintenance App Frontend is built using a React JS, React Router, React-Dom, React-Router-Dom, and Axios. Flex Box and Flex Grid was used for CSS.  The Backend was created with Node.js, PostgreSQL, Express, and Sequelize.  It has a one to many relationship in the db.

## Project Links

- GitHub Repo URL for Frontend https://github.com/jwheeler75/Car-Maintenance-Frontend
- GitHub Repo URL for Backend https://github.com/jwheeler75/Car-Maintenance-Backend
- Heroku Production URL for Frontend
- Heroku Production URL for Backend

## App Screenshot

https://github.com/jwheeler75/Car-Maintenance-Frontend/blob/master/planning/App%20Screen%20Shot%20.png


## Wireframes

These are the wireframes for the AllCars and CarDetail components.

https://github.com/jwheeler75/Car-Maintenance-Frontend/blob/master/planning/Wireframe.png

https://github.com/jwheeler75/Car-Maintenance-Frontend/blob/master/planning/Wireframe%202.png


## User Stories
- As a user, I should be able to add a new vehicle.
- As a user, I should be able to delete a vehicle.
- As a user, I should have a page that displays all of my vehicles.
- As a user, I should able to search through a list of all my vehicles and choose a vehicle to view.
- As a user, I should be able to see the mileage for the last oil change for the vehicle. 
- As a user, I should be able to see the mileage for the next oil change for the vehicle. 
- As a user, I should be able to see the mileage for the last tire rotation for the vehicle. 
- As a user, I should be able to see the mileage for the next tire rotation for the vehicle. 
- As a user, I should be able to edit the mileage for the last oil change for the vehicle.
- As a user, I should be able to edit the mileage for the next oil change for the vehicle. 
- As a user, I should be able to edit the mileage for the last tire rotation for the vehicle. 
- As a user, I should be able to edit the mileage for the next tire rotation for the vehicle. 
- As a user, I should be able easily navigate between pages.
- As a user, I should have a button to return to the homepage.



### MVP/PostMVP

 #### MVP

- Create 2 backend models that are associated in one-to-many relationship for future implementation. 
- Render data on the frontend with AllCars and CarDetail React components.
- Allow user to interact with all pages.

#### PostMVP
- Implement user authentication.
- Add Weather and Gas Price Widgets.



## Code Snippet

This code allows you to update the last oil change mileage of a vehicle.  Calling the this.getCars() method refreshes the component after state is updated from the tempArray.

changeLastOilMileage = async (e) => {
    e.preventDefault();
    await Axios.put(`${backendURL}/cars/${e.target.carid.value}`, {
      lastOilChangeMileage: e.target.changeLastOilMileage.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
      this.getCars();
    });
  };

## Issues and Resolutions

**ERROR**: Executing (default): DELETE FROM "Cars" WHERE "id" = 'undefined'
(node:1933) UnhandledPromiseRejectionWarning: SequelizeDatabaseError: invalid input syntax for type integer: "undefined"                          
**RESOLUTION**: Converted to an ES6 arrow function... fixed scope issue.
