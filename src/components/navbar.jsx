import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import './navbar.css'
const Navbar = () =>
{
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
            <Link to='/profile' className={profileButton}><i className="fa fa-user"/></Link>
            <Link to='/course' className={courseButton}><i className="fa fa-book"/></Link>
            <Link to='/logout' className="signout-link"><i className="fa fa-sign-out"></i></Link>
        </div>
    )
}

export default Navbar