import { useEffect, useState } from "react";

function TimerComponent() {
    const [second, setSecond] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setSecond(prevSecond => prevSecond + 1);
        }, 1000)

        return (()=>{
            clearInterval(intervalId);
        });
    }, [])
    return ( 
        <div>
            <h2>Seconds: {second}</h2>
        </div>
     );
}

export default TimerComponent;