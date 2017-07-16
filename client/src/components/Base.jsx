import React from 'react';
import {Link, IndexLink} from 'react-router';
import Auth from '../modules/Auth';


const Base = ({
    children
}) => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <IndexLink to="/">Ireneus </IndexLink>
            </div>
            {Auth.isUserAuthenticated() ? (
                <div className="top-bar-right">
                    <Link to="/logout" > Log out </Link>
                </div>
                ): (
            <div className="top-bar-right">
                <Link to="/login">Log In </Link>
                <Link to="/signup">Sign Up </Link>
            </div>
                )}
        </div>
        {/*Render Here a children component*/}
        {console.log(children)}
        {children}
    </div>
);

Base.propTypes = {
    children : React.PropTypes.object.isRequired

};

export default Base;