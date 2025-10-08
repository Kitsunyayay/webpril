import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import AddForm from './components/AddForm';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Первая задача',
      description: 'Это описание первой задачи в нашем приложении',
      category: 'Работа',
      date: '08.10.2024'
    },
    {
      id: 2,
      title: 'Учебный проект',
      description: 'Разработка React приложения для лабораторной работы',
      category: 'Учеба',
      date: '07.10.2024'
    },
    {
      id: 3,
      title: 'Личные заметки',
      description: 'Важные заметки и идеи для реализации',
      category: 'Личное',
      date: '06.10.2024'
    }
  ]);

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Система управления карточками</h1>
        <p>Лабораторная работа 2: Разработка компонентов</p>
      </header>
      
      <main className="main-content">
        <AddForm onAdd={handleAddItem} />
        
        <div className="cards-section">
          <h2>Мои карточки ({items.length})</h2>
          <div className="cards-container">
            {items.map(item => (
              <Card 
                key={item.id} 
                item={item} 
                onDelete={handleDeleteItem}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
