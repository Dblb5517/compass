import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Menu />
        <Routes>
          <Route path="/compass" index element={<Home />} />
          <Route path="/:url" element={<Home />} />
        </Routes>
      </div>
      
    </div>
    
  );
}

export default App;