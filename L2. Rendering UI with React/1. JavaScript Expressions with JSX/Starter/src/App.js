import logo from "./logo192.png";
import "./App.css";

const logoImage = () => {
  return <img src={logo}></img>
}

const nameHeading = () => {
  const name = "React";

  return <h1>{name}</h1>
}

const factsList = () => {
  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;

  return <p>{aboutReact}</p>

}
 
const App = () => {

  return <div className="container">
    <logoImage />
    <nameHeading />
    <factsList />
  </div>;
};

export default App;
