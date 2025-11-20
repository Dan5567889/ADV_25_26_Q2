import {useState} from 'react';

function Toggle2() {
    const [toggled, setToggled] = useState(false);
    return (
        <div className = "App">
            <button className = {`toggle-btn ${toggled ? 'toggled' : ''}`} onClick={() => setToggled(!toggled)}>
                <div className = "thumb"></div>
            </button>
        </div>
    );
}
export default Toggle2;