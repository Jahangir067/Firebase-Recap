import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <nav className="text-center mt-2">
            <Link to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            
        </nav>
    );
};

export default Header;