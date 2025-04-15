import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaGamepad, FaDesktop, FaCalendarAlt, FaUsers, FaDownload } from 'react-icons/fa';

import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import gamesData from '../data/games';

// Styled components
const GameHero = styled.div`
  width: 100%;
  height: 70vh;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(10, 10, 20, 0.3), rgba(10, 10, 20, 0.9));
    z-index: 1;
  }
`;

const GameHeroContent = styled.div`
  position: absolute;
  bottom: 5rem;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const GameTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--secondary), var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const GameTagline = styled.p`
  font-size: 1.5rem;
  color: var(--text-secondary);
  max-width: 50%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const GameInfoLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const GameInfoMain = styled.div``;

const GameInfoSidebar = styled.div``;

const GameDescription = styled.div`
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const GameSection = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, var(--secondary), var(--primary));
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-left: 0;
  
  li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      color: var(--secondary);
      font-weight: bold;
    }
  }
`;

const ScreenshotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Screenshot = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ScreenshotCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: rgba(10, 10, 20, 0.8);
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const TrailerContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 2rem;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const InfoCard = styled.div`
  background: var(--surface);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoCardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--secondary);
`;

const InfoRow = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.div`
  width: 40%;
  color: var(--text-secondary);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoValue = styled.div`
  width: 60%;
  color: var(--text-primary);
`;

const PlatformTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PlatformTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: var(--surface-light);
  color: var(--text-primary);
  font-weight: 500;
`;

const RequirementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RequirementColumn = styled.div`
  background: var(--surface-light);
  border-radius: 10px;
  padding: 1rem;
  
  h4 {
    color: var(--secondary);
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-align: center;
  }
`;

const RequirementRow = styled.div`
  display: flex;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.8rem;
  
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const RequirementLabel = styled.div`
  width: 40%;
  color: var(--text-disabled);
  font-weight: 500;
  font-size: 0.9rem;
`;

const RequirementValue = styled.div`
  width: 60%;
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const FullScreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const FullScreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  cursor: zoom-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

const RelatedGames = styled.div`
  margin-top: 5rem;
`;

const RelatedGamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const RelatedGameCard = styled(Link)`
  background: var(--surface);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  color: var(--text-primary);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const RelatedGameImage = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${RelatedGameCard}:hover & img {
    transform: scale(1.05);
  }
`;

const RelatedGameContent = styled.div`
  padding: 1rem;
`;

const RelatedGameTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  ${RelatedGameCard}:hover & {
    color: var(--secondary);
  }
