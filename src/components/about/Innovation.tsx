import { CheckIcon } from '@/icons';
import aboutBgImg from '@public/images/ns-img-14.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const checklist = [
  {
    id: 1,
    text: 'Stringent adherence to WHO-GMP and State FDA regulatory guidelines',
  },
  {
    id: 2,
    text: 'Over 45 years of continuous manufacturing excellence founded in 1978',
  },
  {
    id: 3,
    text: 'Advanced analytical laboratories with HPLC, GC, and microbiological testing',
  },
  {
    id: 4,
    text: 'Fully integrated infrastructure spanning formulations, APIs, and modern packaging',
  },
];
const Innovation = () => {
  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <RevealAnimation delay={0.2}>
        <div className="main-container">
          <div className="relative z-10">
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 overflow-hidden rounded-[20px]">
              <Image src={aboutBgImg} alt="about bg" className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-5 px-6 py-14 max-sm:grid-cols-1 max-sm:gap-10 md:px-11">
              <div className="max-w-[500px]">
                <h2 className="text-accent text-heading-5 mb-8">
                  At our core, we believe in pharmaceutical purity, continuous R&amp;D, and uncompromising ethics.
                </h2>
                <div>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-md btn-white hover:btn-primary dark:btn-transparent">
                    Partner With Us
                  </LinkButton>
                </div>
              </div>
              <div>
                <ul className="space-y-4">
                  {checklist.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <span className="bg-accent/20 flex size-5 items-center justify-center rounded-full">
                        <CheckIcon className="fill-accent size-[18px] dark:fill-white" />
                      </span>
                      <span className="text-accent">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

Innovation.displayName = 'Innovation';
export default Innovation;
