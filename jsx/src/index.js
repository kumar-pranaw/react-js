import React from 'react';
import ReactDOM from 'react-dom';

const App = function() {
    return (
    <div>
    <label className="label" for="name">Enter Name: </label>
    <input type="text" />
    <button style={{backgroundColor : 'blue', color: 'white'}}> Submit</button>
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);