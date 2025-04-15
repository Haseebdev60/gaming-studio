import styled, { css } from 'styled-components';

const Section = styled.section`
  padding: ${props => props.padding || '4rem 0'};
  position: relative;
  overflow: hidden;
  
  ${props => props.dark && css`
    background-color: var(--background);
  `}
  
  ${props => props.light && css`
    background-color: var(--surface);
  `}
  
  ${props => props.gradient && css`
    background: linear-gradient(135deg, var(--background), var(--surface-light));
  `}
  
  ${props => props.fullHeight && css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
  
  ${props => props.centerContent && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
  
  ${props => props.withGrid && css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `}
  
  &:before {
    content: ${props => props.withGlow ? '""' : 'none'};
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(110, 16, 238, 0.1) 0%,
      rgba(0, 240, 255, 0.05) 25%,
      transparent 70%
    );
    z-index: 0;
    pointer-events: none;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;

export default Section; 