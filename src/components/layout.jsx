import Navbar from './navbar'
import './layout.css'

const Layout = ({children}) =>
{
    return (
        <div className="main-body">
            <Navbar />
            <div className="right-side-container">
                {children}
            </div>

        </div>
    )
}

export default Layout