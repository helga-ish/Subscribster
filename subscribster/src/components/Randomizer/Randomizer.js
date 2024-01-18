import './Randomizer.css';
import { useState, useEffect } from 'react';

export default function Randomizer() {

const [newItem, setNewItem] = useState('');
const [items, setItems] = useState([]);
const [chosenWord, setChosenWord] = useState(null);

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

const getRandomItem = () => {
  const storedItems = sessionStorage.getItem('listItems');

  if (storedItems) {
    const parsedItems = JSON.parse(storedItems);
    setItems(parsedItems);
    console.log(parsedItems);

    const filteredItems = parsedItems.filter(item => item !== "" && !/[&\|\/\\]/.test(item));

    if (filteredItems.length > 0) {
      const result = filteredItems[Math.floor(Math.random() * filteredItems.length)];
      console.log(result);
      setChosenWord(result)
      return result;
    } else {
      console.log("No valid items in the array.");
      return null;
    }
  } else {
    console.log("No stored items found.");
    setChosenWord("Add items to the list first.")
    return null;
  }
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
          <p>{chosenWord}</p>
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