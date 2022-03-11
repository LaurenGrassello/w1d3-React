import './App.css';
import ColorBoxDisplay from './components/ColorBoxDisplay';
import ColorBoxForm from './components/ColorBoxForm';
import React, {useState} from 'react';

function App() {
  const [newBox, setNewBox] = useState([])
  const color = (colors) =>{
    setNewBox([...newBox, colors])
  }

  return (
    <div className="App">
    <h3>Box Generator</h3>
    <ColorBoxForm colorFunction={color} />
    <ColorBoxDisplay box={newBox} />
    </div>
  );
}

export default App;
