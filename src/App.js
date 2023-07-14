import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText('You clicked the button!');
  };

  const handleTextAreaChange = (event) => {
    setDisplayText(event.target.value);
  };

  return (
    <div>
      <Header title="My React Application" />
      
      <main>
        <button onClick={handleButtonClick}>Click me!</button>
        <textarea onChange={handleTextAreaChange}></textarea>
        <p>{displayText}</p>
      </main>
      
      <Footer details='Favorite quote: "Be the change you wish to see in the world." - Mahatma Gandhi' />
    </div>
  );
}

export default App;