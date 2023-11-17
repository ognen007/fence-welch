import { Link } from "react-router-dom";
import Logo from "../img/DIYFS.png";

const Navbar = () => {
    const email = "robbie@topnotchfence.com";
    
    return (
        <div className="navbar">
            <Link to="/" className="right-nav"><img className="nav-logo" src={Logo}/></Link>
            <div className="left-nav">
                <Link to="/style" className="nav-element">Style</Link>
                <a href={`mailto:${email}`} className="nav-element">Contact</a>
                <Link to="/draw-my-fence" className="nav-element nav-btn">Draw Fence</Link>
            </div>
        </div>
    )
}  

export default Navbar;