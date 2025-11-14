import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../src//components/card.jsx'

function App() {
  // I am declaring a variable x and setting it to 0
  

  return (
    <>
    
    <div class = "card"> 
    <img src={reactLogo} className="logo react" alt="React logo" />
    <Card name = {"Nike Air Max 270"} description = {" These shoes are top of the line! "} price = {139.99} gender = {"Women"}/>
    </div>


    <div class = "card"> 
    <img src={reactLogo} className="logo react" alt="React logo" />
    <Card name = {"Nike Air Max 270"} description = {" These shoes are top of the line! "} price = {139.99} gender = {"Women"}/>
    </div>

    <div class = "card"> 
    <img src={reactLogo} className="logo react" alt="React logo" />
    <Card name = {"Nike Air Max 270"} description = {" These shoes are top of the line! "} price = {139.99} gender = {"Women"}/>
    </div>
  </>
  )
}

export default App