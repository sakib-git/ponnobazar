'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/');

  return (
    <Link href={href} className={`font-bold text-gray-600 hover:text-yellow-500 ${isActive ? 'text-yellow-500' : ''}`}>
      {children}
    </Link>
  );
};

export default NavLink;
