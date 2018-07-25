
import React from 'react';
import ReactDOM from 'react-dom';

// import JColor from 'jcolor';
import JColorReact from '../lib/jColorReact.js';


ReactDOM.render(
    <div>
        <JColorReact value={[185, 67, 67, 0.5]} />
    </div>,
    document.getElementById('root')
);

// console.log(11);