import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//different ways to render react elements
//1.
ReactDOM.createRoot(document.getElementById('root2')).render(<h1>this is another tag</h1>) // This is a new tag added to demonstrate multiple root elements in React


//2. using a variable
const anotherElement = (<a href="https://google.com" target="_blank">visit google</a>)
ReactDOM.createRoot(document.getElementById('root3')).render(
  anotherElement
)

//3.
//creating a function here only in main and rendering it
function App2(){
  const username = 'Suditya Kulkarni';
  return(
    <h1>this is through app 2 function writtern by {username}</h1>
  );
}

ReactDOM.createRoot(document.querySelector('#root3')).render(
  <App2 />
)