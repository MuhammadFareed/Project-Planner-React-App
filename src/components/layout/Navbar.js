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
                    <div className="row">
                        <div className="col l6 m6 s12">
                            <a href="/"><h5><b>Project Planner</b></h5></a>
                        </div>
                        <div className="col l6 m6 s12">
                            { links }
                        </div>
                    </div>

                </div>
            </nav>
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