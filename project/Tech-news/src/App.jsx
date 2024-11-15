import ArticleDetails from './components/ArticleDetails';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ai from './components/Ai';
import CyberSecurity from './components/CyberSecurity';
import SoftwareEngineering from './components/SoftwareEngineering';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />       
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<ArticleDetails />} />
            <Route path='/ai' element={<Ai/>}></Route>
            <Route path='/cybersecurity' element={<CyberSecurity/>}></Route>
            <Route path='/software' element={<SoftwareEngineering/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
