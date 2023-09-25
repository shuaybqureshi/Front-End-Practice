import styles from '@/styles/Home.module.css'
import Item from './Item';
import React, { useState } from 'react';

export default function App() {
  // const data = ['walk',]
  const [myData, setMyData] = useState(['Walk the dog','Talk to teacher','swim on sunday']);
  const [newItem, setNewItem] = useState('');
  const removeItem= (indexToRemove)=>{
    const updatedItems = myData.filter((item, index) => index !== indexToRemove);
    setMyData(updatedItems);
  }
  const addItem = () =>{
    if (newItem.trim() === '') {
      return; // Prevent adding empty tasks
    }
    const updatedItems = [...myData,newItem]
    setNewItem('')
    setMyData(updatedItems);
  }
  return (
    <div>

      <h1>Todo List</h1>
      <div>
      <input id="#new-item" value={newItem} 
      onChange={(event)=>setNewItem(event.target.value)}      
      type="text" placeholder="Add your task" />
      <div>
        <button onClick={addItem}>Add Item</button>

      </div>
      <ul>
      {myData.map((item, index) => (
        <Item key={index} id={index} item={item} removeItem={removeItem} />
        ))}

      </ul>
    </div>
      
    </div>
  );
}



