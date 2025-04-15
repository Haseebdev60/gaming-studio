import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: var(--surface);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const Card = ({ children, className }) => {
  return (
    <CardWrapper className={className}>
      {children}
    </CardWrapper>
  );
};

export default Card; 