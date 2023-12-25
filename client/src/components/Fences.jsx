import { Link } from "react-router-dom";
import Mail from "../img/tool.png";
import Icon from "../img/mail_loop.webm"

const Fences = () => {  
  return (
    <div className="fence">
      <div className="left-content">
      <video className="tool-img" autoPlay loop muted>
  <source src={Icon} type="video/webm" />
</video>

      </div>
      <div className="right-content">
        <p className="fence-p">Stuck on What Style You<br/>
         Want For Your Fence?<br/></p>
        <p className="fence-head">Get some inspiration here</p>
        <br/>
        <br/>
        <Link to="style" style={{textDecoration: "none", color: "#fff"}} className="draw-btn2">Click here</Link>
      </div>
    </div>
  );
};

export default Fences;
