import React, { Component } from 'react';
//import './App.css';

class Subject extends Component {
  render() {
    console.log('sub render');
    return (
      <header>
        <h1>
          <a href="/" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>
            {this.props.title}</a>
        </h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;