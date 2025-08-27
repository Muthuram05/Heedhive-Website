export function PersonalBrandingPage({ onBack }) {
  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: 'var(--background)',
      paddingTop: '4rem'
    },
    backButton: {
      position: 'fixed',
      top: '5rem',
      left: '2rem',
      zIndex: 40,
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
      borderRadius: '50%',
      width: '3rem',
      height: '3rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem',
      background: 'linear-gradient(135deg, var(--card) 0%, var(--background) 100%)',
      padding: '3rem 2rem',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },
    mainTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      background: 'linear-gradient(135deg, var(--primary) 0%, #ffed4e 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#cccccc',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    section: {
      marginBottom: '4rem',
      backgroundColor: 'var(--card)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },
    sectionTitle: {
      fontSize: '2rem',
      color: 'var(--primary)',
      marginBottom: '1.5rem',
      textAlign: 'center'
    },
    sectionSubtitle: {
      fontSize: '1.5rem',
      color: 'var(--primary)',
      marginBottom: '1rem'
    },
    text: {
      color: '#cccccc',
      lineHeight: '1.7',
      marginBottom: '1rem',
      fontSize: '1.1rem'
    },
    list: {
      color: '#cccccc',
      lineHeight: '1.7',
      paddingLeft: '1.5rem',
      marginBottom: '1.5rem'
    },
    listItem: {
      marginBottom: '0.5rem'
    },
    platformsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem',
      marginTop: '2rem'
    },
    platformsGridMd: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    platformCard: {
      backgroundColor: 'var(--background)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    },
    platformTitle: {
      fontSize: '1.25rem',
      color: 'var(--primary)',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center'
    },
    platformIcon: {
      marginRight: '0.5rem',
      fontSize: '1.5rem'
    },
    planSection: {
      backgroundColor: 'var(--background)',
      padding: '2rem',
      borderRadius: '1rem',
      marginBottom: '2rem',
      border: '1px solid var(--border)'
    },
    planTitle: {
      fontSize: '1.5rem',
      color: 'var(--primary)',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    planPhase: {
      marginBottom: '2rem'
    },
    phaseTitle: {
      fontSize: '1.25rem',
      color: 'var(--primary)',
      marginBottom: '0.5rem'
    },
    phaseSubtitle: {
      fontSize: '1rem',
      color: '#ffed4e',
      marginBottom: '1rem'
    },
    stepsList: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      marginTop: '2rem'
    },
    stepCard: {
      backgroundColor: 'var(--background)',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      border: '1px solid var(--border)',
      borderLeft: '4px solid var(--primary)'
    },
    stepTitle: {
      fontSize: '1.1rem',
      color: 'var(--primary)',
      marginBottom: '0.5rem'
    },
    stepDescription: {
      color: '#cccccc',
      fontSize: '0.95rem',
      lineHeight: '1.6'
    },
    imageContainer: {
      textAlign: 'center',
      marginTop: '2rem'
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      borderRadius: '1rem',
      border: '1px solid var(--border)'
    }
  };

  const phases = [
    {
      title: "Initialization Phase",
      subtitle: "Setting the Foundation",
      content: "Before the campaign, we optimize your profiles—custom profile banners, compelling bios, links to website/portfolio, SEO keywords—setting the foundation for impactful content."
    },
    {
      title: "Weeks 1–4: Establish Authority",
      subtitle: "Building Your Foundation",
      items: [
        "Share career stories, key achievements, and testimonials",
        "Publish \"About Me\" features, introductory videos",
        "Start audience engagement with polls or Q&A sessions"
      ]
    },
    {
      title: "Weeks 5–8: Build Engagement",
      subtitle: "Growing Your Community",
      items: [
        "Post thought-leadership articles and videos",
        "Share day-in-the-life behind-the-scenes content",
        "Initiate collaborations or interviews with other experts",
        "Respond actively to comments and messages"
      ]
    },
    {
      title: "Weeks 9–12: Drive Impact",
      subtitle: "Converting to Opportunities",
      items: [
        "Launch targeted campaigns (personal offers, courses, events)",
        "Highlight case studies and client successes",
        "Use testimonials, video endorsements, or expert panels"
      ]
    }
  ];

  const steps = [
    {
      title: "Personal Brand Audit",
      description: "Assess current positioning, strengths, and opportunities"
    },
    {
      title: "Content Calendar Creation",
      description: "4-week plan with profile updates, milestone stories, and engagement pieces"
    },
    {
      title: "Revisions & Approval",
      description: "Gather your feedback, refine strategy"
    },
    {
      title: "Content Production",
      description: "Script personal stories, create visuals, record video, design graphics"
    },
    {
      title: "Publishing & Scheduling",
      description: "Align posts with strategic calendar for optimal reach"
    },
    {
      title: "Engagement & Community Building",
      description: "Respond to comments, join relevant conversations, and network"
    }
  ];

  return (
    <div style={styles.page}>
      {/* <button 
        onClick={onBack}
        style={styles.backButton}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.9)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = 'var(--primary)';
        }}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button> */}

      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.mainTitle}>Personal Branding Service</h1>
          <p style={styles.subtitle}>
            Transform your professional presence and unlock new opportunities with our comprehensive personal branding strategy
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>What is Personal Branding?</h2>
          <p style={styles.text}>
            Personal branding is about managing how others perceive you as a professional or entrepreneur. 
            It means showcasing your unique skills, values, expertise, and personality to stand out and 
            build credibility within your industry.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Purpose</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>Build personal authority and trust</li>
            <li style={styles.listItem}>Increase recognition within your niche</li>
            <li style={styles.listItem}>Attract career and business opportunities</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Platforms We Use For Personal Branding</h2>
          <div style={{...styles.platformsGrid, ...styles.platformsGridMd}}>
            <div style={styles.platformCard}>
              <h3 style={styles.platformTitle}>
                <span style={styles.platformIcon}>💼</span>
                LinkedIn
              </h3>
              <p style={styles.text}>
                Position yourself as a thought leader, share achievements and insights, expand professional connections.
              </p>
            </div>
            <div style={styles.platformCard}>
              <h3 style={styles.platformTitle}>
                <span style={styles.platformIcon}>📸</span>
                Instagram
              </h3>
              <p style={styles.text}>
                Present your work, passions, and personality authentically through stories, posts, and reels.
              </p>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>12-Week Personal Branding Plan</h2>
          
          {phases.map((phase, index) => (
            <div key={index} style={styles.planSection}>
              <h3 style={styles.planTitle}>{phase.title}</h3>
              {phase.subtitle && <h4 style={styles.phaseSubtitle}>{phase.subtitle}</h4>}
              {phase.content && <p style={styles.text}>{phase.content}</p>}
              {phase.items && (
                <ul style={styles.list}>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={styles.listItem}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Why 12 Weeks?</h2>
          <p style={styles.text}>This phased approach nurtures consistent growth:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong style={{color: 'var(--primary)'}}>Build awareness</strong> (Reach)</li>
            <li style={styles.listItem}><strong style={{color: 'var(--primary)'}}>Strengthen relationships</strong> (Engagement)</li>
            <li style={styles.listItem}><strong style={{color: 'var(--primary)'}}>Convert followers into real opportunities</strong> (Impact)</li>
          </ul>
          <p style={styles.text}>
            Structure ensures steady progress and maximizes ROI.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Step-by-Step Procedure</h2>
          <div style={styles.stepsList}>
            {steps.map((step, index) => (
              <div key={index} style={styles.stepCard}>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div style={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Personal branding strategy"
            style={styles.image}
          />
        </div> */}
      </div>
    </div>
  );
}