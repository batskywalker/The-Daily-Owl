import { useState, useEffect } from 'react'

import './Summary.css'

function Summary(props) {
  return (
    <div id="summary">
        <img src={props.image} width="271px"></img>
        <p><b>{props.heading}</b></p>
    </div>
  );
}

export default Summary;