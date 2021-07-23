import react, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {useHistory, useLocation} from 'react-router-dom'
import './navbar.css'
const Navbar = () =>
{
    let history = useHistory()
    const [profileButton, setProfile] = useState("route-link")
    const [courseButton, setCourse] = useState("route-link")
    let location = useLocation()
    useEffect(()=>{
        if (location.pathname == "/profile"){
            setProfile("route-link active");
            setCourse('route-link')
        }
        else if (location.pathname == "/course"){
            setCourse('route-link active');
            setProfile('route-link')
        }
    },[location])
    return (
        <div className="navbar-container">
        <Router>
            <Link to='/profile' onClick={()=>{history.push('/profile');}} className={profileButton}><i className="fa fa-user"/></Link>
            <Link to='/course' onClick={()=>{history.push('/course'); setCourse('route-link active')}} className={courseButton}><i className="fa fa-book"/></Link>
            <Link to='/' onClick ={()=>{history.push('/')}} className="signout-link"><i className="fa fa-sign-out"></i></Link>
        </Router>
        </div>
    )
}

export default Navbar