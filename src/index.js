// import React from 'react';
// import { createRoot } from 'react-dom/client';
// // import ReactDOM from 'react-dom';

// import './index.css';
// import App from './components/App';

// // ReactDOM.render(<App />, document.getElementById('root'))

// const domNode = document.getElementById('root');
// const root = createRoot(domNode)

// root.render(<App />);


import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';

const nodeDom = document.getElementById('root');
const root = createRoot(nodeDom);
root.render(<App />);