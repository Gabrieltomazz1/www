import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className='navbar navbar-dark bg-dark nabar-expand-sm'>
                <div className='container'>
                    <Link to={'/'} className="navbar-brand">
                        <i className='fa fa-mobile text-warning' />
                        Contact <span className='text-warning'>Manager</span>
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    )
};

export default NavBar