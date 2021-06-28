import React, {useState} from 'react';
import { registration } from '../../api/index';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
        
    return (
        <form>
                <h3>Registration</h3>
                <br></br>
                <div className="form-group">
                    <label>Username</label>
                    <br></br>
                    <input type="text" className="form-control" placeholder="Username" 
                        onChange={e => setUsername(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <br></br>
                    <input type="password" className="form-control" placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}/>
                </div>
                <br></br>
                
                <button onClick={async (e) => {
                    e.preventDefault();
                    const result = await registration(username, password)
                    console.log('Registration: ', result);
                    const token = result.token;
                    console.log("Token is: ", token);
                    localStorage.setItem('token', token)
                }}>
                    SIGN UP
                </button>
            </form>
        ) 
}

    export default Register;