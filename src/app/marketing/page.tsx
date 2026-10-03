import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = generateMetadata(
  'Marketing & Global Distribution - Redson Group',
  'Worldwide market reach, nationwide pharmaceutical distribution network, and international export partnerships of Redson Group.'
);

const marketingPillars = [
  {
    title: 'Extensive Domestic Reach Across India',
    description: 'A nationwide distribution and stockist network spanning major healthcare centers, government tenders, retail pharmacies, and hospital supplies.',
    icon: 'ns-shape-10',
  },
  {
    title: 'Global Export Partnerships',
    description: 'Products exported and trusted worldwide, conforming to international regulatory standards, with active export tenders and overseas distribution hubs.',
    icon: 'ns-shape-12',
  },
  {
    title: 'Strategic Stock & Distribution Hubs',
    description: 'Strategically located warehouses and logistics centers with rapid dispatch capabilities from our mega-scale plants in Naroda and GIDC Gojaria.',
    icon: 'ns-shape-14',
  },
  {
    title: 'Institutional & Tender Supplies',
    description: 'Long-standing, dependable partner for state healthcare authorities, defense organizations, and large healthcare corporations.',
    icon: 'ns-shape-16',
  },
];

export default function MarketingPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="main-container space-y-16 md:space-y-24">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Marketing &amp; Distribution</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-2 md:text-heading-1">Worldwide Acceptance &amp; Robust Supply Networks</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
              All REDSON Group products enjoy worldwide acceptance. Backed by a team of experienced marketing professionals, advanced logistics, and modern communication infrastructure, we bridge healthcare innovation with patients everywhere.
            </p>
          </RevealAnimation>
        </div>

        {/* Visionary Section */}
        <RevealAnimation delay={0.4}>
          <div className="bg-white dark:bg-background-8 rounded-3xl p-8 md:p-12 shadow-sm border border-stroke-1 dark:border-stroke-7 space-y-6">
            <h2 className="text-heading-4 text-secondary dark:text-accent">Visionary Marketing Leadership</h2>
            <p className="text-secondary/80 dark:text-accent/80 leading-relaxed">
              The young and enthusiastic marketing professionals at REDSON Group are dedicated to carrying the group to new heights. Guided by our visionary leadership, we are actively expanding strategic tie-ups, appointing regional indenters, and establishing stock and distribution centres to serve growing healthcare markets within and outside India.
            </p>
          </div>
        </RevealAnimation>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marketingPillars.map((pillar, index) => (
            <RevealAnimation key={pillar.title} delay={0.1 * index}>
              <div className="dark:bg-background-8 w-full space-y-6 rounded-[20px] bg-white p-8 h-full">
                <span className={`${pillar.icon} text-secondary dark:text-accent inline-block text-[52px]`} />
                <div className="space-y-2">
                  <h3 className="text-heading-5">{pillar.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Partnership CTA */}
        <RevealAnimation delay={0.5}>
          <div className="bg-secondary dark:bg-background-8 rounded-3xl p-10 md:p-14 text-center space-y-6 text-white">
            <h2 className="text-heading-3 text-white">Partner with Redson as a Distributor or Export Agent</h2>
            <p className="text-accent/70 max-w-[600px] mx-auto">
              We welcome business inquiries from institutional buyers, indenters, importers, and regional distributors worldwide.
            </p>
            <div>
              <LinkButton href="/contact-us" className="btn btn-primary btn-md hover:btn-white">
                Submit Distribution Inquiry
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </main>
  );
}
