import logo from "./logo192.png";
import "./App.css";

const LogoImage = () => {
  return <img alt="logo" src={logo}></img>
}

const NameHeading = () => {
  const name = "React";

  return <h1>{name}</h1>
}

const FactsList = () => {
  const facts = {
    releaseDate: "May 2013",
    language: "JavaScript",
    license: "MIT",
  };

  const aboutReact = (facts) =>
    `Release date: ${facts.releaseDate}. Language: ${facts.releaseDate}. License: ${facts.license}.`;

  return <p>{aboutReact(facts)}</p>

}
 
const App = () => {

  return (
    <div className="container">
      <LogoImage />
      <NameHeading />
      <FactsList />
    </div>
  );
};

export default App;
