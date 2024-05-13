//IMAGE IMPORT JUST FOR REACT, BEST PRACTICE FOR PRODUCTION DEPLOYMENT
import reactImg from "../../assets/react-core-concepts.png";
import './Header.css'
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized DOM" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost anyu app you are
        going to build!
      </p>
    </header>
  );
}
