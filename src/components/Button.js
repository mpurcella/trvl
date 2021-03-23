import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

let btnStyles = ['btn-primary', 'btn-outline'];
let btnSizes = ['btn-medium', 'btn-large'];

let Button = ({ // We create a Button component with properties:
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
   let checkBtnStyle = btnStyles.includes(buttonStyle) ? buttonStyle : btnStyles[0]; // If a Button is created with a particular button style, it will retain that style, but if no style is chosen it will have the style of [0] in STYLES (btn-primary)
   let checkBtnSize = btnSizes.includes(buttonSize) ? buttonSize : btnSizes[0]; // If a Button is created with a particular button size, it will retain that size, but if no size is chosen it will have the size of [0] in STYLES (btn-medium)

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};

export default Button;