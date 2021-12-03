import './Background.css';

function Background() {
  return (
    <div className="background">
      <div className = "background_header">
        <img alt= "personal_pic" className = "background_img" src="https://media-exp1.licdn.com/dms/image/C4E03AQGeFDVJ21lR0A/profile-displayphoto-shrink_200_200/0/1638477954334?e=1643846400&v=beta&t=31mS3ChVfXFK1LHFiven5_P9OK-Cibd_O8hUWIbqj1k"/>
      </div>
      <div className = "background_header">
        <h1 className = "background_header_text">Shreyank Patel</h1>
        <h1 className = "background_subheader_text" ><strong>Address:</strong> 112 Wolf Creek Way, Oak Ridge, TN</h1>
        <h1 className = "background_subheader_text"><strong>Email:</strong> Shreyank99@hotmail.com</h1>
        <h1 className = "background_subheader_text"><strong>Phone #:</strong> 845-521-9791</h1>
      </div>
    </div>

  );
}

export default Background;
