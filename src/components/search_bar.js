import React, { Component } from 'react';

 export default class Search_bar extends Component {
   state={
     userInput: "",
   }

   handleUserInput = (event) => {
     this.setState({
       userInput: event.target.value,
     })
     this.props.handleSearch(event,this.state.userInput)
   }



 render() {
return (
      <input className="search_bar"
        type = "text"
        value = {this.state.userInput}
        onChange ={this.handleUserInput}
      />
      )
    }
  }
