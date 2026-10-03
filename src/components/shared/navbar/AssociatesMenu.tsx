'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';

interface AssociatesMenuProps {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}

const associates = [
  {
    title: 'Redson Pharmaceuticals',
    desc: 'Oral hygiene, healthcare formulations, tablets & liquid orals',
    href: '/services/redson-pharmaceuticals',
    icon: 'ns-shape-20',
  },
  {
    title: 'Redson Laboratories Pvt. Ltd.',
    desc: 'State-of-art testing, HPLC, microbial testing & injections plant',
    href: '/services/redson-laboratories',
    icon: 'ns-shape-21',
  },
  {
    title: 'Par Laboratories',
    desc: 'Bulk active drugs, tender business & export formulations',
    href: '/services/par-laboratories',
    icon: 'ns-shape-22',
  },
  {
    title: 'Rexin Laboratories',
    desc: 'Certified food colours, metallic lakes & formulation R&D',
    href: '/services/rexin-laboratories',
    icon: 'ns-shape-23',
  },
  {
    title: 'Syno Packers Pvt. Ltd.',
    desc: 'Modern thermoforming, blister packing, trays & packaging',
    href: '/services/syno-packers',
    icon: 'ns-shape-24',
  },
  {
    title: 'E-Woke Colour Inc.',
    desc: 'Food grade colours, dyes & pharmaceutical lake pigments',
    href: '/services/e-woke-colour',
    icon: 'ns-shape-25',
  },
];

const AssociatesMenu = ({ menuDropdownId, setMenuDropdownId }: AssociatesMenuProps) => {
  const isOpen = menuDropdownId === 'associates-menu';

  return (
    <div>
      <div
        className={cn(
          'dropdown-menu-bridge pointer-events-none absolute top-full left-1/2 z-40 h-3 w-full min-w-[620px] -translate-x-1/2 bg-transparent opacity-0',
          isOpen ? '!pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        onMouseEnter={() => setMenuDropdownId('associates-menu')}
        onMouseLeave={() => setMenuDropdownId(null)}
        className={cn(
          'dropdown-menu dark:bg-background-6 shadow-14 border-stroke-1/50 dark:border-background-7 pointer-events-none absolute top-full left-1/2 z-50 mt-2 w-[620px] -translate-x-1/2 rounded-[20px] border bg-white p-5 opacity-0 transition-all duration-300',
          isOpen ? '!pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        <div className="flex items-center justify-between pb-3 mb-2 border-b border-stroke-1/50 dark:border-background-7">
          <p className="text-tagline-2 font-semibold uppercase tracking-wider text-secondary/60 dark:text-accent/60">
            Associate Companies &amp; Divisions
          </p>
          <Link
            href="/services"
            onClick={() => setMenuDropdownId(null)}
            className="text-primary-500 hover:text-primary-600 text-tagline-2 font-medium">
            View All &rarr;
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-1.5">
          {associates.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuDropdownId(null)}
                className="group relative flex items-start gap-3 rounded-[10px] p-2.5 transition-all duration-300">
                <HoverBgTransform className="group-hover:opacity-100" />
                <div className="relative z-10 mt-0.5 text-secondary dark:text-accent text-[22px] shrink-0">
                  <span className={item.icon} />
                </div>
                <div className="relative z-10 space-y-0.5 min-w-0">
                  <p className="text-tagline-1 text-secondary dark:text-accent font-medium group-hover:text-primary-500 transition-colors truncate">
                    {item.title}
                  </p>
                  <p className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssociatesMenu;
