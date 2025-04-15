import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.8rem;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;
  text-shadow: var(--glow-primary);
  
  span {
    background: linear-gradient(90deg, var(--secondary), var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .highlight {
    color: var(--accent);
    -webkit-text-fill-color: var(--accent);
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 5px;
    height: 80%;
    background: var(--accent);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Logo = ({ withTagline }) => {
  return (
    <LogoWrapper to="/">
      <span>Pixel<span className="highlight">Forge</span></span>
      {withTagline && (
        <small style={{ 
          display: 'block', 
          fontSize: '0.8rem', 
          fontWeight: 400,
          marginTop: '-5px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-body)'
        }}>
          Crafting Worlds Beyond Imagination
        </small>
      )}
    </LogoWrapper>
  );
};

export default Logo; 