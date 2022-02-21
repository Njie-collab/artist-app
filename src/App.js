import "./App.css";
import Nav from "./componnents/Nav";
import Holder from "./componnents/Holder";
import Scetion from "./componnents/Scetion";
import Sidebar from "./componnents/Sidebar";
import Footer from "./componnents/Footer";
import Home from "./componnents/Home";
import { BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";

function App() {
  return (
    <Router>
       <Nav>
       </Nav>


      <Routes>
        <Route path="/" element={Home}/>
        <Route path="/home" element={Home}/>
        <Route path="/holder" element={<Holder/>} />
        <Route path="/scetion" element={<Scetion/>} />
        <Route path="/sidebar" element={<Sidebar />} />
        {/* <Route path="/footer" element={<Footer/>} /> */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
        <Link activeClassName="active-link" to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/holder">Holder</Link>
        <Link to="/scetion">Scetion</Link>
        <Link to="/sidebar">Sidebar</Link>
        <Link to="/footer">Footer</Link>
      <div>
      <Footer/>

      </div>
      
    </Router>

    
  );
}

export default App;
