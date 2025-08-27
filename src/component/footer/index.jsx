export function Footer() {
  const styles = {
    footer: {
      backgroundColor: 'var(--card)',
      borderTop: '1px solid rgba(255, 215, 0, 0.2)',
      padding: '3rem 0'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '2rem'
    },
    gridMd: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    },
    companySection: {
      display: 'flex',
      flexDirection: 'column'
    },
    companyTitle: {
      color: 'var(--primary)',
      marginBottom: '1rem',
      fontSize: '1.125rem',
      fontWeight: 'var(--font-weight-medium)'
    },
    companyDescription: {
      color: '#cccccc',
      fontSize: '0.875rem',
      lineHeight: '1.7'
    },
    linkSection: {
      display: 'flex',
      flexDirection: 'column'
    },
    sectionTitle: {
      color: 'var(--primary)',
      marginBottom: '1rem',
      fontSize: '1rem',
      fontWeight: 'var(--font-weight-medium)'
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      fontSize: '0.875rem'
    },
    link: {
      color: '#cccccc',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    serviceItem: {
      color: '#cccccc',
      fontSize: '0.875rem'
    },
    contactItem: {
      color: '#cccccc',
      fontSize: '0.875rem',
      margin: 0
    },
    bottomSection: {
      borderTop: '1px solid rgba(255, 215, 0, 0.2)',
      marginTop: '2rem',
      paddingTop: '2rem',
      textAlign: 'center'
    },
    copyright: {
      color: '#9ca3af',
      fontSize: '0.875rem',
      margin: 0
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={{...styles.grid, ...styles.gridMd}}>
          <div style={styles.companySection}>
            <h3 style={styles.companyTitle}>Heedhive</h3>
            <p style={styles.companyDescription}>
              Delivering innovative solutions that drive business growth and digital transformation.
            </p>
          </div>
          
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <div style={styles.linkList}>
              <a 
                href="#home" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cccccc';
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cccccc';
                }}
              >
                About
              </a>
              <a 
                href="#services" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cccccc';
                }}
              >
                Services
              </a>
              <a 
                href="#clients" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cccccc';
                }}
              >
                Clients
              </a>
              <a 
                href="#contact" 
                style={styles.link}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cccccc';
                }}
              >
                Contact
              </a>
            </div>
          </div>
          
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Services</h4>
            <div style={styles.linkList}>
              <span style={styles.serviceItem}>Personal branding</span>
              <span style={styles.serviceItem}>Website build and management</span>
              <span style={styles.serviceItem}>Social media marketing</span>
            </div>
          </div>
          
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Contact Info</h4>
            <div style={styles.linkList}>
              <p style={styles.contactItem}>No. 20,2nd street, Nalmeippar Nagar, Thachanallur</p>
              <p style={styles.contactItem}>Tirunelveli - 627358</p>
              <p style={styles.contactItem}>+91 7598 885 033</p>
              <p style={styles.contactItem}>+91 94451 00959</p>
              <p style={styles.contactItem}>contact.heedhive@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div style={styles.bottomSection}>
          <p style={styles.copyright}>
            © 2025 Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}