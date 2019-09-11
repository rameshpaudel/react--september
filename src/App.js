import React from 'react';
import TitleBar from './components/TitleBar';
import Card from './components/Card';
import './App.css';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <div className="App">
      <TitleBar heading="Welcome to our app" text="Are you ready World" />
   
      <Card heading="Welcome to our app" description="Some description about our app" buttonText={"Go to this awesome page"}/>

      <ClickCounter />
    </div>
  );
}

export default App;
