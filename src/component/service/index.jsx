export function ServicesSection() {
  const services = [
    {
      title: "Personal branding",
      description: "We can help you find your true potential with our personal branding services. We can help you stand out and make a lasting impact by creating interesting content and building a strong online presence.",
      icon: "💡",
      image: "Personal branding"
    },
    {
      title: "Website build and management",
      description: "We build websites that are as effective as our clients are. Our website building and management services ensure a sleek, user-friendly design with seamless functionality to keep your audience engaged and your business growing.",
      icon: "🌐",
      image: "Website build and management"
    },
    {
      title: "Social media marketing",
      description: "We craft engaging content and run targeted ad campaigns to help brands grow on platforms like Instagram, Facebook, LinkedIn, and YouTube. Our SMM approach builds awareness, drives engagement, and converts audiences into loyal customers. With data-driven strategies and creative storytelling, we turn attention into measurable business results.",
      icon: "📱",
      image: "Social media marketing"
    }
  ];

  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: 'var(--background)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    textCenter: {
      textAlign: 'center' ,
      marginBottom: '4rem'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
      marginBottom: '1.5rem',
      color: 'var(--primary)'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#cccccc',
      maxWidth: '32rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    gridMd: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    gridLg: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    card: {
      backgroundColor: 'var(--card)',
      borderRadius: '1rem',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardHover: {
      transform: 'scale(1.05)'
    },
    imageContainer: {
      aspectRatio: '16/9',
      background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, transparent 100%)',
      padding: '1rem'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' ,
      borderRadius: '0.5rem'
    },
    cardContent: {
      padding: '1.5rem'
    },
    icon: {
      fontSize: '1.875rem',
      marginBottom: '1rem',
      display: 'block'
    },
    cardTitle: {
      fontSize: '1.25rem',
      marginBottom: '0.75rem',
      color: 'var(--primary)'
    },
    cardDescription: {
      color: '#cccccc',
      lineHeight: '1.7',
      marginBottom: '1rem'
    },
    learnMore: {
      color: 'var(--primary)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'color 0.3s ease',
      fontSize: '1rem'
    },
    arrow: {
      width: '1rem',
      height: '1rem',
      marginLeft: '0.25rem'
    }
  };

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textCenter}>
          <h2 style={styles.title}>Our Services</h2>
          <p style={styles.subtitle}>
            We offer a comprehensive range of services designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>
        
        <div style={{
          ...styles.grid,
          ...styles.gridMd,
          ...styles.gridLg
        }}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={styles.imageContainer}>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={service.image}
                  style={styles.image}
                />
              </div>
              
              <div style={styles.cardContent}>
                <div style={styles.icon}>{service.icon}</div>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDescription}>{service.description}</p>
                <button 
                  style={styles.learnMore}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 215, 0, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                >
                  Learn More
                  <svg style={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}