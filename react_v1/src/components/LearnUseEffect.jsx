import {useEffect, useState} from 'react'


function LearnuseEffect(){
const[count, setCount] = useState(0);

useEffect(
    //an arrow function
    ()=>{
        console.log(" useEffect called " + count + " times ");

        // there is one thing that you can never od inside the useEffect hook
        // never update the state variable that you are watching in the dependency array
        // setCount(count + 1); // this will cause an infinite loop
    },

    // dependency array
    [count]

);

const increment = () => {
    setCount(count + 1);
}

return (
    <>
    <div>
        <h1> I am learning about useEffect hook in React.js</h1>
        <h2> {count} </h2>
        <button onClick={increment}> Increment </button>
    </div>
    </>
);

}
export default LearnuseEffect;