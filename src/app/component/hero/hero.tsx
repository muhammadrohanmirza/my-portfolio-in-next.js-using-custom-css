"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import './style.css';  // Import custom CSS

export default function HeroSection() {
  return (
    <section className="section">
      <div className="section-container md-row">
        <div className="text-container md-align-left">
          <h1 className="title sm-large">
            Hello, I&apos;m
            <br className="typewriter-break" />
            <Typewriter
              options={{
                strings: ['Web Developer', 'Graphic Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="paragraph">
            I&apos;m Muhammad Rohan Mirza! I&apos;m a Web Developer & Graphic Designer based in Pakistan. I&apos;m passionate about creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. i&apos;ve built websites leveraging cutting-edge technologies to drive innovation and enhance business processes.
          </p>
          <div className="button-container">
            <Link href="/Contact">
              <button className="button">
                Contact
              </button>
            </Link>
            <Link href="/assests/My Resume .pdf" target="_blank">
              <button className="button">
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="image-container">
          <Image
            className="image"
            alt="hero"
            width={700}
            height={700}
            src={require("../../../../public/assests/WhatsApp Image 2024-08-05 at 14.18.39_21557967.jpg")}
          />
        </div>
      </div>
    </section>
  );
}
