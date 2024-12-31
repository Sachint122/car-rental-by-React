import './components/style/social.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Service from './components/Service';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>

  );
}
export default App;