import styles from './style.module.css';

export function WebsiteManagementPage({ onBack }) {
  const phases = [
    {
      title: "Phase 1: Discovery & Strategy",
      subtitle: "Weeks 1-2",
      items: [
        "Initial consultation to understand your business goals, target audience, and brand identity.",
        "In-depth analysis of competitor websites and market trends.",
        "Define project scope, key features, and technical requirements.",
        "Create a detailed project roadmap and timeline."
      ]
    },
    {
      title: "Phase 2: Design & Prototyping",
      subtitle: "Weeks 3-4",
      items: [
        "Develop wireframes and user flow diagrams to map out the site structure.",
        "Create high-fidelity mockups and a clickable prototype.",
        "Incorporate your brand guidelines (logo, color palette, typography).",
        "Review and iterate on the design based on your feedback."
      ]
    },
    {
      title: "Phase 3: Development & Content Integration",
      subtitle: "Weeks 5-8",
      items: [
        "Front-end development to bring the approved design to life.",
        "Back-end development for database setup and server-side logic.",
        "Integration of CMS (e.g., WordPress) for easy content management.",
        "Populate the website with your provided content (text, images, videos)."
      ]
    },
    {
      title: "Phase 4: Testing, Launch & Handover",
      subtitle: "Weeks 9-10",
      items: [
        "Rigorous testing across browsers, devices, and operating systems.",
        "SEO optimization, performance checks, and security hardening.",
        "Deployment to the live server and final launch.",
        "Provide training and documentation for website management."
      ]
    }
  ];

  const steps = [
    {
      title: "Initial Consultation",
      description: "Define goals, scope, and requirements for your website."
    },
    {
      title: "Proposal & Agreement",
      description: "Receive a detailed project proposal with timeline and cost."
    },
    {
      title: "Design & Development",
      description: "We build the website based on the approved design and your feedback."
    },
    {
      title: "Content Integration",
      description: "Your content is added to the new website structure."
    },
    {
      title: "Testing & Launch",
      description: "We ensure everything works perfectly before going live."
    },
    {
      title: "Ongoing Management & Support",
      description: "We provide continuous maintenance, updates, and support to keep your site running smoothly."
    }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Website Build & Management</h1>
          <p className={styles.subtitle}>
            From concept to launch and beyond, we build and maintain powerful, professional websites that drive results.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>What is Website Build & Management?</h2>
          <p className={styles.text}>
            A professional website is your digital storefront. Our service covers the entire lifecycle of your site, from initial design and development to ongoing maintenance, security, and performance optimization, ensuring a seamless and engaging user experience.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Purpose</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Establish a strong, credible online presence.</li>
            <li className={styles.listItem}>Generate leads and drive sales for your business.</li>
            <li className={styles.listItem}>Provide a central hub for your marketing efforts.</li>
            <li className={styles.listItem}>Showcase your products, services, and brand story.</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies We Use</h2>
          <div className={styles.platformsGrid}>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>💻</span>
                Custom Development
              </h3>
              <p className={styles.text}>
                Using modern frameworks like React and Next.js for fast, scalable, and interactive websites.
              </p>
            </div>
            <div className={styles.platformCard}>
              <h3 className={styles.platformTitle}>
                <span className={styles.platformIcon}>🎨</span>
                CMS Platforms
              </h3>
              <p className={styles.text}>
                Leveraging platforms like WordPress and Webflow for flexible and easy-to-manage content.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>10-Week Website Development Plan</h2>
          
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
          <h2 className={styles.sectionTitle}>Why This Structure?</h2>
          <p className={styles.text}>Our phased approach ensures a high-quality result:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Clarity & Alignment:</strong> The discovery phase ensures we build what you need.</li>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Iterative Feedback:</strong> Design and development phases include you in the process.</li>
            <li className={styles.listItem}><strong style={{color: 'var(--primary)'}}>Quality Assurance:</strong> Rigorous testing guarantees a polished, professional launch.</li>
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
