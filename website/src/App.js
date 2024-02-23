import './App.scss';
import {Routes, Route} from "react-router-dom";
import Layout from './components/Layout';
import Email from "./components/Email";
import Valorant from "./components/Valorant";
import CS2 from "./components/CS2";
import About from "./components/About";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Email" element={<Email />} />
      <Route path="/Valorant" element={<Valorant />} />
      <Route path="/CS2" element={<CS2 />} />
      <Route path="/About" element={<About />} />
    </Routes>
    );
}

export default App;
