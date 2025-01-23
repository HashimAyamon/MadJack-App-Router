"use client";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import "./navbar.css";
import Link from "next/link";
import { useCart } from "../contexts/CartContext";
import { BackButton } from "./BackButton";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="glass-effect fixed-top">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <div className="fs-3 fw-bold text-light">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={120}
              height={80}
              className="d-inline-block"
            />
          </div>

          {/* Desktop Menu */}
          <div className="d-none d-md-flex gap-4">
            <Link href="/" className="nav-link text-primary">
              Home
            </Link>
            <Link href="/collections" className="nav-link text-primary">
              Collections
            </Link>
            <Link href="/about-us" className="nav-link text-primary">
              About
            </Link>
            <Link href="/contact-us" className="nav-link text-primary">
              Contact
            </Link>
            <BackButton />
          </div>

          {/* Action Icons and Mobile Menu */}
          <div className="d-flex align-items-center gap-4">
            {/* Shopping Bag Icon */}
            <div className="position-relative">
              <Link href={"/cart"}>
                <i className="bi bi-bag fs-5 text-light"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQuantity}
                </span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div
              className="d-md-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              role="button"
              aria-label="Toggle Mobile Menu"
            >
              <i className="bi bi-list fs-5 text-light cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
    </nav>
  );
};

export default Navbar;
