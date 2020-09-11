import React, { Component } from "react";
import { Link } from "react-router-dom";
class AllCars extends Component {
  render() {
    const allCars = this.props.cars.map((car) => {
      return (
        <li key={car.id}>
          <Link to={`/cars/${car.id}`}>{car.vehicle}</Link>
        </li>
      );
    });
    return (
      <div>
        <h1>All Cars</h1>
        <h3>Create a New Car</h3>
        <form onSubmit={this.props.addCar}>
          <input type="text" name="vehicle" />
          <input type="submit" value="Add Car" />
        </form>
        <ul>{allCars}</ul>
      </div>
    );
  }
}

export default AllCars;
