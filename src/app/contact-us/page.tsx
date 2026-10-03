import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Contact Us - Redson Group Headquarters',
  'Connect with Redson Group at Redson House, Naroda Road, Ahmedabad. Phone: +91-79-22204110. Email: info@redsongroup.com.'
);

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <ContactMap />
      <CTA
        className="dark:bg-background-5 bg-white my-16"
        badgeClass="badge-yellow-v2"
        badgeText="Headquarters"
        ctaBtnText="Call Us Now"
        ctaHeading="Have an Immediate Bulk or Export Requirement?"
        description="Reach out to our executive sales and technical documentation desks. We provide rapid responses for tenders, contract manufacturing, and formulation queries."
      />
    </main>
  );
};

export default ContactUs;
