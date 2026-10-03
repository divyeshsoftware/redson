import { ITeamMember } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import SocialLinks from '../shared/SocialLinks';

const Teams = () => {
  const teams = getMarkDownData<ITeamMember & { [key: string]: unknown }>('src/data/team', false, 'name').slice(0, 6);
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container space-y-10 md:space-y-[70px]">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our team</span>
          </RevealAnimation>
          <div className="mx-auto max-w-[620px] space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Visionary Leadership &amp; Technical Experts</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                The strength of Redson Group lies in our seasoned pharmaceutical leadership, experienced pharmacists, and dedicated quality specialists.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-4 sm:gap-5 md:gap-8">
          {teams.map((team, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={team.name}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div className="group dark:bg-background-9 relative z-10 overflow-hidden rounded-[20px] bg-white p-3">
                  <figure className="mx-auto overflow-hidden lg:max-w-[408px]">
                    <div className="relative">
                      <Image
                        src={team.userImg}
                        alt={`${team.name} profile img`}
                        loading="lazy"
                        width={600}
                        height={600}
                        quality={100}
                        className="bg-background-1 dark:bg-background-5 h-full w-full rounded-2xl object-cover"
                      />
                    </div>
                  </figure>
                  <div className="shadow-1 dark:bg-background-9 ease-team-ease-1 absolute bottom-7 left-1/2 z-20 mx-auto w-[calc(100%-44px)] max-w-[384px] -translate-x-1/2 space-y-3 rounded-xl bg-white p-6 transition-all duration-[400ms] sm:bottom-5 lg:translate-y-[30%] lg:scale-[90%] lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                    <div className="text-center">
                      <h3 className="text-heading-5 text-secondary dark:text-accent font-normal">
                        {team.name}
                      </h3>
                      <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-normal">{team.role}</p>
                    </div>
                    <SocialLinks social={team.social} />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

Teams.displayName = 'Teams';
export default Teams;
