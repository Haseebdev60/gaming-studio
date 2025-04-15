import styled from 'styled-components';
import { motion } from 'framer-motion';
import Container from '../layout/Container';

const HeaderWrapper = styled.header`
  background: ${({ background }) => background || 'var(--surface)'};
  background-size: cover;
  background-position: center;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    height: 40vh;
    min-height: 300px;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  margin-bottom: 1rem;
  font-size: 4rem;
  line-height: 1.1;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-family: var(--font-heading);
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PageHeader = ({ title, subtitle, background }) => {
  return (
    <HeaderWrapper background={background}>
      <Container>
        <HeaderContent>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </Title>
          
          {subtitle && (
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </Subtitle>
          )}
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default PageHeader; 