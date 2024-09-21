import React, { useState } from 'react';
import './AddService.css';

function AddService({ addService }) {
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      addService(newService);
      setNewService({ name: '', description: '', price: '' });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="add-service">
      <h2>Add a New Service</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Service Name" 
          value={newService.name} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="description" 
          placeholder="Description" 
          value={newService.description} 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="price" 
          placeholder="Price" 
          value={newService.price} 
          onChange={handleChange} 
        />
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}

export default AddService;
