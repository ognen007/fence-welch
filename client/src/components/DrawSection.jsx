import { Link } from "react-router-dom";

const DrawSection = () => {  return (
    <div className="background">
      <div className="centered-content">
        <h1>Draw your fence</h1>
        <br/>
        <br/>
        <p>With our software, you can measure your fence by drawing on a canvas or via Google Maps.</p>
        <br/>
        <br/>
        <br/>
        <Link to="/draw-my-fence" className="draw-btn">Draw Fence</Link>
      </div>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </div>
  );
};

export default DrawSection;
