import React, { useState } from 'react';
import './ServiceList.css';

function ServiceList({ services, updateService, deleteService }) {
  const [editingId, setEditingId] = useState(null);
  const [editedService, setEditedService] = useState({});

  const startEdit = (service) => {
    setEditingId(service.id);
    setEditedService(service);
  };

  const handleEditChange = (e) => {
    setEditedService({ ...editedService, [e.target.name]: e.target.value });
  };

  const submitEdit = () => {
    updateService(editedService);
    setEditingId(null);
  };

  return (
    <div className="service-list">
      <h2>Available Services</h2>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            {editingId === service.id ? (
              <div className="edit-form">
                <input 
                  name="name" 
                  value={editedService.name} 
                  onChange={handleEditChange} 
                />
                <input 
                  name="description" 
                  value={editedService.description} 
                  onChange={handleEditChange} 
                />
                <input 
                  name="price" 
                  value={editedService.price} 
                  onChange={handleEditChange} 
                />
                <button onClick={submitEdit}>Save</button>
              </div>
            ) : (
              <div className="service-details">
                <strong>{service.name}</strong> - {service.description} - {service.price}
                <button onClick={() => startEdit(service)}>Edit</button>
                <button onClick={() => deleteService(service.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
