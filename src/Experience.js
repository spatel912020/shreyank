import './Experience.css';

function Experience() {
  return (
    <div className="experience_div">
      <h3 className = "experience_header_text">Experience</h3>
      <div className="flex_grow"></div>
      <ul className = "experience">
        <ul className = "experience_item">
          <h5 className = "experience_title">President</h5>
          <h6 className = "experience_subtitle">SP Technologies LLC, Oak Ridge, TN</h6>
          <h6 className = "experience_subtitle">Mar 2021 - Present</h6>
          <li className = "experience_subheader_text">Help small businesses create fully functional web application using MERN stack</li>
          <li className = "experience_subheader_text">Design, build, and maintain web sites</li>
          <li className = "experience_subheader_text">Perform search engine optimization on small business websites</li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title">Cashier/General Manager</h5>
          <h6 className = "experience_subtitle">Edgemoor Marathon, Clinton, TN</h6>
          <h6 className = "experience_subtitle">Jul 2013 - Present</h6>
          <li className = "experience_subheader_text">Started as a cashier and through my leadership skill promoted to general manager</li>
          <li className = "experience_subheader_text">Order inventory and maintain a clean store</li>
          <li className = "experience_subheader_text">Assist and supervise employees and resolve conflicts between employees</li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title">Student Studio Assistant</h5>
          <h6 className = "experience_subtitle">Hodges Library, Knoxville, TN</h6>
          <h6 className = "experience_subtitle">Jan 2020 - Jul 2020</h6>
          <li className = "experience_subheader_text">Help patrons with all multi-media related projects</li>
          <li className = "experience_subheader_text">Assist patrons with Photoshop, iMovie, Adobe Premier, GarageBand, and other Adobe Applications</li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title">Software Development Intern</h5>
          <h6 className = "experience_subtitle">OSIsoft Inc, Johnson City, TN</h6>
          <h6 className = "experience_subtitle">Aug 2018 - Dec 2018</h6>
          <li className = "experience_subheader_text">Write code to test web application</li>
          <li className = "experience_subheader_text">Create databases that are used for test</li>
          <li className = "experience_subheader_text">Solve minor bugs that cause performance issues</li>
        </ul>
      </ul>
    </div>
  );
}

export default Experience;
