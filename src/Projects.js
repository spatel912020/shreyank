import './Projects.css';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

function Project() {
  return (
    <div className="project_div">
      <h3 className = "project_header_text">Projects </h3>
      <div className="flex_grow"></div>
        <ul className = "project">
              <ul className = "project_item">
          <h5 className = "project_title"><TipsAndUpdatesOutlinedIcon className="icon"/> SP Technologies LLC</h5>
          <h6 className = "project_subtitle">Description: Do later</h6>
          <h6 className = "project_subtitle">Link: <a href = "https://sptechnologiesllc.com/" className = "link">https://sptechnologiesllc.com/</a></h6>
          <h6 className = "project_subtitle">Technologies Used: React, HTML, CSS, Javascript, Node.js, Express.js, and MongoDB</h6>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Create responsive web application capable of online purchasing</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Create admin page for business owner to add and update products</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Build MongoDB models and schemas to store data</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Integrate Braintree payment processing</li>
        </ul>
        <ul className = "project_item">
          <h5 className = "project_title"><TipsAndUpdatesOutlinedIcon className="icon"/> Spotify Merge Sort</h5>
          <h6 className = "project_subtitle">Description: Do later</h6>
          <h6 className = "project_subtitle">Link: <a href = "https://github.com/CS340-21/MergeSortMusic" className = "link">https://github.com/CS340-21/MergeSortMusic</a></h6>
          <h6 className = "project_subtitle">Technologies Used: React, HTML, CSS, Javascript, Spotify API, and Django.py</h6>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Link Spotify account implement third party authentication with Spotify using Spotify API</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/>Build Django model and schema to store data from Spotify API in database</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Implement merge sort to sort Spotify playlist</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Export sorted spotify playlist to Spotify</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Implement demo-music listening capability for a given song</li>
        </ul>
        <ul className = "project_item">
          <h5 className = "project_title"><TipsAndUpdatesOutlinedIcon className="icon"/> Youtube Clickbait Classifier</h5>
          <h6 className = "project_subtitle">Description: Do later</h6>
          <h6 className = "project_subtitle">Link: <a href = "https://github.com/fdac21/youtubeClickbait" className = "link">https://github.com/fdac21/youtubeClickbait</a></h6>
          <h6 className = "project_subtitle">Technologies Used: Youtube API, Python, and Scikit-learn</h6>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Gather and filter data using Youtube API</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Create a decision tree classifier using Sklearn</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Create a MLP Classifier using Sklearn </li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Perform hyperparameter optimization</li>
        </ul>
          <ul className = "project_item">
          <h5 className = "project_title"><TipsAndUpdatesOutlinedIcon className="icon"/> Grass Indentifier</h5>
          <h6 className = "project_subtitle">Description: Do later</h6>
          <h6 className = "project_subtitle">Link: <a href = "https://github.com/spatel912020/grass_indentifier" className = "link">https://github.com/spatel912020/grass_indentifier</a></h6>
          <h6 className = "project_subtitle">Technologies Used: Selenium and Python</h6>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Gather and filter images of different types of grass and weeds</li>
        </ul>
        <ul className = "project_item">
          <h5 className = "project_title"><TipsAndUpdatesOutlinedIcon className="icon"/> Twitter Troll Classifier</h5>
          <h6 className = "project_subtitle">Description: Do later</h6>
          <h6 className = "project_subtitle">Link: <a href = "https://github.com/kemalfidan/ML-Final-Project" className = "link">https://github.com/kemalfidan/ML-Final-Project</a></h6>
          <h6 className = "project_subtitle">Technologies Used: Python and Scikit-learn</h6>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Gather troll and non-troll tweets</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Implement decision tree classifier using Sklearn</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Implement NLP classifier using Sklearn</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Create plots using matplotlib</li>
        </ul>
        <ul className = "project_item">
          <h5 className = "project_title"><TipsAndUpdatesOutlinedIcon className="icon"/> DFS Miner Game</h5>
          <h6 className = "project_subtitle">Description: Do later</h6>
          <h6 className = "project_subtitle">Link: <a href = "https://github.com/hkitts/FinalProject" className = "link">https://github.com/hkitts/FinalProject</a></h6>
          <h6 className = "project_subtitle">Technologies Used: Unity and C#</h6>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Create assets in unity such as walls, characters and powerups</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Perform DFS on a graph representation of the game board</li>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> Implement game's collision logic</li>
        </ul>
        <ul className = "project_item">
          <h5 className = "project_title"><TipsAndUpdatesOutlinedIcon className="icon"/> Add more project later</h5>
          <h6 className = "project_subtitle">Description: Do later</h6>
          <h6 className = "project_subtitle">Link: <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" className = "link">https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley</a></h6>
          <h6 className = "project_subtitle">Technologies Used: you tell me :(</h6>
          <li className = "project_subheader_text"><ArticleOutlinedIcon className="icon"/> working on it :)</li>
        </ul>
      </ul>
    </div>
  );
}

export default Project;
