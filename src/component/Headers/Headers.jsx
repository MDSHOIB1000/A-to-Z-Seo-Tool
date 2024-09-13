import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Headers = ({ handleLogOut, Isauthenticated}) => {

      const location =window.location.pathname;
       console.log("from header", location)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-center navBar'>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className='Nav sign d-flex justify-content-center align-items-center gap-4 mx-3'>
                           
                           {
                            !Isauthenticated?(<>
                            {
                                location==="/login"?  <Link to={'/sign-up'} className="nav-link">Sign Up</Link>:<Link to={'/login'} className="nav-link login">Login</Link>
                            }
                               
                                
                                </>):(<Link  className="nav-link login" onClick={handleLogOut}>Logout</Link>)
                            
                           }
                            
                            
                        </div>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Headers