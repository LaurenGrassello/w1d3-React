import './App.css';
import Tabs from './components/Tabs';
import React, {useState} from 'react';

function App() {
  const [newTab, setNewTab] = useState([])
  const content = (content) =>{
    setNewTab([...newTab, content])
  }
  return (
    <div className="App">
    <Tabs contentFunction={content} tab={newTab} /> 
    </div>
  );
}

export default App;
