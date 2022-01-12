import React from 'react';

import "./Card.css";

function Card(props) {
  // ways to mix css classes
  const classes = "card " + props.className;
  // {props.children} renders the childen component fom the incoming prop
  return <div className={classes}>{props.children}</div>;
}

export default Card;
