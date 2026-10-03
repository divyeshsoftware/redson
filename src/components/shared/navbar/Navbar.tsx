'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logoDark from '@public/images/shared/logo-dark.svg';
import logo from '@public/images/shared/logo.svg';
import mainLogoDark from '@public/images/shared/main-logo-dark.svg';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import AssociatesMenu from './AssociatesMenu';
import MobileMenuButton from './MobileMenuButton';

const Navbar = () => {
  const { isScrolled } = useNavbarScroll(150);

  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };
  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:!max-w-[1290px] bg-background-2 dark:bg-background-6 fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 rounded-full transition-all duration-500 ease-in-out min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div>
            <div className="bg-background-2 dark:bg-background-6 flex items-center justify-between rounded-full px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
              <div>
                <Link href="/" className="text-secondary dark:text-accent">
                  <span className="sr-only">Redson Group</span>
                  <figure className="hidden lg:block lg:max-w-[210px]">
                    <Image src={mainLogo} alt="Redson Group" className="block dark:hidden" priority />
                    <Image src={mainLogoDark} alt="Redson Group" className="hidden dark:block" priority />
                  </figure>
                  <figure className="block max-w-[44px] lg:hidden">
                    <Image src={logo} alt="Redson Group" className="block w-full dark:hidden" priority />
                    <Image src={logoDark} alt="Redson Group" className="hidden w-full dark:block" priority />
                  </figure>
                </Link>
              </div>
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center gap-1">
                  <li className="py-2.5">
                    <Link
                      href="/"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent flex items-center rounded-full border border-transparent px-3.5 py-2 font-medium transition-all duration-200">
                      Home
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link
                      href="/about"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent flex items-center rounded-full border border-transparent px-3.5 py-2 font-medium transition-all duration-200">
                      About Us
                    </Link>
                  </li>
                  <li
                    onMouseEnter={() => handleMenuHover('associates-menu')}
                    data-menu="associates-menu"
                    className="group/nav-item relative cursor-pointer py-2.5">
                    <Link
                      href="/services"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-3.5 py-2 font-medium transition-all duration-200">
                      <span>Associates</span>
                      <span className="block origin-center translate-y-px transition-all duration-300 group-hover/nav-item:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </Link>
                    <AssociatesMenu menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                  </li>
                  <li className="py-2.5">
                    <Link
                      href="/quality"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent flex items-center rounded-full border border-transparent px-3.5 py-2 font-medium transition-all duration-200">
                      Quality
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link
                      href="/marketing"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent flex items-center rounded-full border border-transparent px-3.5 py-2 font-medium transition-all duration-200">
                      Marketing
                    </Link>
                  </li>
                  <li className="py-2.5">
                    <Link
                      href="/contact-us"
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/70 hover:text-secondary dark:text-accent/70 dark:hover:text-accent flex items-center rounded-full border border-transparent px-3.5 py-2 font-medium transition-all duration-200">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden items-center justify-center xl:flex">
                <Link href="/contact-us" className="btn btn-md btn-primary hover:btn-secondary dark:hover:btn-accent">
                  <span>Inquire Now</span>
                </Link>
              </div>
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
