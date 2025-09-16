import { Link } from 'react-router-dom';
import { services } from './data';

import style from "./styles.module.css";

export function ServicesSection() {
  return (
    <section id="services" className={style.section}>
      <div className={style.container}>
        <div className={style.textCenter}>
          <h2 className={style.title}>Our Services</h2>
          <p className={style.subtitle}>
            We offer a comprehensive range of services designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>
        
        <div className={style.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={style.card}
            >
              <div className={style.imageContainer}>
                <img
                  src={service.imageUrl}
                  alt={service.image}
                  className={style.image}
                />
              </div>
              
              <div className={style.cardContent}>
                <div className={style.icon}>{service.icon}</div>
                <h3 className={style.cardTitle}>{service.title}</h3>
                <p className={style.cardDescription}>{service.description}</p>
                <Link 
                  to={`/service/${service.id}`}
                  className={style.learnMore}
                >
                  Learn More
                  <svg className={style.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
