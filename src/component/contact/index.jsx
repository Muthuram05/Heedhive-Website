import { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import styles from './style.module.css';

const socialLinks = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/heedhive/',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/heedhive?igsh=azFsN2RyZGEyeTR1',
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rkmwe9v",
        "template_eygavmv",
        form.current,
        "U9__eJ703wlK1fm_O"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully ✅");
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.subtitle}>
              Ready to start your next project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className={styles.grid}>
            <div className={styles.contactInfo}>
              <div>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={styles.iconContainer}>
                      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className={styles.infoLabel}>Address</p>
                      <p className={styles.infoValue}>No. 20,2nd street, Nalmeippar Nagar, Thachanallur</p>
                      <p className={styles.infoValue}>Tirunelveli - 627358.</p>
                    </div>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.iconContainer}>
                      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className={styles.infoLabel}>Email</p>
                      <p className={styles.infoValue}>contact.heedhive@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.iconContainer}>
                      <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className={styles.infoLabel}>Phone</p>
                      <p className={styles.infoValue}>+91 75988 85033</p>
                      <p className={styles.infoValue}>+91 94451 00959</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className={styles.infoTitle}>Follow Us</h3>
                <div className={styles.socialContainer}>
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name} 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <span className={styles.socialText}>{social.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.formCard}>
              <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                  />
                </div>
                
                <button
                  type="submit"
                  className={styles.submitButton}
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
