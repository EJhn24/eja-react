import { useState, useEffect } from "react";
import "./App.css";
import resume from './assets/Apan_Ehdsell_Resume.pdf';
import profileImage from './assets/profile.jpg'
import logo from './assets/EJA LOGO.png'

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { FaBars, FaTimes } from "react-icons/fa";
import '@react-pdf-viewer/core/lib/styles/index.css';
import 'font-awesome/css/font-awesome.min.css';

import featuredProjects from './data/featuredProjects';
import skillsData from './data/skillsData';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light"); 
  const [fade, setFade] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showIntro) {
      document.body.classList.add("intro-active");
    } else {
      document.body.classList.remove("intro-active");
    }
  }, [showIntro]);

  useEffect(() => {
    const sections = ["home", "projects", "skills", "contact"];
    
    const handleScroll = () => {
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const openModal = (project) => {
    setModalContent(project);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <div className={theme === "light" ? "light-theme" : "dark-theme"}>
        {showIntro && (
          <div id="intro-animation">
            <div className="logo-fade">
              <img src={profileImage} alt="Logo or Profile" />
              <h1 className="">Welcome to my Portfolio!</h1>
            </div>
          </div>
        )}

        {!showIntro && (
          <>
            <nav className="navbar">
              <div className="logo">
                <img src={logo} alt="EJA Logo" className="logo-img" />
              </div>
              <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                  <button
                    className={activeSection === "home" ? "active-nav" : ""}
                    onClick={() => {
                      setMenuOpen(false);
                      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className={activeSection === "projects" ? "active-nav" : ""}
                    onClick={() => {
                      setMenuOpen(false);
                      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    className={activeSection === "skills" ? "active-nav" : ""}
                    onClick={() => {
                      setMenuOpen(false);
                      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Skills
                  </button>
                </li>
               
              </ul>
              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"} Mode
              </button>
              <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
              </div>
            </nav>

            <main>
              <section className="App-row" id="home">
                <div className="App-profile">
                  <img src={profileImage} alt="Profile" className="animate-profile" />
                </div>
                <div className="App-content">
                  <h1>Web Developer and Graphic Designer</h1>
                    <p>
                      I’m Ehdsell John Apan, a fresh graduate with a Bachelor of Science in Information Technology from
                      <a className="highlight" href="https://www.facebook.com/GordonCollegeOfficial/" target="_blank" rel="noopener noreferrer"> Gordon College</a>, with a strong focus on front-end development. 
                      I specialize in designing and building responsive, user-friendly interfaces that enhance digital experiences.
                  </p>
                  <div className="button-row">
                    <button className="App-button" onClick={() => setShowModal(true)}>
                        View Resume
                    </button>
                  </div>
                </div>
              </section>

                {showModal && (
                  <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
                      <div className="modal-header">
                        <h2 className="modal-title">Resume</h2>
                        <button className="close-button" onClick={() => setShowModal(false)}>×</button>
                      </div>
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                        <Viewer fileUrl={resume} />
                      </Worker>
                    </div>
                  </div>
                )}

                <section id="projects" className={`projects-section ${fade ? 'fade-in' : ''}`}>
                  <h3>Featured Projects</h3>
                  <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                      <div key={index} className="project-card" onClick={() => openModal(project)}>
                        <img src={project.img}/>
                        <h4>{project.title}</h4>
                      </div>
                    ))}
                  </div>
                </section>
                
                {modalContent && (
  <div className="projects-modal-overlay" onClick={closeModal}>
    <div className="projects-modal" onClick={(e) => e.stopPropagation()}>
      <h2 className="modal-title">{modalContent.title}</h2>

      {/* Show video if available, otherwise show text only */}
      {modalContent.preview ? (
        <div className="video-wrapper">
          <video
            className="project-video-player"
            src={modalContent.preview}
            controls
            autoPlay
          />
        </div>
      ) : (
        <p className="no-video-text">🎬 Video preview not available</p>
      )}

      <p className="modal-description">{modalContent.description}</p>
      <button className="btn" onClick={closeModal}>Close</button>
    </div>
  </div>
)}




                <section className="skills-container" id="skills">
                  <h1 className="skills-title">Technical Skills</h1>
                  <div className="skills-grid">
                    {skillsData.map(skill => (
                      <div className="skill-card" key={skill.name}>
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p>{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </section>
                

                <section id="contact" className={`contact-container ${fade ? 'fade-in' : ''}`}>
                  <div className="left-section">
                    <div className="logo-button-wrapper">
                      <img src={logo} alt="EJA Logo" className="logo-techtonic" />
                      <p className="quote">
                        “Design with purpose. <br />Code with precision.”
                      </p>
                    </div>
                  </div>

                  {/* <button onClick={openContactModal} className="btn contact-btn">Send a Message</button> */}
                  <div className="center-section">
                    <p className="contact-header">Let’s work together!</p>
                    <p>
                      <i className="fa fa-envelope contact-icon"></i>
                      <a href="mailto:ehdselljohnapan@gmail.com" className="contact-link">
                        ehdselljohnapan@gmail.com
                      </a>
                    </p>
                    <p>
                      <i className="fa fa-phone contact-icon"></i>
                      +63 905 508 2630
                    </p>
                  </div>

                  <div className="right-section">
                    <p className="contact-header">Social Media</p>
                    <p>
                      <a href="https://www.facebook.com/Grayfullbuster.Hunter" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook contact-icon" aria-hidden="true"></i> Facebook
                      </a>
                    </p>
                    <p>
                      <a href="https://www.instagram.com/jhn_hd/" className="contact-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram contact-icon" aria-hidden="true"></i> Instagram
                      </a>
                    </p>
                  </div>
                </section>

                {isModalOpen && (
                  <div className="contact-modal-overlay">
                    <div className="contact-modal-content">
                      <div className="contact-modal-header">
                         <h2 className="contact-modal-title">Send a Message</h2>
                        <button className="contact-close-button" onClick={() => setIsModalOpen(false)}>×</button>
                      </div>
                      <form
                        action="https://formsubmit.co/ehdselljohnapan@gmail.com"
                        method="POST"
                        className="contact-form"
                      >
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yourdomain.com/thanks" />
                        <button type="submit" className="btn contact-btn">Send Message</button>
                      </form>
                    </div>
                  </div>
                )}

                <footer className="footer">
                  <div id="footer">
                    <p className="footer-text">
                      All rights reserved © Ehdsell John B. Apan 2025
                    </p>
                  </div>
                </footer>
            </main>
          </>
        )}
      </div>
    </>
  );
}

export default App;
