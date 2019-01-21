import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//      return 'Click On me';
// }
const App = function() {
    //const buttonText = 'Click Me!';
    const buttonText = {text: 'click me'};
    const labeltext = 'Enter Name:';
    return (
    <div>
    <label className="label" htmlFor="name"> {labeltext} </label>
    <input type="text" />
    <button style={{backgroundColor : 'blue', color: 'white'}}>
     {buttonText.text}
     </button>
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);