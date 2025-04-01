import { useState } from "react"
import React from "react"
import { Link } from "react-router-dom"
function Users(){
    let [UserGrid,SetUserGrid]=useState([{
        Name:"Chandu",Email:"karrichanndu309@gmail.com",age:20
    }])
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
                      <tr>
                        <td>{i.Name}</td>
                        <td>{i.Email}</td>
                        <td>{i.age}</td>
                        <td><button>Edit</button><button>Delete</button></td>
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