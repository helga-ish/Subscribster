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
  setChosenWord('');
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
    <section className='randomizer'>
      <h2 className='randomizer__heading'>Randomizer</h2>
      <h3 className='randomizer__prompt'>
        Use our Randomizer to decide what to do first today. Add things you must do to the to-do list using "Add to the list" button. <br></br>Then, press "Choose randomly" and get your result in the "Your result" field.</h3>
      <div className='randomizer__container'>
        <h3 className='randomizer__subheading'>Your to-do list</h3>
        <ol className='randomizer__list'>
          {items.map((item, index) => (
            <li className='randomizer__list-item' key={index}>{item}</li>
          ))}
        </ol>
        <ul className='randomizer__button-list'>
          <button className='randomizer__button' onClick={getRandomItem}>Choose randomly what to do first</button>
          <button className='randomizer__button' onClick={resetList}>Reset list</button>
        </ul>
        <div className='randomizer__result'>
          <p className='randomizer__result-heading'>Your result:</p>
          <p className='randomizer__result-item'>{chosenWord}</p>
        </div>

        <form className='randomizer__form'>
          <fieldset className='randomizer__form-fieldset'>
            <label className='randomizer__form-label'>What do you want to do today? </label>
            <input
            className='randomizer__form-input'
            type='text'
            placeholder='Enter item'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            />
          </fieldset>
          <button className='randomizer__add-button' onClick={addItem}>Add to the list</button>
        </form>
      </div>
    </section>
  )
}