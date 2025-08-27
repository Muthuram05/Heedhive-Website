import { useState, useEffect } from 'react';
import companyLogo from '../../assest/logo-gold.png';

export function NavBar() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'clients', label: 'Clients' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyles = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255, 215, 0, 0.2)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    navContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '4rem'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      color: 'var(--primary)'
    },
    logo: {
      width: '40px',
      height: '40px',
      marginRight: '12px'
    },
    companyName: {
      margin: 0,
      fontSize: '1.5rem',
      fontWeight: 'var(--font-weight-medium)'
    },
    navLinks: {
      display: 'none',
      gap: '2rem'
    },
    navLinksDesktop: {
      display: 'flex',
      gap: '2rem'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      fontSize: '1rem',
      fontWeight: 'var(--font-weight-medium)'
    },
    navButtonActive: {
      color: 'var(--primary)'
    },
    navButtonHover: {
      color: 'var(--primary)'
    },
    mobileMenu: {
      display: 'block',
      background: 'none',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      fontSize: '1.5rem'
    },
    mobileMenuHidden: {
      display: 'none'
    }
  };

  return (
    <nav style={navStyles.nav}>
      <div style={navStyles.container}>
        <div style={navStyles.navContent}>
          <div style={navStyles.logoContainer}>
            <img 
              src={companyLogo} 
              alt="Company Logo" 
              style={navStyles.logo}
            />
            <h3 style={navStyles.companyName}>Heedhive</h3>
          </div>
          
          <div style={{...navStyles.navLinks, ...navStyles.navLinksDesktop}}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  ...navStyles.navButton,
                  ...(activeSection === item.id ? navStyles.navButtonActive : {})
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = 'var(--primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div style={{...navStyles.mobileMenu, ...navStyles.mobileMenuHidden}}>
            <button style={navStyles.navButton}>
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}