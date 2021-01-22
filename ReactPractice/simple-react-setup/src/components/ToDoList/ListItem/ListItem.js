import React, {useState} from 'react';
// import './ListItem.css';

const listItem = (props) => {
    const [checked, setChecked] = useState(false);

    return(
             <li>
               <label className="container">One
               <input type="checkbox"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
              />
                <span className="checkmark"></span>
              </label>
            </li>
        
    );
}

export default listItem;