import "./index.css";

function App() {
  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2>Divanshu Portfolio</h2>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1>Divanshu Choudhary</h1>

        <h3>B.Tech CSE Student</h3>

        <p>
          Aspiring DevOps Engineer | Learning Git & Github |
          
        </p>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>About Me</h2>

        <p>
          I am a B.Tech CSE student | Aspiring DevOps Engineer | Currently Learning Git & GitHub .
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h2>Skills</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </div>

      {/* Projects Section */}
      <div className="projects">
        <h2>Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>Netflix Clone UI</h3>
            <p>
              Responsive Netflix-inspired landing page built using HTML and CSS.
            </p>
          </div>

          <div className="project-card">
            <h3>TravelX Landing Page</h3>
            <p>
              Modern travel website landing page with responsive design.
            </p>
          </div>

          <div className="project-card">
            <h3>Cloud Landing Page</h3>
            <p>
              Cloud services landing page focused on clean UI and layout design.
            </p>
          </div>

          <div className="project-card">
            <h3>Cricket Score Page</h3>
            <p>
              Cricket score display page with match information layout.
            </p>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2>Contact</h2>

        <p>Email: choudharydivanshu55@gmail.com</p>

        <p>GitHub: https://github.com/DivanshuChoudhary</p>

        <p>LinkedIn: www.linkedin.com/in/divanshuchoudhary</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Divanshu Choudhary</p>
      </footer>

    </div>
  );
}

export default App;