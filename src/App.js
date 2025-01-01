import './components/style/social.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Service from './components/Service';
import Contact from './components/Contact';
import Two_seater from './components/Two_seater';
import Four_Seater from './components/Four_Seater';
import Seven_Seater from './components/Seven_Seater';
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
        <Route path="/Two_seater" element={<Two_seater />} />
        <Route path="/Four_Seater" element={<Four_Seater />} />
        <Route path="/Seven_Seater" element={<Seven_Seater />} />
      </Routes>
      <Footer />
    </Router>

  );
}
export default App;