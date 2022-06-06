

const HomepageIntroCards = ({data}) => {

 return (
    <>
      <section className="homepage-intro__cards__wrapper">
        <div className="homepage-intro__cards">

          {data.map(service => (
            <div className="homepage-intro__card" key={service._id}>
            <h3 className="homepage-intro__card__title">
              <a href="#" className="homepage-intro__card__link">{service.title}</a>
            </h3>
            <p className="homepage-intro__card__desc">
             {service.description}
            </p>

            <button className="homepage-intro__card__button" aria-label="read more" />
          </div>
          ))}
          

        </div>
      </section>

      {/* end intro cards */}
    </>
  );

 }

export default HomepageIntroCards;
