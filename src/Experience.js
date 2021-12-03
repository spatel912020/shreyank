import './Experience.css';

function Experience() {
  return (
    <div className="experience_div">
      <h3 className = "experience_header_text">Experience</h3>
      <ul className = "experience">
        <ul className = "experience_item">
          <h5 className = "experience_title">Software Development Intern</h5>
          <h6 className = "experience_subtitle">OSIsoft Inc, Johnson City, TN</h6>
          <h6 className = "experience_subtitle">Aug 2018 - Dec 2018</h6>
          <li className = "experience_subheader_text">Write code to test web application</li>
          <li className = "experience_subheader_text">Create databases to be used for test</li>
          <li className = "experience_subheader_text">Solve minor bugs that cause performance issues</li>
        </ul>
      </ul>
    </div>
  );
}

export default Experience;
