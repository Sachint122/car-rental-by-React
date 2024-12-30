import './components/social.css';

import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar/>
      <Main/>
      <Skills/>
      <About/>
      <Footer/>
    </main>
  );
}
export default App;