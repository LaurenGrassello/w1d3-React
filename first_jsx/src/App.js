// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>

      <>
      <h1 className='greeting'>Hello Dojo!</h1>
      <h2>Things to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run marathon</li>
        <li>Feed dogs</li>
      </ul>
      </>
    // </div>
  );
}

export default App;
