import state1 from '../hangmandrawings/state1.GIF';
import state2 from '../hangmandrawings/state2.GIF';
import state3 from '../hangmandrawings/state3.GIF';
import state4 from '../hangmandrawings/state4.GIF';
import state5 from '../hangmandrawings/state5.GIF';
import state6 from '../hangmandrawings/state6.GIF';
import state7 from '../hangmandrawings/state7.GIF';
import state8 from '../hangmandrawings/state8.GIF';
import state9 from '../hangmandrawings/state9.GIF';
import state10 from '../hangmandrawings/state10.GIF';
import state11 from '../hangmandrawings/state11.GIF';

// depending on the state of the prop the image displayed will change.
function HangmanImg({state,reset}){

const imageState = (state) =>
{
    if(state === 1){
        return state1
    } else if(state === 2) {
        return state2
    } else if(state === 3) {
        return state3
    } else if(state === 4) {
        return state4
    } else if(state === 5) {
        return state5
    } else if(state === 6) {
        return state6
    } else if(state === 7) {
        return state7
    } else if(state === 8) {
        return state8
    } else if(state === 9) {
        return state9
    } else if(state === 10) {
        return state10
    } else if(state === 11) {
        return state11
    } else if(state === 12){
        reset();
    }
    else {
        alert('Image error')
    }
}
    return(
        <div className='hangman-img-div'>
        <img className='hangman-img'src={imageState(state)}/>
        </div>
    )

}

export default HangmanImg;