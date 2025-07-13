import React, { useState, useEffect } from 'react';
import Carousel from '../../blocks/Components/Carousel/Carousel';

const CarouselComponent = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // IMPORTANT: Replace "@your-medium-username" with your actual Medium username
        const mediumUsername = "@madhanklt1331";
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch RSS feed.');
        }
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          const formattedPosts = data.items.map((item, index) => ({
            id: index + 1,
            image: item.thumbnail || item.enclosure?.link || null,
            title: item.title,
            // This regex removes HTML tags and creates a plain text snippet
            description: item.description.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...',
            link: item.link
          }));
          setPosts(formattedPosts);
        } else {
          setPosts([]); // Set to empty array if no items are found
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching Medium posts:", err);
        
        // Fallback to sample data if fetch fails
        const samplePosts = [
          {
            id: 1,
            image: "https://via.placeholder.com/400x200/6366f1/ffffff?text=Sample+Post+1",
            title: "Sample Medium Post 1",
            description: "This is a sample blog post description that demonstrates the carousel functionality...",
            link: "#"
          },
          {
            id: 2,
            image: "https://via.placeholder.com/400x200/8b5cf6/ffffff?text=Sample+Post+2",
            title: "Sample Medium Post 2",
            description: "Another sample blog post description to show how the carousel displays content...",
            link: "#"
          },
          {
            id: 3,
            image: "https://via.placeholder.com/400x200/06b6d4/ffffff?text=Sample+Post+3",
            title: "Sample Medium Post 3",
            description: "Third sample blog post with a longer description to demonstrate text truncation...",
            link: "#"
          }
        ];
        setPosts(samplePosts);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#fff',
        fontSize: '18px'
      }}>
        Loading recent posts...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#ef4444'
      }}>
        <p>Error: {error}</p>
        <small style={{ color: '#9ca3af' }}>Showing sample posts instead</small>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#fff'
      }}>
        No posts found.
      </div>
    );
  }

  return (
    <section style={{ padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#fff' ,marginTop:'8rem' }}>
        Recent Thoughts
      </h1>
      
      <div style={{
        display: 'flex',
        gap: '60px',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        {/* Left side - Content */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          color: '#fff',
          padding: '20px'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            marginBottom: '20px',
            color: '#fff',
            fontWeight: '500'
          }}>
            My Medium Blog
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '30px',
            color: '#d1d5db'
          }}>
            I write about tech, development, and deployments. 
            Check out my latest articles on Medium.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '25px'
          }}>
            
            <span style={{
              fontSize: '1.1rem',
              color: '#fbbf24'
            }}>
              <span></span>Latest posts --- 
            </span>
          </div>
          
        </div>

        {/* Right side - Carousel */}
        <div style={{
          flex: '1',
          minWidth: '400px',
          height: '600px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Carousel
            items={posts}
            baseWidth={400}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;