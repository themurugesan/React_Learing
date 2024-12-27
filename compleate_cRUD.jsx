import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [formdata, setFormdata] = useState({});
  const [arrs, setArrs] = useState([]);

  const Changefn = (e) => {
    console.log(e.target.name, e.target.value);
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formdata);

  const handleViewClick = (item) => {
    setSelectedItem(item);
    setFormdata(item); 
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleDeleteClick = (item) => {
    const updatedArrs = arrs.filter((arrItem) => arrItem.id !== item.id);
    setArrs(updatedArrs);
    setSelectedItem(null);  
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    if (formdata.id) {
      const updatedArrs = arrs.map((arrItem) =>
        arrItem.id === formdata.id ? { ...arrItem, ...formdata } : arrItem
      );
      setArrs(updatedArrs);
      setSelectedItem(null); 
    } else {
     
      setArrs([...arrs, { ...formdata, id: Date.now() }]);
    }

    setFormdata({});
    
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
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {arrs.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => handleViewClick(item)}>view</button>
              </td>
              <td>
                <button onClick={() => handleViewClick(item)}>update</button>
              </td>
              <td>
                <button onClick={() => handleDeleteClick(item)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />

      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={closeModal} className="close">
              x
            </button>

            <h2>Item Details</h2>

            <p>
              <strong>Name:</strong> {selectedItem.name}
            </p>
            <p>
              <strong>City:</strong> {selectedItem.city}
            </p>
            <p>
              <strong>Age:</strong> {selectedItem.age}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleUpdateSubmit}>
        <label>Name :</label>
        <input
          name="name"
          value={formdata?.name}
          onChange={Changefn} 
        />
        <label>City :</label>
        <input
          name="city"
          value={formdata?.city}
          onChange={Changefn} 
        />
        <label>Age :</label>
        <input
          name="age"
          value={formdata?.age}
          onChange={Changefn} 
        />
        <button type="submit">{formdata.id ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default App;
