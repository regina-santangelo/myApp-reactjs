import './Navbar.css'
import Cart from '../CartWidget/Cart';

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
            <Cart />
        </nav>
    )
}

export default Navbar;