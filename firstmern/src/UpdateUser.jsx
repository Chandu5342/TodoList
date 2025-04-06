import React,{useState,useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
function UpdateUser(){
    const {id}=useParams()
     let [name,SetName]=useState("")
         let [age,setAge]=useState("")
         let [email,setEmail]=useState("")
         let navigate=useNavigate()
            useEffect(()=>{
                console.log(id)
                   axios.get('http://localhost:3001/getUser/'+id)
                   .then(res=>{
                    console.log(res)
                    SetName(res.data.name)
                    setAge(res.data.age)
                    setEmail(res.data.email)
                   })
                    .catch(err=>console.log(err))
               },[])

        const Update=(e)=>{
            e.preventDefault();
            // Frontend (CreateUser.jsx)
                  axios.put("http://localhost:3001/updateuser/"+id, {
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
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"> 
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text " placeholder="enter name" className="form-control"
                        value={name} onChange={(e)=>{SetName(e.target.value)}} ></input>
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="email " placeholder="enter email" className="form-control"
                        value={email} onChange={(e)=>{setAge(e.target.value)}}></input>
                    </div>
                    <div className="mb-2">
                        <label>Age</label>
                        <input type="text " placeholder="enter name" className="form-control"
                        value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
                    </div>
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text " placeholder="enter age" className="form-control"></input>
                    </div>
                    <button className="btn-success">Update</button>
                </form>
            </div>
        </div>
        </>
    )
    }
    export default UpdateUser