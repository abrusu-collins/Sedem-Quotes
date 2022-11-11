import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  let thoughtArray = [
    "Sometimes all you need is some sleep, don't try and fix the bug before you sleep. You are burnt out.",
    "To be a software engineer. All you need is vim(pun intended) and the ability to control your tears🥲.",
    "I am a self taught software engineer with a degree in Computer Science. I know it sounds funny.",
    "When you have a very good idea for a startup, don't delay. Just start the app.",
    // "At this point , the only thing that is pushing me to work hard is hunger.",
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
