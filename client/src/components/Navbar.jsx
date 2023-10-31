import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <div>
            <div className="social-navbar navbar">
                <div className="left-side">
                    <p>123-456-7890</p>
                    <p>GET FINANCING</p>
                </div>
                <div className="right-side">
                <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </div>
            </div>
            <div className="main-navbar navbar"></div>
        </div>
    )
}

export default Navbar;