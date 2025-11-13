import Main from "./components/Main";
import { Routes, Route, Link } from "react-router-dom";
import HangmanAnimation from "./components/HangmanAnimation";

// the routes for each component
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HangmanAnimation />} />
        <Route path="/HangmanGame" element={<Main />} />
      </Routes>
    </div>
  );
}

/*Resources 
 * Co-pilot for help with :
 * creating a count that changes for animation and making 
   the count end at 11
 * debugging
 * help with using useRef to get user input.
 * 
 * bing
 * for help with font type permanent marker and importing font
 */

export default App;
