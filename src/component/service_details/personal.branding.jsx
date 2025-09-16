import styles from './style.module.css';

export function PersonalBrandingPage({ onBack }) {
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
    <div className={styles.page}>
      {/* <button onClick={onBack} className={styles.backButton}>
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button> */}

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Personal Branding Service</h1>
          <p className={styles.subtitle}>
            Transform your professional presence and unlock new opportunities with our comprehensive personal branding strategy
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Personal Branding?</h2>
          <p className={styles.text}>
            Personal branding is about managing how others perceive you as a professional or entrepreneur. 
            It means showcasing your unique skills, values, expertise, and personality to stand out and 
            build credibility within your industry.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Purpose</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Build personal authority and trust</li>
            <li className={styles.listItem}>Increase recognition within your niche</li>
            <li className={styles.listItem}>Attract career and business opportunities</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Platforms We Use For Personal Branding</h2>
          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>💼</span>
                LinkedIn
              </h3>
              <p className={styles.text}>
                Position yourself as a thought leader, share achievements and insights, expand professional connections.
              </p>
            </div>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>📸</span>
                Instagram
              </h3>
              <p className={styles.text}>
                Present your work, passions, and personality authentically through stories, posts, and reels.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>12-Week Personal Branding Plan</h2>
          
          {phases.map((phase, index) => (
            <div key={index} className={styles.planSection}>
              <h3 className={styles.planTitle}>{phase.title}</h3>
              {phase.subtitle && <h4 className={styles.phaseSubtitle}>{phase.subtitle}</h4>}
              {phase.content && <p className={styles.text}>{phase.content}</p>}
              {phase.items && (
                <ul className={styles.list}>
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Why 12 Weeks?</h2>
          <p className={styles.text}>This phased approach nurtures consistent growth:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Build awareness</strong> (Reach)</li>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Strengthen relationships</strong> (Engagement)</li>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Convert followers into real opportunities</strong> (Impact)</li>
          </ul>
          <p className={styles.text}>
            Structure ensures steady progress and maximizes ROI.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Step-by-Step Procedure</h2>
          <div className={styles.stepsList}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={styles.imageContainer}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Personal branding strategy"
            className={styles.image}
          />
        </div> */}
      </div>
    </div>
  );
}