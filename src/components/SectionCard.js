/* This is a Function-based component */

import React from 'react';
// import './css/SectionCard.css';
import classes from './css/SectionCard.module.css'

// const classCard = 'SectionCard'
const classCard = classes.sectionCard;

// Stateful component (Class)
// All data is stored in this.state
class SectionCard extends React.Component {
  state = {
    likesCount: 10
  };

  onLikeButtonClick = (e) => {
    console.log('Like button clicked')
    this.setState((prevState, prevProps) => {
      return { likesCount: prevState.likesCount + 1 }
    });
    e.preventDefault();
  }

  componentWillUnmount(){
    // every time the component is deleted
    console.log('--> SectionCard.js: Unmounting - componentWillUnmount')
  }

  render() {
    console.log('--> SectionCard.js: render() method has been called')
    return (
      <a className={classCard} href={`#${this.props.theme}`}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p> 
        <p>Like Count: {this.state.likesCount}</p>
      <button onClick={this.onLikeButtonClick}> Like </button>
      </a>
    )
  }
}

export default SectionCard;