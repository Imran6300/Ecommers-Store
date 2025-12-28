"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useCart } from "../../context/CartContext";

const NavBar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const { cart } = useCart();

  // Total quantity in cart
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Hide/Show Navbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.top = window.scrollY > lastScrollY ? "-80px" : "0";
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["Home", "/"],
    ["Men", "/men"],
    ["Women", "/women"],
    ["Kids", "/kids"],
    ["New Arrivals", "/newarrivals"],
  ];

  return (
    <header
      ref={navRef}
      className="
        fixed top-0 left-0 w-full z-[1100]
        bg-white border-b border-gray-200
        shadow-[0_5px_15px_rgba(0,0,0,0.05)]
        px-2 py-[8px] transition-all duration-300
      "
    >
      <div className="w-full mx-auto">
        <div className="flex items-center justify-between relative w-full px-[18px] min-h-[72px]">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <img
              src="/ecommerslogo.png"
              alt="logo"
              className="w-[64px] h-[64px] object-cover transition-transform duration-200 hover:scale-[1.03]"
            />
          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul
            className="
              hidden md:flex gap-[18px] list-none whitespace-nowrap
              absolute left-1/2 -translate-x-1/2
              max-w-[calc(100%-360px)]
            "
          >
            {links.map(([label, href]) => {
              const isActive = pathname === href;

              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`
                      text-[15.5px] px-[10px] py-[6px] font-medium rounded-[8px] transition
                      ${
                        isActive
                          ? "bg-[#6c5ce7] text-white"
                          : "text-[#2d3436] hover:bg-[#6c5ce7] hover:text-white"
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-[12px]">
            {/* Search */}
            <input
              type="search"
              placeholder="Search Product"
              onChange={() => alert("This Feature Is Coming Soon")}
              className="
                border border-[#666] rounded-[6px]
                px-[12px] py-[8px] w-[180px]
                transition
                focus:border-[#6c5ce7]
                focus:shadow-[0_4px_12px_rgba(108,92,231,0.15)]
              "
            />

            {/* Desktop Auth */}
            <div className="hidden md:flex gap-[8px]">
              <button className="bg-[#6c5ce7] text-white px-[12px] py-[8px] rounded-[6px] font-medium hover:bg-[#5a4bcf]">
                Sign-up
              </button>
              <button className="bg-[#00cec9] text-[#222] px-[12px] py-[8px] rounded-[6px] hover:bg-[#00b8bc]">
                Login
              </button>
            </div>

            {/* CART ICON */}
            <Link
              href="/cart"
              className="relative hidden md:block text-[1.5rem] text-[#fd79a8] transition hover:text-[#e84393] hover:scale-110"
            >
              <IoCartOutline />

              {cartCount > 0 && (
                <span
                  className="
                    absolute -top-2 -right-2
                    bg-[#6c5ce7] text-white
                    text-[11px] font-bold
                    w-[18px] h-[18px]
                    flex items-center justify-center
                    rounded-full
                  "
                >
                  {cartCount}
                </span>
              )}
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[2.2rem] text-[#2d3436] w-[36px] h-[36px]"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        <nav
          className={`
            ${menuOpen ? "flex" : "hidden"}
            flex-col gap-4 px-[20px] py-[28px]
            bg-gradient-to-br from-white to-[#f8f9ff]
            shadow-[0_20px_40px_rgba(0,0,0,0.12)]
            border-t border-[rgba(108,92,231,0.1)]
          `}
        >
          {links.map(([label, href]) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-[17px] font-medium py-[12px] ${
                  isActive
                    ? "bg-[#6c5ce7] text-white"
                    : "text-[#2d3436] hover:bg-[#6c5ce7] hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}

          {/* MOBILE CART */}
          <Link
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 text-[17px] font-medium text-[#2d3436]"
          >
            <IoCartOutline className="text-[1.4rem]" />
            Cart ({cartCount})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
