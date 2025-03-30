import { Link } from "react-router-dom";
import './Header.css';

function Header(){
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/CoursesPage">Courses</Link>
            <Link to="/LoginForm">Login</Link>
        </div>
    );
}

export default Header;
