'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import NavLink from './NavLink';
import { BiCart } from 'react-icons/bi';
import { useCart } from './CartProvider';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { cart } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hasAuth = document.cookie.includes('auth=true');
    setIsAuth(hasAuth);
  }, [pathname]);

  
  const handleLogout = () => {
    document.cookie = 'auth=; path=/; max-age=86400';
    setIsAuth(false);
    router.push('/login');
 
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between max-md:flex-col max-md:gap-3 py-4">
        <Link href="/" className="text-2xl max-md:text-3xl font-bold text-yellow-400">
          Ponno Bazar
        </Link>

        <nav className="flex gap-6 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/allproduct">All Products</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/addtocart" className="relative">
            <BiCart size={22} />
            <span className="  absolute  top-3 bg-red-500  text-white text-[10px]   font-bold  w-4 h-4 flex items-center justify-center  rounded-full">{cart.length}</span>
          </NavLink>

          {!isAuth ? (
            <Link className="bg-[#ff7900] px-3 py-1 text-white font-bold rounded" href="/login">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="bg-[#ff7900] px-3 py-1 text-white rounded font-semibold">
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
