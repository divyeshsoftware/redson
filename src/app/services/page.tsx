import Services from '@/components/services/Services';
import CTA from '@/components/shared/cta/CTA';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Associate Companies & Divisions - Redson Group',
  'Explore all six specialized manufacturing, analytical testing, packaging, and colour divisions under the Redson Group.'
);

const ServicesPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Services />
      <CTA
        className="dark:bg-background-6 bg-white my-16"
        badgeClass="hidden"
        ctaHeading="Looking for Contract Manufacturing or Bulk Supply?"
        spanText="Partner With Redson"
        description="Connect with our corporate team to discuss third-party formulation, analytical testing, institutional tenders, or regional distribution."
        btnClass="hover:btn-secondary dark:hover:btn-accent"
        ctaBtnText="Inquire Now"
      />
    </main>
  );
};

export default ServicesPage;
