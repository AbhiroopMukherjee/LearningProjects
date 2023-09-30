import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Todo from './Components/Todo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Todo/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

export default App;
