import './Background.css';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Background() {
  return (
    <div className="background">
      <div className = "background_header">
        <img alt= "personal_pic" className = "background_img" src="https://personal-bucket-spatel.s3.amazonaws.com/1638477954334.jfif"/>
      </div>
      <div className = "background_header">
        <h1 className = "background_header_text">Shreyank Patel</h1>
        <h1 className = "background_subheader_text"><HomeIcon className="icon"/> 112 Wolf Creek Way, Oak Ridge, TN</h1>
        <h1 className = "background_subheader_text"><EmailIcon className="icon"/> Shreyank99@hotmail.com</h1>
        <h1 className = "background_subheader_text"><PhoneIphoneIcon className="icon"/> 845-521-9791</h1>
      </div>
    </div>

  );
}

export default Background;
