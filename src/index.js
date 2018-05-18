/*this is the main file. use it to import all your 
dependencies and render your final app
also check webpack.config.js for more configurations
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import style from './scss/style.scss';


ReactDOM.render(<App />, document.getElementById('app'));