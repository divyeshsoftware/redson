import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'All Associate Divisions', href: '/services' },
      { label: 'Quality Assurance', href: '/quality' },
      { label: 'Marketing & Distribution', href: '/marketing' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  {
    title: 'Associate Divisions',
    links: [
      { label: 'Redson Pharmaceuticals', href: '/services/redson-pharmaceuticals' },
      { label: 'Redson Laboratories Pvt. Ltd.', href: '/services/redson-laboratories' },
      { label: 'Par Laboratories', href: '/services/par-laboratories' },
      { label: 'Rexin Laboratories', href: '/services/rexin-laboratories' },
      { label: 'Syno Packers Pvt. Ltd.', href: '/services/syno-packers' },
      { label: 'E-Woke Colour Inc.', href: '/services/e-woke-colour' },
    ],
  },
  {
    title: 'Corporate Headquarters',
    links: [
      { label: 'Redson House, 2, Mahashakti Ind. Estate, Naroda Rd, Ahmedabad - 380025', href: '/contact-us' },
      { label: 'Tel: +91-79-22204110 / 65453425', href: 'tel:+917922204110' },
      { label: 'Fax: +91-79-22201385', href: '/contact-us' },
      { label: 'Email: info@redsongroup.com', href: 'mailto:info@redsongroup.com' },
      { label: 'Web: www.redsongroup.com', href: '/' },
    ],
  },
];
