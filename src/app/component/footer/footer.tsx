"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { VscGithubAlt } from "react-icons/vsc";
import './style.css';  // Import custom CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container sm-row">
        <Link className="footer-logo" href="#">
          <Image 
            src={require("../../../../public/assests/mylogo.jpg")}
            alt="logo"
            width={100}
            height={100}
            className="w-[40px]"
          />
          <span className="footer-logo-title">Rohan Mirza</span>
        </Link>
        <p className="footer-text sm-adjust">
          © 2024 Rohan Mirza
        </p>
        </div>
        <div className="social-links">
          <Link href="https://www.facebook.com/profile.php?id=61564957374355" target="_blank">
            <FaFacebookF className="social-link" />
          </Link>
          <Link href="https://x.com/MRohanmirza2007" target="_blank">
            <IoLogoTwitter className="social-link" />
          </Link>
          <Link href="https://www.instagram.com/rohan_mirza_2007/?hl=en" target="_blank">
            <FaInstagramSquare className="social-link instagram" />
          </Link>
          <Link href="https://github.com/muhammadrohanmirza" target="_blank">
            <VscGithubAlt className="social-link github" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-rohan-mirza/" target="_blank">
            <FaLinkedin className="social-link linkedin" />
          </Link>
        </div>
      
    </footer>
  );
}
