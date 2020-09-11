import React, { Component } from "react";

class CarDetail extends Component {
  render() {
    const CarDetails = this.props.cars.map((car) => {
      //   return car.id == this.props.match.params.id;
      return (
        <li key={car.id}>
          Last Oil Change Mileage: {car.lastOilChangeMileage} Next Oil Change
          Mileage: {car.nextOilChangeMileage}
          Last Tire Rotation Mileage: {car.lastTireRotationMileage} Next Tire
          Rotation Mileage: {car.nextTireRotationMileage}
        </li>
      );
    });
    console.log(this.state);
    return (
      <div className="App">
        <h3> {CarDetails.vehicle} </h3>
        <h5>Add a New Car</h5>
        <form onSubmit={this.props.addCar}>
          {/* <input type="hidden" name="userID" value={CarDetails.id} /> */}
          <input type="text" name="vehicle" />
          <input type="submit" value="Add Car" />
        </form>
        <ul>{CarDetails}</ul>
      </div>
    );
  }
}

export default CarDetail;
