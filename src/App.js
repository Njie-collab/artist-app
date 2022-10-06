import "./App.css";

import Nav from "./componnents/Nav";
import Holder from "./componnents/Holder";
import Scetion from "./componnents/Scetion";
import Sidebar from "./componnents/Sidebar";
import Footer from "./componnents/Footer";
import Home from "./componnents/Home";
import NextPage from "./componnents/DisplayData";
// import Register from "./componnents/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./componnents/todoFolder/Details";
import SignUp from "./componnents/SignUp";
import DisplayData from "./componnents/DisplayData";
import Inbox from "./componnents/Inbox";
import Login2 from "./componnents/Login2";
import Toggle2 from "./componnents/toggle/Toggle2";
import SearchBar from "./componnents/search/SearchBar.js";
import Gallery from "./componnents/Gallery"

function App() {
  

  return (

    <Router>
      <Nav></Nav>
      <Toggle2 />
      {/* <SearchBar /> */}

      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="/holder" element={<Holder />} />
        <Route path="/scetion" element={<Scetion />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/shop" element={<NextPage />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/displaydata" element={<DisplayData />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      {/* <Link className="active-link" to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/holder">Holder</Link>
        <Link to="/scetion">Scetion</Link>
        <Link to="/sidebar">Sidebar</Link>
        <Link to="/footer">Footer</Link>
        <Link to="/nextpage">NextPage</Link> */}

      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
