import { useState } from "react";
import Accordian from "./Accordian";

const ITEMS = [
  {
    id: 1,
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea enim in accusamus adipisci necessitatibus, quas cumque aliquid odit blanditiis veritatis modi itaque non, id maxime velit quia eos inventore pariatur."
  },
  {
    id: 2,
    title: "Title 2",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea enim in accusamus adipisci necessitatibus, quas cumque aliquid odit blanditiis veritatis modi itaque non, id maxime velit quia eos inventore pariatur."
  },
  {
    id: 3,
    title: "Title 3",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea enim in accusamus adipisci necessitatibus, quas cumque aliquid odit blanditiis veritatis modi itaque non, id maxime velit quia eos inventore pariatur."
  },
  {
    id: 4,
    title: "Title 4",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea enim in accusamus adipisci necessitatibus, quas cumque aliquid odit blanditiis veritatis modi itaque non, id maxime velit quia eos inventore pariatur."
  }
]

function App() {
  const [isOpen, setIsOpen] = useState(null);

  const toggle = (id) => {
    setIsOpen(id === isOpen ? null : id);
  }

  return ( 
    <>
      <h1>Accordian Practice with only one section </h1>
      <div>
        {ITEMS.map((item) => (
          <Accordian
            key={item.id} 
            title={item.title} 
            description={item.content} 
            isOpen={isOpen === item.id} 
            toggle={() => toggle(item.id)}
          />
        ))}
      </div>
    </>
   );
}

export default App;