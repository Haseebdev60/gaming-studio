import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord, faTwitch, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

import Container from './Container';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const FooterWrapper = styled.footer`
  background: linear-gradient(0deg, var(--background) 0%, var(--surface) 100%);
  padding: 5rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--accent);
  }
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  
  &:hover {
    color: var(--secondary);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: var(--text-primary);
    transform: translateY(-5px);
    box-shadow: var(--glow-primary);
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 1rem;
  position: relative;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const NewsletterInput = styled.input`
  background: var(--surface-light);
  border: 1px solid var(--surface-light);
  border-radius: 4px 0 0 4px;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  flex: 1;
  font-family: var(--font-body);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
  
  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };
  
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterColumn>
            <Logo withTagline />
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Creating immersive gaming experiences that push boundaries and ignite imagination.
            </p>
            <SocialLinks>
              <SocialLink href="#" target="_blank" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </SocialLink>
              <SocialLink href="#" target="_blank" aria-label="Discord">
                <FontAwesomeIcon icon={faDiscord} />
              </SocialLink>
              <SocialLink href="#" target="_blank" aria-label="Twitch">
                <FontAwesomeIcon icon={faTwitch} />
              </SocialLink>
              <SocialLink href="#" target="_blank" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </SocialLink>
              <SocialLink href="#" target="_blank" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Company</FooterHeading>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Games</FooterHeading>
            <FooterLink href="/games">Our Games</FooterLink>
            <FooterLink href="/games/upcoming">Upcoming Releases</FooterLink>
            <FooterLink href="/games/updates">Game Updates</FooterLink>
            <FooterLink href="/support">Support</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Newsletter</FooterHeading>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Subscribe for updates on our latest games, exclusive content, and special offers.
            </p>
            <NewsletterForm onSubmit={handleSubmit}>
              <NewsletterInput
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="accent">
                Subscribe
              </Button>
            </NewsletterForm>
          </FooterColumn>
        </FooterTop>
        
        <FooterBottom>
          <Copyright>&copy; {new Date().getFullYear()} PixelForge Studios. All rights reserved.</Copyright>
          <FooterBottomLinks>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
          </FooterBottomLinks>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 