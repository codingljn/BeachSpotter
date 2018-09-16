import React, { Component } from "react";
import Tile from "./Components/Tile";
import Header from "./Components/Header";
// import Wrapper from "./Components/Wrapper";
import Container from "./Components/Grid/Container.js";
import beaches from "./beaches.json";

class App extends Component {
  state = {
    beaches: beaches,
    score: 0,
    hiscore: 0,
    message: "Spot that Beach!"
  };

  getBeach = function(array, id) {
    return array.filter(array => array.id === id);
  };

  selectCard = id => {
    console.log(this.state);
    var thisBeach = this.getBeach(beaches, id);

    if (thisBeach[0].clicked) {
      beaches.map(beaches => (beaches.clicked = false));
      if (this.state.score > this.state.hiscore) {
        this.setState({ hiscore: this.state.score });
      }
      this.setState({ score: 0 });
      this.setState({ message: "Sorry! Try Again!" });
    } else {
      for (var i = 0; i < beaches.length; i++) {
        if (beaches[i].id === id) {
          beaches[i].clicked = true;
          // Random number generated to move beaches around the DOM
          var a = Math.floor(Math.random() * 12);
          var b = beaches[i];
          beaches[i] = beaches[a];
          // Move the beach to a random place in the Grid
          beaches[a] = b;
        }
      }
      this.setState({ score: this.state.score + 1 });
      this.setState({ message: "Spot that Beach!" });
    }
    this.setState({ beaches });
  };

  render() {
    return (
      <Container>
        <Header
          message={this.state.message}
          score={this.state.score}
          hiscore={this.state.hiscore}
        />
        <Tile beaches={beaches} selectCard={this.selectCard} />
      </Container>
    );
  }
}
export default App;