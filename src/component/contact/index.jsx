import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const styles = {
    section: {
      padding: '5rem 0',
      backgroundColor: 'var(--background)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    maxWidth: {
      maxWidth: '64rem',
      margin: '0 auto'
    },
    textCenter: {
      textAlign: 'center' ,
      marginBottom: '4rem'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
      marginBottom: '1.5rem',
      color: 'var(--primary)'
    },
    subtitle: {
      fontSize: '1.125rem',
      color: '#cccccc',
      maxWidth: '32rem',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem'
    },
    gridMd: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column' ,
      gap: '2rem'
    },
    infoTitle: {
      fontSize: '1.25rem',
      marginBottom: '1.5rem',
      color: 'var(--primary)'
    },
    infoList: {
      display: 'flex',
      flexDirection: 'column' ,
      gap: '1rem'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center'
    },
    iconContainer: {
      width: '3rem',
      height: '3rem',
      backgroundColor: 'rgba(255, 215, 0, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1rem'
    },
    icon: {
      width: '1.25rem',
      height: '1.25rem',
      color: 'var(--primary)'
    },
    infoLabel: {
      color: 'var(--primary)',
      margin: 0,
      fontSize: '1rem',
      fontWeight: 'var(--font-weight-medium)'
    },
    infoValue: {
      color: '#cccccc',
      margin: 0
    },
    socialContainer: {
      display: 'flex',
      gap: '1rem'
    },
    socialLink: {
      width: '2.5rem',
      height: '2.5rem',
      backgroundColor: 'rgba(255, 215, 0, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease'
    },
    socialText: {
      color: 'var(--primary)',
      fontSize: '0.875rem',
      textTransform: 'capitalize' 
    },
    formCard: {
      backgroundColor: 'var(--card)',
      borderRadius: '1rem',
      padding: '2rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column' ,
      gap: '1.5rem'
    },
    formRow: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1rem'
    },
    formRowMd: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column' 
    },
    label: {
      display: 'block',
      color: 'var(--primary)',
      marginBottom: '0.5rem',
      fontSize: '1rem',
      fontWeight: 'var(--font-weight-medium)'
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      backgroundColor: 'var(--input-background)',
      border: '1px solid var(--border)',
      borderRadius: '0.5rem',
      color: 'var(--foreground)',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      backgroundColor: 'var(--input-background)',
      border: '1px solid var(--border)',
      borderRadius: '0.5rem',
      color: 'var(--foreground)',
      fontSize: '1rem',
      outline: 'none',
      resize: 'none' ,
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
    },
    submitButton: {
      width: '100%',
      backgroundColor: 'var(--primary)',
      color: 'var(--primary-foreground)',
      padding: '0.75rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontSize: '1rem',
      fontWeight: 'var(--font-weight-medium)'
    }
  };

  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.maxWidth}>
          <div style={styles.textCenter}>
            <h2 style={styles.title}>Get In Touch</h2>
            <p style={styles.subtitle}>
              Ready to start your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div style={{...styles.grid, ...styles.gridMd}}>
            <div style={styles.contactInfo}>
              <div>
                <h3 style={styles.infoTitle}>Contact Information</h3>
                <div style={styles.infoList}>
                  <div style={styles.infoItem}>
                    <div style={styles.iconContainer}>
                      <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p style={styles.infoLabel}>Address</p>
                      <p style={styles.infoValue}>No. 20,2nd street, Nalmeippar Nagar, Thachanallur</p>
                      <p style={styles.infoValue}>Tirunelveli - 627358.</p>
                    </div>
                  </div>
                  
                  <div style={styles.infoItem}>
                    <div style={styles.iconContainer}>
                      <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p style={styles.infoLabel}>Email</p>
                      <p style={styles.infoValue}>contact.heedhive@gmail.com</p>
                    </div>
                  </div>
                  
                  <div style={styles.infoItem}>
                    <div style={styles.iconContainer}>
                      <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p style={styles.infoLabel}>Phone</p>
                      <p style={styles.infoValue}>+91 75988 85033</p>
                      <p style={styles.infoValue}>+91 94451 00959</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 style={styles.infoTitle}>Follow Us</h3>
                <div style={styles.socialContainer}>
                  {['linkedin', 'twitter', 'facebook', 'instagram'].map((social) => (
                    <a 
                      key={social} 
                      href="https://www.instagram.com/heedhive?igsh=azFsN2RyZGEyeTR1" 
                      style={styles.socialLink}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
                      }}
                    >
                      <span style={styles.socialText}>{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div style={styles.formCard}>
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={{...styles.formRow, ...styles.formRowMd}}>
                  <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="subject" style={styles.label}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <div style={styles.formGroup}>
                  <label htmlFor="message" style={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={styles.textarea}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 215, 0, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
                
                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary)';
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}