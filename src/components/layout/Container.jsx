import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.fluid ? '100%' : '100%'};
  margin: 0 auto;
  padding: ${props => props.noPadding ? '0' : '0 2rem'};
  
  @media (max-width: 768px) {
    padding: ${props => props.noPadding ? '0' : '0 1rem'};
  }
`;

export default Container; 