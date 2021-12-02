import './Background.css';

function Background() {
  return (
    <div className="background">
      <img className = "background_img" src="https://media-exp1.licdn.com/dms/image/C4E03AQGeFDVJ21lR0A/profile-displayphoto-shrink_400_400/0/1638477954334?e=1643846400&v=beta&t=BnRAHtZTEPAFarw8Q9zHNllgLDtadintZVXaIf_iwVs" />
      <div className = "background_header">
        <h1 className = "background_header_text">Shreyank Patel</h1>
        <h1 className = "background_subheader_text" >Address: 112 Wolf Creek Way, Oak Ridge, TN</h1>
        <h1 className = "background_subheader_text">Email: Shreyank99@hotmail.com</h1>
        <h1 className = "background_subheader_text">Phone #: 845-521-9791</h1>
      </div>
    </div>

  );
}

export default Background;
