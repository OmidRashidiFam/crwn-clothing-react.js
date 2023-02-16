import { Routes, Route } from "react-router-dom";
import HomePage from './routes/home-page/home-page'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;
