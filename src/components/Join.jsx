import SpaceButton from "./SpaceButton.jsx";
export default function Join() {
  return (
    <section id="contact" className="join-section">
      <img
        className="astronaut-right-hand-img"
        src="src/assets/images/astronaut-right-hand.png"
        alt="astronaut right hand"
      />
      <div className="join-container">
        <h2>Get in Touch</h2>
        <p>
          Have a question, suggestion, or just want to say hello? Feel free to
          email me! Whether it's about black holes, distant galaxies, or your
          love for all things cosmic, I'm here to chat.
        </p>

        <SpaceButton email={"yassine.najmi01@gmail.com"}>
          Get in Touch
        </SpaceButton>
        {/* <a href="_blank" type="button" className="join-btn">
          Get in Touch
        </a> */}
      </div>
    </section>
  );
}
