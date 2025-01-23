import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mad jack ",
  description: "Contact page",
};

const ContactUs = () => {
  return (
    <div
      className="pt-5"
      style={{
        backgroundColor: "#f8f9fa", // Light gray background for a neutral look
        minHeight: "100vh",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Form Section */}
          <div className="col-md-6">
            <br />
            <br /><br />
            <h2 className="h4 mb-4" style={{ fontWeight: "bold", color: "#333" }}>
              Get in Touch
            </h2>
            <form>
              <div className="mb-3">
                <label className="form-label" style={{ color: "#333" }}>Name</label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  placeholder="Your Name"
                  style={{
                    borderRadius: "30px",
                    border: "1px solid #ccc", // Standard light border
                    paddingLeft: "20px",
                    backgroundColor: "#fff", // White background for input
                    color: "#333", // Dark text for better readability
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: "#333" }}>Email</label>
                <input
                  type="email"
                  className="form-control shadow-sm"
                  placeholder="Your Email"
                  style={{
                    borderRadius: "30px",
                    border: "1px solid #ccc",
                    paddingLeft: "20px",
                    backgroundColor: "#fff",
                    color: "#333",
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ color: "#333" }}>Message</label>
                <textarea
                  rows={4}
                  className="form-control shadow-sm"
                  placeholder="Your Message"
                  style={{
                    borderRadius: "30px",
                    border: "1px solid #ccc",
                    paddingLeft: "20px",
                    backgroundColor: "#fff",
                    color: "#333",
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100 rounded-pill shadow-lg"
                style={{
                  backgroundColor: "#007bff", // Standard blue background for the button
                  color: "white",
                  transition: "all 0.3s ease",
                  padding: "12px",
                  border: "none",
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="col-md-6"><br /><br /><br />
            <h2 className="h4 mb-4" style={{ fontWeight: "bold", color: "#333" }}>
              Contact Information
            </h2>
            <div className="mb-4 d-flex align-items-center">
              <i className="bi bi-geo-alt me-3 fs-4" style={{ color: "#007bff" }}></i>
              <div>
                <h5 className="mb-1" style={{ color: "#333" }}>Visit Us</h5>
                <p className="mb-0" style={{ color: "#333" }}>
                  Malappuram
                  <br />
                  Kerala, India
                </p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-center">
              <i className="bi bi-telephone me-3 fs-4" style={{ color: "#007bff" }}></i>
              <div>
                <h5 className="mb-1" style={{ color: "#333" }}>Call Us</h5>
                <p className="mb-0" style={{ color: "#333" }}>9496180153</p>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-center">
              <i className="bi bi-envelope me-3 fs-4" style={{ color: "#007bff" }}></i>
              <div>
                <h5 className="mb-1" style={{ color: "#333" }}>Email Us</h5>
                <p className="mb-0" style={{ color: "#333" }}>ayamonhasim44@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
