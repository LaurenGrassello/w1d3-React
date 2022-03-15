import './App.css';
import About from './components/About'
import Home from './components/Home'
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <h1>Router Demo</h1>
    <p>
    <Link to='/'>Home</Link>
    {' | ' }
    <Link to='/about'>About</Link>
    </p>
    <Routes>
    
    <Route exact path='/about' element={<About />}>
    <About />
    </Route>

    <Route exact path='/' element={<Home />}>
    <Home />
    </Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
