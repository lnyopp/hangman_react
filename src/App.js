import React, { useState,useEffect }from 'react';
import './App.css';
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word"
import PopUp from './components/PopUp';


const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {

  let [playable,setPlayable] = useState(true);
  let[correctLetters, setCorrectLetters] = useState([])
  let [wrongLetters, setWrongLetters] = useState([]);


  useEffect(()=>{
      let handlekeyDown = event =>{
        let {key, keyCode} = event

      if (playable && (keyCode >= 65 && keyCode <= 90)){
        let letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters = (currentLetters => [...currentLetters, letter]);
          } else {
            // showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
           setWrongLetters = (wrongLetters => [...wrongLetters, letter]);

  
          } else {
            // showNotification();
          }
        }
      }
    }

      window.addEventListener("keydown",handlekeyDown);

      return () => window.removeEventListener("keydown", handlekeyDown);

  }, [correctLetters,wrongLetters,playable]);



  

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters ={wrongLetters} />
        <Word selectedWord ={selectedWord} correctLetters={correctLetters}/>
      </div>

      <div class="popup-container" id="popup-container">
        <PopUp />
      </div>
    </>
  );
}

export default App;
