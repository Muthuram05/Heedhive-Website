// import { ImageWithFallb

export function HeroSection() {
  const styles = {
    section: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    },
    background: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
      position: "relative",
      zIndex: 10,
    },
    content: {
      textAlign: "center",
    },
    title: {
      fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
      marginBottom: "1.5rem",
      background: "linear-gradient(135deg, var(--primary) 0%, #ffed4e 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      lineHeight: "1.2",
    },
    subtitle: {
      fontSize: "clamp(1rem, 3vw, 1.25rem)",
      marginBottom: "2rem",
      maxWidth: "48rem",
      margin: "0 auto 2rem auto",
      color: "#cccccc",
      lineHeight: "1.6",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonContainerDesktop: {
      flexDirection: "row",
    },
    primaryButton: {
      backgroundColor: "var(--primary)",
      color: "var(--primary-foreground)",
      padding: "0.75rem 2rem",
      borderRadius: "0.5rem",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontSize: "1rem",
      fontWeight: "var(--font-weight-medium)",
    },
    secondaryButton: {
      border: "1px solid var(--primary)",
      color: "var(--primary)",
      padding: "0.75rem 2rem",
      borderRadius: "0.5rem",
      background: "transparent",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontSize: "1rem",
      fontWeight: "var(--font-weight-medium)",
    },
    decorative1: {
      position: "absolute",
      top: "25%",
      left: "2.5rem",
      width: "5rem",
      height: "5rem",
      border: "1px solid rgba(255, 215, 0, 0.3)",
      borderRadius: "50%",
    },
    decorative2: {
      position: "absolute",
      bottom: "25%",
      right: "2.5rem",
      width: "4rem",
      height: "4rem",
      backgroundColor: "rgba(255, 215, 0, 0.2)",
      borderRadius: "50%",
    },
    decorative3: {
      position: "absolute",
      top: "50%",
      right: "25%",
      width: "0.5rem",
      height: "0.5rem",
      backgroundColor: "var(--primary)",
      borderRadius: "50%",
    },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Elevate Your Brand</h1>
          <p style={styles.subtitle}>
            Make your brand more popular and see it grow. We will create the
            right digital marketing strategies for your business. We can create
            interesting content and effective ad campaigns to help your business
            succeed. Let's work together to build your online presence.
          </p>
          <div
            style={{
              ...styles.buttonContainer,
              ...styles.buttonContainerDesktop,
            }}
          >
            <button
              style={styles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 215, 0, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
              }}
              onClick={() => scrollToSection('services')}
            >
              Get Started
            </button>
            <button
              style={styles.secondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 215, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div style={styles.decorative1}></div>
      <div style={styles.decorative2}></div>
      {/* <div style={styles.decorative3}></div> */}
    </section>
  );
}
