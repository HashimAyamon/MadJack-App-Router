import type { Metadata } from "next";
import FeaturedProducts from "./components/FeaturedProducts";
import "./home_page.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MAD JACK",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <div className="position-relative vh-100 d-flex align-items-center justify-content-center">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/banner.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        </div>

        <div className="position-relative text-center text-white px-3">
          <h1 className="display-4 display-md-3 display-lg-1 font-serif mb-4 fw-bold">
            MAD JACK GAMMING
          </h1>
          <p className="lead mb-5">
            The ultimate destination for gamers! Dive into an unparalleled world
            of thrilling adventures <br />
            jaw-dropping graphics, and heart-pounding action.
          </p>
          <Link href="/collections" className="button-link">
            Discover Our Collection
          </Link>
        </div>
      </div>
      <FeaturedProducts />
    </>
  );
}
