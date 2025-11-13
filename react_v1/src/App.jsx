import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../src//components/card.jsx'
import Card2 from '../src//components/Card2.jsx'

function App() {
  // I am declaring a variable x and setting it to 0
  

  return (
    <>
    <h1> This is my first day with react </h1>
    <p> Dante Hernandez </p>

    <p> Dante Hernandez </p>
    <Card />
    <Card />
    <Card />
    <Card />
{/* I must call the Card2 component to make sure it shows up */}
    <Card2 stu_name={"Dante Hernandez"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={90} />
    <Card2 stu_name={"Jaden Dealmada"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={80} />
    <Card2 stu_name={"Michael banini"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={67} />
    <Card2 stu_name={"Jon Jones"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={100} />
    <Card2 stu_name={"Blonde Blazer"} stu_class = {"advanced prog"} stu_exam={"react_day1"} stu_grade={0} />
    </>
  )
}

export default App
