import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import Container from './Container';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  background: ${({ scrolled }) => scrolled 
    ? 'rgba(10, 10, 20, 0.95)' 
    : 'transparent'
  };
  box-shadow: ${({ scrolled }) => scrolled 
    ? '0 4px 30px rgba(0, 0, 0, 0.1)' 
    : 'none'
  };
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 80px;
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  
  @media (max-width: 991px) {
    display: none;
  }
`;

const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavbarLink = styled(NavLink)`
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-primary);
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--secondary);
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: var(--secondary);
    text-shadow: var(--glow-secondary);
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 991px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  background: rgba(10, 10, 20, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SoundButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  &:hover {
    color: var(--secondary);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const menuVariants = {
  initial: {
    opacity: 0,
    y: -20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);
  
  const toggleSound = () => {
    setSoundOn(!soundOn);
    // Sound logic would go here
  };
  
  return (
    <NavbarWrapper scrolled={scrolled}>
      <NavbarContainer>
        <Logo />
        
        <NavbarLinks>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About Us</NavbarLink>
          <NavbarLink to="/games">Our Games</NavbarLink>
          <NavbarLink to="/careers">Careers</NavbarLink>
          <NavbarLink to="/blog">Blog</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </NavbarLinks>
        
        <NavbarActions>
          <SoundButton onClick={toggleSound}>
            <FontAwesomeIcon icon={soundOn ? faVolumeHigh : faVolumeMute} />
          </SoundButton>
          
          <Button variant="secondary" as={NavLink} to="/contact">
            Get In Touch
          </Button>
          
          <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </MobileMenuButton>
        </NavbarActions>
      </NavbarContainer>
      
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <MobileNavbarLinks>
              <NavbarLink to="/" onClick={() => setIsOpen(false)}>Home</NavbarLink>
              <NavbarLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavbarLink>
              <NavbarLink to="/games" onClick={() => setIsOpen(false)}>Our Games</NavbarLink>
              <NavbarLink to="/careers" onClick={() => setIsOpen(false)}>Careers</NavbarLink>
              <NavbarLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavbarLink>
              <NavbarLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavbarLink>
            </MobileNavbarLinks>
            
            <Button variant="accent" as={NavLink} to="/contact" onClick={() => setIsOpen(false)}>
              Get In Touch
            </Button>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarWrapper>
  );
};

export default Navbar; 