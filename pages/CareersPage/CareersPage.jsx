import { Link } from "react-router-dom";
import "./CareersPage.css";

const CareersPage = () => {
  return (
     <div className="careers-container">
       <h1 className="career-title">Careers at Landmine Soft</h1>
       <p className="careers-sub">
          Join our team and build innovative software solutions....
       </p>

       <ul className="culture-section">
          <h2>Our Culture</h2>
          <li>Real project ownership from day one</li>
          <li>Mentorship from experienced experts</li>
          <li>Clear growth path and regular feedback</li>
        </ul>

        <div className="jobs-section">
           <h2 className="job-title">Open Positions :</h2>

           <div className="job-card">
              <h3 className="card-title">Frontend Developer</h3>
              <p>React.js | 1-3 Years Experience</p>
               <Link to="/login" className="apply-btn">Login to apply →</Link>
            </div>

             <div className="job-card">
              <h3 className="card-title">Backend Developer</h3>
              <p>Node.js,Java | 2+ Years Experience</p>
              <Link to="/login" className="apply-btn">Login to apply →</Link>
            </div>

             <div className="job-card">
              <h3 className="card-title">UI/UX Developer</h3>
              <p>Figma | Adobe XD | 1+ Years Experience</p>
               <Link to="/login" className="apply-btn">Login to apply →</Link>
            </div>

             <div className="job-card">
              <h3 className="card-title">Full-stack Developer</h3>
              <p>React.js, Spring Boot, Java | 3-4 Years Experience</p>
               <Link to="/login" className="apply-btn">Login to apply →</Link>
            </div>
        </div>
      </div>

  )
}

export default CareersPage
