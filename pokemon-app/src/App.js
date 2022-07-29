import Home from './components/Home/Home';
import Random from './components/Random/Random';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
      <div className='nav-bar'>
        <Navbar />
      </div>
        <Routes>
          <Route path='/' element={<Home />} exact={true} />
          <Route path='/random' element={<Random />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
