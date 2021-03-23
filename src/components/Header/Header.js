import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <img className="img-fluid w-25" src="https://i.ibb.co/vJ36rM4/Group-1329.png" alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/donation">Donation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary mr-3">Register</button>
                    <Link to="/admin"><button type="button" className="btn btn-dark">Admin</button></Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;