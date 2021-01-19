import React from 'react';


// const withClass = (props) => {
//     return(<div className = {props.classes}>{props.children}</div>);
// }

const withClass = (WrapComponent, className) => {
    return props => (
        <div className = {className}>
            <WrapComponent {...props}/>
        </div>
    )
}

export default withClass;