import React,{useState} from 'react';
import './App.css';
import Display from './Display';
function App() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, isSubmitted] = useState(0);
    const userDetails = {
        fname: fname,
        lname: lname,
        email: email,
        password:password
    }
    /*const Display = () => {
        return (
            <div>
                <h6>{fname}</h6> 
                <h6>{lname}</h6> 
                <h6>{email}</h6> 
                <h6>{password}</h6> 
            </div>
        )
        
}*/
    
    function Register(event) {
        event.preventDefault();
        isSubmitted(1);
        
    }

    function handleFname(event) {
        setFname(event.target.value);
       
    }
    function handleLname(event) {
        setLname(event.target.value);
      
    }
    function handleEmail(event) {
        setEmail(event.target.value);
         
    }
    function handlePassword(event) {
        setPassword(event.target.value);
       
    }

    return (
        <div className="App" >
            <div className="FormHeader">
              <h1>React Custom Form</h1>
            </div>
            <div className="FormBody">
                <form onSubmit={Register}/*action="show.js"*/>
                    <div className="container">
                        <label><b>FirstName</b></label>
                        <input type="text" placeholder="Enter FirstName" value={fname} onChange={handleFname} required></input>
                        <br />
                         <label><b>lastName</b></label>
                        <input type="text" placeholder="Enter LastName" value={lname} onChange={handleLname} required></input>
                        <br />
                      <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" value={email} onChange={handleEmail} required></input>
                        <br/>
                       <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" value={password} onChange={handlePassword} required></input>
                         <br/>
                        <button  className="registerbtn" type="submit">Register</button>                
        
                    </div>
                </form>
            </div>
            <div class="form-Data">
             {submitted ? <Display user={userDetails} />:''}
                
            </div>
        </div>
    );
}

export default App;