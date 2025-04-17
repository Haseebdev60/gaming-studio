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

// Define a simple NotFound component
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '50px 20px' }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <a href="/" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>
      Return to Home
    </a>
  </div>
);

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
