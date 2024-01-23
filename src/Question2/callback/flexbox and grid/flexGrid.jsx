import React from 'react';
import { Outlet } from 'react-router-dom';
import './flexGrid.css';

const Flex = () => {
    return (
        <div>
            <div className="flex-container">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
                <div className="flex-item">4</div>
                <div className="flex-item">5</div>
                <div className="flex-item">6</div>
            </div>
            <Outlet /> 
        </div>
    );
};

const Grid = () => {
    return (
        <div className="grid-container">
            <header className="grid-item header">Header</header>
            <aside className="grid-item sidebar">Sidebar</aside>
            <main className="grid-item main-content">Main Content</main>
            <footer className="grid-item footer">Footer</footer>
        </div>
    );
};

export { Flex, Grid };
