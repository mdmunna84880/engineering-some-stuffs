import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import Person from "./Person";
import { ThemeContext } from "../contexts/ThemeContext";

function ChildD() {
    const userDetails = useContext(UserContext);
    const {bgColor, setBgColor} = useContext(ThemeContext);

    function toggleColor(){
        setBgColor(prevBgColor => prevBgColor === "rgba(149, 199, 242, 0.72)" ? "rgba(223, 239, 172, 0.72)" : "rgba(149, 199, 242, 0.72)");
    }

    return ( 
        <div style={{backgroundColor: bgColor}}>
            <h2>Child D</h2>
            <h3>{userDetails.name}</h3>
            <UserContext.Provider value="Me">
                <h3>I love <Person/></h3>
            </UserContext.Provider>
            <button onClick={toggleColor}>
                Change Theme
            </button>
        </div>
     );
}

export default ChildD;