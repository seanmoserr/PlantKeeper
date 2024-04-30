import React, { useState } from 'react';
import { registerUser, checkUser } from '../plantkeeperApi';
import { useNavigate } from 'react-router-dom';


function Loginpage(){

    const [action,setAction] = useState("");
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] =useState(false);
    // const [registered, setRegistered] = useState(false);

   async function handleSubmit(event) {
      event.preventDefault();

      const { username, password } = inputs;
      try{
          if(action==="Sign Up"){
            const response= await registerUser(username, password)
      
            console.log(response)
            if (response) {
                alert("User registered successfully!");
                setLoggedIn(true);
                navigate(`/home/${username}`)
              } 
              else {
                alert("Failed to register user.");
              }
      
          }
          else if(action==="Login"){
              const result= await checkUser(username, password)
        
              const[success, message] = result;
              if(success){
                  alert("Login successful!");
                  setLoggedIn(true);
                  navigate(`/home/${username}`)
                }
              else{
                alert("Login failed: " + message);
              }
        
            }
        } 
        catch(error){
            console.error("Error:", error);
            alert("An error occurred while logging in.");
          } 
   }

   function handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
   }


// function handleSubmit(event){
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());

//     if(action === "Login"){
//         console.log({username});
//     }
//     else if (action === "Sign Up") {
//         console.log("Sign Up form submitted with data: ", data);
//     }
    

//     setUsername('');
//     setPassword('');
// }
// if(loggedIn){
//     return <home />
// }
// else{
return(
  <>
  
 <div className='title'><h1 >PLANT <br></br>KEEPER</h1></div>
    
  <div className='container'>
    
    <div className='header'>
        <div className='text'>Login/Register</div>
        {/* <div className='underline'></div> */}
    </div>

    <form className='inputs' onSubmit={handleSubmit}>
        <div className='input'>
            <input type='text' id="username" name="username" placeholder='Username' value={inputs.username || ""}
               onChange={handleChange}></input>
        </div>
        
        <div className='input'>
            <input type='password' id="password" name="password" placeholder='Password' value={inputs.password || ""}
               onChange={handleChange}></input>
        </div> 

        <div className='submit-container'>
        <button type="submit" className="submit" onClick={()=>setAction("Sign Up")} >Sign Up</button>
        <button type="submit" className="submit" onClick={()=>setAction("Login")}>Login</button>
        
        </div>
    </form>
    
  
   
  </div>
  </>
    );
}

  export default Loginpage;