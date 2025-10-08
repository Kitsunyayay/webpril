import React, { useState } from 'react';
import './AddForm.css';

const AddForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title.trim() && formData.description.trim()) {
      const newItem = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString()
      };
      onAdd(newItem);
      setFormData({
        title: '',
        description: '',
        category: ''
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="add-form-container">
      <h2>Добавить новую карточку</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label htmlFor="title">Заголовок:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Категория:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Выберите категорию</option>
            <option value="Работа">Работа</option>
            <option value="Учеба">Учеба</option>
            <option value="Личное">Личное</option>
            <option value="Проект">Проект</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Добавить карточку
        </button>
      </form>
    </div>
  );
};

export default AddForm;
