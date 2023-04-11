import React from 'react'
import './App.css'


const data = [
  { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
  { id: 3, name: 'Bob Johnson', age: 45, email: 'bob.johnson@example.com' },
];

const App = () => {


 const handleUpdate = (id) => {
    // Handle update logic here
    console.log(`Update item with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Delete item with ID ${id}`);
  };



  return (
    <center>
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>
              <button onClick={() => handleUpdate(item.id)}
              className='update-button'>Update</button>
            </td>
            <td>
              <button onClick={() => handleDelete(item.id)}
              className='delete-button'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </center> 
  );
}

export default App