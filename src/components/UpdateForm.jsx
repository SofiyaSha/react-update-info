import React, { useState } from 'react';

const UpdateForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, age: parseInt(age), department };
    console.log('Form submitted:', data);
    setSubmittedData(data);
    alert(`Name: ${name}, Age: ${age}, Department: ${department}`);
  };

  return (
    <div>
      <h2>Update Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <div>
        <h3>Current Values:</h3>
        <p>Name: {name} (string)</p>
        <p>Age: {age} (number)</p>
        <p>Department: {department} (string)</p>
      </div>
      {submittedData && (
        <div>
          <h3>Updated Info:</h3>
          <p>Name: {submittedData.name} (string)</p>
          <p>Age: {submittedData.age} (number)</p>
          <p>Department: {submittedData.department} (string)</p>
        </div>
      )}
    </div>
  );
};

export default UpdateForm;
