import { IService } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Services = () => {
  const servicesData: IService[] = getMarkDownData<IService & { [key: string]: unknown }>('src/data/services').slice(
    0,
    9,
  );

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Associate Companies</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto max-w-[600px] xl:max-w-[878px]">
              Six Specialized Divisions Delivering Integrated Healthcare Excellence
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[500px] xl:max-w-[700px]">
              From active pharmaceutical ingredients and sterile injectables to oral hygiene formulations, certified food colours, and precision thermoformed packaging.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <RevealAnimation key={service.slug || service.title || index} delay={0.2 + index * 0.1}>
              <div className="dark:bg-background-8 w-full space-y-6 rounded-[20px] bg-white p-8 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <span className={`${service.icon} text-secondary dark:text-accent inline-block text-[52px]`} />
                  <div className="space-y-2">
                    <h3 className="text-heading-5">{service.title}</h3>
                    <p className="line-clamp-3 text-secondary/70 dark:text-accent/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div>
                  <LinkButton
                    href={`/services/${service.slug}`}
                    className="btn btn-primary hover:btn-secondary btn-md">
                    View more
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Services.displayName = 'Services';
export default Services;
