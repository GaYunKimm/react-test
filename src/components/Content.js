import React, { Component } from 'react';
//import './App.css';

class Content extends Component {


  render() {
    console.log('content render');
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}


export default Content;