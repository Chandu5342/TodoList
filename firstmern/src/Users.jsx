import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
    const [UserGrid, SetUserGrid] = useState([]);
    const API_BASE = import.meta.env.VITE_API_URL;

    useEffect(() => {
        axios.get(`${API_BASE}/`)
            .then(res => SetUserGrid(res.data))
            .catch(err => console.log(err));
    }, [API_BASE]);

    const handleDelete = (id) => {
        axios.delete(`${API_BASE}/deleteuser/${id}`)
            .then(res => {
                console.log(res);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success mb-3">+Add</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {UserGrid.map(i => (
                            <tr key={i._id}>
                                <td>{i._id}</td>
                                <td>{i.name}</td>
                                <td>{i.email}</td>
                                <td>{i.age}</td>
                                <td>
                                    <Link to={`/update/${i._id}`} className="btn btn-success me-2">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(i._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
