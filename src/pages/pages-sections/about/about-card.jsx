const AboutCard = ({cardData: {header, descTop, descBottom, pairCard}}) => {

 return (
    <>
      <li className="about-cards__item">

        <div className="about-card">

          <input type="checkbox" id={pairCard ? 'card2': 'card1'} className="about-card__more" aria-hidden="true" />

          <div className="about-card__content">
            <div className="about-card__front">
   
              <h2 className="about-card__title title-display-small"> {header }</h2>

              <label htmlFor={pairCard ? 'card2': 'card1'} className="about-card__button" aria-hidden="true" aria-label="more info" />

            </div>
            {/* end front */}

            <div className="about-card__back">

              <div className="about-card__description__wrapper">
                <p className="about-card__description">
                  {descTop}<br /><br />
                  {descBottom}
                </p>
              </div>


              <label htmlFor={pairCard ? 'card2': 'card1'} className="about-card__button about-card__button--return" aria-hidden="true" aria-label="return" />
            </div>
            {/* end back */}
          </div>
          {/* end content */}
        </div>
      </li>
    </>
  );

 }

export default AboutCard;
