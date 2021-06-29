import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Header />
    <AboutMe />
    <Footer />
    </div>
  );
}

export default App;
