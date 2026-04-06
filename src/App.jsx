import React from "react";
import { useState } from "react"; 
import './App.css';
import study from "./images/study.jpg";

let language = "React";
let sun = "☀️";

function Header({ name }) {
  return (
    <header>
      
      <h1>My first {language.toUpperCase()} project! {sun}</h1>
      <p>Welcome to {name}'s first React page!</p>
    </header>
  );
}

const items = [
  { id: 1, title: "HTML & CSS", description: "The blocks of the web." },
  { id: 2, title: "JavaScript", description: "Making things fun!" },
  { id: 3, title: "React", description: "My first library." },
];

function Main({ items }) {
  return (
    <>
      <div>
        <h2>Here is the things that I have learnt:</h2>
      </div>
      <main>
        <img src={study} height={400} alt="Girl reading books" />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.description}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  
  const [isReading, setIsReading] = useState(true);

  return (
    <div>
      <h1>Right now I am {isReading ? "Reading" : "Sleeping"}</h1>
      
      
      <button onClick={() => setIsReading(!isReading)}>
        {isReading ? "Go to Sleep" : "Wake up and Read"}
      </button>
      <Header name="Aliya" />
      <main>
        <h2>My Learning Path</h2>
        <Main items={items} />
      </main>
    </div>
  ); 
} 

export default App; 
