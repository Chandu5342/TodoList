import { useEffect, useState } from "react"
import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
function Users(){
    let [UserGrid,SetUserGrid]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(res=>SetUserGrid(res.data))
         .catch(err=>console.log(err))
    },[])

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteuser/'+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>res.json(err))
    }
return(
   
    <>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">+Add</Link>
       <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
           {
            UserGrid.map(i=>(
                <>
                      <tr key={i._id}>
                         <td>{i._id}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.age}</td>
                        <td>
                        <Link to={`/update/${i._id}`} className="btn btn-success">Edit</Link>
                        <button className="btn btn-danger" onClick={(e)=>{handleDelete(i._id)}}>Delete</button>
                        </td>
                      </tr>
                </>

            ))
           }
        </tbody>
       </table>
       </div>
       </div>
    </>
)
}
export default Users