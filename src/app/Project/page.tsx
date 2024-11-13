"use client";

import Image from "next/image";
import Link from "next/link";
import './style.css';  // Import custom CSS

export default function ProjectsSection() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
        </div>

        <div className="project-card-container">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image-container">
              <Image
                alt="gallery"
                className="project-image"
                src={require("../../../public/assests/projects/project 1.jpg")}
              />
              <div className="project-details">
                <h2 className="project-category">The ToDo List Project</h2>
                <h1 className="project-title">ToDo List</h1>
                <p className="project-description">
                  This project is designed for catering business owners to help them efficiently manage their tasks and streamline operations.
                </p>
                <p className="project-link">
                  <Link href="https://todo-list-45mv6sudk-rohan-mirzas-projects.vercel.app" target="_blank">
                    View Project..
                  </Link>
                </p>
                <p className="project-link">
                  <Link href="https://github.com/muhammadrohanmirza/Todo-List-in-react.js" target="_blank">
                    View Code..
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image-container">
              <Image
                alt="gallery"
                className="project-image"
                src={require("../../../public/assests/projects/project 2.png")}
              />
              <div className="project-details">
                <h2 className="project-category">The Analog Clock</h2>
                <h1 className="project-title">Analog Clock</h1>
                <p className="project-description">
                  I have created a project for those who want to build or enhance an analog clock.
                </p>
                <p className="project-link">
                  <Link href="https://analog-clock-ahukabhtc-rohan-mirzas-projects.vercel.app" target="_blank">
                    View Project..
                  </Link>
                </p>
                <p className="project-link">
                  <Link href="https://github.com/muhammadrohanmirza/Analog-clock" target="_blank">
                    View Code..
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image-container">
              <Image
                alt="gallery"
                className="project-image"
                src={require("../../../public/assests/projects/project 3.png")}
              />
              <div className="project-details">
                <h2 className="project-category">The Calculator Project</h2>
                <h1 className="project-title">Calculator</h1>
                <p className="project-description">
                  This project is for those who own a catering business and need an easy way to handle their calculations.
                </p>
                <p className="project-link">
                  <Link href="https://calculator-17qzju7a8-rohan-mirzas-projects.vercel.app" target="_blank">
                    View Project..
                  </Link>
                </p>
                <p className="project-link">
                  <Link href="https://github.com/muhammadrohanmirza/simple-calculator-to-use-browser-s-" target="_blank">
                    View Code..
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-image-container">
              <Image
                alt="gallery"
                className="project-image"
                src={require("../../../public/assests/projects/project 4.png")}
              />
              <div className="project-details">
                <h2 className="project-category">The Resume Builder Project</h2>
                <h1 className="project-title">Resume Builder</h1>
                <p className="project-description">
                  This project is for those who want to create custom resumes.
                </p>
                <p className="project-link">
                  <Link href="https://milestone-5-6odujwd4x-rohan-mirzas-projects.vercel.app/" target="_blank">
                    View Project..
                  </Link>
                </p>
                <p className="project-link">
                  <Link href="https://github.com/muhammadrohanmirza/Hackathon-Milestones?tab=readme-ov-file" target="_blank">
                    View Code..
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
