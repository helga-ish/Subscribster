import './Randomizer.css';
import { useState, useEffect } from 'react';

export default function Randomizer() {

const [newItem, setNewItem] = useState('');
const [items, setItems] = useState([]);

useEffect(() => {
  const storedItems = sessionStorage.getItem('listItems');
  if (storedItems) {
    setItems(JSON.parse(storedItems));
  }
}, []);

const addItem = () => {
  if(newItem.trim() !== '') {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setNewItem('');

    sessionStorage.setItem('listItems', JSON.stringify(updatedItems));
  }
};

const resetList = () => {
  setItems([]);
  setNewItem('');

  sessionStorage.removeItem('listItems');
}
let result;
const getRandomItem = () => {
  const storedItems = sessionStorage.getItem('listItems');
  if (storedItems) {
    setItems(JSON.parse(storedItems));
  }
  result = storedItems[Math.floor(Math.random()*storedItems.length)];
  console.log(result);
  return result;
}

  return(
    <section>
      <h2>Randomizer</h2>
      <div>
        <h3>Things to randomize</h3>
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <button onClick={getRandomItem}>Choose randomly from the list</button>
        <div>
          <p>Your result:</p>
          <p>{result}</p>
        </div>
      </div>
      <button onClick={resetList}>Reset list</button>
      <form>
        <fieldset>
          <label>What do you want to randomize? </label>
          <input
          type='text'
          placeholder='Enter item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          />
        </fieldset>
        <button onClick={addItem}>Add to the list</button>
      </form>
    </section>
  )
}