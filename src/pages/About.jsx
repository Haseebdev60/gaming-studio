import styled from 'styled-components';
import { motion } from 'framer-motion';

import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';

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
    background: url('/code-pattern.svg');
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 4rem 0;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled(motion.div)`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ImageContainer = styled(motion.div)`
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

const ValuesGrid = styled.div`
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

const ValueCard = styled(motion.div)`
  background: var(--surface);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--glow-primary);
    
    &:before {
      opacity: 0.1;
    }
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--text-primary);
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const TeamSection = styled(Section)`
  background: var(--background);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled(motion.div)`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, var(--surface) 0%, transparent 50%);
    z-index: 1;
    opacity: 0.6;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const TeamMemberName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TeamMemberTitle = styled.p`
  color: var(--secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TeamMemberBio = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const TimelineSection = styled(Section)`
  background: linear-gradient(135deg, var(--surface), var(--surface-light));
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 3rem auto 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 1.5rem 0;
  position: relative;
  display: flex;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    padding-left: 40px;
  }
  
  &:nth-child(odd) {
    justify-content: flex-start;
    
    .timeline-content {
      margin-right: auto;
      margin-left: 2.5rem;
      
      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
    
    .timeline-dot {
      right: auto;
      left: 0;
      
      @media (max-width: 768px) {
        left: 20px;
      }
    }
  }
  
  &:nth-child(even) {
    justify-content: flex-end;
    
    .timeline-content {
      margin-left: auto;
      margin-right: 2.5rem;
      text-align: right;
      
      @media (max-width: 768px) {
        margin-right: 0;
        text-align: left;
      }
    }
    
    .timeline-dot {
      left: auto;
      right: 0;
      
      @media (max-width: 768px) {
        left: 20px;
        right: auto;
      }
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--secondary);
  z-index: 2;
  border: 4px solid var(--surface);
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
  
  @media (max-width: 768px) {
    left: 20px;
    transform: none;
  }
`;

const TimelineContent = styled.div`
  background: var(--surface);
  border-radius: 12px;
  padding: 1.5rem;
  width: 45%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  
  @media (max-width: 768px) {
    width: 100%;
  }
  
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const TimelineYear = styled.div`
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const About = () => {
  const values = [
    {
      icon: '🎮',
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in game development, constantly exploring new technologies and creative approaches.'
    },
    {
      icon: '✨',
      title: 'Quality',
      description: 'We\'re committed to delivering polished, high-quality experiences that engage players and exceed expectations.'
    },
    {
      icon: '🔥',
      title: 'Passion',
      description: 'Our team is driven by a shared passion for gaming and storytelling, bringing enthusiasm to every project we undertake.'
    },
    {
      icon: '🌍',
      title: 'Inclusivity',
      description: 'We create games for everyone, ensuring diverse perspectives are represented in our stories and our workplace.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'We value our player community and actively engage with feedback to create better gaming experiences.'
    },
    {
      icon: '🚀',
      title: 'Ambition',
      description: 'We dream big and set ambitious goals, pushing ourselves to create groundbreaking games that leave lasting impressions.'
    }
  ];
  
  const team = [
    {
      name: 'Alex Chen',
      title: 'Founder & Creative Director',
      image: '/team1.jpg',
      bio: 'Gaming visionary with over 15 years of industry experience at major studios.'
    },
    {
      name: 'Sarah Johnson',
      title: 'Lead Game Designer',
      image: '/team2.jpg',
      bio: 'Award-winning designer known for innovative gameplay mechanics and systems.'
    },
    {
      name: 'Marcus Williams',
      title: 'Technical Director',
      image: '/team3.jpg',
      bio: 'Engineering wizard who specializes in cutting-edge graphics and performance optimization.'
    },
    {
      name: 'Elena Rodriguez',
      title: 'Art Director',
      image: '/team4.jpg',
      bio: 'Renowned digital artist with a passion for creating immersive visual worlds.'
    },
    {
      name: 'David Kim',
      title: 'Lead Programmer',
      image: '/team5.jpg',
      bio: 'Coding expert with a background in AI and procedural generation systems.'
    },
    {
      name: 'Olivia Taylor',
      title: 'Narrative Designer',
      image: '/team6.jpg',
      bio: 'Former novelist who brings deep storytelling expertise to our game worlds.'
    },
    {
      name: 'James Wilson',
      title: 'Audio Director',
      image: '/team7.jpg',
      bio: 'Musician and sound designer crafting atmospheric soundscapes for our games.'
    },
    {
      name: 'Priya Patel',
      title: 'Community Manager',
      image: '/team8.jpg',
      bio: 'Player advocate who ensures community feedback shapes our development process.'
    }
  ];
  
  const timeline = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'PixelForge Studios was founded by a small team of passionate developers with a vision to create innovative games.'
    },
    {
      year: '2016',
      title: 'First Project',
      description: 'Released our debut indie title "Quantum Shift," a puzzle game that gained critical acclaim for its unique mechanics.'
    },
    {
      year: '2018',
      title: 'Growing Team',
      description: 'Expanded to 20 team members and moved to a larger studio space after securing additional funding.'
    },
    {
      year: '2019',
      title: 'First Major Release',
      description: 'Launched "Ethereal Legends," our first large-scale RPG that established us in the industry.'
    },
    {
      year: '2021',
      title: 'Award Recognition',
      description: 'Received multiple industry awards for storytelling and visual design in "Neon Odyssey."'
    },
    {
      year: '2023',
      title: 'Present Day',
      description: 'Now a team of 50+ creators working on multiple exciting projects across various platforms.'
    }
  ];
  
  return (
    <>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Our Studio
          </PageTitle>
          
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a team of passionate game developers dedicated to creating immersive 
            experiences that push the boundaries of interactive entertainment.
          </PageSubtitle>
        </Container>
      </HeroSection>
      
      <Section padding="6rem 0">
        <Container>
          <AboutGrid>
            <TextContent
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>
                At PixelForge Studios, we believe in the transformative power of interactive entertainment. 
                Our mission is to craft memorable gaming experiences that push creative and technical 
                boundaries while telling compelling stories that resonate with players around the world.
              </p>
              <p>
                Founded in 2015, we've grown from a small indie team to a diverse studio of talented 
                developers, artists, writers, and designers united by our passion for gaming and innovation.
              </p>
              <p>
                We're dedicated to:
              </p>
              <ul>
                <li>Creating games with meaningful narratives and innovative gameplay</li>
                <li>Fostering an inclusive and collaborative work environment</li>
                <li>Building lasting relationships with our player community</li>
                <li>Pushing the technical boundaries of interactive entertainment</li>
              </ul>
              <Button variant="primary" as="a" href="/careers">
                Join Our Team
              </Button>
            </TextContent>
            
            <ImageContainer
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/studio.jpg" alt="PixelForge Studios Office" />
            </ImageContainer>
          </AboutGrid>
        </Container>
      </Section>
      
      <Section light padding="6rem 0">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            These core principles guide everything we do, from game development to team culture.
          </motion.p>
          
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <p>{value.description}</p>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Container>
      </Section>
      
      <TimelineSection padding="6rem 0">
        <Container style={{ textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: '700px', margin: '1.5rem auto' }}
          >
            From our humble beginnings to where we are today, it\'s been an incredible adventure.
          </motion.p>
          
          <Timeline>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TimelineDot className="timeline-dot" />
                <TimelineContent className="timeline-content">
                  <TimelineYear>{item.year}</TimelineYear>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <p>{item.description}</p>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </TimelineSection>
      
      <TeamSection padding="6rem 0">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            Meet Our Team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', maxWidth: '700px', margin: '1.5rem auto' }}
          >
            Our diverse team of talented individuals brings unique perspectives and skills to create exceptional gaming experiences.
          </motion.p>
          
          <TeamGrid>
            {team.map((member, index) => (
              <TeamMember
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <TeamMemberImage>
                  <img src={member.image} alt={member.name} />
                </TeamMemberImage>
                <TeamMemberName>{member.name}</TeamMemberName>
                <TeamMemberTitle>{member.title}</TeamMemberTitle>
                <TeamMemberBio>{member.bio}</TeamMemberBio>
              </TeamMember>
            ))}
          </TeamGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button variant="accent" as="a" href="/careers">
              Join Our Team
            </Button>
          </div>
        </Container>
      </TeamSection>
    </>
  );
};

export default About; 