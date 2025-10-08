import React, { useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Первая карточка', text: 'Простой текст' },
    { id: 2, title: 'Вторая карточка', text: 'Еще один текст' },
    { id: 3, title: 'Третья карточка', text: 'Последний текст' }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  const addCard = () => {
    if (newTitle.trim() && newText.trim()) {
      const newCard = {
        id: Date.now(),
        title: newTitle,
        text: newText
      };
      setCards([...cards, newCard]);
      setNewTitle('');
      setNewText('');
    }
  };

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <div className="app">
      <h1>Карточки</h1>
      
      <div className="form">
        <input
          type="text"
          placeholder="Заголовок карточки"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Текст карточки"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button onClick={addCard}>Добавить карточку</button>
      </div>

      <div className="cards">
        {cards.map(card => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button 
              className="delete-btn"
              onClick={() => deleteCard(card.id)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
