import './topbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const TopBar = () => {
    const { user, dispatch } = useContext(Context)
    const PF = 'http://localhost:5000/uploads/'

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <div className='top'>
            <div className='topLeft'>
                <h1 className='logo-title'>SK-Blog</h1>
                {/* <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i> */}
            </div>

            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/'>ABOUT</Link>
                    </li>
                    {/* <li className='topListItem'>
                        <Link className='link' to='/'>CONTACT</Link>
                    </li> */}
                    <li className='topListItem'>
                        <Link className='link' to='/write'>WRITE</Link>
                    </li>
                    <li className='topListItem' onClick={handleLogout}>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>

            <div className='topRight'>
                {
                    user ? (
                        <Link to='/settings'>
                            <img
                                className='topImg'
                                src={PF + user.profilePic}
                                alt={user.username}
                            />
                        </Link>
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>
                                    LOGIN
                                </Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>
                                    REGISTER
                                </Link>
                            </li>

                        </ul>
                    )
                }

                {/* <i className="topSearchIcon fas fa-search"></i> */}
            </div>
        </div>
    )
}

export default TopBar
