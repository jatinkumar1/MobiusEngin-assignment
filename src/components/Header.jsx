import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
// import logo from '/assets/logo-Gl0EhSXn.svg'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home')
    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About Us" },
        { href: "#plans", label: "Plans" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#privacypolicy", label: "Privacy Policy" },
        { href: "#more", label: "more" },


    ]
    return (
        <header className=" pt-5  shadow-sm">
            <div className='w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
                <div className="text-2xl font-bold text-primary">
                    <img src='/assets/logo-Gl0EhSXn.svg'></img>
                </div>

                <button
                    className="md:hidden p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <HiX className="h-6 w-6" />
                    ) : (
                        <HiMenu className="h-6 w-6" />
                    )}
                </button>
                <nav className="hidden md:flex items-center gap-12 text-white">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all${activeLink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <button
                    className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                >
                    <a href="#newsletter">Get in touch</a>
                </button>
            </div>




            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4">
                    <div className="container mx-auto px-4 space-y-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2
                  ${activeLink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header