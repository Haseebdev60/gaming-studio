import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import PageLayout from './components/layout/PageLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Contact from './pages/Contact';
// Import for missing pages
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import GameDetails from './pages/GameDetails';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
