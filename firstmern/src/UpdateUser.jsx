import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const API_BASE = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE}/getUser/${id}`)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        setEmail(res.data.email);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`${API_BASE}/updateuser/${id}`, {
        name,
        email,
        age,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={Update}>
            <h2>Update User</h2>

            <div className="mb-2">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label>Age</label>
              <input
                type="text"
                placeholder="Enter age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
