import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; 

export const metadata: Metadata = {
  title: "ABOUT PAGE",
  description: "Learn more about Mad Jack - Your Ultimate Gaming Hub",
};

const AboutUs = () => {
  return (
    <div className="text-dark" style={{ backgroundColor: "#f8f9fa" }}> {/* Neutral background color */}
      {/* Hero Section */}
      <div className="position-relative" style={{ height: "30rem" }}>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: 'url("/about.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        >
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 198, 255, 0.7), rgba(0, 114, 255, 0.7))", // Bright gradient background
            }}
          ></div>
        </div>
        <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100 text-center">
          <h1 className="display-3 fw-bold text-warning mb-3">Our Story</h1>
          <p className="lead fs-4 text-dark">
            Discover the passion behind Mad Jack – Your ultimate gaming hub.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        <div className="mx-auto" style={{ maxWidth: "800px" }}>
          <h2 className="text-dark mb-4 text-center">Who We Are</h2>
          <p className="fs-5 lh-lg mb-4 text-dark">
            Welcome to Mad Jack – the destination for gamers, by gamers! Whether
            you’re a casual player or a hardcore enthusiast, we’re here to bring
            you the latest news, reviews, and updates from the gaming universe.
          </p>
          <p className="fs-5 lh-lg mb-4 text-dark">
            Our mission is to create a community where gamers of all levels can
            connect, share, and level up their gaming experience. From expert
            tips to in-depth guides, we’re dedicated to making your gaming
            journey unforgettable.
          </p>
          <div className="text-center">
            <Link
              href="/collections"
              className="btn btn-lg px-5 py-3 rounded-pill shadow-lg text-dark text-decoration-none fw-bold"
              style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)", // Gradient background for button
                color: "white",
                transition: "all 0.3s ease",
              }}
            >
              Buy Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div
        className="bg-light py-5" // Changed to a lighter background
        style={{
          background: "#f8f9fa", // Neutral background for consistency
        }}
      >
        <div className="container text-center">
          <h2 className="text-dark mb-4 display-4">Meet the Team</h2>
          <div className="row justify-content-center">
            {/* Team Member 1 */}
            <div className="col-md-4 mb-4">
              <div
                className="card bg-white text-dark border-0 shadow-lg"
                style={{ borderRadius: "15px" }}
              >
                <Image
                  src="/team1.jpg"
                  alt="Team Member 1"
                  width={300} // Specify width and height for optimization
                  height={300}
                  className="card-img-top"
                  style={{
                    objectFit: "contain",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    backgroundColor: "black",
                    padding: "10px",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">Hashim</h5>
                  <p className="card-text text-dark">
                    Founder & Lead Strategist
                  </p>
                </div>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="col-md-4 mb-4">
              <div
                className="card bg-white text-dark border-0 shadow-lg"
                style={{ borderRadius: "15px" }}
              >
                <Image
                  src="/team2.jpg"
                  alt="Team Member 2"
                  width={300}
                  height={300}
                  className="card-img-top"
                  style={{
                    objectFit: "contain",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    backgroundColor: "black",
                    padding: "10px",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">Hashim</h5>
                  <p className="card-text text-dark">
                    Tech Lead & Developer
                  </p>
                </div>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="col-md-4 mb-4">
              <div
                className="card bg-white text-dark border-0 shadow-lg"
                style={{ borderRadius: "15px" }}
              >
                <Image
                  src="/team3.jpg"
                  alt="Team Member 3"
                  width={300}
                  height={300}
                  className="card-img-top"
                  style={{
                    objectFit: "contain",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    backgroundColor: "black",
                    padding: "10px",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">Hashim</h5>
                  <p className="card-text text-dark">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
