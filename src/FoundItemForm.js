import React, { useState } from 'react';
import './FoundItemForm.css'; // Import CSS for styling

function FoundItemForm() {
  const [formData, setFormData] = useState({
    itemName: '',
    description: '',
    location: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend for reporting a found item
    // You can use Axios or another HTTP library to make the POST request
  };

  return (
    <div className="founditem-form-container">
      <h2>Report Found Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="founditem-button">
          Report Found Item
        </button>
      </form>
    </div>
  );
}

export default FoundItemForm;
