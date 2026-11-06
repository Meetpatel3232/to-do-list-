import { useState } from "react";

const Login=()=>{
    const[username,setName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");

    return (
<>
<div className="flex  justify-center items-center  min-h-screen"> 
    
       <form className="flex justify-center items-center flex-col gap-3 ">
 <label> enter user name: </label>
        <input type="text"
        value={username}
        onChange={(e)=>{
        setName(e.target.value)
        }}
         className="bg-emerald-300 text-black"
        ></input>
        <br/>

         <label> enter your  email: </label>
        <input type="text"
        
         value={email}
        onChange={(e)=>{
        setEmail(e.target.value)
        }}
         className="bg-emerald-300 text-black"
        ></input>
        <br/>

         <label> enter user password :</label>
        <input type="password"
         value={password}
       onChange={(e)=>{
        setPassword(e.target.value)
        }}
        className="bg-emerald-300 text-black"
        ></input>
        <br/>
     
       <input type="submit" className="bg-emerald-300"></input>
       
       </form>

   
</div>
</>

    )
}

export default Login;