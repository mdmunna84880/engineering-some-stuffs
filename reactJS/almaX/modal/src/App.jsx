import Modal from "./Modal";
import { useClickAway } from "./useClickAway";
import './App.css'

function App() {
  const {isAway, setIsAway, ref} = useClickAway();

  return ( <div>
    <button onClick={()=>setIsAway(!isAway)}>Open</button>
   {isAway && <Modal title="Sample Model" description={"Nothing just ui"} isAway={isAway} ref={ref}/>}
  </div> );
}

export default App;