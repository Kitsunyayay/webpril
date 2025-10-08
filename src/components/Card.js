import React from 'react';
import './Card.css';

const Card = ({ item, onDelete }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{item.title}</h3>
        <button 
          className="delete-btn"
          onClick={() => onDelete(item.id)}
        >
          ×
        </button>
      </div>
      <div className="card-body">
        <p>{item.description}</p>
      </div>
      <div className="card-footer">
        <span className="card-category">{item.category}</span>
        <span className="card-date">{item.date}</span>
      </div>
    </div>
  );
};

export default Card;
