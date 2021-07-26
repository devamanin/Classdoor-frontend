import {Link} from 'react-router-dom'
import './login.css'
const LoginPage = () =>{
    return (
        <div className="container">
            <div className="login-container">
                <div className="logo">
                    <span>Classdoor</span>
                </div>
                <div className="input-container">
                    <div className="username-box">
                        <input type="text" className="username" placeholder=" "/>
                        <label className="username-label">Username</label>
                    </div>
                    <div className="password-box">
                        <input type="password" className="password" placeholder=" "/>
                        <label className="password-label">Password</label>
                    </div>
                    <div className="signin-box">
                        <Link to='/profile'><button type="submit" className="signin-button">Sign In</button></Link>
                    </div>
                </div>
                <div className="login-container-footer">
                    <span>&#169; 1997-2021 Classdoor Inc. All Rights Reserved.</span>
                    <span><Link>Help</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link>Privacy and Terms of Use</Link></span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage