import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Xceptionist</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently working as a Senior Software Engineer at Xceptionist, focusing on full-stack web development and building their official website.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer & IT Manager</h4>
                <h5>Combined Fashions</h5>
              </div>
              <h3>2023-2025</h3>
            </div>
            <p>
              Worked with Combined Fashions to design, develop, and deploy their company website.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science (BSc)</h4>
                <h5>United International University (UIU)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Graduated with a Bachelor of Science in Computer Science and Enginnering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mobile App Development with Flutter</h4>
                <h5>Ostadh</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Learning to build Android & iOS apps using Dart and Flutter framework. Practicing responsive UI design, state management, and API integration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Development</h4>
                <h5>CoderTrust BD, Dhanmondi</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Learned MongoDB, Express.js, React.js, and Node.js. Built full-stack applications with CRUD operations, authentication, and REST APIs. Collaborated on group projects and deployed applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
