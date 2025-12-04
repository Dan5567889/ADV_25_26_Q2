// Create a counter using useRef that logs the count to the console every time a button is clicked, without re-rendering. (10 pts)
// I will have a button & i will use the onClick to trigger a function that icrements the count and logs it to the console. (10 pts)

import { useRef } from "react";

function LearnUseRef(){
    
    const count=useRef(0);
    const UpdateCount=()=>{
        count.current+=1;
        console.log(" Button clicked "+ count.current + " times");
    }
    
    return(
        <div>
            <h2> Learn UseRef Hook for the first time</h2>
            <button onClick={UpdateCount}> Click me to update</button>
        </div>
    );
}
export default LearnUseRef;