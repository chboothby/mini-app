import "./App.css";
import Header from "./Header";
import React from "react";
import List from "./List";
import DogAdder from "./DogAdder";

class App extends React.Component {
  state = {
    dogs: [
      {
        id: 1,
        name: "Nelly",
        picture:
          "https://smallmightyracing.weebly.com/uploads/1/0/1/7/10176518/297995368.jpg?419",
        mileage: "178",
        age: "5",
      },
      {
        id: 2,
        name: "Frost",
        picture:
          "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/Skyword/images/alaskan-husky-dog-sled-team_365932_ref.png",
        mileage: "218",
        age: "4",
      },
      {
        id: 3,
        name: "Lion",
        picture:
          "https://vetstreet-brightspot.s3.amazonaws.com/cf/9ae130a32b11e087a80050568d634f/file/Alaskan-Husky-2-645mk062411.jpg",
        mileage: "301",
        age: "7",
      },
      {
        id: 4,
        name: "Thelma",
        picture:
          "https://vippuppies.com/wp-content/uploads/2016/11/Alaskan-Husky-e1479245621211.jpg",
        mileage: "106",
        age: "2",
      },
    ],
    username: "Clara",
  };
  render() {
    return (
      <div id="main">
        <Header username={this.state.username} />
        <List dogs={this.state.dogs} />
        <DogAdder addDog={this.addDog} dogs={this.state.dogs} />
      </div>
    );
  }
  addDog = (newDog) => {
    this.setState(({ dogs }) => {
      const newState = {
        dogs: [...dogs, newDog],
      };
      return newState;
    });
  };
}

export default App;
