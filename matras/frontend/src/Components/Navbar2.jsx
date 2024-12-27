import React, { useEffect, useState } from 'react';

const Navbar2 = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const scrollY = window.scrollY;
            if (scrollY > lastScrollY) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }
            setLastScrollY(scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`myNavbar ${showNavbar ? 'active' : 'nonActive'}`}>
            <h1>NAVBAR</h1>
        </nav>
    );
};

export default Navbar2;