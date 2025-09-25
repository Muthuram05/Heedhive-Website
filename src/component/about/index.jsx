import styles from './style.module.css';

import why_image from "../../assest/WHY.png"

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.maxWidth}>
          <div className={styles.textCenter}>
            <h2 className={styles.title}>About Our Company</h2>
            <p className={styles.subtitle}>
            In the attention economy, time isn’t money — attention is.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.content}>
              <div>
                <h3 className={styles.sectionTitle}>Our Mission</h3>
                <p className={styles.text}>
                  To empower businesses and individuals to grow their brand,
                  amplify their voice, and achieve measurable results through
                  creative, data-driven digital marketing.
                </p>
              </div>

              <div>
                <h3 className={styles.sectionTitle}>Our Vision</h3>
                <p className={styles.text}>
                  To be the most trusted digital marketing partner that
                  transforms brands into leaders, using creativity, strategy,
                  and technology to shape the future of marketing.
                </p>
              </div>

              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>1+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>5+</div>
                  <div className={styles.statLabel}>Happy Clients</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>5+</div>
                  <div className={styles.statLabel}>Projects Completed</div>
                </div>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img
                  src={why_image}
                  alt="Modern office workspace"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}