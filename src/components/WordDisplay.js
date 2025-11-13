/*the component below will display the word to be guessed */
function WordDisplay({ word, isletterEntered, setWinner }) {
  const wordArray = word.split("");

  const isWinner = () => {
    let displayedWord = "";

    wordArray.forEach((letter) => {
      if (isletterEntered.some((char) => char === letter)) {
        displayedWord += letter;
      } else {
        displayedWord += " _ ";
      }
    });
    if (displayedWord !== "" && !displayedWord.includes("_")) {
      setWinner(true);
    }
  };
  return (
    <div className="display-word">
      <ul className="list-word">
        {wordArray.map((letter, index) => {
          if (isletterEntered.some((char) => char === letter)) {
            return <li key={index}>{letter}</li>;
          }
          return <li key={index}> _ </li>;
        })}
      </ul>
      <h1 className="word-header">{isWinner()}</h1>
    </div>
  );
}
export default WordDisplay;
