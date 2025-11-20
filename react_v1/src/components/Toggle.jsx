import { useState } from "react";

function Toggle(){
const [toggled,SetToggled] = useState (false);

const changeToggle = () => {
    SetToggled(!toggled);
}

return (
    <div>
        <button onClick={changeToggle}> {toggled?"toggle":"Already Toggled"} </button>
        {toggled && <p> This is the toggled text!</p>}
    {/* What if I want to hide and show a small text  */}
    </div>
);


}

export default Toggle;