import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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

  getCars = () => {
    Axios.get(`${backendURL}/cars`).then((response) => {
      this.setState({
        cars: response.data.cars,
      });
      console.log(response);
    });
  };

  addCar = async (e) => {
    e.preventDefault();
    console.log(e.target.vehicle.value);
    await Axios.post(`${backendURL}/cars`, {
      vehicle: e.target.vehicle.value,
    }).then((response) => {
      this.getCars();
    });
  };

  deleteCar = (e) => {
    console.log(e.target.id);
    Axios.delete(`${backendURL}/cars/${e.target.id}`).then((response) => {
      console.log(response);
      this.getCars();
    });
  };

  changeLastOilMileage = (e) => {
    e.preventDefault();
    Axios.put(`${backendURL}/cars/${e.target.carid.value}`, {
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

  changeNextOilMileage = (e) => {
    e.preventDefault();
    Axios.put(`${backendURL}/cars/${e.target.carid.value}`, {
      nextOilChangeMileage: e.target.changeNextOilMileage.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
      this.getCars();
    });
  };

  changeLastRotation = (e) => {
    e.preventDefault();
    Axios.put(`${backendURL}/cars/${e.target.carid.value}`, {
      lastTireRotationMileage: e.target.changeLastRotation.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
      this.getCars();
    });
  };

  changeNextRotation = (e) => {
    e.preventDefault();
    Axios.put(`${backendURL}/cars/${e.target.carid.value}`, {
      nextTireRotationMileage: e.target.changeNextRotation.value,
    }).then((response) => {
      let tempArray = this.state.cars;
      tempArray.push(response.data.cars);
      this.setState({
        cars: tempArray,
      });
      this.getCars();
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Welcome to the Car Maintenance App!</h1>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <AllCars
                  cars={this.state.cars}
                  addCar={this.addCar}
                  deleteCar={this.deleteCar}
                />
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
