
const HomepageInfographic = () =>

 (
    <>
      <section className="homepage-infographic__wrapper">
        
        <div className="homepage-infographic__content">
          
          <div className="homepage-infographic__left">
            <p className="homepage-infographic__subtitle">We Transform</p>
            <h1 className="homepage-infographic__title title-display">Your Ideas<br />Into Reality</h1>
            <p className="homepage-infographic__subtitle--small">By Bridging Current Technologies with Your Business Goals</p>
          </div>

          <div className="homepage-infographic__right">
            <img
              className="homepage-infographic__img"
              src="/assets/homepage/hp_manta_ray_infographic.png"
              alt="Assess, Plan, Implement, Maintain, Evolve"
              title="Assess, Plan, Implement, Maintain, Evolve"
              width="300"
              height="600"
            />

            <ul className="homepage-infographic__list">
              <li className="homepage-infographic__item">
                Assess
              </li>

              <li className="homepage-infographic__item">
                Plan
              </li>

              <li className="homepage-infographic__item">
                Implement
              </li>

              <li className="homepage-infographic__item">
                Maintain
              </li>

              <li className="homepage-infographic__item">
                Evolve
              </li> 
            </ul>
          </div>
        </div>

      </section>
      {/* end infographic */}
    </>
  );

export default HomepageInfographic;
