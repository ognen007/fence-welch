import { Link } from "react-router-dom";
import Mail from "../img/tool.png";

const Fences = () => {  
  return (
    <div className="fence">
      <div className="left-content">
        <img className="tool-img" src={Mail}/>
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
