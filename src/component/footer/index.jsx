import { Link } from 'react-router-dom';
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
          
          <div id="quick-links" className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <div className={styles.linkList}>
              <Link to="/#home"  className={styles.link}>Home</Link>
              <Link to="/#about" className={styles.link}>About</Link>
              <Link to="/#services" className={styles.link}>Services</Link>
              <Link to="/#clients" className={styles.link}>Clients</Link>
              <Link to="/#contact" className={styles.link}>Contact</Link>
            </div>
          </div>
          
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <div className={styles.linkList}>
              <Link to="/#services" className={styles.serviceItem}>Personal branding</Link>
              <Link to="/#services" className={styles.serviceItem}>Website build and management</Link>
              <Link to="/#services" className={styles.serviceItem}>Social media marketing</Link>
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
