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
            <div style={{ width: "48%" }}>
              <p style={{ fontSize: "1.7vw" }}>
                Our products are designed for a diverse group of individuals who share a passion for transforming their outdoor spaces, creating lasting memories with family and friends, and taking on challenging DIY projects. Our primary audience includes
              </p>
              <br/>
              <a style={{ marginTop: "2%", padding: "20px", fontSize: "1.4vw" }} href={`mailto:${email}`} className="draw-btn">
                Contact
              </a>
            </div>

            <div style={{ width: "48%" }}>
              <p style={{ fontSize: "1.5vw" }}>
                1. DIY Enthusiasts: Are you someone who enjoys the satisfaction of completing your own projects? Our professional-grade fence materials are perfect for those who take pride in doing it themselves.
              </p>
              <br/>
              <p style={{ fontSize: "1.5vw" }}>
                2. Family Bonding: Looking for a fun family project that brings everyone together? Building a fence can be a rewarding experience that strengthens family ties while enhancing your property.
              </p>
              <br/>
              <p style={{ fontSize: "1.5vw" }}>
                3. Weekend Warriors: If you and your buddies enjoy tackling DIY projects over the weekend, our high-quality materials will help you build a sturdy and aesthetically pleasing fence.
              </p>
              <br/>
              <p style={{ fontSize: "1.5vw" }}>
                4. Responsible Parents: Teach your children the value of hard work and responsibility by involving them in a serious chore-building a fence together. It's a fantastic opportunity to instill valuable life skills.
              </p>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <p>
          Whether you're an avid DIYer, a family seeking quality time together, a weekend warrior, or a <br/>
          parent fostering a sense of responsibility in your children, our products are your one-stop<br/>
          shop for top-notch fence materials to make your project a success
          </p>
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
