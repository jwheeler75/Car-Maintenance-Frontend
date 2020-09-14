import React, { Component } from "react";
import { Link } from "react-router-dom";
class AllCars extends Component {
  render() {
    const allCars = this.props.cars.map((car) => {
      return (
        <li key={car.id}>
          <Link to={`/cars/${car.id}`}>{car.vehicle}</Link>
          <button id={car.id} onClick={this.props.deleteCar}>
            Delete Vehicle
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>All Vehicles</h2>
        <h3>Create a New Vehicle</h3>
        <form onSubmit={this.props.addCar}>
          <input type="text" name="vehicle" required />
          <input type="submit" value="Add Vehicle" />
        </form>
        <h4>Click on a Vehicle Below to See More Details</h4>
        <ul className="grid-container">{allCars}</ul>
      </div>
    );
  }
}

export default AllCars;
