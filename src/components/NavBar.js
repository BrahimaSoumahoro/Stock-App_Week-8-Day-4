import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to='/'>
                <div>Home</div>
            </Link>

            <Link to='/about'>
                <div>About</div>
            </Link>

            <Link to='/stock'>
                <div>Stock</div>
            </Link>
            <Link to='/dashboard'>
                <div>Dashboard</div>
            </Link>
        </nav>
    )
}
export default NavBar;