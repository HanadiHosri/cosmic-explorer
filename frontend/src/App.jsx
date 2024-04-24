import './styles/utilities.css';
import './styles/colors.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home/index.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/index.jsx';
import Signup from './pages/Signup/index.jsx';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
