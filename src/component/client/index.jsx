import styles from './style.module.css';

export function ClientsSection() {
  const testimonials = [
    {
      name: "Anbarasan Arumugam",
      position: "Founder of Leading Edge Institute",
      content: "The overall shooting process was well-organized and executed professionally. The team captured the content creatively, focusing on both visuals and clarity.The digital marketing approach they suggested was modern and effective.The editing and final output were of good quality, making the videos engaging.The shoot added value to our institute’s promotion and created a positive impression.😘Thank u So much team great work ✨",
      avatar: "professional woman portrait",
      domain: "Education"
    },
    {
      name: "Tamil Priya",
      position: "Founder of Johannas World",
      content: "Heedhive completely transformed my Instagram journey. I had no idea where to start, but their guidance, creative content, and constant motivation gave me the confidence to create videos and share them online. My friends and family loved the results, and now I’m excited to continue making videos with their support!",
      avatar: "professional man portrait",
      domain: "Reselling"
    },
    // {
    //   name: "Emily Rodriguez",
    //   position: "Founder, StartupHub",
    //   content: "From concept to launch, they provided guidance and solutions that exceeded our expectations.",
    //   avatar: "businesswoman portrait"
    // }
  ];

  const clientLogos = [
    "Company A", "Company B", "Company C", "Company D", "Company E", "Company F"
  ];

  return (
    <section id="clients" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textCenter}>
          <h2 className={styles.title}>Our Clients</h2>
          <p className={styles.subtitle}>
            Trusted by industry leaders and innovative companies worldwide.
          </p>
        </div>
        
        {/* <div className={styles.logoGrid}>
          {clientLogos.map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <div className={styles.logoText}>{logo}</div>
            </div>
          ))}
        </div> */}
        
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt={testimonial.avatar}
                    className={styles.avatarImage}
                  />
                </div>
                <div>
                  <h4 className={styles.userName}>{testimonial.name}</h4>
                  <p className={styles.userPosition}>{testimonial.position}</p>
                </div>
              </div>
              <p className={styles.testimonialText}>"{testimonial.content}"</p>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={styles.star} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}