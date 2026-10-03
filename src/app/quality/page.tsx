import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = generateMetadata(
  'Quality Assurance & Testing Standards - Redson Group',
  'Rigid quality control, WHO-GMP adherence, HPLC testing, and advanced analytical laboratories at Redson Group.'
);

const qualityHighlights = [
  {
    title: 'In-House Instrumental Laboratories',
    description: 'Equipped with High Performance Liquid Chromatography (HPLC), Gas Chromatography (GC), UV-Vis Colour Spectrophotometers, and Potentiometric Titrators.',
    icon: 'ns-shape-21',
  },
  {
    title: 'Pharmacopoeial Compliance',
    description: 'Every formulation and raw material is tested and analyzed strictly adhering to IP, BP, and USP pharmacopoeia standards.',
    icon: 'ns-shape-22',
  },
  {
    title: 'Microbiological Testing Labs',
    description: 'Dedicated clean-room microbiology facilities performing sterility testing, microbial limit testing (MLT), and environmental monitoring.',
    icon: 'ns-shape-23',
  },
  {
    title: 'Independent Testing & SGS Certification',
    description: 'Apart from internal factory release tests, we partner with premier independent analytical laboratories and SGS inspection agencies.',
    icon: 'ns-shape-24',
  },
  {
    title: 'Strict cGMP & GLP Adherence',
    description: 'Operating under World Health Organization (WHO) and State FDA GMP standards with validated standard operating procedures (SOPs).',
    icon: 'ns-shape-25',
  },
  {
    title: 'Continuous Quality Circles',
    description: 'Active Quality Circles and periodic technical training programs ensure every technician maintains highest vigilance and accountability.',
    icon: 'ns-shape-26',
  },
];

export default function QualityPage() {
  return (
    <main className="bg-background-3 dark:bg-background-7 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="main-container space-y-16 md:space-y-24">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center space-y-4">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Quality Assurance</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-2 md:text-heading-1">Rigid Quality Monitoring &amp; Global Standards</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
              At REDSON Group of Industries, constant upgradation of quality monitoring and strict adherence to Good Manufacturing Practices ensure benchmark quality standards across all production batches.
            </p>
          </RevealAnimation>
        </div>

        {/* Quality Policy Banner */}
        <RevealAnimation delay={0.4}>
          <div className="bg-white dark:bg-background-8 rounded-3xl p-8 md:p-12 shadow-sm border border-stroke-1 dark:border-stroke-7 space-y-6">
            <h2 className="text-heading-4 text-secondary dark:text-accent">Our Comprehensive Quality Philosophy</h2>
            <p className="text-secondary/80 dark:text-accent/80 leading-relaxed">
              Quality is the life at REDSON Group. To maintain stringent standards across all divisions, our laboratories support continuous monitoring from raw materials, active pharmaceutical ingredients (APIs), packaging components, and in-process stages through to final product release. Every member of our technical team is self-motivated to ensure personal supervision and unwavering quality consciousness.
            </p>
          </div>
        </RevealAnimation>

        {/* Highlights Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-heading-3">Laboratory Infrastructure &amp; Methodologies</h2>
            <p className="text-secondary/60 dark:text-accent/60">State-of-the-art analytical precision safeguarding health and efficacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityHighlights.map((item, index) => (
              <RevealAnimation key={item.title} delay={0.1 * index}>
                <div className="dark:bg-background-8 w-full space-y-6 rounded-[20px] bg-white p-8 h-full">
                  <span className={`${item.icon} text-secondary dark:text-accent inline-block text-[52px]`} />
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{item.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <RevealAnimation delay={0.5}>
          <div className="bg-secondary dark:bg-background-8 rounded-3xl p-10 md:p-14 text-center space-y-6 text-white">
            <h2 className="text-heading-3 text-white">Need Quality Technical Documentation or Batch COAs?</h2>
            <p className="text-accent/70 max-w-[600px] mx-auto">
              Our technical QA experts can provide Certificates of Analysis, stability study data, and technical dossiers for your regulatory compliance.
            </p>
            <div>
              <LinkButton href="/contact-us" className="btn btn-primary btn-md hover:btn-white">
                Contact Quality Assurance Team
              </LinkButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </main>
  );
}
