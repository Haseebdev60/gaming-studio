import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary);
    opacity: 0;
    z-index: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    &:after {
      opacity: 0.2;
    }
    
    img {
      transform: scale(1.05);
    }
    
    .content {
      transform: translateY(-10px);
    }
    
    .platform-tags {
      opacity: 1;
    }
    
    .overlay-button {
      opacity: 1;
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 2;
  transition: transform 0.3s ease;
  
  &.content {
    transform: translateY(0);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PlatformTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  flex-wrap: wrap;
  
  &.platform-tags {
    opacity: 0;
  }
`;

const PlatformTag = styled.span`
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: var(--text-primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const OverlayButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 3;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  
  &.overlay-button {
    opacity: 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-35%, -50%);
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-left: 12px solid var(--secondary);
    border-bottom: 8px solid transparent;
  }
  
  &:hover {
    background: var(--primary);
    transform: scale(1.1);
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 3;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  ${({ status }) => {
    if (status === 'upcoming') {
      return `
        background: var(--accent);
        color: var(--text-primary);
      `;
    } else if (status === 'new') {
      return `
        background: var(--secondary);
        color: var(--background);
      `;
    } else {
      return `
        background: var(--primary);
        color: var(--text-primary);
      `;
    }
  }}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const GameCard = ({ game }) => {
  const { id, title, description, image, platforms = [], status } = game;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };
  
  return (
    <StyledLink to={`/games/${id}`}>
      <Card 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <CardImage src={image} alt={title} />
        
        {status && <StatusBadge status={status}>{status}</StatusBadge>}
        
        <OverlayButton className="overlay-button" />
        
        <CardContent className="content">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          
          <PlatformTags className="platform-tags">
            {platforms.map((platform, index) => (
              <PlatformTag key={index}>{platform}</PlatformTag>
            ))}
          </PlatformTags>
        </CardContent>
      </Card>
    </StyledLink>
  );
};

export default GameCard; 