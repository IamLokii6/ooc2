import React from 'react';
import './ItemCard.css'; // Import CSS for styling

function ItemCard({ itemName, description, location }) {
  return (
    <div className="item-card-container">
      <h2>{itemName}</h2>
      <p>{description}</p>
      <p>Location: {location}</p>
      {/* You can add more information or buttons for actions here */}
    </div>
  );
}

export default ItemCard;
