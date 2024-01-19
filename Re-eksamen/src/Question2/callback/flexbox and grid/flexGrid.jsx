import './flexGrid.css'


const Flex = () => {
    return (
        <div className="flex-container">
            <div className="flex-item">1</div>
            <div className="flex-item">2</div>
            <div className="flex-item">3</div>
            <div className="flex-item">4</div>
            <div className="flex-item">5</div>
            <div className="flex-item">6</div>
          
        </div>
    )
}

const Grid = () => {
    return (
        <div class="grid-container">
        <header class="grid-item header">Header</header>
        <aside class="grid-item sidebar">Sidebar</aside>
        <main class="grid-item main-content">Main Content</main>
        <footer class="grid-item footer">Footer</footer>
      </div>
    )
}

export {Flex, Grid};