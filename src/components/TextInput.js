// below function will store the characters input by the user and update the hangman
function TextInput ({InputWord , storeCharacter ,isLetterEntered,setEntered,addHangmanState}){

    const handleChange = (e) => {
           addHangmanState(e);
        if(isLetterEntered.some((char) => char === e.target.value) ){
                setEntered(true);
                 InputWord.current.value = '';

            } else if(isLetterEntered.some((char) => char !== e.target.value) ){
                setEntered(false);
                storeCharacter(e.target.value) 
                InputWord.current.value = '';
                
            }

    }



    return(
          <div>
            <input type='text' ref={InputWord} placeholder='Enter a Character Here' id='userInput'onChange={handleChange}/>
        </div>
    )
}

export default TextInput;