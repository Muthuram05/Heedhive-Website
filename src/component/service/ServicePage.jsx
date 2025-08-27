import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from './data';
import { NavBar } from '../navbar';
import { Footer } from '../footer';
import { PersonalBrandingPage } from '../service_details/personal.branding';

export function ServicePage() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <NavBar />
      <PersonalBrandingPage />
      <Footer />
    </div>
  );
}
