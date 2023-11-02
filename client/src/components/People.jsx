const People = () => {
    const email = "example@example.com";
    return (
<>
<div className="background2" id="people">
        <div className="centered-content2">
          <h1 className="people-heading">Who is this for?</h1>
          <br />
          <br />
          <p>Our "Draw My Fence" software is designed for both homeowners and<br />
            professionals in need of an efficient and convenient solution for<br />
            fence design and material selection. </p>
          <br />
          <br />
          <br />
          <a style={{ textDecoration: "none" }} href={`mailto:${email}`} className="draw-btn">Contact</a>
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
      </>
    );
  }
  
  export default People;
  