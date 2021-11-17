
const HomepageIntroMessage = () =>

 (
    <>
      <div className="homepage-intro__container">

        <div className="homepage-intro__content">
          <h1 className="title-display-large">
            We're<br />Marzee
          </h1>
          <h2 className="title-heading-3">
            Bespoke web development services for bold and dynamic web platforms
          </h2>

          <button className="button-main" type="button" >Reach Out!</button>
        </div>

        <div className="homepage-intro__media">
          <img
            src="/assets/homepage/hp_illustration_top.png"
            alt="intro illustration"
            width="300"
            height="300"
          />
        </div>
      </div>
      {/* end intro */}
    </>
  );

export default HomepageIntroMessage;
