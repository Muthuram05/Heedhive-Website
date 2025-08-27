export function AboutSection() {
  const styles = {
    section: {
      padding: "5rem 0",
      backgroundColor: "var(--card)",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    maxWidth: {
      maxWidth: "64rem",
      margin: "0 auto",
    },
    textCenter: {
      textAlign: "center",
      marginBottom: "4rem",
    },
    title: {
      fontSize: "clamp(2rem, 5vw, 2.5rem)",
      marginBottom: "1.5rem",
      color: "var(--primary)",
    },
    subtitle: {
      fontSize: "1.125rem",
      color: "#cccccc",
      maxWidth: "32rem",
      margin: "0 auto",
      lineHeight: "1.6",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "3rem",
      alignItems: "center",
    },
    gridDesktop: {
      gridTemplateColumns: "1fr 1fr",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      color: "var(--primary)",
      marginBottom: "0.5rem",
    },
    text: {
      color: "#cccccc",
      lineHeight: "1.7",
    },
    statsContainer: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      paddingTop: "1rem",
    },
    statItem: {
      textAlign: "center",
    },
    statNumber: {
      fontSize: "1.5rem",
      color: "var(--primary)",
    },
    statLabel: {
      fontSize: "0.875rem",
      color: "#9ca3af",
    },
    imageContainer: {
      position: "relative",
    },
    imageWrapper: {
      aspectRatio: "1",
      background:
        "linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, transparent 100%)",
      borderRadius: "1rem",
      padding: "2rem",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "0.5rem",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.maxWidth}>
          <div style={styles.textCenter}>
            <h2 style={styles.title}>About Our Company</h2>
            <p style={styles.subtitle}>
            In the attention economy, time isn’t money — attention is.
            </p>
          </div>

          <div style={{ ...styles.grid, ...styles.gridDesktop }}>
            <div style={styles.content}>
              <div>
                <h3 style={styles.sectionTitle}>Our Mission</h3>
                <p style={styles.text}>
                  To empower businesses and individuals to grow their brand,
                  amplify their voice, and achieve measurable results through
                  creative, data-driven digital marketing.
                </p>
              </div>

              <div>
                <h3 style={styles.sectionTitle}>Our Vision</h3>
                <p style={styles.text}>
                  To be the most trusted digital marketing partner that
                  transforms brands into leaders, using creativity, strategy,
                  and technology to shape the future of marketing.
                </p>
              </div>

              <div style={styles.statsContainer}>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>6 months</div>
                  <div style={styles.statLabel}>Years Experience</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>5+</div>
                  <div style={styles.statLabel}>Happy Clients</div>
                </div>
                <div style={styles.statItem}>
                  <div style={styles.statNumber}>5+</div>
                  <div style={styles.statLabel}>Projects Completed</div>
                </div>
              </div>
            </div>

            <div style={styles.imageContainer}>
              <div style={styles.imageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Modern office workspace"
                  style={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
