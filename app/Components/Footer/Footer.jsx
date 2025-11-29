"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2d3436] text-[#f0f0f0] px-6 py-12 pb-6">
      <div
        className="
          grid 
          grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
          gap-8 
          mb-10
        "
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/men" className="hover:text-[#00cec9]">
                Men
              </Link>
            </li>
            <li>
              <Link href="/women" className="hover:text-[#00cec9]">
                Women
              </Link>
            </li>
            <li>
              <Link href="/kids" className="hover:text-[#00cec9]">
                Kids
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="/newarrivals" className="hover:text-[#00cec9]">
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Order Tracking
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Sustainability
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#00cec9]">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#555] pt-6 flex flex-col gap-6">
        <div className="max-w-[400px]">
          <h3 className="text-lg font-semibold mb-2">Stay in Touch</h3>
          <p className="text-sm mb-3">
            Subscribe for latest fashion drops & offers
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                px-4 py-2 w-[250px] 
                rounded-l-lg 
                outline-none 
                border-none 
                text-[#333]
              "
            />
            <button
              className="
                bg-[#6c5ce7] 
                px-4 py-2 
                rounded-r-lg 
                text-white 
                font-medium 
                hover:bg-[#fd79a8] 
                transition
              "
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex gap-4 text-xl">
          <Link href="#" className="hover:text-[#00cec9]">
            <FaFacebookF />
          </Link>
          <Link href="#" className="hover:text-[#00cec9]">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-[#00cec9]">
            <FaTwitter />
          </Link>
          <Link href="#" className="hover:text-[#00cec9]">
            <FaPinterest />
          </Link>
        </div>
      </div>

      <div className="border-t border-[#555] mt-6 pt-4 text-center text-sm text-[#aaa]">
        © 2025 YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
