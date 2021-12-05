import './Education.css';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

function Education() {
  return (
    <div className="education_div">
      <h3 className = "education_header_text">Education</h3>
      <div className="flex_grow"></div>
      <ul className = "education">
        <ul className = "education_item">
          <h5 className = "education_title"><SchoolOutlinedIcon className="icon"/> The University of Tennessee, Knoxville</h5>
          <h6 className = "education_subtitle">Bachelor's in Computer Science and Economics</h6>
          <h6 className = "education_subtitle">GPA: 3.22/4.0</h6>
          <h6 className = "education_subtitle">(Aug 2017 - May 2022)</h6>
        </ul>
      </ul>
      <div className="flex_grow"></div>
    </div>
  );
}

export default Education;
