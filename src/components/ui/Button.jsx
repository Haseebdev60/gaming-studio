import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: linear-gradient(90deg, var(--primary), #8E3DFC);
    color: var(--text-primary);
    &:hover {
      box-shadow: var(--glow-primary);
      transform: translateY(-2px);
    }
  `,
  secondary: css`
    background: linear-gradient(90deg, var(--secondary), #65FFDB);
    color: var(--background);
    &:hover {
      box-shadow: var(--glow-secondary);
      transform: translateY(-2px);
    }
  `,
  accent: css`
    background: linear-gradient(90deg, var(--accent), #FF6B88);
    color: var(--text-primary);
    &:hover {
      box-shadow: var(--glow-accent);
      transform: translateY(-2px);
    }
  `,
  outline: css`
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
    &:hover {
      background: rgba(110, 16, 238, 0.1);
      box-shadow: var(--glow-primary);
      transform: translateY(-2px);
    }
  `,
  ghost: css`
    background: transparent;
    color: var(--text-primary);
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  `
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.4s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  ${({ variant = 'primary' }) => variants[variant]}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
    &:before {
      display: none;
    }
  }
`;

export default Button; 