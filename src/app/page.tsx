import Capacities from '@/components/home/Capacities';
import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import GetStarted from '@/components/home/GetStarted';
import Hero from '@/components/home/Hero';
import Solutions from '@/components/home/Solutions';
import Steps from '@/components/home/Steps';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata(
  'Redson Group - Leading Pharmaceutical Manufacturers Since 1978',
  'Redson Group is one of India’s premier pharmaceutical business houses, delivering oral hygiene, healthcare formulations, analytical testing laboratories, packaging, and fine colours.'
);

const HomePage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Hero />
      <Solutions />
      <Capacities />
      <Clients />
      <GetStarted />
      <Steps />
      <CTA />
    </main>
  );
};

export default HomePage;
