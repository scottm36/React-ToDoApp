import { useState } from 'react'
import './App.css'

function List({ items, onAddItem, onToggleComplete, onDeleteItem }: {
  items: Array<{ text: string, completed: boolean }>,
  onAddItem: (item: string) => void,
  onToggleComplete: (index: number) => void,
  onDeleteItem: (index: number) => void
}) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      onAddItem(newItem.trim());
      setNewItem('');
    }
  };

  return (
    <div className="list-container">
      <form onSubmit={handleSubmit} className="add-item-form">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
          className="item-input"
          data-cy="new-item"
        />
        <button type="submit" className="add-button" data-cy="add-item">Add Item</button>
      </form>
      <ul className="items-list" data-cy="items-list">
        {items.map((item, index) => (
          <li key={index} className="list-item" data-cy="list-item">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onToggleComplete(index)}
              className="list-item-checkbox"
            />
            <div className={`list-item-text ${item.completed ? 'completed' : ''}`}>
              {item.text}
            </div>
            <button
              onClick={() => onDeleteItem(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusBar({ items }: { items: Array<{ text: string, completed: boolean }> }) {
  return (
    <div className="status-bar" data-cy="status-bar">
      <span>Status: Ready</span>
      <span>Items: {items.length}</span>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([
    { text: "Learn React", completed: false },
    { text: "Build a project", completed: false },
    { text: "Write documentation", completed: false },
    { text: "Share with others", completed: false }
  ]);

  const addItem = (newItem: string) => {
    setItems([...items, { text: newItem, completed: false }]);
  };

  const toggleComplete = (index: number) => {
    setItems(items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <>
      <StatusBar items={items} />
      <List
        items={items}
        onAddItem={addItem}
        onToggleComplete={toggleComplete}
        onDeleteItem={deleteItem}
      />
    </>
  )
}

export default App
