import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitles'>
                {/* <span className='headerTitleSm'>React & Node</span> */}
                <span className='headerTitleSm'>This is a</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <div className='headerHeight'></div>
            {/* <img
                className='headerImg'
                src="./assests/images/adidas.jpg"
                alt=""
            /> */}
        </div>
    )
}

export default Header
