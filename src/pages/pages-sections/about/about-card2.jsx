const AboutCard2 = () =>

 (
    <>
      <li className="about-cards__item">

        <div className="about-card">

          <input type="checkbox" id="card2" className="about-card__more" aria-hidden="true" />

          <div className="about-card__content">
            <div className="about-card__front">
   
              <h2 className="about-card__title title-display-small"> We work on the web to help you create impact</h2>

              <label htmlFor="card2" className="about-card__button" aria-hidden="true" aria-label="more info" />

            </div>
            {/* end front */}

            <div className="about-card__back">

              <div className="about-card__description__wrapper">
                <p className="about-card__description">
                  We see our clients as part of the crew, not just as passenger that will be delivered to their final destination. We sail the journey together by working hand in hand - without black boxes. We believe that the best way to deliver an outstanding product is by working directly with our clients.<br /><br />
                  This is why fluid and transparent communication is part of our DNA. We seek to work with projects that are interesting and have a clear added value for the client and for us. We wear the cap, we give fair prices, we say no when is needed, we scale the team for larger projects and we strive for long-term relationships.
                </p>
              </div>


              <label htmlFor="card2" className="about-card__button about-card__button--return" aria-hidden="true" aria-label="return" />
            </div>
            {/* end back */}
          </div>
          {/* end content */}
        </div>
      </li>
    </>
  );

export default AboutCard2;
