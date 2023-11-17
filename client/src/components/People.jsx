const People = () => {
  const email = "robbie@topnotchfence.com";
  return (
    <>
      <div className="background2" id="people">
        <div className="centered-content2">
          <h1 className="people-heading" style={{ fontSize: "4vw", marginTop: "-1%" }}>
            Who is our product for?
          </h1>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2%" }}>
            <div>
              <p style={{ fontSize: "1.7vw" }}>
                Our products are designed for a diverse group of individuals who share a passion for transforming their outdoor spaces, <br/>
                creating lasting memories with family and friends, and taking on challenging DIY projects. Our primary audience includes
              </p>
              <br/>
              <br/>
              <a style={{ marginTop: "2%", padding: "20px", fontSize: "1.4vw" }} href={`mailto:${email}`} className="draw-btn">
                Contact
              </a>
            </div>
          </div>
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
};

export default People;
