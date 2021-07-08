import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <section>
      <Router>
        <Navbar />
        <Header />
        <Route path="/about" component={AboutMe}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Footer />
      </Router>
    </section>
  );
}

export default App;
