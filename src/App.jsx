import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>Divanshu Choudhary</h1>

      <h3>B.Tech Student</h3>

      <p>Learning DevOps 🚀</p>

      <button>Contact Me</button>

      <div className="about">
        <h2>About Me</h2>

        <p>
          I am a B.Tech CSE student learning DevOps, Git and Github .
        </p>

        <div className="skills">
         <h2>Skills</h2>

         <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Git & GitHub</li>
         </ul>

         <div className="projects">
  <h2>Projects</h2>

  <div className="project-card">
    <h3>Netflix Clone UI</h3>
    <p>
      Built a responsive Netflix-inspired user interface using HTML and CSS.
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
      </div>
    </div>
  );
}

export default App;