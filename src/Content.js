import './Content.css';
import Experience from './Experience'
import Skills from './Skills'
import Project from './Projects'

function Content() {
  return (
    <div className="content_div">
      <Skills/>
      <Experience/>
      <Project />
    </div>
  );
}

export default Content;
