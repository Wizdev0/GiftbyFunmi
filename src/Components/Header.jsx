import BrandLogo from '../assets/logo-2.png'
import MenuOpen from '../assets/menu-open.png';
import MenuClose from '../assets/menu-close.png';
import './Header.css'
import { useState } from 'react';
import { motion } from 'motion/react';


export function Header() {

    const [menuOpen, SetMenuOpen] = useState(false);

    const closeMenu = () => {
        SetMenuOpen(false);
    }

    return (
        <>

            <div className="header-div">
                <img src={BrandLogo} alt="Our Logo" className='brand-logo' />

                {/*  <div className="open-and-close">
                    
                    
                </div> */}

                <button
                    className="menu-toggle"
                    onClick={() => SetMenuOpen(!menuOpen)}
                >
                    {menuOpen ?
                        <img src={MenuClose} alt="" className="menu-close" /> :
                        <img src={MenuOpen} alt="" className="menu-open" />

                    }
                </button>

                <motion.div
                    initial={{ opacity: 0, y: -40, rotateX: -70 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    className={`header-links ${menuOpen ? 'active' : ''}`}
                >
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#products" onClick={closeMenu}>Products</a>
                    <a href="#contact" onClick={closeMenu}>Contact Us</a>
                </motion.div>

            </div>

        </>

    );
}