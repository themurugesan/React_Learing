import React, { useState } from 'react';
import './App.css';

function App() {
  const lists = [
    { name: 'karthika', city: 'chennai', age: 23 },
    { name: 'muthu', city: 'chennai', age: 20 },
    { name: 'mari', city: 'kvp', age: 23 }
  ];

  const [selectedItem, setSelectedItem] = useState(null); // State to hold the selected item

  const handleViewClick = (item) => {
    setSelectedItem(item); // Set the selected item in state
  };

  const closeModal = () => {
    setSelectedItem(null); // Close the modal by clearing the selected item
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>s.no</th>
            <th>name</th>
            <th>city</th>
            <th>age</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => handleViewClick(item)}>view</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for displaying the selected item */}
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal} className='close'>x</button>
            
            <h2>Item Details</h2>
            

            <p><strong>Name:</strong> {selectedItem.name}</p>
            <p><strong>City:</strong> {selectedItem.city}</p>
            <p><strong>Age:</strong> {selectedItem.age}</p>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
