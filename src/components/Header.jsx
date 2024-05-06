import headerVideo from "./../assets/videos/header-video.mp4";
import SpaceButton from "./SpaceButton";
export default function Header() {
  return (
    <div className="header-container">
      <video autoPlay loop muted className="bg-video">
        <source src={headerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img className="saturn-img" src="src/assets/images/saturn.png" alt="" />
      <header className="header">
        <h1>
          Welcome to My <span>Cosmic Journey</span>
        </h1>
        <p>
          Hey there, ready to embark on a cosmic adventure ? Join me as we
          explore the vast universe, marvel at distant stars, and uncover its
          mysteries together. Let's make cosmic memories!
        </p>
        <SpaceButton>Join Me</SpaceButton>
      </header>
    </div>
  );
}
