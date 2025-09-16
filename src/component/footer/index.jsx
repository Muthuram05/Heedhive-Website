import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.companySection}>
            <h3 className={styles.companyTitle}>Heedhive</h3>
            <p className={styles.companyDescription}>
              Delivering innovative solutions that drive business growth and digital transformation.
            </p>
          </div>
          
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <div className={styles.linkList}>
              <a href="#home" className={styles.link}>Home</a>
              <a href="#about" className={styles.link}>About</a>
              <a href="#services" className={styles.link}>Services</a>
              <a href="#clients" className={styles.link}>Clients</a>
              <a href="#contact" className={styles.link}>Contact</a>
            </div>
          </div>
          
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <div className={styles.linkList}>
              <a href="#services" className={styles.serviceItem}>Personal branding</a>
              <a href="#services" className={styles.serviceItem}>Website build and management</a>
              <a href="#services" className={styles.serviceItem}>Social media marketing</a>
            </div>
          </div>
          
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Contact Info</h4>
            <div className={styles.linkList}>
              <p className={styles.contactItem}>No. 20,2nd street, Nalmeippar Nagar, Thachanallur</p>
              <p className={styles.contactItem}>Tirunelveli - 627358</p>
              <p className={styles.contactItem}>+91 7598 885 033</p>
              <p className={styles.contactItem}>+91 94451 00959</p>
              <p className={styles.contactItem}>contact.heedhive@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © 2025 Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
