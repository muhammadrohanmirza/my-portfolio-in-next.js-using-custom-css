"use client";
import Image from "next/image";
import Link from "next/link";
import { WiCloudDown } from "react-icons/wi";
import './style.css';

 function Navbar() {
  return (
    <div className="header-container">
      <header className="header-content md-flex">
        <Link className="logo" href="#">
          <Image 
            src={require("../../../../public/assests/mylogo.jpg")}
            alt="logo"
            width={100}
            height={100}
            className="w-[40px]"
          />
          <span className="logo-title">Rohan Mirza</span>
        </Link>
        <nav className="nav-links">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/About" className="nav-link">About</Link>
          <Link href="/Project" className="nav-link">Projects</Link>
          <Link href="/Contact" className="nav-link">Contact</Link>
        </nav>
        <Link href="/assests/My Resume .pdf" target="_blank">
          <button className="cv-button">
            Download CV
            <WiCloudDown className="icon" />
          </button>
        </Link>
      </header>
    </div>
  );
}
export default Navbar;