import React, { useState } from 'react';
import './conditional.css';

const Conditionalrendering = () => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const renderButton = () => {
        if (!show) return null;

        if (clicked) {
            return <button className="thank-you-button">Thank you</button>;
        } else {
            return <button className="click-me-button" onClick={() => setClicked(true)}>Click me</button>;
        }
    }

    return (
        
        <div className="conditional-rendering-container">
            <p className='p'>These buttons will demonstrate conditional rendering when a condition is met</p>
            <button className="toggle-button" onClick={() => setShow(!show)}>Toggle button</button>
            {renderButton()}
        </div>
    );
};

export default Conditionalrendering;
