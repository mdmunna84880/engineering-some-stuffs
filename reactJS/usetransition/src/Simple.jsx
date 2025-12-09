import { useState, useTransition } from "react";

function Simple() {
    const [query, setQuery] = useState("");
    const [lists, setLists] = useState([]);
    const [isPending, startTransition] = useTransition();

    function handleChange(e){
        setQuery(e.target.value);
        const lists = [];
        for(let i = 0; i < 30000; i++){
            lists.push(e.target.value);
        }
        startTransition(()=>setLists(lists));
    }
    return ( 
        <div>
           <input type="text" value={query} onChange={handleChange} className="border-2 border-blue-200"/><br />
           {isPending?<p>Loading...</p>: lists.map((list)=><p>{list}</p>)}
           
        </div>
     );
}

export default Simple;