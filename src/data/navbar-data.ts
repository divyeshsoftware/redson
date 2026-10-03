import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'home', label: 'Home', href: '/' },
      { id: 'about-us', label: 'About Us', href: '/about' },
      { id: 'quality', label: 'Quality Assurance', href: '/quality' },
      { id: 'marketing', label: 'Marketing & Global Reach', href: '/marketing' },
      { id: 'contact', label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    id: 'associates',
    title: 'Associate Companies',
    submenu: [
      { id: 'all-services', label: 'All Associates & Divisions', href: '/services' },
      { id: 'redson-pharma', label: 'Redson Pharmaceuticals', href: '/services/redson-pharmaceuticals' },
      { id: 'redson-lab', label: 'Redson Laboratories Pvt. Ltd.', href: '/services/redson-laboratories' },
      { id: 'par-lab', label: 'Par Laboratories', href: '/services/par-laboratories' },
      { id: 'rexin-lab', label: 'Rexin Laboratories', href: '/services/rexin-laboratories' },
      { id: 'syno-packers', label: 'Syno Packers Pvt. Ltd.', href: '/services/syno-packers' },
      { id: 'e-woke-colour', label: 'E-Woke Colour Inc.', href: '/services/e-woke-colour' },
    ],
  },
  {
    id: 'quick-links',
    title: 'Quick Contact',
    submenu: [
      { id: 'send-inquiry', label: 'Send Business Inquiry', href: '/contact-us' },
      { id: 'headquarters', label: 'Headquarters: Ahmedabad', href: '/contact-us' },
    ],
  },
];
