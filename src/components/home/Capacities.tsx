import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const capacities = [
  { metric: '500 Million', label: 'Tablets / Year', desc: 'High-speed automated rotary compression', icon: 'ns-shape-20' },
  { metric: '50 Million', label: 'Capsules / Year', desc: 'Precision hard gelatin capsule filling', icon: 'ns-shape-21' },
  { metric: '30 Million', label: 'Powder Injections / Year', desc: 'Non Beta-Lactam sterile injection filling', icon: 'ns-shape-22' },
  { metric: '25 Million', label: 'Beta-Lactam Injections / Year', desc: 'Dedicated aseptic containment facility', icon: 'ns-shape-23' },
  { metric: '25 Million', label: 'Eye Drops / Year', desc: 'Three-piece plastic vial sterile filling', icon: 'ns-shape-24' },
  { metric: '25 Million', label: 'Ampoules / Year', desc: 'Small volume injections (1ml to 20ml)', icon: 'ns-shape-25' },
  { metric: '10 Million', label: 'Vials / Year', desc: 'Small volume injections (5ml to 50ml)', icon: 'ns-shape-26' },
  { metric: '60,000', label: 'Vials / Day', desc: 'Automatic filling, sealing & labeling lines', icon: 'ns-shape-27' },
  { metric: '25,000 Sq. Ft.', label: 'Plant Footprint', desc: 'Ultra-modern WHO & cGMP compliant facility', icon: 'ns-shape-28' },
];

const Capacities = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 py-[60px] md:py-[90px] lg:py-[110px]">
      <div className="main-container space-y-12 md:space-y-16">
        <div className="space-y-3 text-center mx-auto max-w-[760px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan mb-2">Mega-Scale Manufacturing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-3 md:text-heading-2">Substantial Installed Capacities</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70">
              Our state-of-the-art production plants in Naroda (Ahmedabad) and GIDC Gojaria operate under WHO &amp; State FDA GMP standards with substantial installed capacities designed for rapid scale-up.
            </p>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capacities.map((item, index) => (
            <RevealAnimation key={item.label} delay={0.1 * (index % 3)}>
              <div className="dark:bg-background-8 w-full space-y-6 rounded-[20px] bg-white p-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <span className={`${item.icon} text-secondary dark:text-accent inline-block text-[52px]`} />
                  <div className="space-y-2">
                    <p className="text-heading-3 md:text-heading-2 font-bold text-primary-500 tracking-tight">{item.metric}</p>
                    <h3 className="text-heading-5">{item.label}</h3>
                    <p className="text-secondary/70 dark:text-accent/70 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.4}>
          <div className="flex justify-center pt-4">
            <LinkButton href="/services" className="btn btn-primary btn-md hover:btn-secondary dark:hover:btn-accent">
              View Division Capabilities
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Capacities;
