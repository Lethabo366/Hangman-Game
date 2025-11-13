import HangmanImg from "./HangmanImg";
import { useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";

/* Below is an animation to that displays when site is loaded
 * the page is loaded,this function will change the the hangman 
 * image per 300 seconds*/
function HangmanAnimation (){
    const navigate = useNavigate();
     const gameRedirect = () => {
        navigate('/HangmanGame')
    };
    const [count,setCount] = useState(1);
    useEffect(() => {
    const interval = setInterval(() => {
        
       setCount(prev => prev === 11 ? 1 :prev + 1);

    }, 300);

     return () => clearInterval(interval); 
  }, []);


    return (
        <div className='start-page'>
            <h1 className='header'>HangMan</h1>
            <HangmanImg 
            state={count}
            />
            <button type='button' className='start-button' onClick={gameRedirect} > Start </button>
        </div>
    )
}

export default HangmanAnimation;