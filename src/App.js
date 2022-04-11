import './App.css';
import Counter from './Components/Counter.js'
import Button from './Components/Button.js'
import {useState} from 'react';


function App() {

  var [numClics, setNumClics] = useState(0);

  const addClic = () => {
    setNumClics(numClics + 1);
  }

  const applyReset = () => {
    setNumClics(numClics = 0);
  }




  return (
    <div className="App">
      <h1>Clics Counter</h1>
      <Counter 
        numClics = {numClics}
        />
      <Button
        text='Clic'
        isButtonClic={true} 
        functionClic={addClic}
      /> 
     
     <Button
        text='Reset'
        isButtonClic={false}
        functionClic={applyReset}
      /> 
      
    </div>
  );
}

export default App;
