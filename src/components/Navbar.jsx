import React, { useContext } from "react"
import {Link} from 'react-router-dom'
import Logo from "../images/bg.jpg"
import { AuthContext } from "../context/authcontext"
const Navbar = () => {
    const { currentUser,Logout } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <Link to="/">
                    <img src={Logo} alt=""/>
                    </Link>
                   
                </div>
                    <div className='links'>
                       
                        <Link className='link' to="/?cat=tech"><h6>Technology</h6></Link>
                        <Link className='link' to="/?cat=exp"><h6>Expirences</h6></Link>

                        <span>{currentUser?.username}</span>
                        {currentUser ? (
                        <span onClick={Logout}>Logout</span>
                        ):(<Link className="link" to="/login">Login</Link>)}
                       
                        <span className="write">
                            <Link className="link"to="/write">Write</Link>
                        </span>
                    </div>        
            </div>
        </div>
    )
}
export default Navbar;