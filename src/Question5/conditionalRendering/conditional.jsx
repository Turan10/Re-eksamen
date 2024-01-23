import React, { useState } from 'react';
import './conditional.css';

const Conditionalrendering = () => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleToggle = () => {
        setShow(prevShow => {
            if (prevShow) {
                setClicked(false);
            }
            return !prevShow;
        });
    };

    return (
        <div className="conditional-rendering-container">
            <p className='p'>These buttons will demonstrate conditional rendering when a condition is met</p>
            <button className="toggle-button" onClick={handleToggle}>Toggle button</button>
            {show && (clicked ? 
                <button className="thank-you-button">Thank you</button> 
                : 
                <button className="click-me-button" onClick={() => setClicked(true)}>Click me</button>
            )}
        </div>
    );
};

export default Conditionalrendering;
