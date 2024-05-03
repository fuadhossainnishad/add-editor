import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Header.css'
const Header = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="btn bg-header-color flex flex-row justify-between py-4" >
                <div className='name bg-cyan-100 text-2xl border rounded-md font-bold mx-8 px-3 py-1'
                data-aos>Fuad Hossain</div>
                <div className='nav-btn'>
                    <nav className="nav">
                        <button onClick={() => navigate('/')}>Home</button>
                        <button onClick={() => navigate('/about')}>About Me</button>
                        <button onClick={() => navigate('/skills')}>Skills</button>
                        <button onClick={() => navigate('/projects')}>Projects</button>
                        <button onClick={() => navigate('/qualification')}>Qualification</button>
                        <button onClick={() => navigate('/contact')}>Contact</button>
                        <button onClick={() => navigate('/resume')}>Resume</button>
                    </nav>
                </div>
            </div>
        </div>
    )

}

export default Header;