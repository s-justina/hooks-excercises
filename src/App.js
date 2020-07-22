import React, {useState} from 'react';
import ClassComponentExample from "./components/ClassComponentExample";

function App() {
    const [selectedId, setSelectedId] = useState(1);
  return (
    <div className="App">
      <h2>Lets check how is it work!</h2>
        <button onClick={()=>setSelectedId(selectedId+1)}>Zmień ID</button>
      <ClassComponentExample id={selectedId}/>
    </div>
  );
}

export default App;
