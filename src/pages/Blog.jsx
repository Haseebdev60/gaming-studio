import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaComment, FaTags } from 'react-icons/fa';

import Container from '../components/layout/Container';
import PageHeader from '../components/ui/PageHeader';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const BlogSection = styled.section`
  padding: 4rem 0;
`;

const BlogLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const BlogPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BlogPost = styled(Card)`
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const BlogImage = styled.div`
  height: 240px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const BlogCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--primary);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  
  a {
    color: var(--text-primary);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--secondary);
    }
  }
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--text-disabled);
  margin-bottom: 1rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Sidebar = styled.aside``;

const SidebarWidget = styled(Card)`
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--surface-light);
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--surface-light);
    
    &:last-child {
      border-bottom: none;
    }
    
    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--text-secondary);
      transition: all 0.3s ease;
      
      &:hover {
        color: var(--secondary);
      }
    }
  }
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled(Link)`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: var(--surface-light);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const RecentPostItem = styled(Link)`
  display: flex;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--surface-light);
  
  &:last-child {
    border-bottom: none;
  }
  
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  div {
    flex: 1;
  }
  
  h5 {
    font-size: 0.95rem;
    line-height: 1.3;
    margin-bottom: 0.3rem;
    color: var(--text-primary);
    transition: all 0.3s ease;
  }
  
  span {
    font-size: 0.8rem;
    color: var(--text-disabled);
  }
  
  &:hover h5 {
    color: var(--secondary);
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 0.5rem;
`;

const PageNumber = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => active ? 'var(--primary)' : 'var(--surface)'};
  color: ${({ active }) => active ? 'white' : 'var(--text-secondary)'};
  border-radius: 5px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Evolution of Open World Game Design',
      excerpt: 'Exploring how open world games have evolved over the last decade and what the future holds for this popular genre.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      category: 'Game Design',
      date: 'May 12, 2025',
      author: 'Jane Smith',
      comments: 24,
      tags: ['open world', 'game design', 'future tech']
    },
    {
      id: 2,
      title: 'How We Created Realistic Sound Effects for Our Latest RPG',
      excerpt: 'Our sound design team shares the process of creating immersive audio experiences for fantasy worlds.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Sound Design',
      date: 'April 28, 2025',
      author: 'Mike Johnson',
      comments: 16,
      tags: ['sound design', 'rpg', 'behind the scenes']
    },
    {
      id: 3,
      title: 'The Impact of AI on Modern Game Development',
      excerpt: 'How artificial intelligence is revolutionizing game development, from NPCs to procedural generation.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      category: 'Technology',
      date: 'April 15, 2025',
      author: 'Alex Chen',
      comments: 32,
      tags: ['ai', 'technology', 'game development']
    },
    {
      id: 4,
      title: 'Creating Memorable Characters: A Writer\'s Perspective',
      excerpt: 'Our lead narrative designer discusses the art of crafting characters that resonate with players.',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Writing',
      date: 'April 3, 2025',
      author: 'Sarah Williams',
      comments: 19,
      tags: ['narrative', 'characters', 'writing']
    }
  ];

  const categories = [
    { name: 'Game Design', count: 12 },
    { name: 'Technology', count: 8 },
    { name: 'Development', count: 15 },
    { name: 'Art & Animation', count: 10 },
    { name: 'Industry News', count: 7 },
    { name: 'Sound Design', count: 5 },
    { name: 'Writing', count: 9 }
  ];

  const tags = [
    'gameplay', 'design', 'AI', 'graphics', 'storytelling', 'characters', 
    'indie', 'AAA', 'mobile', 'VR', 'AR', 'multiplayer', 'esports', 
    'development', 'Unity', 'Unreal Engine'
  ];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <PageHeader 
        title="Our Blog" 
        subtitle="Insights & news from our gaming world"
        background="linear-gradient(rgba(10, 10, 20, 0.7), rgba(10, 10, 20, 0.9)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      />
      
      <BlogSection>
        <Container>
          <BlogLayout>
            <BlogPosts>
              {blogPosts.map(post => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: post.id * 0.1 }}
                >
                  <BlogPost>
                    <BlogImage style={{ backgroundImage: `url(${post.image})` }}>
                      <BlogCategory>{post.category}</BlogCategory>
                    </BlogImage>
                    <BlogContent>
                      <BlogTitle>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </BlogTitle>
                      <BlogMeta>
                        <MetaItem>
                          <FaCalendarAlt /> {post.date}
                        </MetaItem>
                        <MetaItem>
                          <FaUser /> {post.author}
                        </MetaItem>
                        <MetaItem>
                          <FaComment /> {post.comments} Comments
                        </MetaItem>
                      </BlogMeta>
                      <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                      <Button as={Link} to={`/blog/${post.id}`} variant="secondary">
                        Read More
                      </Button>
                    </BlogContent>
                  </BlogPost>
                </motion.div>
              ))}
              
              <Pagination>
                <PageNumber active href="#">1</PageNumber>
                <PageNumber href="#">2</PageNumber>
                <PageNumber href="#">3</PageNumber>
                <PageNumber href="#">4</PageNumber>
                <PageNumber href="#">5</PageNumber>
              </Pagination>
            </BlogPosts>
            
            <Sidebar>
              <SidebarWidget>
                <h4>Categories</h4>
                <CategoryList>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={`/blog/category/${category.name.toLowerCase().replace(' ', '-')}`}>
                        {category.name}
                        <span>{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </CategoryList>
              </SidebarWidget>
              
              <SidebarWidget>
                <h4>Recent Posts</h4>
                {recentPosts.map((post, index) => (
                  <RecentPostItem key={index} to={`/blog/${post.id}`}>
                    <img src={post.image} alt={post.title} />
                    <div>
                      <h5>{post.title}</h5>
                      <span>{post.date}</span>
                    </div>
                  </RecentPostItem>
                ))}
              </SidebarWidget>
              
              <SidebarWidget>
                <h4>Popular Tags</h4>
                <TagCloud>
                  {tags.map((tag, index) => (
                    <Tag key={index} to={`/blog/tag/${tag.toLowerCase()}`}>
                      {tag}
                    </Tag>
                  ))}
                </TagCloud>
              </SidebarWidget>
            </Sidebar>
          </BlogLayout>
        </Container>
      </BlogSection>
    </>
  );
};

export default Blog; 