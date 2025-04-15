import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faDiscord, faTwitch, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

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

const ContactSection = styled(Section)`
  padding: 6rem 0;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  p {
    margin-bottom: 2rem;
    color: var(--text-secondary);
    line-height: 1.7;
  }
`;

const ContactCard = styled.div`
  background: var(--surface);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin-bottom: 0;
    font-size: 1rem;
  }
  
  a {
    color: var(--text-secondary);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--secondary);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
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

const ContactForm = styled(motion.form)`
  background: var(--surface);
  border-radius: 12px;
  padding: 3rem;
  
  @media (max-width: 576px) {
    padding: 2rem;
  }
  
  h2 {
    margin-bottom: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: var(--surface-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: var(--font-body);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: var(--surface-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: var(--font-body);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const Success = styled.div`
  padding: 1rem;
  background: rgba(0, 255, 128, 0.1);
  border: 1px solid rgba(0, 255, 128, 0.2);
  border-radius: 8px;
  color: #00FF80;
  margin-bottom: 1.5rem;
`;

const Error = styled.div`
  padding: 1rem;
  background: rgba(255, 56, 100, 0.1);
  border: 1px solid rgba(255, 56, 100, 0.2);
  border-radius: 8px;
  color: var(--accent);
  margin-bottom: 1.5rem;
`;

const MapSection = styled(Section)`
  padding: 2rem 0 6rem;
`;

const MapContainer = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  height: 400px;
  width: 100%;
  background: var(--surface-light);
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(110, 16, 238, 0.2), rgba(0, 240, 255, 0.2));
    pointer-events: none;
    z-index: 1;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Please fill out all fields.'
      });
      return;
    }
    
    // Simulate form submission
    setFormStatus({ ...formStatus, submitting: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          success: false,
          error: false,
          message: ''
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <HeroSection>
        <Container>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </PageTitle>
          
          <PageSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions or feedback? We'd love to hear from you. 
            Get in touch with our team using the information below.
          </PageSubtitle>
        </Container>
      </HeroSection>
      
      <ContactSection>
        <Container>
          <ContactGrid>
            <ContactInfo
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Get In Touch</h2>
              <p>
                We're always interested in hearing from players, potential partners, 
                and anyone who shares our passion for gaming. Reach out to us using 
                any of the methods below.
              </p>
              
              <ContactCard>
                <IconWrapper>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </IconWrapper>
                <ContactDetails>
                  <h3>Our Location</h3>
                  <p>123 Innovation Drive<br />San Francisco, CA 94103<br />United States</p>
                </ContactDetails>
              </ContactCard>
              
              <ContactCard>
                <IconWrapper>
                  <FontAwesomeIcon icon={faEnvelope} />
                </IconWrapper>
                <ContactDetails>
                  <h3>Email Us</h3>
                  <p><a href="mailto:info@pixelforgestudios.com">info@pixelforgestudios.com</a></p>
                  <p><a href="mailto:support@pixelforgestudios.com">support@pixelforgestudios.com</a></p>
                </ContactDetails>
              </ContactCard>
              
              <ContactCard>
                <IconWrapper>
                  <FontAwesomeIcon icon={faPhone} />
                </IconWrapper>
                <ContactDetails>
                  <h3>Call Us</h3>
                  <p><a href="tel:+14155552671">+1 (415) 555-2671</a></p>
                  <p>Monday-Friday, 9am-6pm PT</p>
                </ContactDetails>
              </ContactCard>
              
              <h3>Follow Us</h3>
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
            </ContactInfo>
            
            <ContactForm
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
            >
              <h2>Send Us a Message</h2>
              
              {formStatus.success && <Success>{formStatus.message}</Success>}
              {formStatus.error && <Error>{formStatus.message}</Error>}
              
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="John Doe"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="How can we help you?"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Your Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Type your message here..."
                  required
                />
              </FormGroup>
              
              <Button 
                type="submit" 
                variant="primary" 
                disabled={formStatus.submitting}
                style={{ width: '100%' }}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </ContactForm>
          </ContactGrid>
        </Container>
      </ContactSection>
      
      <MapSection>
        <Container>
          <MapContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/studio-map.jpg" alt="PixelForge Studios Location Map" />
          </MapContainer>
        </Container>
      </MapSection>
    </>
  );
};

export default Contact; 