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

cat > src/App.css << 'EOF'
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  min-width: 200px;
}

.form button {
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form button:hover {
  background: #0056b3;
}

.cards {
  display: grid;
  gap: 15px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.card p {
  margin: 0 0 10px 0;
  color: #666;
}

.delete-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background: #c82333;
}
