"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // ⭐ ACTIVE PAGE DETECTOR ⭐

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
        <div
          className="
            flex items-center justify-between relative
            w-full px-[18px]
            min-h-[72px]
          "
        >
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

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-[12px]">
            {/* Search */}
            <input
              type="search"
              aria-label="Search products"
              onChange={() => alert("This Feature Is Coming Soon")}
              placeholder="Search Product"
              className="
                border border-[#666] rounded-[6px]
                px-[12px] py-[8px] w-[180px]
                transition
                focus:border-[#6c5ce7]
                focus:shadow-[0_4px_12px_rgba(108,92,231,0.15)]
              "
            />

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex gap-[8px]">
              <button
                onClick={() => alert("This Feature Is Coming Soon")}
                className="bg-[#6c5ce7] text-white px-[12px] py-[8px] rounded-[6px] font-medium hover:bg-[#5a4bcf]"
              >
                Sign-up
              </button>
              <button
                onClick={() => alert("This Feature Is Coming Soon")}
                className="bg-[#00cec9] text-[#222] px-[12px] py-[8px] rounded-[6px] hover:bg-[#00b8bc]"
              >
                Login
              </button>
            </div>

            {/* Cart Icon */}
            <button
              onClick={() => alert("This Feature Is Coming Soon")}
              className="hidden md:block text-[1.5rem] text-[#fd79a8] transition hover:text-[#e84393] hover:scale-110"
            >
              <IoCartOutline />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden text-[2.2rem]
                text-[#2d3436] w-[36px] h-[36px] p-[6px]
                transition-all duration-500
              "
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV MENU */}
        <nav
          className={`
            ${menuOpen ? "flex" : "hidden"}
            flex-col gap-4 px-[20px] py-[28px]
            bg-gradient-to-br from-white to-[#f8f9ff]
            shadow-[0_20px_40px_rgba(0,0,0,0.12)]
            backdrop-blur-[20px]
            border-t border-[rgba(108,92,231,0.1)]
            transition-all duration-500
          `}
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen
              ? "translateY(0) scale(1)"
              : "translateY(-20px) scale(0.95)",
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          {links.map(([label, href], i) => {
            const isActive = pathname === href;

            return (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`
                  text-[17px] font-medium py-[12px] block
                  ${
                    isActive
                      ? "bg-[#6c5ce7] text-white"
                      : "text-[#2d3436] hover:bg-[#6c5ce7] hover:text-white"
                  }
                `}
                style={{
                  transition: `all 0.4s ease ${i * 0.08}s`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                {label}
              </Link>
            );
          })}

          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#6c5ce7] to-[#00cec9]" />

          {/* Mobile Buttons */}
          <button
            onClick={() => alert("This Feature Is Coming Soon")}
            className="
              px-[20px] py-[14px] rounded-[12px] text-[16px] font-semibold text-white
              bg-gradient-to-br from-[#6c5ce7] to-[#5a4bcf] shadow-[0_8px_25px_rgba(108,92,231,0.3)]
            "
          >
            Sign-up
          </button>

          <button
            onClick={() => alert("This Feature Is Coming Soon")}
            className="
              px-[20px] py-[14px] rounded-[12px] text-[16px] font-semibold
              bg-[rgba(255,255,255,0.8)] text-[#2d3436]
              border-[2px] border-[rgba(108,92,231,0.2)]
              backdrop-blur-[10px]
            "
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
