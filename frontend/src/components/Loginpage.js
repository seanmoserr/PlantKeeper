import React, { useState } from 'react';
 import { registerUser } from './plantkeeperApi';

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

// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');

// const [action,setAction] = useState("Login");

const [inputs, setInputs] = useState({});

   function handleSubmit(event) {
      event.preventDefault();
      alert(`Username: ${inputs.username}\nPassowrd: ${inputs.password}`);
       
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
        <button type="submit" className="submit" >Sign Up</button>
        <button type="submit" className="submit" >Login</button>
        
        </div>
    </form>
    
  
   
  </div>
  </>
    );
}

  export default Loginpage;