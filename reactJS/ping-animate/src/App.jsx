import { FiMessageCircle } from "react-icons/fi";

function App() {
  return ( 
    <div className="flex flex-col justify-center items-center h-screen">
    <h1>Animate a ping</h1>
      <button className="flex justify-center items-center w-12 h-12 relative rounded-full bg-linear-to-br from-pink-500 to-violet-500">
        <FiMessageCircle className="text-white "/>
        <span className="absolute inset-0 animate-ping rounded-full bg-pink-200 opacity-50"></span>
      </button>
    </div>
   );
}

export default App;