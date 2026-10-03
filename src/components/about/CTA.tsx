import gradientImg from '@public/images/ns-img-499.png';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const CTA = () => {
  return (
    <section className="mx-auto max-w-[320px] py-[80px] min-[425px]:max-w-[350px] min-[475px]:max-w-[450px] sm:max-w-[600px] md:max-w-[700px] md:py-[100px] lg:max-w-[980px] xl:max-w-[1240px] 2xl:max-w-[1440px]">
      <RevealAnimation delay={0.1}>
        <div className="bg-secondary dark:bg-background-6 relative overflow-hidden rounded-[20px] sm:rounded-[32px]">
          {/* bg gradient  */}
          <RevealAnimation delay={0.1} offset={200} direction="left">
            <figure className="pointer-events-none absolute -top-[100%] -left-[7%] size-[850px] rotate-[275deg] select-none sm:-top-[35%]">
              <Image src={gradientImg} alt="cta-bg" className="w-[50%] sm:w-full" />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <div className={cn('relative z-10 p-10 min-[475px]:p-14 sm:p-20 lg:p-[100px]')}>
              <div className="mb-10 space-y-5 text-center sm:mb-14">
                <RevealAnimation delay={0.1}>
                  <span className={cn('badge', 'badge-yellow text-ns-yellow')}>Partner With Redson</span>
                </RevealAnimation>
                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className={cn('font-normal text-white')}>Connect with India&apos;s Premier Pharmaceutical Group</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p className={cn('text-accent/60')}>
                      Inquire about third-party contract manufacturing, formulation development, or export supplies.
                    </p>
                  </RevealAnimation>
                </div>
              </div>

              <RevealAnimation delay={0.4}>
                <div className="flex flex-col items-center justify-center gap-4">
                  <a
                    href="/contact-us"
                    className={cn(
                      'btn btn-md h-12 w-full md:w-auto',
                      'btn-primary hover:btn-accent btn-md border-0 md:w-auto px-8',
                    )}>
                    <span>Inquire with Redson Today</span>
                  </a>
                </div>
              </RevealAnimation>
            </div>
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
