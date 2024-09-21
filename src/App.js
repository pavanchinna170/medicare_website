import React, { useState } from 'react';
import './App.css';
import AddService from './Components/AddService';
import ServiceList from './Components/ServiceList';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'General Checkup', description: 'Basic health checkup', price: '$50' },
    { id: 2, name: 'Cardiology', description: 'Heart health service', price: '$200' },
  ]);

  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  const updateService = (updatedService) => {
    setServices(services.map(service => (service.id === updatedService.id ? updatedService : service)));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="App">
      <h1>Medicare Services</h1>
      <AddService addService={addService} />
      <ServiceList 
        services={services} 
        updateService={updateService} 
        deleteService={deleteService} 
      />
    </div>
  );
}

export default App;