`;

const RelatedGameGenres = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const GameDetails = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedGames, setRelatedGames] = useState([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const gameId = parseInt(id);
    const foundGame = gamesData.find(g => g.id === gameId);
    
    if (foundGame) {
      setGame(foundGame);
      
      // Find related games with similar genres
      const related = gamesData
        .filter(g => g.id !== gameId && g.genres.some(genre => foundGame.genres.includes(genre)))
        .slice(0, 3);
      
      setRelatedGames(related);
    }
    
    setLoading(false);
  }, [id]);
  
  const openFullscreen = (image) => {
    setSelectedImage(image);
  };
  
  const closeFullscreen = () => {
    setSelectedImage(null);
  };
  
  if (loading) {
    return (
      <Section padding="10rem 0">
        <Container>
          <div style={{ textAlign: 'center' }}>Loading...</div>
        </Container>
      </Section>
    );
  }
  
  if (!game) {
    return (
      <Section padding="10rem 0">
        <Container>
          <div style={{ textAlign: 'center' }}>
            <h2>Game not found</h2>
            <p>Sorry, we couldn't find the game you're looking for.</p>
            <Button as={Link} to="/games" variant="secondary" style={{ marginTop: '2rem' }}>
              Back to Games
            </Button>
          </div>
        </Container>
      </Section>
    );
  }
  
  return (
    <>
      <GameHero image={game.heroImage || game.image}>
        <GameHeroContent>
          <Container>
            <GameTitle>{game.title}</GameTitle>
            <GameTagline>{game.description}</GameTagline>
            <ButtonGroup>
              <Button variant="primary" as="a" href="#trailer">
                <FaPlayCircle style={{ marginRight: '0.5rem' }} /> Watch Trailer
              </Button>
              <Button variant="secondary">
                <FaDownload style={{ marginRight: '0.5rem' }} /> Download Demo
              </Button>
            </ButtonGroup>
          </Container>
        </GameHeroContent>
      </GameHero>
      
      <Section padding="5rem 0">
        <Container>
          <GameInfoLayout>
            <GameInfoMain>
              <GameSection id="trailer">
                <SectionTitle>Trailer</SectionTitle>
                <TrailerContainer>
                  <iframe 
                    src={game.trailer} 
                    title={`${game.title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </TrailerContainer>
              </GameSection>
              
              <GameSection>
                <SectionTitle>About {game.title}</SectionTitle>
                <GameDescription>
                  <p>{game.longDescription}</p>
                </GameDescription>
              </GameSection>
              
              <GameSection>
                <SectionTitle>Key Features</SectionTitle>
                <FeatureList>
                  {game.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </FeatureList>
              </GameSection>
              
              {game.screenshots && (
                <GameSection>
                  <SectionTitle>Screenshots</SectionTitle>
                  <ScreenshotGrid>
                    {game.screenshots.map((screenshot) => (
                      <Screenshot key={screenshot.id} onClick={() => openFullscreen(screenshot)}>
                        <img src={screenshot.image} alt={screenshot.caption} />
                        <ScreenshotCaption>{screenshot.caption}</ScreenshotCaption>
                      </Screenshot>
                    ))}
                  </ScreenshotGrid>
                </GameSection>
              )}
              
              {game.minimumRequirements && (
                <GameSection>
                  <SectionTitle>System Requirements</SectionTitle>
                  <RequirementContainer>
                    <RequirementColumn>
                      <h4>Minimum</h4>
                      <RequirementRow>
                        <RequirementLabel>OS</RequirementLabel>
                        <RequirementValue>{game.minimumRequirements.os}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Processor</RequirementLabel>
                        <RequirementValue>{game.minimumRequirements.processor}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Memory</RequirementLabel>
                        <RequirementValue>{game.minimumRequirements.memory}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Graphics</RequirementLabel>
                        <RequirementValue>{game.minimumRequirements.graphics}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Storage</RequirementLabel>
                        <RequirementValue>{game.minimumRequirements.storage}</RequirementValue>
                      </RequirementRow>
                    </RequirementColumn>
                    
                    <RequirementColumn>
                      <h4>Recommended</h4>
                      <RequirementRow>
                        <RequirementLabel>OS</RequirementLabel>
                        <RequirementValue>{game.recommendedRequirements.os}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Processor</RequirementLabel>
                        <RequirementValue>{game.recommendedRequirements.processor}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Memory</RequirementLabel>
                        <RequirementValue>{game.recommendedRequirements.memory}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Graphics</RequirementLabel>
                        <RequirementValue>{game.recommendedRequirements.graphics}</RequirementValue>
                      </RequirementRow>
                      <RequirementRow>
                        <RequirementLabel>Storage</RequirementLabel>
                        <RequirementValue>{game.recommendedRequirements.storage}</RequirementValue>
                      </RequirementRow>
                    </RequirementColumn>
                  </RequirementContainer>
                </GameSection>
              )}
            </GameInfoMain>
            
            <GameInfoSidebar>
              <InfoCard>
                <InfoCardTitle>Game Info</InfoCardTitle>
                <InfoRow>
                  <InfoLabel><FaGamepad /> Genre</InfoLabel>
                  <InfoValue>{game.genres.join(', ')}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel><FaCalendarAlt /> Release Date</InfoLabel>
                  <InfoValue>{game.releaseDate}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel><FaDesktop /> Developer</InfoLabel>
                  <InfoValue>{game.developer}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel><FaUsers /> Publisher</InfoLabel>
                  <InfoValue>{game.publisher}</InfoValue>
                </InfoRow>
                <InfoRow>
                  <InfoLabel>Platforms</InfoLabel>
                  <InfoValue>
                    <PlatformTags>
                      {game.platforms.map((platform, index) => (
                        <PlatformTag key={index}>{platform}</PlatformTag>
                      ))}
                    </PlatformTags>
                  </InfoValue>
                </InfoRow>
              </InfoCard>
              
              <Button variant="primary" style={{ width: '100%', marginBottom: '1rem' }}>
                <FaDownload style={{ marginRight: '0.5rem' }} /> Pre-order Now
              </Button>
              <Button variant="outline" style={{ width: '100%' }}>
                Add to Wishlist
              </Button>
            </GameInfoSidebar>
          </GameInfoLayout>
          
          {relatedGames.length > 0 && (
            <RelatedGames>
              <SectionTitle>You Might Also Like</SectionTitle>
              <RelatedGamesGrid>
                {relatedGames.map((relatedGame) => (
                  <RelatedGameCard key={relatedGame.id} to={`/games/${relatedGame.id}`}>
                    <RelatedGameImage>
                      <img src={relatedGame.image} alt={relatedGame.title} />
                    </RelatedGameImage>
                    <RelatedGameContent>
                      <RelatedGameTitle>{relatedGame.title}</RelatedGameTitle>
                      <RelatedGameGenres>{relatedGame.genres.join(', ')}</RelatedGameGenres>
                    </RelatedGameContent>
                  </RelatedGameCard>
                ))}
              </RelatedGamesGrid>
            </RelatedGames>
          )}
        </Container>
      </Section>
      
      {selectedImage && (
        <FullScreenOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeFullscreen}
        >
          <CloseButton onClick={closeFullscreen}>×</CloseButton>
          <FullScreenImage src={selectedImage.image} alt={selectedImage.caption} />
        </FullScreenOverlay>
      )}
    </>
  );
};

export default GameDetails; 