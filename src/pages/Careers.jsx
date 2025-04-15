import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGamepad, FaPaintBrush, FaCode, FaBullhorn, FaChartLine } from 'react-icons/fa';

import Container from '../components/layout/Container';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const CareersSection = styled.section`
  padding: 4rem 0;
`;

const JobGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const JobCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: white;
`;

const Department = styled.h3`
  color: var(--secondary);
  margin-bottom: 0.5rem;
`;

const JobTitle = styled.h4`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const JobInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-disabled);
`;

const CultureSection = styled.section`
  padding: 4rem 0;
  background-color: var(--surface);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const CultureText = styled.div`
  padding: 2rem;
`;

const CultureImage = styled.div`
  background-image: url('https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  min-height: 400px;
`;

const BenefitsSection = styled.section`
  padding: 4rem 0;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  background-color: var(--surface);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid var(--primary);
  
  h4 {
    color: var(--secondary);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }
`;

const Careers = () => {
  const jobs = [
    {
      id: 1,
      department: 'Game Development',
      title: 'Senior Game Developer',
      description: 'Join our team to create immersive gaming experiences using cutting-edge technology.',
      location: 'Remote',
      type: 'Full-time',
      icon: <FaGamepad />
    },
    {
      id: 2,
      department: 'Art & Design',
      title: '3D Character Artist',
      description: 'Design visually stunning characters that bring our game worlds to life.',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      icon: <FaPaintBrush />
    },
    {
      id: 3,
      department: 'Engineering',
      title: 'Backend Engineer',
      description: 'Build scalable infrastructure to support millions of players worldwide.',
      location: 'Remote',
      type: 'Full-time',
      icon: <FaCode />
    },
    {
      id: 4,
      department: 'Marketing',
      title: 'Community Manager',
      description: 'Engage with our player community and help grow our presence across social platforms.',
      location: 'Hybrid',
      type: 'Full-time',
      icon: <FaBullhorn />
    },
    {
      id: 5,
      department: 'Business',
      title: 'Product Manager',
      description: 'Drive the vision and strategy for our upcoming game titles.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      icon: <FaChartLine />
    }
  ];

  const benefits = [
    { title: 'Flexible Work Hours', description: 'Work when you\'re most productive with our flexible scheduling.' },
    { title: 'Remote Options', description: 'Work from anywhere in the world with our remote-first approach.' },
    { title: 'Competitive Salary', description: 'Earn what you deserve with our industry-leading compensation.' },
    { title: 'Health Benefits', description: 'Comprehensive health, dental, and vision coverage for you and your dependents.' },
    { title: 'Learning Budget', description: 'Annual budget for courses, books, and conferences to help you grow.' },
    { title: 'Game Perks', description: 'Free games, beta access, and special events for all team members.' }
  ];

  return (
    <>
      <PageHeader 
        title="Join Our Team" 
        subtitle="Build the future of gaming with us"
        background="linear-gradient(rgba(10, 10, 20, 0.7), rgba(10, 10, 20, 0.9)), url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
      />
      
      <CareersSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Open Positions</h2>
            <p>Join our team of passionate gamers, creators, and innovators.</p>
            
            <JobGrid>
              {jobs.map(job => (
                <motion.div
                  key={job.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <JobCard>
                    <IconWrapper>{job.icon}</IconWrapper>
                    <Department>{job.department}</Department>
                    <JobTitle>{job.title}</JobTitle>
                    <JobDescription>{job.description}</JobDescription>
                    <JobInfo>
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                    </JobInfo>
                    <Button variant="secondary" fullWidth>View Details</Button>
                  </JobCard>
                </motion.div>
              ))}
            </JobGrid>
          </motion.div>
        </Container>
      </CareersSection>
      
      <CultureSection>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GridContainer>
              <CultureText>
                <h2>Our Culture</h2>
                <p>
                  At our core, we believe that great games come from passionate teams working in an environment that fosters creativity, collaboration, and personal growth.
                </p>
                <p>
                  We're committed to building a diverse, inclusive workplace where everyone feels valued and empowered to do their best work. Our team members come from all walks of life, bringing unique perspectives that make our games better.
                </p>
                <p>
                  We embrace a flexible work philosophy that prioritizes results over rigid schedules, and we trust our team members to manage their time effectively.
                </p>
              </CultureText>
              <CultureImage />
            </GridContainer>
          </motion.div>
        </Container>
      </CultureSection>
      
      <BenefitsSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Benefits & Perks</h2>
            <p>We take care of our team so they can focus on creating amazing games.</p>
            
            <BenefitsList>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BenefitItem>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </BenefitItem>
                </motion.div>
              ))}
            </BenefitsList>
          </motion.div>
        </Container>
      </BenefitsSection>
    </>
  );
};

export default Careers; 