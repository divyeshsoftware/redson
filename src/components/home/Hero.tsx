import heroBg from '@public/images/ns-img-187.svg';
import heroBgDark from '@public/images/ns-img-dark-126.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="overflow-hidden pt-[115px] pb-[80px] md:pb-[110px]">
      <div className="mx-auto max-w-[1365px]">
        <div className="relative">
          {/* hero bg */}
          <figure className="absolute -top-5 left-[50%] z-0 h-full w-full max-w-[1365px] translate-x-[-50%] animate-pulse overflow-hidden pointer-events-none">
            <Image src={heroBg} alt="Decorative background pattern" className="size-full object-cover dark:hidden" />
            <Image
              src={heroBgDark}
              alt="Decorative background pattern"
              className="hidden size-full object-cover dark:inline-block"
            />
          </figure>

          <div className="main-container relative z-10">
            <div className="flex flex-col items-center justify-between gap-12 pt-4 pb-[60px] lg:flex-row lg:items-start lg:pt-[140px] xl:gap-8">
              {/* hero content */}
              <div className="w-full space-y-7 text-center md:text-left lg:max-w-[540px] lg:space-y-10 xl:max-w-[620px]">
                <RevealAnimation delay={0.1}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-950/60 px-4 py-1.5 text-xs font-semibold text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800">
                    <span className="size-2 rounded-full bg-primary-500 animate-ping inline-block" />
                    <span>Established 1978 • 45+ Years of Pharmaceutical Trust</span>
                  </div>
                </RevealAnimation>

                {/* heading text */}
                <div className="space-y-4">
                  <RevealAnimation delay={0.2}>
                    <h1 className="text-heading-2 md:text-heading-1 tracking-tight text-secondary dark:text-accent font-extrabold">
                      Excellence in Pharmaceuticals &amp; Healthcare Manufacturing
                    </h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
                      Redson Group is one of India&apos;s leading and most progressive pharmaceutical business houses, delivering uncompromising international standards in oral hygiene, formulations, analytical laboratories, and specialized blister packaging.
                    </p>
                  </RevealAnimation>
                </div>

                {/* heading buttons */}
                <RevealAnimation delay={0.4} className="w-full md:w-auto">
                  <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                    <LinkButton
                      href="/services"
                      className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent w-[90%] md:w-auto">
                      <span>Explore Our 6 Associates</span>
                    </LinkButton>
                    <LinkButton
                      href="/about"
                      className="btn btn-lg btn-outline hover:btn-primary w-[90%] md:w-auto">
                      <span>Our 1978 Heritage</span>
                    </LinkButton>
                  </div>
                </RevealAnimation>

                {/* Key badges */}
                <RevealAnimation delay={0.5}>
                  <div className="pt-4 border-t border-stroke-1 dark:border-stroke-7 grid grid-cols-3 gap-4 text-center md:text-left">
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-primary-500">WHO-GMP</p>
                      <p className="text-xs text-secondary/60 dark:text-accent/60">Certified Quality</p>
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-secondary dark:text-accent">25k Sq. Ft.</p>
                      <p className="text-xs text-secondary/60 dark:text-accent/60">Plant Footprint</p>
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl font-bold text-primary-500">Global</p>
                      <p className="text-xs text-secondary/60 dark:text-accent/60">Export Network</p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>

              {/* Right Side: Pharmaceutical Operational Showcase */}
              <div className="w-full lg:max-w-[500px] xl:max-w-[560px]">
                <div className="relative">
                  {/* Floating Metric 1: Capacity */}
                  <RevealAnimation delay={0.3} direction="right">
                    <div className="bg-white/90 dark:bg-background-8/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-stroke-1 dark:border-stroke-7 space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-stroke-1 dark:border-stroke-7">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-secondary/60 dark:text-accent/60">
                            Manufacturing Throughput
                          </span>
                          <h2 className="text-heading-6 font-bold text-secondary dark:text-accent">
                            Production Capacities
                          </h2>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-ns-green/10 text-ns-green text-xs font-semibold">
                          Active Facilities
                        </span>
                      </div>

                      {/* Animated Numbers Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-background-2 dark:bg-background-7 space-y-1">
                          <p className="text-xs text-secondary/60 dark:text-accent/60">Tablets / Year</p>
                          <div className="text-2xl font-black text-primary-500 flex items-center">
                            <NumberAnimation number={500} speed={2000} interval={150} rooms={3} heightSpaceRatio={2.5} />
                            <span>M+</span>
                          </div>
                          <p className="text-[11px] text-secondary/50 dark:text-accent/50">High-speed rotary press</p>
                        </div>

                        <div className="p-4 rounded-xl bg-background-2 dark:bg-background-7 space-y-1">
                          <p className="text-xs text-secondary/60 dark:text-accent/60">Capsules / Year</p>
                          <div className="text-2xl font-black text-secondary dark:text-accent flex items-center">
                            <NumberAnimation number={50} speed={2000} interval={150} rooms={2} heightSpaceRatio={2.5} />
                            <span>M+</span>
                          </div>
                          <p className="text-[11px] text-secondary/50 dark:text-accent/50">Precision filling</p>
                        </div>

                        <div className="p-4 rounded-xl bg-background-2 dark:bg-background-7 space-y-1">
                          <p className="text-xs text-secondary/60 dark:text-accent/60">Injectable Vials</p>
                          <div className="text-2xl font-black text-secondary dark:text-accent flex items-center">
                            <NumberAnimation number={10} speed={2000} interval={150} rooms={2} heightSpaceRatio={2.5} />
                            <span>M+</span>
                          </div>
                          <p className="text-[11px] text-secondary/50 dark:text-accent/50">Sterile liquid filling</p>
                        </div>

                        <div className="p-4 rounded-xl bg-background-2 dark:bg-background-7 space-y-1">
                          <p className="text-xs text-secondary/60 dark:text-accent/60">Vials Per Day</p>
                          <div className="text-2xl font-black text-primary-500 flex items-center">
                            <NumberAnimation number={60} speed={2000} interval={150} rooms={2} heightSpaceRatio={2.5} />
                            <span>K+</span>
                          </div>
                          <p className="text-[11px] text-secondary/50 dark:text-accent/50">Automated lines</p>
                        </div>
                      </div>

                      {/* Quality & Standards Highlight */}
                      <div className="p-4 rounded-xl bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/20 flex items-center justify-between">
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-primary-600 dark:text-primary-400">Strict Standards</p>
                          <p className="text-xs text-secondary/80 dark:text-accent/80 font-medium">IP • BP • USP Pharmacopoeia Compliant</p>
                        </div>
                        <div className="size-9 rounded-xl bg-primary-500/20 text-primary-500 dark:text-primary-400 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                            <path d="M10 2v7.31M14 2v7.31" />
                            <path d="M8.5 2h7" />
                            <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                            <circle cx="12" cy="15" r="1.5" fill="currentColor" fillOpacity="0.4" />
                          </svg>
                        </div>
                      </div>

                      {/* Division Highlights */}
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-secondary/60 dark:text-accent/60 uppercase tracking-wider">
                          Key Divisions
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Redson Pharma', 'Redson Labs', 'Par Labs', 'Rexin Labs', 'Syno Packers', 'E-Woke Colour'].map((item) => (
                            <span
                              key={item}
                              className="text-xs px-2.5 py-1 rounded-lg bg-background-2 dark:bg-background-7 text-secondary dark:text-accent font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
