import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  let thoughtArray = [
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
    "At this point , the only thing that is pushing me to work hard is hunger",
  ];

  let thoughtdivs = thoughtArray.map((eachThought) => {
    return (
      <div>
        <p>{eachThought} </p>
      </div>
    );
  });
  return (
    <div className="home">
      <div className="hero">
        <p className="hero-title">Welcome to my thought board💭</p>
        <p className="hero-text">I convert my random thoughts into quotes🗣️</p>
        <div className="arrow">
          <FontAwesomeIcon icon={faArrowCircleDown} />
        </div>
      </div>
      <div className="main">{thoughtdivs}</div>
    </div>
  );
}

export default Home;
