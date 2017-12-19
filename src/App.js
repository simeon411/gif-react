import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    userScore: 0,
    topScore: 0
  };

  imageClicked = id => {
    const friends = this.state.friends;
    friends[id].clicked = 1;
    this.setState({ friends });
  }

  scoreIncrement = () => {
    this.setState({ userScore: this.state.userScore + 1 }, () => {this.setTopScore(this.state.userScore);});
  }

  setTopScore = (newTopScore) => {
    this.setState({ topScore: newTopScore });
  }

  shuffleImages = () => {


  }


  render() {
    return (
      <div>
        <Nav 
          score={this.state.userScore}
          top={this.state.topScore}
        />
        <Jumbotron />
        <div className="container">
          {this.state.friends.map(friend => (
          <FriendCard
            onClick = {this.imageClicked}
            scoreIncrement = {this.scoreIncrement}
            key={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
