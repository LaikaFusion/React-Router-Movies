import React, { Component } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    let dupFound = false;
    savedList.forEach(element => {
      if(element.title === movie.title){
        dupFound = true;
        return; 
      }
    });
    if (!dupFound){
      savedList.push(movie);
    }
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={(props)=> <Movie {...props} method={this.addToSavedList}/>} />
      </div>
    );
  }
}
