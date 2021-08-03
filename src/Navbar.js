import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog</h1>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/create">New Blog</Link>
            </div>
        </nav>
     );
}

export default Navbar;