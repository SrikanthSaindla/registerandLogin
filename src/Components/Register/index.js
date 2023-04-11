import React,{useState} from 'react'
import './index.css'

const  Register = () => {

     const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });


const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <h3>Create user in DynamoDb</h3>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default  Register