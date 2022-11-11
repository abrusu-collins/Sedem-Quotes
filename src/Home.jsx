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
  let i = 1;
  let thoughtdivs = thoughtArray.map((eachThought) => {
    return (
      <div key={i++}>
        <p>{eachThought} </p>
      </div>
    );
  });
  return (
    <div className="home">
      <div className="hero">
        <p>Welcome to my thought board💭</p>
      </div>
      <div className="main">{thoughtdivs}</div>
    </div>
  );
}

export default Home;
