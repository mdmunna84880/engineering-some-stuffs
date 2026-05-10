import { useState } from 'react'

function App() {
  const [formCount, setFormCount] = useState(0)
  const [formData, setFormData] = useState([]);
  const [formValue, setFormValue] = useState({name: "", value: ""});

  const createField = () => {
    const id = crypto.randomUUID();
    setFormData((prev) => [...prev, {id, name: formValue.name, value }]);
    setFormCount((prev) => prev + 1);
  };

  const changeField = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue({name, value});
  }

  const deleteField = (id) => {
    setFormData((prev) => prev.filter((item) => item.id !== id));
    setFormCount((prev) => prev - 1);
  };

  return (
    <>
      <div>
        <h1>Dynamic Form</h1>
        <p>Count: {formCount}</p>
        <button onClick={() => setFormCount((prev)=>prev+1)}>Increment</button>
        <button onClick={() => setFormCount((prev)=>prev-1)}>Decrement</button>
        <button onClick={() => setFormCount(0)}>Reset</button>
        <div>
          <label htmlFor="create-name" onChange={changeField}>Name</label>
          <input type="text" />
          <label htmlFor="create-value" onChange={changeField}>Value</label>
          <input type="text" />
        </div>
        <button onClick={createField}>Create</button>
        <div>
          {formData.map((item) => (
            <div key={item.id}>
              <input name={item.name} value={item.value}/>
              <button onClick={() => deleteField(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
