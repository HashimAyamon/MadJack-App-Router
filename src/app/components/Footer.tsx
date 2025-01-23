import Link from "next/link";
import React from "react";
import "./footer-styles.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container pt-5">
        <div className="row text-center text-md-start">
          {/* Brand Description */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h3 className="h5 font-serif mb-3 text-primary">MAD JACK</h3>
            <p className="lead">
              Join our vibrant community, challenge friends, and experience gaming like never before. <br />
              Get ready to level up your experience with us. Your next great adventure awaits!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3 text-primary">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/about-us" className="text-decoration-none text-light hover-text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-decoration-none text-light hover-text-primary">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-decoration-none text-light hover-text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3 text-primary">Contact Info</h4>
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt-fill"></i> MALPPURAM, Kerala, India</li>
              <li><i className="bi bi-telephone-fill"></i> 9496180153</li>
              <li><i className="bi bi-envelope-fill"></i> ayamonhashim44@gmail.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h4 className="h6 mb-3 text-primary">Follow Us</h4>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://github.com/HashimAyamon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover-text-primary"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hashim-a-139a00269/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light hover-text-primary"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
             
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-top border-secondary py-2 mt-4"></div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="mb-0">&copy; 2024 HASHIM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
