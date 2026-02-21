import { useState } from "react";
import "./FAQs.css";

const data = [
  {
    question: "What services does Landmine Soft provide?",
    answer: "Landmine Soft provides end-to-end digital solutions including Web Development, Mobile App Development, UI/Ux Design, BAckend & API Developement, and custom enterprise software solutions tailored to business needs."
  },
  {
    question: "How does Landmine Software ensure project quality?",
    answer: "We follow industry ready best practices, code reviews, continuous testing, and structured deployment processes to ensure high-quality and scalable software solutions."
  },
  {
    question: "What technologies does your team use?",
    answer: "Our team works with modern technologies including React.js, Node.js, Spring Boot, Cloud platforms, and various database systems to build secure and scalable applications."
  },
  {
    question: "How can I get started with Landmine Soft?",
    answer: "You can contact us through the contact page or schedule a consultation. Our team will analyze your requirements and propose a tailored solution."
  }
]


const FAQs = () => {
  const[activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
  }


  return (
    <div className="faq-section" id="faq">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>  
        </div> 
        <div className="faq-container">
          {data.map((item,index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? 
                 "active-item" : ""}`}
              >
              <div
               className="faq-question"
               onClick={() => toggleFAQ(index)}
              >
                <h3>{item.question}</h3>
                <span className="icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
                </div>
                <div className="faq-answer">
                   <p>{item.answer}</p>
                  </div>
             </div>   
          ))}
        </div>
    </div>
  )
}

export default FAQs
