import React, { useState } from "react"
import  axios from "axios"
import { useNavigate } from "react-router-dom"
function  CreateUser()
{
     let [name,SetName]=useState("")
     let [age,setAge]=useState("")
     let [email,setEmail]=useState("")
     let navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault();
      // Frontend (CreateUser.jsx)
            axios.post("http://localhost:3001/createUser", {
                name,
                email,
                age
            })
            .then(result => {
                console.log(result)
                 navigate('/')
            })
            .catch(err => console.log(err));

    }
    return(
        <>
        <h1>c</h1>
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"> 
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text " placeholder="enter name" className="form-control"
                       onChange={(e)=>{SetName(e.target.value)}} ></input>
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="email " placeholder="enter email" className="form-control"
                        onChange={(e)=>{setEmail(e.target.value)}} ></input>
                    </div>
                    <div className="mb-2">
                        <label>Age</label>
                        <input type="text " placeholder="enter name" className="form-control"
                         onChange={(e)=>{setAge(e.target.value)}}></input>
                    </div>
                    <button className="btn-success">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default CreateUser