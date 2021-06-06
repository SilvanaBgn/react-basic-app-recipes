import React from 'react';
import './css/MySubsection.css';

// Stateless component (Function)
// All data is from props
const MySubsection = (props) => {
  const item = props.item;

  console.log('--> MySubsection.js: rendered');

  return (
    <React.Fragment> {/* <React.Fragment> is to wrap many JSX tags without creating new tags */}
      <h2 id={item.theme}>* {item.title} Recipe</h2>
      <p>I'm a component YEAH. I have a cooking recipe for you:</p>
      <ol>
        {
          item.ingredients.map((ingredient, i) => {
            return (
              <li key={i}> {ingredient} </li>
            )
          })
        }
      </ol>
    </React.Fragment>
  )
}

export default MySubsection;