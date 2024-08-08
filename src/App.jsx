import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slideshow from './components/Slideshow';
import Numbers from './components/Numbers';
import Footer from './components/Footer';
import Team from './components/Team';
import Projects from './components/Projects';
import Prodetail from './components/Prodetail';
import Gallery from './components/Gallery';
import JoinUs from './components/JoinUs';
import Event1Gallery from './components/Event1Gallery';
import Event2Gallery from './components/Event2Gallery';
import Event3Gallery from './components/Event3Gallery';
import DonatePage from './components/DonatePage'; // Import DonatePage component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Slideshow />
              <Team />
              <Hero />
              <Projects />
              <Numbers />
            </>
          } />
          <Route path="/projects" element={<Prodetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/event1" element={<Event1Gallery />} />
          <Route path="/gallery/event2" element={<Event2Gallery />} />
          <Route path="/gallery/event3" element={<Event3Gallery />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/donate" element={<DonatePage />} /> {/* Add route for DonatePage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
