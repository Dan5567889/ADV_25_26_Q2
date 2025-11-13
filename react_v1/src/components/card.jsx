import React from 'react'
import {useState} from 'react'
import './card.css'

function Card() {
const [x,setx]= useState(0);
function add(){
setx(x+1);
}
  return (
    <div class="card">
      <p>This is a card</p>
      {/* Note-1: in order to use javascript inside jsx, we must enclose everything inside curly braces */ }
      <p> {x} </p>
      {/* Note-2: Instead of using getElementById and adding an event listener, I can directly use onClick to trigger   */}
      {/* Note-3: When calling a function inside jsx, you don't put parenthisis() */}
      <button onClick={add} class = "button" >Increase number</button>
    </div>
  )
}

export default Card
