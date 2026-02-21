import "./About.css";

export default function About(){

    const teamMembers = [
        {
            id:1,
            name: "John Doe",
            role: "Frontend Developer",
            image: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1719133614/Avatar_bjthok.png",
        },
        {
            id:2,
            name: "Priya Verma",
            role: "FullStack Developer",
            image: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1768381434/Ellipse_53_r2j2fq.png",
        },
        {
            id:3,
            name: "Neha Singh",
            role: "UI/UX Developer",
            image: "https://res.cloudinary.com/dtv22dsxc/image/upload/v1768381434/Ellipse_53_r2j2fq.png",
        },
    ];
  return (
    <div className="about" id="about">
       <h1 className="title">ABOUT LANDMINE SOFT</h1>
       <h2 className="sub-title">We build AI-driven products and 
          reliable software platforms.</h2> 
       <p>
         Landmine Soft is a small, focused engineering team based in India, helping startups
         and enterprises and AI-powered applications, <br/>modern web platforms, and also cloud-
         native backends.
         
         From prototypes to production systems, we work closely with your team-owning <br/>architecture,
         development, testing, and deployment-so you get a partner who cares about real business
         outcomes, not just tickets.
        </p>      
        <div className="team-sections">
           
            {teamMembers.map((member) => (
                 <div key={member.id} className="team-card">
                     <img src={member.image} className="img" alt="card-img"/>
                     <div className="team">
                     <h4>{member.name}</h4>
                     <p>{member.role}</p>
                  </div> 
                  </div> 
                  
            ))}
        </div>   
    </div>
  )
}

