import React from'react';
import CastCard from "./components/castCard";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import cast from "./bobs.json";
import './App.css';
//-----------------------------

class App extends React.Component {

  state = {
    cast,
    clickedImg: [], //send the clicked image to a new array to hold
    score: 0 //set the score to zero
    // highScore: 0
  };
//----------------------------

  clickedCharacter = event => {
    const currentPic = event.target.alt; //saves which pic is clicked
      console.log(currentPic);
    const picAlreadyClicked = this.state.clickedImg.indexOf(currentPic) > -1; //sets clicked image as true boolean to know its been clicked
      console.log(picAlreadyClicked);
    // console.log(this.state.clickedImg);
    if (picAlreadyClicked) {
      console.log(this.state.clickedImg);
      this.setState({
        cast: this.state.cast.sort(function(a,b) {
          return 0.5 - Math.random(); //function here re-orders the images
        }),
        clickedImg: [],
        score: 0
      });
      
      alert("Loser! Play again");
    } else {
      this.setState({
        cast: this.state.cast.sort(function(a,b) {
          return 0.5 - Math.random(); //function here re-orders the images
        }),
        clickedImg: this.state.clickedImg.concat(currentPic),
        score: this.state.score + 1
      },
        () => {
          if (this.state.score === 12) {
            alert("Winner Winner!");
            this.setState({
              cast: this.state.cast.sort(function(a,b) {
                return 0.5 - Math.random();
              }),
              clickedImg: [],
              score: 0
            });
          }
        }
      )
    }
  }

//----------------------------------
  render() {
    return (
      <div id="burger">
        <Navbar score={this.state.score} highScore={this.state.highScore}/>
          <Jumbotron />
            <div className="cardContainer card-columns">
              {this.state.cast.map(castMember => (  
                <CastCard
                  clickedCharacter={this.clickedCharacter}
                  id={castMember.id}
                  key={castMember.id}
                  name={castMember.name}
                  image={castMember.image}
                />  
              ))}
            </div> 
      </div>  
    );
  }
}

export default App;
