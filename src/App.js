import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import CarDetail from "./CarDetail.js";
import "./App.css";
import Axios from "axios";
import AllCars from "./AllCars.js";
const backendURL = process.env.BACKEND_URL || "http://localhost:3000/api";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    this.getCars();
  }

  getCars() {
    Axios.get(`${backendURL}/cars`).then((response) => {
      this.setState({
        cars: response.data.cars,
      });
      console.log(response);
    });
  }

  addCar = async (e) => {
    e.preventDefault();
    console.log(e.target.vehicle.value);
    await Axios.post(`${backendURL}/cars`, {
      vehicle: e.target.vehicle.value,
    }).then((response) => {
      this.getCars();
    });
  };

  changeLastOilMileage = (e) => {
    e.preventDefault();
    console.log(e.target.lastOilChangeMileage.value);
    Axios.post(`${backendURL}/cars`, {
      lastOilChangeMileage: e.target.lastOilChangeMileage.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
    });
  };

  changeNextOilMileage = (e) => {
    e.preventDefault();
    console.log(e.target.nextOilChangeMileage.value);
    Axios.post(`${backendURL}/cars`, {
      nextOilChangeMileage: e.target.nextOilChangeMileage.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
    });
  };

  changeLastRotation = (e) => {
    e.preventDefault();
    console.log(e.target.lastTireRotationMileage.value);
    Axios.post(`${backendURL}/cars`, {
      lastTireRotationMileage: e.target.lastTireRotationMileage.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
    });
  };

  changeNextRotation = (e) => {
    e.preventDefault();
    console.log(e.target.nextTireRotationMileage.value);
    Axios.post(`${backendURL}/cars`, {
      nextTireRotationMileage: e.target.lastTireRotationMileage.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        Welcome to the Car Maintenance App!
        <nav></nav>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <AllCars cars={this.state.cars} addCar={this.addCar} />
              )}
            />
            <Route
              path="/cars/:id"
              component={(routerProps) => (
                <CarDetail
                  {...routerProps}
                  cars={this.state.cars}
                  addCar={this.addCar}
                  changeLastOilMileage={this.changeLastOilMileage}
                  changeNextOilMileage={this.changeNextOilMileage}
                  changeLastRotation={this.changeLastRotation}
                  changeNextRotation={this.changeNextRotation}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
