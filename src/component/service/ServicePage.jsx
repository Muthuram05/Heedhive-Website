import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from './data';
import { NavBar } from '../navbar';
import { Footer } from '../footer';
import { PersonalBrandingPage } from '../service_details/personal.branding';
import { SocialMediaMarketingPage } from '../service_details/social.media.marketing';
import { WebsiteManagementPage } from '../service_details/website.management';

export function ServicePage() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }

  const contentRenderer = () => {
    switch (service.id) {
      case 'personal-branding':
        return <PersonalBrandingPage />;
      case 'website-build-and-management':
        return <WebsiteManagementPage />;
      case 'social-media-marketing':
        return <SocialMediaMarketingPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar />
      {contentRenderer()}
      <Footer />
    </div>
  );
}
