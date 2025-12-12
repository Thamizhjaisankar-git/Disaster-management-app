import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import DisasterMap from './pages/DisasterMap';
import Alerts from './pages/Alerts';
import HelpRequest from './pages/HelpRequest';
import Volunteer from './pages/Volunteer';
import Resources from './pages/Resources';
import Recovery from './pages/Recovery';
import About from './pages/About';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-text">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/disaster-map" element={<DisasterMap />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/help-request" element={<HelpRequest />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/recovery" element={<Recovery />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;