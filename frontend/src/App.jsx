import './App.css'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Therapy from './pages/Therapy';

function App() {

  return (
    < div className='root m-0'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Therapy" element={<Therapy />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
