import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Hero from '../components/ui/Hero';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import GameCard from '../components/ui/GameCard';
import allGames from '../data/games'; // Import the games data

const FeaturedGameGrid = styled.div`
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

const SectionHeading = styled(motion.h2)`
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--accent);
  }
`;

const SectionSubheading = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 600px;
  margin: 2rem 0;
`;

const NewsSection = styled(Section)`
  background: linear-gradient(135deg, var(--surface), var(--surface-light));
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(110, 16, 238, 0.15),
      transparent 60%
    );
    z-index: 0;
  }
`;

const NewsCard = styled(motion.div)`
  background: rgba(20, 20, 43, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: var(--primary);
  }
`;

const NewsDate = styled.span`
  font-size: 0.8rem;
  color: var(--secondary);
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
`;

const NewsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const NewsletterSection = styled(Section)`
  padding: 6rem 0;
  text-align: center;
  
  &:before {
    content: '';
    position: absolute;
    width: 200%;
    height: 100%;
    top: 0;
    left: -50%;
    background: url('/grid-pattern.svg');
    opacity: 0.05;
    z-index: 0;
  }
`;

const NewsletterForm = styled.form`
  max-width: 600px;
  margin: 3rem auto 0;
  display: flex;
  position: relative;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border-radius: 4px 0 0 4px;
  background: var(--surface-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  font-family: var(--font-body);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

const Newsletter = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const UpcomingCard = styled.div`
  background: linear-gradient(135deg, rgba(110, 16, 238, 0.2), rgba(0, 240, 255, 0.2));
  border-radius: 12px;
  padding: 2rem;
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/hexagon-pattern.svg');
    opacity: 0.1;
    z-index: 0;
  }
`;

const UpcomingContent = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const UpcomingImageWrapper = styled.div`
  flex: 0 0 200px;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const UpcomingImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(110, 16, 238, 0.3);
`;

const UpcomingInfo = styled.div`
  flex: 1;
`;

const CountdownTimer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

const CountdownItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(20, 20, 43, 0.6);
  border-radius: 8px;
  padding: 1rem;
  min-width: 80px;
  
  @media (max-width: 576px) {
    min-width: 60px;
    padding: 0.5rem;
  }
`;

const CountdownNumber = styled.span`
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--secondary);
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const CountdownLabel = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
  text-transform: uppercase;
`;

const Home = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter logic would go here
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };
  
  // Filter to just show 3 games on the home page (featured or newest)
  const games = allGames
    .filter(game => game.featured || game.status === 'new' || game.status === 'upcoming')
    .slice(0, 3);
  
  const news = [
    {
      id: 1,
      title: 'Neon Odyssey Now Available on All Platforms',
      date: 'June 15, 2023',
      excerpt: 'Our latest cyberpunk adventure has finally launched! Explore the neon-lit streets of Neo Tokyo.'
    },
    {
      id: 2,
      title: 'PixelForge Studios Announces New Fantasy IP',
      date: 'May 28, 2023',
      excerpt: 'We\'re thrilled to announce our newest project, a dark fantasy adventure set in a world of ancient magic.'
    }
  ];
  
  return (
    <>
      <Hero />
      
      <Section light padding="6rem 0">
        <Container>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Games
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our latest releases and upcoming titles that push the boundaries of interactive entertainment.
          </SectionSubheading>
          
          <FeaturedGameGrid>
            {games.map((game, index) => (
              <GameCard 
                key={index}
                image={game.image}
                title={game.title}
                description={game.description}
                platforms={game.platforms}
                status={game.status}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => window.location.href = `/games/${game.id}`}
              />
            ))}
          </FeaturedGameGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button variant="primary" as="a" href="/games">
              View All Games
            </Button>
          </div>
        </Container>
      </Section>
      
      <Section padding="6rem 0">
        <Container>
          <UpcomingCard>
            <UpcomingContent>
              <UpcomingImageWrapper>
                <UpcomingImage src="/upcoming-game.jpg" alt="Upcoming Game" />
              </UpcomingImageWrapper>
              
              <UpcomingInfo>
                <SectionHeading
                  style={{ marginBottom: '1rem' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Quantum Breach - Coming Soon
                </SectionHeading>
                
                <p>Get ready for our most ambitious project yet, featuring revolutionary time-manipulation gameplay mechanics. Pre-orders available now with exclusive bonuses!</p>
                
                <CountdownTimer>
                  <CountdownItem>
                    <CountdownNumber>32</CountdownNumber>
                    <CountdownLabel>Days</CountdownLabel>
                  </CountdownItem>
                  <CountdownItem>
                    <CountdownNumber>15</CountdownNumber>
                    <CountdownLabel>Hours</CountdownLabel>
                  </CountdownItem>
                  <CountdownItem>
                    <CountdownNumber>42</CountdownNumber>
                    <CountdownLabel>Mins</CountdownLabel>
                  </CountdownItem>
                  <CountdownItem>
                    <CountdownNumber>22</CountdownNumber>
                    <CountdownLabel>Secs</CountdownLabel>
                  </CountdownItem>
                </CountdownTimer>
                
                <Button variant="accent">Pre-order Now</Button>
              </UpcomingInfo>
            </UpcomingContent>
          </UpcomingCard>
        </Container>
      </Section>
      
      <NewsSection padding="6rem 0">
        <Container>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Latest News
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay updated with the latest announcements, releases, and behind-the-scenes content from our studio.
          </SectionSubheading>
          
          {news.map((item, index) => (
            <NewsCard
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <NewsDate>{item.date}</NewsDate>
              <NewsTitle>{item.title}</NewsTitle>
              <p>{item.excerpt}</p>
              <Button variant="ghost" style={{ marginTop: '1rem' }}>Read More</Button>
            </NewsCard>
          ))}
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button variant="secondary" as="a" href="/blog">
              View All News
            </Button>
          </div>
        </Container>
      </NewsSection>
      
      <NewsletterSection withGlow centerContent>
        <Container>
          <Newsletter>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay up to date with our latest game releases, updates, exclusive content, and special offers delivered directly to your inbox.
            </motion.p>
            
            <NewsletterForm onSubmit={handleSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="accent">Subscribe</Button>
            </NewsletterForm>
          </Newsletter>
        </Container>
      </NewsletterSection>
    </>
  );
};

export default Home; 