import React, { Component } from "react";
import { Link } from "react-router-dom";
class CarDetail extends Component {
  render() {
    const CarDetails = this.props.cars.find((car) => {
      return car.id == this.props.match.params.id;
    });
    console.log(CarDetails);
    return (
      <div className="App">
        <Link to="/">Back to Homepage</Link>
        <h3> {CarDetails.vehicle} </h3>
        <div className="grid-container2">
          <div className="grid">
            <h5>Last Oil Change Mileage: {CarDetails.lastOilChangeMileage}</h5>
            <form onSubmit={this.props.changeLastOilMileage}>
              <input type="hidden" name="carid" value={CarDetails.id} />
              <input type="number" name="changeLastOilMileage" />
              <input type="submit" value="Change Last Oil Change Mileage" />
            </form>
          </div>
          <div className="grid">
            <h5>Next Oil Change Mileage: {CarDetails.nextOilChangeMileage}</h5>
            <form onSubmit={this.props.changeNextOilMileage}>
              <input type="hidden" name="carid" value={CarDetails.id} />
              <input type="number" name="changeNextOilMileage" />
              <input type="submit" value="Change Next Oil Change Mileage" />
            </form>
          </div>
          <div className="grid">
            <h5>
              Last Tire Rotation Mileage: {CarDetails.lastTireRotationMileage}
            </h5>
            <form onSubmit={this.props.changeLastRotation}>
              <input type="hidden" name="carid" value={CarDetails.id} />
              <input type="number" name="changeLastRotation" />
              <input type="submit" value="Change Last Tire Rotation Mileage" />
            </form>
          </div>
          <div className="grid">
            <h5>
              Next Tire Rotation Mileage: {CarDetails.nextTireRotationMileage}
            </h5>
            <form onSubmit={this.props.changeNextRotation}>
              <input type="hidden" name="carid" value={CarDetails.id} />
              <input type="number" name="changeNextRotation" />
              <input type="submit" value="Change Next Tire Rotation Mileage" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetail;
