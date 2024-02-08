import { Link } from 'react-router-dom'
import './header.css'

function Header() {
    return (
        <div>
            <div>HomeTest</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Header