import React, { useState, useEffect } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/#',
    },
    {
        id: 2,
        name: 'Top Rated',
        link: '/#services',
    },
    {
        id: 3,
        name: 'Kids Wear',
        link: '/#',
    },
    {
        id: 4,
        name: 'Mens Wear',
        link: '/#',
    },
    {
        id: 5,
        name: 'Electronics',
        link: '/#',
    },
];

const Dropdownlist = [
    {
        id: 1,
        name: 'Trading Products',
        link: '/#',
    },
    {
        id: 2,
        name: 'Best Selling',
        link: '/#',
    },
];

const Navbar = ({ handleOrderPopup }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTopMenuOpen, setIsTopMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTopMenu = () => {
        setIsTopMenuOpen(!isTopMenuOpen);
    };

    return (
        <div className={`fixed top-0 left-0 right-0 shadow-lg bg-white dark:bg-gray-900 duration-300 transition-all z-40 ${isScrolled ? 'py-2' : 'py-4'}`}>
            {/* Top Navigation with Logo and Search */}
            <div className={`bg-gradient-to-r from-primary/30 to-secondary/30  py-3 transition-all duration-300 ${isScrolled ? 'rounded-none' : 'rounded-b-xl'}`}>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-between items-center'>
                        {/* Logo - visible on all screen sizes */}
                        <div data-aos="fade-right">
                            <a href="#" className='font-bold text-xl md:text-2xl items-center flex gap-2 group'>
                                <FiShoppingBag size={24} className="text-primary group-hover:rotate-12 transition-all duration-300" />
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Shop Me</span>
                            </a>
                        </div>

                        {/* Mobile Toggle Button - only visible on small screens */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={handleOrderPopup}
                                className='bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 rounded-full text-white py-1 px-3 flex items-center gap-1 group shadow-md transform active:scale-95'
                                aria-label="Cart"
                            >
                                <FaCartShopping className='text-lg text-white drop-shadow-sm cursor-pointer' />
                            </button>
                            <button
                                onClick={toggleTopMenu}
                                className="text-primary p-1"
                                aria-label="Toggle menu"
                            >
                                {isTopMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>
                        </div>

                        {/* Desktop Right Items - hidden on mobile */}
                        <div className='hidden md:flex justify-between items-center gap-3 lg:gap-6' data-aos="fade-left">
                            <div className='relative group'>
                                <input
                                    type="text"
                                    placeholder='Search'
                                    className={`w-[150px] lg:w-[200px] ${searchFocused ? 'w-[200px] lg:w-[300px]' : ''} transition-all duration-300 rounded-full border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:w-[200px] lg:focus:w-[300px] group-hover:w-[200px] lg:group-hover:w-[300px]`}
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => setSearchFocused(false)}
                                />
                                <IoMdSearch className='text-primary absolute top-1/2 -translate-y-1/2 right-3 text-lg' />
                            </div>
                            <button
                                onClick={handleOrderPopup}
                                className='bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 rounded-full text-white py-2 px-4 flex items-center gap-2 group shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95'
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <span className='group-hover:translate-x-1 transition-transform duration-200'>Order</span>
                                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                            </button>
                            <div className="transform hover:scale-110 transition-transform duration-200" data-aos="zoom-in" data-aos-delay="200">
                                <DarkMode />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Top Menu - expanded when isTopMenuOpen is true */}
                    {isTopMenuOpen && (
                        <div className="md:hidden pt-4 pb-2 animate-fadeIn">
                            <div className="flex flex-col space-y-3">
                                <div className='relative'>
                                    <input
                                        type="text"
                                        placeholder='Search'
                                        className="w-full transition-all duration-300 rounded-full border border-gray-300 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                                    />
                                    <IoMdSearch className='text-primary absolute top-1/2 -translate-y-1/2 right-3 text-lg' />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={handleOrderPopup}
                                        className='bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 rounded-full text-white py-2 px-4 flex-1 flex items-center justify-center gap-2 group shadow-md'
                                    >
                                        <span>Order Now</span>
                                        <FaCartShopping className='text-white drop-shadow-sm cursor-pointer' />
                                    </button>
                                    <div className="ml-3">
                                        <DarkMode />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop Menu Navigation */}
            <div className='container mx-auto flex justify-center items-center py-4 px-4' data-aos="fade-down" data-aos-delay="300">
                <ul className='sm:flex hidden items-center gap-4 lg:gap-6'>
                    {Menu.map((item, index) => (
                        <li
                            key={item.id}
                            className="relative transform hover:-translate-y-1 transition-transform duration-200"
                            data-aos="fade-up"
                            data-aos-delay={400 + (index * 100)}
                        >
                            <a
                                href={item.link}
                                className='inline-block px-3 lg:px-4 py-2 font-medium hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors duration-200 relative group'
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}

                    <li
                        className='group relative cursor-pointer transform hover:-translate-y-1 transition-transform duration-200'
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <a href="#" className='flex items-center gap-1 py-2 px-3 lg:px-4 font-medium dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors duration-200'>
                            Trending Products
                            <FaCaretDown className='transition-all duration-300 group-hover:rotate-180 ml-1' />
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-lg bg-white dark:bg-gray-800 p-3 text-black dark:text-white shadow-xl w-[200px] border border-gray-100 dark:border-gray-700'>
                            <ul>
                                {Dropdownlist.map((item) => (
                                    <li key={item.id} className='mb-1'>
                                        <a
                                            href={item.link}
                                            className='inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-primary/10 transition-colors duration-200'
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Mobile menu button for main navigation */}
            <div className="sm:hidden flex justify-center my-2" data-aos="fade-up">
                <button
                    className="rounded-md p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile main menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg overflow-hidden transition-all duration-300 transform origin-top animate-fadeIn">
                    <div className="max-h-96 overflow-y-auto transition-all duration-300">
                        <ul className="px-4 py-2">
                            {Menu.map((item) => (
                                <li key={item.id} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                                    <a
                                        href={item.link}
                                        className="block py-3 px-2 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors duration-200"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li className="border-b border-gray-100 dark:border-gray-800">
                                <a
                                    href="#"
                                    className="block py-3 px-2 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors duration-200"
                                >
                                    Trending Products
                                </a>
                                <ul className="pl-4 pb-2">
                                    {Dropdownlist.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={item.link}
                                                className="block py-2 px-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;