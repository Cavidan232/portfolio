
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
    FaBars,
    FaTimes,
    FaSun,
    FaMoon,
} from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const links = [
        { id: 1, link: 'home', title: 'Home' },
        { id: 2, link: 'about', title: 'About' },
        { id: 3, link: 'portfolio', title: 'Portfolio' },
        { id: 4, link: 'experience', title: 'Experience' },
        { id: 5, link: 'contact', title: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full bg-white/90 text-gray-900 shadow-sm backdrop-blur-md transition-colors duration-300 dark:bg-black/90 dark:text-white">
            <div className="mx-auto flex h-20 max-w-screen-lg items-center justify-between px-5">

                {/* Logo */}
                <Link
                    to="home"
                    smooth
                    duration={500}
                    className="cursor-pointer text-2xl font-signature tracking-wide text-gray-900 transition-colors duration-300 dark:text-white"
                >
                    Cavidan
                  
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {links.map(({ id, link, title }) => (
                        <Link
                            key={id}
                            to={link}
                            smooth
                            duration={500}
                            offset={-70}
                            className="cursor-pointer text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-400"
                        >
                            {title}
                        </Link>
                    ))}

                    {/* Theme toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        className="rounded-full border border-gray-200 bg-gray-100 p-2.5 text-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-yellow-300 dark:hover:bg-gray-800"
                    >
                        {theme === 'dark' ? (
                            <FaSun size={17} />
                        ) : (
                            <FaMoon size={17} />
                        )}
                    </button>
                </div>

                {/* Mobile controls */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            theme === 'dark'
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        className="rounded-full border border-gray-200 bg-gray-100 p-2.5 text-gray-800 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 dark:text-yellow-300"
                    >
                        {theme === 'dark' ? (
                            <FaSun size={17} />
                        ) : (
                            <FaMoon size={17} />
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setNav(!nav)}
                        aria-label={nav ? 'Close menu' : 'Open menu'}
                        className="text-gray-900 transition-colors duration-300 dark:text-white"
                    >
                        {nav ? (
                            <FaTimes size={24} />
                        ) : (
                            <FaBars size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`fixed right-0 top-0 z-50 h-screen w-4/5 max-w-sm bg-white p-7 text-gray-900 shadow-2xl transition-transform duration-300 dark:bg-gray-950 dark:text-white md:hidden ${
                    nav ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="mb-10 flex items-center justify-between">
                    <Link
                        to="home"
                        smooth
                        duration={500}
                        onClick={() => setNav(false)}
                        className="cursor-pointer text-2xl font-bold"
                    >
                        Cavidan
                        <span className="text-cyan-600 dark:text-cyan-400">.</span>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setNav(false)}
                        aria-label="Close menu"
                        className="text-gray-900 dark:text-white"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                <ul className="flex flex-col gap-7">
                    {links.map(({ id, link, title }) => (
                        <li key={id}>
                            <Link
                                to={link}
                                smooth
                                duration={500}
                                offset={-70}
                                onClick={() => setNav(false)}
                                className="block cursor-pointer border-b border-gray-200 pb-3 text-lg font-medium text-gray-700 transition-colors duration-300 hover:text-cyan-600 dark:border-gray-800 dark:text-gray-300 dark:hover:text-cyan-400"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu backdrop */}
            {nav && (
                <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setNav(false)}
                    className="fixed inset-0 z-40 cursor-default bg-black/50 md:hidden"
                />
            )}
        </nav>
    );
};

export default Navbar;