
export function ClientsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      content: "Outstanding service and exceptional results. They transformed our digital presence completely.",
      avatar: "professional woman portrait"
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateAI",
      content: "The team's expertise in modern technology helped us scale our platform efficiently.",
      avatar: "professional man portrait"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, StartupHub",
      content: "From concept to launch, they provided guidance and solutions that exceeded our expectations.",
      avatar: "businesswoman portrait"
    }
  ];

  const clientLogos = [
    "Company A", "Company B", "Company C", "Company D", "Company E", "Company F"
  ];

  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: 'var(--card)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    textCenter: {
      textAlign: 'center',
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
    logoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      marginBottom: '4rem',
      opacity: 0.6
    },
    logoGridMd: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    logoGridLg: {
      gridTemplateColumns: 'repeat(6, 1fr)'
    },
    logoItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: 'rgba(42, 42, 42, 0.2)',
      borderRadius: '0.5rem'
    },
    logoText: {
      fontSize: '0.875rem',
      color: '#9ca3af'
    },
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    testimonialGridMd: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    testimonialCard: {
      backgroundColor: 'var(--background)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 215, 0, 0.2)'
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem'
    },
    avatar: {
      width: '3rem',
      height: '3rem',
      backgroundColor: 'rgba(255, 215, 0, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem'
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '50%'
    },
    userName: {
      color: 'var(--primary)',
      margin: 0,
      fontSize: '1rem',
      fontWeight: 'var(--font-weight-medium)'
    },
    userPosition: {
      fontSize: '0.875rem',
      color: '#9ca3af',
      margin: 0
    },
    testimonialText: {
      color: '#cccccc',
      fontStyle: 'italic',
      marginBottom: '1rem',
      lineHeight: '1.6'
    },
    stars: {
      display: 'flex',
      color: 'var(--primary)'
    },
    star: {
      width: '1rem',
      height: '1rem'
    }
  };

  return (
    <section id="clients" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.textCenter}>
          <h2 style={styles.title}>Our Clients</h2>
          <p style={styles.subtitle}>
            Trusted by industry leaders and innovative companies worldwide.
          </p>
        </div>
        
        <div style={{
          ...styles.logoGrid,
          ...styles.logoGridMd,
          ...styles.logoGridLg
        }}>
          {clientLogos.map((logo, index) => (
            <div key={index} style={styles.logoItem}>
              <div style={styles.logoText}>{logo}</div>
            </div>
          ))}
        </div>
        
        <div style={{
          ...styles.testimonialGrid,
          ...styles.testimonialGridMd
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.testimonialCard}>
              <div style={styles.userInfo}>
                <div style={styles.avatar}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt={testimonial.avatar}
                    style={styles.avatarImage}
                  />
                </div>
                <div>
                  <h4 style={styles.userName}>{testimonial.name}</h4>
                  <p style={styles.userPosition}>{testimonial.position}</p>
                </div>
              </div>
              <p style={styles.testimonialText}>"{testimonial.content}"</p>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} style={styles.star} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}