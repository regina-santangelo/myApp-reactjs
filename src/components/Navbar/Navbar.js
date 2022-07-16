import './Navbar.css'

const Navbar = () =>{
    return(
        <nav>
            <div className="navbar">
            <h2>E-Commerce</h2>
            </div>
            <div className="sections">
                <li>Productos</li>
                <li>Promociones</li>
                <li>Envíos</li>
            </div>
        </nav>
    )
}

export default Navbar;