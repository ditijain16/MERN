import axios from 'axios';
import { useState } from 'react';
import './styles.css';


export default function MeaningFinder() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(''); 

  const handleClick = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
      .then(response => {
        console.log(response.data);
        setResult(`Name: ${response.data.name}, Age: ${response.data.age}`);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div id="name">
      Predict your Age
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter a name"
        />
        <button onClick={handleClick}>Click</button>
      </div>
      <h2> {result}</h2>
    </div>
  );
}
