import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import GameCard from '../components/ui/GameCard';
import Button from '../components/ui/Button';
import games from '../data/games'; // Import the games data

const HeroSection = styled(Section)`
  padding: 12rem 0 6rem;
  background: linear-gradient(135deg, var(--background), var(--surface));
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/circuit-pattern.svg');
    opacity: 0.05;
    z-index: 0;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin-bottom: 2rem;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  background: ${({ active }) => active ? 'var(--primary)' : 'var(--surface)'};
  color: var(--text-primary);
  border: none;
  border-radius: 30px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: var(--font-heading);
  
  &:hover {
    background: var(--primary);
    box-shadow: ${({ active }) => active ? 'var(--glow-primary)' : 'none'};
  }
  
  ${({ active }) => active && `
    box-shadow: var(--glow-primary);
  `}
`;

const FeaturedGame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeaturedGameImage = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  height: 100%;
  min-height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(110, 16, 238, 0.2), rgba(0, 240, 255, 0.2));
    pointer-events: none;
  }
`;

const FeaturedGameContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GameTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PlatformTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const PlatformTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: var(--surface-light);
  color: var(--text-primary);
  font-weight: 500;
`;

const GameDescription = styled.p`
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    max-width: 500px;
    margin: 0 auto 2rem;
  }
`;

const Games = () => {
  const [filter, setFilter] = useState('all');
  
  const featuredGame = games.find(game => game.featured);
  
  const genres = [...new Set(games.flatMap(game => game.genres))];
  
  const filteredGames = filter === 'all' 
    ? games.filter(game => !game.featured) 
    : games.filter(game => game.genres.includes(filter) && !game.featured);
  
  return (
    <>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Games
          </PageTitle>
          
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our portfolio of innovative and immersive gaming experiences 
            designed to push the boundaries of interactive entertainment.
          </PageSubtitle>
        </Container>
      </HeroSection>
      
      <Section padding="6rem 0">
        <Container>
          {featuredGame && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Featured Game
              </motion.h2>
              
              <FeaturedGame>
                <FeaturedGameImage
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <img src={featuredGame.image} alt={featuredGame.title} />
                </FeaturedGameImage>
                
                <FeaturedGameContent
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <GameTitle>{featuredGame.title}</GameTitle>
                  
                  <PlatformTags>
                    {featuredGame.platforms.map(platform => (
                      <PlatformTag key={platform}>{platform}</PlatformTag>
                    ))}
                  </PlatformTags>
                  
                  <GameDescription>
                    {featuredGame.longDescription}
                  </GameDescription>
                  
                  <ButtonGroup>
                    <Button variant="primary">Watch Trailer</Button>
                    <Button variant="outline">Learn More</Button>
                  </ButtonGroup>
                </FeaturedGameContent>
              </FeaturedGame>
            </>
          )}
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ marginTop: '4rem' }}
          >
            Game Library
          </motion.h2>
          
          <FilterContainer>
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              All Games
            </FilterButton>
            
            {genres.map(genre => (
              <FilterButton
                key={genre}
                active={filter === genre}
                onClick={() => setFilter(genre)}
              >
                {genre}
              </FilterButton>
            ))}
          </FilterContainer>
          
          {filteredGames.length > 0 ? (
            <GameGrid>
              {filteredGames.map((game) => (
                <GameCard 
                  key={game.id}
                  title={game.title}
                  description={game.description}
                  image={game.image}
                  platforms={game.platforms}
                  status={game.status}
                  onClick={() => window.location.href = `/games/${game.id}`}
                />
              ))}
            </GameGrid>
          ) : (
            <EmptyState>
              <h3>No games found</h3>
              <p>We couldn't find any games matching your selected filter. Please try another category or check back later for new releases.</p>
              <Button variant="secondary" onClick={() => setFilter('all')}>
                View All Games
              </Button>
            </EmptyState>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Games; 