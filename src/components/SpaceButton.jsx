import "./SpaceButton.css";
export default function SpaceButton({ children }) {
  return (
    <div className="box">
      <a href="_blank" type="button" className="button">
        {children}
      </a>
      <div className="space">
        <span style={{ "--i": 31 }} className="star"></span>
        <span style={{ "--i": 12 }} className="star"></span>
        <span style={{ "--i": 57 }} className="star"></span>
        <span style={{ "--i": 93 }} className="star"></span>
        <span style={{ "--i": 23 }} className="star"></span>
        <span style={{ "--i": 70 }} className="star"></span>
        <span style={{ "--i": 6 }} className="star"></span>
      </div>
    </div>
  );
}
