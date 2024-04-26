import React, { useState } from 'react';

  // const [count, setCount] = useState(0)
  // function handleClick(){
  //   setCount(
  //     function (prevCount) {
  //       return prevCount + 1
  //     }
  //     )
  //   console.log("I Was Clicked Once :)")
  // }
  // return (
  //   <>
  //     <h1>{count}</h1>
  //     <button onClick={handleClick} className="click">Click me</button>
  //   </>
  // );
  // function handleLogin(){
  //   alert("succesfully logged in")
  // }
function Loginpage(){

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const [action,setAction] = useState("Login");

function handleSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    if(action==="Login"){
        console.log("Login form submitted with data: ", data);
    }

    if(action==="Sign Up")

    event.target.reset();
}
return(
  <>
  
 <div className='title'><h1 >PLANT <br></br>KEEPER</h1></div>
    
  <div className='container'>
    
    <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>

    <form className='inputs' onSubmit={handleSubmit}>
        <div className='input'>
            <input type='text' id="username" name="username" placeholder='Username'></input>
        </div>
        
        <div className='input'>
            <input type='password' id="password" name="password" placeholder='Password'></input>
        </div> 
    </form>
    
  
    <div className='submit-container'>
        <button type="submit" className="submit" onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
        <button type="submit"className="submit" onClick={()=>{setAction("Login")}}>Login</button>
    </div>
  </div>
  </>
    );
}

  export default Loginpage;