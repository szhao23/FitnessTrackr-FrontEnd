import React, {useState} from 'react';
import { login } from '../../api/index';
import { getMe } from '../../api/index';
import { useHistory } from 'react-router-dom';

// Login Form
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(true);

    const history = useHistory();

    return (
        <form>
                <h3>Log In</h3>
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
                    const result = await login(username, password)
                    console.log('Login: ', result);

                    const token = result.token;
                    localStorage.setItem("token", token);
                    
                    localStorage.setItem("user", JSON.stringify(result.user))
                    console.log("user: ", result.user);

                    history.push("/");
                }}>
                    LOG IN
                </button>
            </form>
        ) 
}

    export default Login;