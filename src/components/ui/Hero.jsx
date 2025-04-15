import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from './Button';
import Container from '../layout/Container';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--background);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(110, 16, 238, 0.15) 0%, transparent 70%);
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, var(--background), transparent);
    z-index: 2;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`;

const GridEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(20, 20, 43, 0.8) 1px, transparent 1px),
    linear-gradient(90deg, rgba(20, 20, 43, 0.8) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.15;
  z-index: 1;
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 3;
  padding-top: 5rem;
`;

const TagLine = styled(motion.p)`
  color: var(--secondary);
  font-family: var(--font-heading);
  font-size: 1.2rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -60px;
    width: 40px;
    height: 1px;
    background: var(--secondary);
    transform: translateY(-50%);
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    
    &:before {
      width: 20px;
      left: -30px;
    }
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  max-width: 800px;
  line-height: 1.1;
  
  @media (max-width: 991px) {
    font-size: 4rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 2.5rem;
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
`;

const FloatingObject = styled(motion.div)`
  position: absolute;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;
  opacity: 0.3;
`;

const Hero = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 10);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: i % 3 === 0 ? '#6E10EE' : i % 3 === 1 ? '#00F0FF' : '#FF3864'
        });
      }
    };
    
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reset if particle moves out of canvas
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <HeroSection>
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/cyberpunk-city.mp4" type="video/mp4" />
      </VideoBackground>
      
      <GridEffect />
      
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.4,
          pointerEvents: 'none'
        }}
      />
      
      <FloatingObject
        style={{ width: '300px', height: '300px', top: '20%', right: '-100px' }}
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <FloatingObject
        style={{ width: '200px', height: '200px', bottom: '10%', left: '-50px' }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
      
      <HeroContent>
        <TagLine
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to PixelForge Studios
        </TagLine>
        
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting Worlds Beyond Imagination
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We create immersive gaming experiences that push the boundaries of technology 
          and storytelling to deliver unforgettable adventures.
        </HeroSubtitle>
        
        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button variant="primary" as="a" href="/games">
            Explore Our Games
          </Button>
          <Button variant="outline" as="a" href="/about">
            About the Studio
          </Button>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 