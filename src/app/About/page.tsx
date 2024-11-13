"use client";

import Image from "next/image";
import Link from "next/link";
import './style.css';  // Import custom CSS

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container md-row">
        <div className="image-container">
          <Image
            className="image"
            alt="hero"
            width={700}
            height={700}
            src={require("../../../public/assests/WhatsApp Image 2024-08-05 at 14.18.39_21557967.jpg")}
          />
        </div>
        <div className="text-container md-align-left">
          <h1 className="title sm-large">
            About Me:
          </h1>
          <h3 className="title sm-large">
            Get to know me!
          </h3>
          <p className="paragraph">
            I am a passionate Web Developer and Graphic Designer with a strong background in Web Development, I have been crafting digital experiences for 5 years.
          </p>
          <p className="paragraph">
            My journey in IT began in 2021; since then, I&apos;ve had the privilege to work on diverse projects, allowing me to refine my skills and approach to problem-solving.
          </p>
          <p className="paragraph">
            I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts.
          </p>
          <div className="button-container-cv">
            <Link href="/assests/My Resume .pdf" target="_blank">
              <button className="button-cv">
                View CV
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
