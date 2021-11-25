import React from 'react';
import NavBar from './Navbar'
import Location from './Location';
import Connexion from './Connexion';

const ButtonBottom = (props) => {
    return (
        <div className ="scroll-bottom">
            <div className="sb-main">
            {props.left && (
                <NavLink to ={props.left} className="left hover">
                        <span>&#10092;</span>

                </NavLink>
            )}

            <p className="center"> scroll</p>

            {props.right && (
                <NavLink to ={props.right} className="right hover">
                        <span>&#10093;</span>

                </NavLink>
            )}

            </div>
        </div>
    );
};

export default ButtonBottom;