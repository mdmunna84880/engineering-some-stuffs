import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

function Person() {
    const name = useContext(UserContext);
    return ( 
        <span>{name}</span>
     );
}

export default Person;