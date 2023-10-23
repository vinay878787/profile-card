import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <ProfileComponent />
    </div>
  );
}

function ProfileComponent() {
  return (
    <div className="container">
      <img src="3.JPG" alt="human image" className="hero-image"></img>
      <h1 className="heading">B H Vinay</h1>
      <p className="alignment">
        I am a MERN stack developer fascinated with sofware development . I have
        been a tech geek from my adolescent age . I have developed and sold
        quite few amzing websites . I am a BCA graduate who has exceptionally
        focussed on skills . I have been devloping websites from many years . So
        , I have good hands on experience .
      </p>
      <div className="skills-container alignment btn">
        <SkillsComponent name="HTML+CSS" emoji="👌" color="cyan"/>
        <SkillsComponent name="Javascript" emoji="💪" color="orange" />
        <SkillsComponent name="Web Design" emoji="🫰" color="yellow"/>
        <SkillsComponent name="Git and Github" emoji="👌" color="purple" />
        <SkillsComponent name="React" emoji="👌" color="green"/>
        <SkillsComponent name="Python" emoji="👌" color="pink"/>
      </div>
    </div>
  );
}

function SkillsComponent(props) {
  return(
    <div style={{backgroundColor:props.color}}>
  <span>{props.name}</span>
  <span>{props.emoji}</span>
  </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode><App /></StrictMode>);
