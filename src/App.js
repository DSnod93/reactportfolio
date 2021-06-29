import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutMe />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
