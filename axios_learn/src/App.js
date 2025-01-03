import "./App.css";
import { useEffect, useState } from "react";
import { Button, EditableText, InputGroup, Toaster } from "@blueprintjs/core";
import axios from "axios"; // Import axios

const AppToaster = Toaster.create({
  position: "top",
});

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewname] = useState("");
  const [newEmail, setNewemail] = useState("");
  const [newWebiste, setNewWebsite] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users:", error);
        AppToaster.show({
          message: "Error fetching users",
          intent: "danger",
          timeout: 3000,
        });
      });
  }, []);

  function addUser() {
    const name = newName.trim();
    const email = newEmail.trim();
    const website = newWebiste.trim();

    if (name && email && website) {
      axios.post("https://jsonplaceholder.typicode.com/users", {
        name, email, website
      })
      .then((response) => {
        setUsers([...users, response.data]);
        AppToaster.show({
          message: "User ADDED successfully",
          intent: "success",
          timeout: 3000,
        });
        setNewname("");
        setNewemail("");
        setNewWebsite("");
      })
      .catch((error) => {
        console.error("Error adding user:", error.response ? error.response.data : error.message);
        AppToaster.show({
          message: "Error adding user",
          intent: "danger",
          timeout: 3000,
        });
      });
    }
  }

  function onChangeHandler(id, key, value) {
    setUsers((users) => {
      return users.map((user) => {
        return user.id === id ? { ...user, [key]: value } : user;
      });
    });
  }

  function updateUser(id) {
    const user = users.find((user) => user.id === id);

    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
      .then((response) => {
        AppToaster.show({
          message: "User UPDATED successfully",
          intent: "success",
          timeout: 3000,
        });
      })
      .catch((error) => {
        console.error("Error updating user:", error.response ? error.response.data : error.message);
        AppToaster.show({
          message: "Error updating user",
          intent: "danger",
          timeout: 3000,
        });
      });
  }

  function deleteUser(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers((users) => {
          return users.filter(user => user.id !== id);
        });
        AppToaster.show({
          message: "User DELETED successfully",
          intent: "success",
          timeout: 3000,
        });
      })
      .catch((error) => {
        console.error("Error deleting user:", error.response ? error.response.data : error.message);
        AppToaster.show({
          message: "Error deleting user",
          intent: "danger",
          timeout: 3000,
        });
      });
  }

  return (
    <div className="App">
      <table className="bp4-html-table modifier">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Website</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              
              <td>
                <EditableText
                  onChange={(value) => onChangeHandler(user.id, "name", value)}
                  value={user.name}
                />
              </td>
              <td>
                <EditableText
                  onChange={(value) => onChangeHandler(user.id, "email", value)}
                  value={user.email}
                />
              </td>
              <td>
                <EditableText
                  onChange={(value) =>
                    onChangeHandler(user.id, "website", value)
                  }
                  value={user.website}
                />
              </td>
              <td>
                <Button intent="primary" onClick={() => updateUser(user.id)}>
                  Update
                </Button>&nbsp;
                <Button intent="danger" onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <InputGroup
                value={newName}
                onChange={(e) => setNewname(e.target.value)}
                placeholder="Enter Name ..."
              />
            </td>
            <td>
              <InputGroup
                value={newEmail}
                onChange={(e) => setNewemail(e.target.value)}
                placeholder="Enter Email ..."
              />
            </td>
            <td>
              <InputGroup
                value={newWebiste}
                onChange={(e) => setNewWebsite(e.target.value)}
                placeholder="Enter Website..."
              />
            </td>
            <td>
              <Button intent="success" onClick={addUser}>
                Add User
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
