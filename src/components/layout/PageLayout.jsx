import { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding-top: 80px; /* Height of the navbar */
`;

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Main>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};

export default PageLayout; 