//9. Create an input field and a button. When the button is clicked, the input should gain focus. (10 pts)
import { useRef } from "react";

function LearnUseRef2(){    
        const focusRef = useRef(null);
    
    const focusMe = () => {
        focusRef.current.focus();
    }

    return(
        <div>
            <input type = "text" />
            <button onClick = {focus}> Focus </button>
        </div>
    );
}

export default LearnUseRef2;