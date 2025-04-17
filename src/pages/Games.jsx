import { useState, useEffect } from 'react';
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
  width: 100%;
  
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
  max-width: 100%;
  margin-bottom: 2rem;
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
  
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
  width: 100%;
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
  width: 100%;
  
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
  flex-wrap: wrap;
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

// New styled components for Game Demos
const GameDemoSection = styled(Section)`
  background: linear-gradient(0deg, var(--background), var(--surface));
  padding: 6rem 0;
  width: 100%;
`;

const GameDemoTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3rem;
`;

const GameDemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 100%;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const GameDemoCard = styled(motion.div)`
  background: rgba(20, 20, 43, 0.5);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid var(--primary);
  }
`;

const GameDemoContent = styled.div`
  padding: 2rem;
`;

const GameDemoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const GameDemoName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const GameDemoDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const GamePlayFrame = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface-light);
  position: relative;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const PlayButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const GameStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const GameStat = styled.div`
  text-align: center;
  
  span {
    display: block;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  
  strong {
    font-size: 1.2rem;
    font-family: var(--font-heading);
    color: var(--secondary);
  }
`;

const demoGames = [
  {
    id: 1,
    name: "Neon Runner",
    description: "Test your reflexes in this fast-paced cyberpunk runner game. Dodge obstacles and collect power-ups to achieve the highest score.",
    embedUrl: "https://codepen.io/Hyperplexed/embed/rNrJgrd?default-tab=result",
    players: 12578,
    rating: 4.7
  },
  {
    id: 2,
    name: "Space Defender",
    description: "Classic arcade-style space shooter. Defend your planet against waves of alien invaders.",
    embedUrl: "https://codepen.io/jcoulterdesign/embed/NOMeEb?default-tab=result",
    players: 9846,
    rating: 4.5
  },
  {
    id: 3,
    name: "Puzzle Master",
    description: "Challenge your mind with this collection of puzzles that test your logical thinking and problem-solving abilities.",
    embedUrl: "https://codepen.io/ste-vg/embed/GRooLza?default-tab=result",
    players: 7532,
    rating: 4.8
  },
  {
    id: 4,
    name: "Retro Platformer",
    description: "Jump and run through this retro-styled platformer game inspired by classic 8-bit adventures.",
    embedUrl: "https://codepen.io/Yakudoo/embed/rJjVLL?default-tab=result",
    players: 10921,
    rating: 4.6
  }
];

const Games = () => {
  const [filter, setFilter] = useState('all');
  const [activeDemo, setActiveDemo] = useState(null);
  
  const featuredGame = games.find(game => game.featured);
  
  const genres = [...new Set(games.flatMap(game => game.genres))];
  
  const filteredGames = filter === 'all' 
    ? games.filter(game => !game.featured) 
    : games.filter(game => game.genres.includes(filter) && !game.featured);
  
  // Handle demo play buttons
  const handlePlayDemo = (id) => {
    setActiveDemo(id);
  };
  
  // Reset active demo when leaving page
  useEffect(() => {
    return () => {
      setActiveDemo(null);
    };
  }, []);
  
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
                    {featuredGame.platforms.map((platform, index) => (
                      <PlatformTag key={index}>{platform}</PlatformTag>
                    ))}
                  </PlatformTags>
                  
                  <GameDescription>
                    {featuredGame.longDescription}
                  </GameDescription>
                  
                  <ButtonGroup>
                    <Button 
                      as={Link} 
                      to={`/games/${featuredGame.id}`}
                      variant="primary"
                    >
                      View Details
                    </Button>
                    
                    <Button 
                      as="a" 
                      href={featuredGame.trailer} 
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      Watch Trailer
                    </Button>
                  </ButtonGroup>
                </FeaturedGameContent>
              </FeaturedGame>
            </>
          )}
          
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              All Games
            </motion.h2>
            
            <FilterContainer>
              <FilterButton
                active={filter === 'all'}
                onClick={() => setFilter('all')}
              >
                All
              </FilterButton>
              
              {genres.map((genre, index) => (
                <FilterButton
                  key={index}
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
                    game={game}
                  />
                ))}
              </GameGrid>
            ) : (
              <EmptyState>
                <h3>No games found</h3>
                <p>
                  We couldn't find any games matching your filter criteria. 
                  Please try selecting a different category or check back later for new releases.
                </p>
                <Button onClick={() => setFilter('all')}>
                  View All Games
                </Button>
              </EmptyState>
            )}
          </div>
        </Container>
      </Section>
      
      {/* New Game Demo Section */}
      <GameDemoSection>
        <Container>
          <GameDemoTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Try Our Games
          </GameDemoTitle>
          
          <GameDemoGrid>
            {demoGames.map((demo) => (
              <GameDemoCard
                key={demo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GamePlayFrame>
                  {activeDemo === demo.id ? (
                    <iframe 
                      src={demo.embedUrl} 
                      title={demo.name}
                      allowFullScreen
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : (
                    <>
                      <div style={{ 
                        backgroundImage: `linear-gradient(45deg, var(--surface), var(--background))`,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        <PlayButton 
                          variant="accent"
                          onClick={() => handlePlayDemo(demo.id)}
                        >
                          Play Now
                        </PlayButton>
                      </div>
                    </>
                  )}
                </GamePlayFrame>
                
                <GameDemoContent>
                  <GameDemoHeader>
                    <GameDemoName>{demo.name}</GameDemoName>
                  </GameDemoHeader>
                  
                  <GameDemoDescription>
                    {demo.description}
                  </GameDemoDescription>
                  
                  <GameStats>
                    <GameStat>
                      <span>Players</span>
                      <strong>{demo.players.toLocaleString()}</strong>
                    </GameStat>
                    
                    <GameStat>
                      <span>Rating</span>
                      <strong>{demo.rating}/5</strong>
                    </GameStat>
                  </GameStats>
                </GameDemoContent>
              </GameDemoCard>
            ))}
          </GameDemoGrid>
        </Container>
      </GameDemoSection>
    </>
  );
};

export default Games; 