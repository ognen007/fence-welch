import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="right-nav"><img className="nav-logo"/></Link>
            <div className="left-nav">
                <Link to="/style" className="nav-element">Style</Link>
                <a className="nav-element">Contact</a>
                <Link to="/draw-my-fence" className="nav-element nav-btn">Draw Fence</Link>
            </div>
        </div>
    )
}  

export default Navbar;