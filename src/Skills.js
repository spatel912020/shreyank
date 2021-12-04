import './Skills.css';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Skills() {
  return (
    <div className="skills_div">
        <h3 className = "skills_header_text">Skills</h3>
        <div className="flex_grow"></div>
        <ul className = "skills">
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Python</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>C++</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>C</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>MongoDB</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>React.js</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Express.js</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Node.js</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Django.py</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Angular</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>HTML</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>CSS</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>JavaScript</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>TypeScript</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Android SDK</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Unity</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>R</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>AutoCAD</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Selenium</li>
          <li className = "skills_subheader_text"><ArrowRightIcon className="icon"/>Jasmine</li>
        </ul>
    </div>
  );
}

export default Skills;
