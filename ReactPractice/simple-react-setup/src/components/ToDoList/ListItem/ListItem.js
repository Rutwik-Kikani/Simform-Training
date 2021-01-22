import React, {useState} from 'react';
import './ListItem.css';

const listItem = (props) => {
    const [isChecked, setChecked] = useState(props.status);

    const [todoTxtStyleClasses, todoCheckBoxStyleClasses] = [["todo-text"],["todo-checkbox"]];

    if( isChecked === true){
      todoTxtStyleClasses.push('done');
      todoCheckBoxStyleClasses.push('done');
    }
    // console.log(todoCheckBoxStyleClasses);

    
    return(
            <li>
               <label className="Label">
                 <p className={todoTxtStyleClasses.join(' ')}>{props.todoText}</p>
                 <input  className={todoCheckBoxStyleClasses.join(' ')}
                         type="checkbox"
                         checked={isChecked}
                         onChange={() => { setChecked(!isChecked);
                                           props.changed();}}
                  />
               </label>
            </li>
        
    );
}

export default listItem;

