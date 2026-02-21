import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="services">
        <h1 className="service-title">SERVICES WE OFFER</h1>
        <p>We are here to craft digital excellence that drives
            business transformation forward
        </p>
    <div className="service-cont">
      <div className="service-cards">
        <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1771228141/12_ccd73z.png" alt="img" className="service-img"/>
        <h1>Web Development</h1>
        <p>Building responsive and robust websites</p>
      </div>
      <div className="service-cards">
       <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1771228577/10354235_4428861-removebg-preview_uz4z5m.png" alt="img" className="service-img"/>
        <h1>Mobile App Development</h1>
        <p>Developing mobile apps,improving their features,
            implementing new features updates
        </p>
      </div>
      <div className="service-cards">
       <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1771228794/17349979_5809245-removebg-preview_hpzqng.png" alt="" className="service-img"/>
        <h1>UI/UX Design</h1>
        <p>Designing new digital products that are both visually 
            engaging (UI) and intuitive to navigate (UX)
        </p>
      </div>
      <div className="service-cards">
        <img src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1771229159/25876192_7100372-removebg-preview_wfff31.png" alt="img" className="service-img"/>
        <h1>Backend & API Development</h1>
        <p>Creating the server-side logic, databases, and interfaces (APIs) 
            that power the front-end applications and allow different software
             components to communicate and exchange data securely
        </p>
      </div>
    </div>
    <button className="view-btn">View More →</button>
    </div>
  )
}

export default Services
