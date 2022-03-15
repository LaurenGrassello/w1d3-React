import React, { useState } from "react";
import "./App.css";
import ToDo from './components/ToDo'

function App() {
  const [newToDo, setNewToDo] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newToDo.length === 0) {
      return;
    }
    const listItem = {
      text: newToDo,
      complete: false
    }
    setList([...list, listItem])
    setNewToDo('');
  }

  const handleDelete = (index) => {
    const filterList = list.filter((lists, i) => {
      return i !== index;
    });
    setList(filterList);
  };

  const handleComplete = (index) => {
    const completedList = list.map((lists, i) => {
      if (index === i) {
        lists.complete = !lists.complete;
      }
      return lists;
    });
    setList(completedList);
  }

  return (
    <div className="d-flex justify-content-center">
      <form  onSubmit={(e) => { handleSubmit(e); }}>
        <h2>To Do List:</h2>
        <input onChange={(e) => { setNewToDo(e.target.value); }} type='text' value={newToDo} />
        <div>
          <button className="btn btn-primary m-2">Add</button>
        </div>
      </form>
      <div className="d-flex justify-content-center">
      <div className="col-4 m-4">
      {
        list.map((lists, i) => {
          return <ToDo lists={lists} handleComplete={handleComplete} i={i} handleDelete={handleDelete}/>;
})}
      </div>
      </div>

    </div>
  );
}
export default App;