import HangmanImg from "./HangmanImg";
import WordDisplay from "./WordDisplay";
import TextInput from "./TextInput";
import { useState, useRef, useEffect } from "react";

/*Below the Main component is the parent component for the other components */
function Main() {

  const [hangmanState, setHangmanState] = useState(1);
  const InputWord = useRef(null);
  const [isWord, setWord] = useState("");
  const [isLetterEntered, setLetterEntered] = useState([""]);
  const [isEntered, setEntered] = useState(false);
  const [isWinner, setWinner] = useState(false);
  const [numberHints, setHints] = useState(2);
  const [showHelp, setHelp] = useState(true);

  // runs the reset function when the component loads
  useEffect(() => {
    reset();
  }, []);

  /*
   *Below function resets the whole game and states and gets a new random word from
   * */
  const reset = () => {
    const randomWord = Math.floor(Math.random() * 77433);
    fetch("../dictionary.txt")
      .then((res) => res.text())
      .then((text) => {
        const words = text.split("\n");
        setWord(words[randomWord]);
      });

    setLetterEntered([""]);
    setHangmanState(1);
    setWinner(false);
    setEntered(false);
  };

  // this function stores the character enter into the isLetterEntered Array
  const storeCharacter = (character) => {
    setLetterEntered((prevLettersEntered) => [
      ...prevLettersEntered,
      character,
    ]);
  };

  /*This function will subtract one from numberHints state  */
  const hintUsed = () => {
    setHints((prev) => prev - 1);
  };

  // below function will display a character of the word only if the hint 
  // state isn't at zero
  const hintCharacter = () => {
    let i = null;
    const word = isWord.split("");
    for (i = 0; i < word.length; i++) {
      if (
        !isLetterEntered.some((char) => char === word[i]) &&
        numberHints !== 0
      ) {
        hintUsed();
        return storeCharacter(word[i]);
      }
    }
  };
  // if the value received isnt in the isWord state then the hangman will be updated
  const addHangmanState = (e) => {
    if (!isWord.includes(e.target.value)) {
      setHangmanState((prev) => prev + 1);
    }
  };

  // this function toggles the help state value
  const clickHelp = () => {
    setHelp((prev) => !prev);
  };

  return (
    <div className="main">
      <h1 className="header">HangMan</h1>
      {/* Below the hangman component/image is show*/}
      <HangmanImg state={hangmanState} reset={reset} />
      {/* Below are the rules of the game displayed when toggled */}
      {showHelp && (
        <div className="rules">
          <h1>Rules</h1>
          <p>
            The goal of this game is to guess the word a character at a time. 
          </p>
          <ul>
            <li>THE RULES:</li>
            <li>
              You have 10 chances to type in the correct character with
              each wrong answer a part of the hangman is shown.
            </li>
            <li>
              if you cant guess the correct word before the hangman is shown you lose.
            </li>
            <li>
              if you guess the correct word before the hangman is shown you win.
            </li>
            <li>You can use 2 hints be game.</li>
          </ul>
        </div>
      )}
      {/* Below is displayed depending on whether the user wins or loses */}
      {isWinner && <h1 className="winner">YOU WIN!!</h1>}
      {hangmanState === 11 && (
        <div>
          <h1 className="loser">You lose!!</h1>
          <h1>Your Word Was :</h1> <h1 className="showWord">{isWord}</h1>
        </div>
      )}
      {/* Word is Displayed before */}
      <WordDisplay
        word={isWord}
        isletterEntered={isLetterEntered}
        setWinner={setWinner}
      />
      {isEntered && (
        <h2 className="wrong-entry">This Character has Already Been Entered</h2>
      )}
      {/* text input below */}
      <TextInput
        InputWord={InputWord}
        storeCharacter={storeCharacter}
        isLetterEntered={isLetterEntered}
        setEntered={setEntered}
        addHangmanState={addHangmanState}
      />
      {/* Below are the buttons */}
      <button type="button" className="button" onClick={reset}>
        RESET
      </button>
      <button type="button" className="button" onClick={hintCharacter}>
        HINTS:
        {"\n " + numberHints}
      </button>
      <button type="button" className="button" onClick={clickHelp}>
        {showHelp ? 'HideHelp':'Help' }
      </button>
    </div>
  );
}

export default Main;
