import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Home from './components/Home';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
  );
}

export default App;
