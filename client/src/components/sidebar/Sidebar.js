import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get('/api/categories')
            setCats(res.data)
        };
        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>RECENT NEWS</span>
                <ul>
                    <li>News 1</li>
                    <li>News 2</li>
                    <li>News 3</li>
                    <li>News 4</li>
                    <li>News 5</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map(category => (
                        <Link to={`/?cat=${category.name}`} className='link'>
                            <li className='sidebarListItem'>{category.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            {/* <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar
