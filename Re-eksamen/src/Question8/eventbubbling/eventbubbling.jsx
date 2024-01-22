import React from 'react';
import './eventbubbling.css'; 

function EventBubbling() {
    const handleDivClick = () => {
        alert('Event reached div (grandparent)');
    };
    const handleSpanClick = (event) => {
        alert('Event reached span (parent)');
        // event.stopPropagation(); // måden vi stopper bubbling på
    };

    const handleButtonClick = () => {
        alert('Event started at button (child)');
    };

    return (
        <div className="bubbling-div" onClick={handleDivClick}>
            Div (Grandparent)
            <span className="bubbling-span" onClick={handleSpanClick}>
                Span (Parent)
                <button className="bubbling-button" onClick={handleButtonClick}>Click Me (Child)</button>
            </span>
        </div>
    );
}

export default EventBubbling;
