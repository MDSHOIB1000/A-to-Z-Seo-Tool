import React, { useState } from 'react'
import './sidebar.css'
import { Link, useLocation } from 'react-router-dom'
import { FiGrid } from "react-icons/fi";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import Home from '../../pages/Home/Home';

const SideBar = () => {

           let {pathname}= useLocation()
        //  console.log(pathName);
        const subPage = pathname.split('/')[1];
        // console.log(subPage);

        function Linkess(type = null) {
            return type === subPage ? 'nav-link active' : 'nav-link';
        }

    return (
        <div className='side_Container'>
            <aside className='side_bar'>
                <ul className='sidebar-nav'>
                    <li className='nav-item'>
                        <Link to={''} className={Linkess('')}>
                            <FiGrid />
                            <span>DashBoard</span>
                        </Link>
                    </li>
                    <li>

                        <Link to={'/component'} className={Linkess('component')}>
                            <BsMenuButtonWide />
                            <div className={`d-flex justify-content-between align-items-center w-100`}>
                                <span className="me-2">Components</span>
                                <IoIosArrowDown />
                            </div>
                        </Link>

                    </li>
                    <li className='nav-heading'>Pages</li>
                    <li>

                        <Link to={'/profile'} className={Linkess('profile')}>
                            <FaUserLarge className='profile-icon' />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>

                        <Link to={'/user'} className={Linkess('user')}>
                            <ImUsers className='profile-icon' />
                            <span>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className={Linkess('contact')}>
                            <MdOutlineEmail />
                            <span>Contacts</span>
                        </Link>

                    </li>

                    <li>

                        <Link to={'/register'} className={Linkess('register')}>
                            <FaIdCard />
                            <span>Register new User</span>
                        </Link>

                    </li>
                    <li>
                        <Link to={'/login'} className={Linkess('login')}>
                            <MdLogin />
                            <span>Login As</span>
                        </Link>

                    </li>


                </ul>

            </aside>
        </div>
    )
}

export default SideBar