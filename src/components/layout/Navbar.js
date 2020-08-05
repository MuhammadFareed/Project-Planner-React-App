import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'; 


const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? (<SignedInLinks profile={profile} />) : (<SignedOutLinks/>);
    return (
        <div>
            <nav className="nav-wrapper indigo darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Project Management Planner</Link>
                    <a href="#" className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </a>
                    <div className="right hide-on-med-and-down">
                        { links }
                    </div>

                </div>
            </nav>
            <ul className="sidenav" id="mobile-links">
                { links } 
            </ul>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}   

export default connect(mapStateToProps)(Navbar);