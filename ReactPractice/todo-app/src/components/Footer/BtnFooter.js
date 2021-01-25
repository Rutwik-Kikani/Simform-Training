import React, { useState }from 'react';
import './BtnFooter.css';


const btnfooter = (props) => {
    const [btnStyleClasses, inputStyleClasses] = [[],[]];

    const [state, setstate] = useState({whatToShow:'btn', });

    const btnClickHandler = () => {
        //on fire this handler should set states to input
        //console.log('[footer.js]','btnClickHandler');     
        setstate({
            whatToShow:'input',
        });    
    }

    const inputKeyHandler = (event) => {
        // console.log('[footer.js]','inputKeyHandler'); 
        
        let evt = event || window.event;
        // console.log('[footer.js]',"key " + evt.key + " pressed");    
        switch (evt.key) {
            case "Enter":{
                //add task in list
                //on enter input should disappear]
                setstate({
                    whatToShow:'btn',
                })
                evt.target.value='';
            }break;
            case "Esc":
            case "Escape": {
                evt.target.value='';
            }break;
        }
    } 
    
    
    //if state is 'input' than add class 'hide' in btn 
    //and add 'show' in input.
    // console.log(btnStyleClasses);
    if(state.whatToShow === 'input'){
        btnStyleClasses.push('hide');
        inputStyleClasses.push('show');
    }
    
    
    return(
    <footer>
        <button id="Button" className={btnStyleClasses.join(' ')}  onClick={() => {props.clicked()}}>+</button>
        {/* <input  id="Input"  className={inputStyleClasses.join(' ')} onKeyDown={(event) => {inputKeyHandler(event)}} type="text" autoFocus/> */}
    </footer>
    );
}
export default btnfooter