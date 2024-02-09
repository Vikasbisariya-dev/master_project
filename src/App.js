import React, { useState, useEffect } from "react";
import { EmployeeData } from "./EmployeeData";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("are you sure to delete this item?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleEdit = (id) => {
     const dt = data.filter((item)=> item.id === id);
     if(dt!==undefined){
        setId(id);
        setFirstname(dt[0].firstName);
        setLastname(dt[0].lastName);
        setAge(dt[0].age);
     }
  };

  return (
    <div className="App">

      <div style={{display: 'flex', justifyContent:'center', gap:'20px',marginTop:'10px', marginBottom:'50px'}} >
        <div>
          <label>
            First Name:-
            <input
              type="text"
              placeholder="Enter first name"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstName}
            />
          </label>
        </div>

        <div>
          <label>
            Last Name:-
            <input
              type="text"
              placeholder="Enter last name"
              onChange={(e) => setLastname(e.target.value)}
              value={lastName}
            />
          </label>
        </div>

        <div>
          <label>
            Age:-
            <input
              type="number"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </label>
        </div>
      </div>

      <table className="table table-hover">
        <thead>
          <th>Sr.No.</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Second Name</th>
          <th>Age</th>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary m-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
