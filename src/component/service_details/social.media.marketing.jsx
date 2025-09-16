import styles from './style.module.css';

export function SocialMediaMarketingPage({ onBack }) {
  const phases = [
    {
      title: "Phase 1: Strategy & Planning",
      subtitle: "Week 1",
      items: [
        "Conduct a comprehensive social media audit of your current presence.",
        "Define target audience, KPIs, and content pillars.",
        "Select the most effective social media platforms for your brand.",
        "Develop a content strategy and a 1-month content calendar."
      ]
    },
    {
      title: "Phase 2: Content Creation & Curation",
      subtitle: "Weeks 2-4",
      items: [
        "Create high-quality, engaging content (graphics, videos, copy).",
        "Curate relevant user-generated content and industry news.",
        "Schedule posts for optimal timing and consistency.",
        "Prepare assets for targeted ad campaigns."
      ]
    },
    {
      title: "Phase 3: Community Management & Growth",
      subtitle: "Weeks 5-8",
      items: [
        "Actively engage with your audience through comments and messages.",
        "Implement growth strategies to increase followers and reach.",
        "Monitor brand mentions and industry conversations.",
        "Run contests, polls, and other interactive campaigns."
      ]
    },
    {
      title: "Phase 4: Analytics & Optimization",
      subtitle: "Weeks 9-12",
      items: [
        "Track key metrics and analyze campaign performance.",
        "Provide detailed monthly performance reports.",
        "A/B test content and ad strategies to identify what works best.",
        "Refine the strategy based on data-driven insights for continuous improvement."
      ]
    }
  ];

  const steps = [
    {
      title: "Social Media Audit",
      description: "We analyze your existing social media presence to identify strengths and weaknesses."
    },
    {
      title: "Strategy Development",
      description: "We create a tailored social media strategy aligned with your business goals."
    },
    {
      title: "Content Creation",
      description: "Our team produces high-quality, engaging content for your channels."
    },
    {
      title: "Scheduling & Publishing",
      description: "We manage your content calendar and post at optimal times."
    },
    {
      title: "Community Management",
      description: "We interact with your audience to build a loyal community."
    },
    {
      title: "Reporting & Analysis",
      description: "You receive regular reports detailing performance and our recommendations."
    }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Social Media Marketing</h1>
          <p className={styles.subtitle}>
            We build and engage communities, drive brand awareness, and deliver measurable results through strategic social media marketing.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Social Media Marketing?</h2>
          <p className={styles.text}>
            Social Media Marketing (SMM) is the use of social media platforms to connect with your audience, build your brand, increase sales, and drive website traffic. It involves creating and sharing tailored content, engaging with followers, and running targeted advertising campaigns.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Purpose</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Increase brand awareness and visibility.</li>
            <li className={styles.listItem}>Foster a loyal and engaged community around your brand.</li>
            <li className={styles.listItem}>Generate leads and drive conversions.</li>
            <li className={styles.listItem}>Gather valuable customer feedback and market insights.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Platforms We Master</h2>
          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>📸</span>
                Instagram
              </h3>
              <p className={styles.text}>
                Ideal for visual storytelling, influencer marketing, and reaching a younger demographic.
              </p>
            </div>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>💼</span>
                LinkedIn
              </h3>
              <p className={styles.text}>
                The perfect platform for B2B marketing, thought leadership, and professional networking.
              </p>
            </div>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>👍</span>
                Facebook
              </h3>
              <p className={styles.text}>
                Excellent for community building, targeted advertising, and reaching a broad audience.
              </p>
            </div>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>🐦</span>
                Twitter (X)
              </h3>
              <p className={styles.text}>
                Best for real-time updates, customer service, and joining trending conversations.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>12-Week Social Media Marketing Plan</h2>
          
          {phases.map((phase, index) => (
            <div key={index} className={styles.planSection}>
              <h3 className={styles.planTitle}>{phase.title}</h3>
              {phase.subtitle && <h4 className={styles.phaseSubtitle}>{phase.subtitle}</h4>}
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
          <p className={styles.text}>Our structured plan ensures sustainable growth:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Foundation:</strong> We start with a solid strategy to ensure all efforts are effective.</li>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Consistency:</strong> Building a community and seeing results takes consistent effort over time.</li>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Optimization:</strong> We use data to refine our approach and maximize your return on investment.</li>
          </ul>
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
      </div>
    </div>
  );
}
