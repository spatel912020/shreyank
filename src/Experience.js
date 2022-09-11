import './Experience.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import Education from './Education'

function Experience() {
  return (
    <div className="experience_div">
    <Education/>
      <h3 className = "experience_header_text">Experience</h3>
      <div className="flex_grow"></div>
      <ul className = "experience">
        <ul className = "experience_item">
          <h5 className = "experience_title"><CorporateFareOutlinedIcon className="icon"/>Web Developer</h5>
          <h6 className = "experience_subtitle">Goldman Sachs, Dallas, TX</h6>
          <h6 className = "experience_subtitle">Sep 2022 - Present</h6>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/></li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/></li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/></li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title"><CorporateFareOutlinedIcon className="icon"/>Student Software Developer/Technical Lead</h5>
          <h6 className = "experience_subtitle">Trimble Inc, Knoxville, TN</h6>
          <h6 className = "experience_subtitle">Aug 2021 - Apr 2022</h6>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/>Lead a team of student software developers in making a responsive web application</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/>Create new UI components for existing web application to increase usability on a tablet</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/>Resolve bugs and communicate with business team to create a business plan for new responsive web application</li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title"><CorporateFareOutlinedIcon className="icon"/> President</h5>
          <h6 className = "experience_subtitle">SP Technologies LLC, Oak Ridge, TN</h6>
          <h6 className = "experience_subtitle">Mar 2021 - Sep 2022</h6>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Help small businesses create fully functional web application using MERN stack</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Design, build, and maintain web sites</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Perform search engine optimization on small business websites</li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title"><CorporateFareOutlinedIcon className="icon"/> Cashier/General Manager</h5>
          <h6 className = "experience_subtitle">Edgemoor Marathon, Clinton, TN</h6>
          <h6 className = "experience_subtitle">Jul 2013 - Present</h6>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Started as a cashier and through my leadership skill promoted to general manager</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Order inventory and maintain a clean store</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Assist and supervise employees and resolve conflicts between employees</li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title"><CorporateFareOutlinedIcon className="icon"/> Student Studio Assistant</h5>
          <h6 className = "experience_subtitle">Hodges Library, Knoxville, TN</h6>
          <h6 className = "experience_subtitle">Jan 2020 - Jul 2020</h6>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Help patrons with all multi-media related projects</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Assist patrons with Photoshop, iMovie, Adobe Premier, GarageBand, and other Adobe Applications</li>
        </ul>
        <ul className = "experience_item">
          <h5 className = "experience_title"><CorporateFareOutlinedIcon className="icon"/> Software Development Intern</h5>
          <h6 className = "experience_subtitle">OSIsoft Inc, Johnson City, TN</h6>
          <h6 className = "experience_subtitle">Aug 2018 - Dec 2018</h6>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Write code to test web application</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Create databases that are used for test</li>
          <li className = "experience_subheader_text"><WorkOutlineIcon className="icon"/> Solve minor bugs that cause performance issues</li>
        </ul>
      </ul>
    </div>
  );
}

export default Experience;
