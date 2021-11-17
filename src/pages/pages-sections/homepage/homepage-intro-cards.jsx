
const HomepageIntroCards = () =>

 (
    <>
      <section className="homepage-intro__cards__wrapper">
        <div className="homepage-intro__cards">

          <div className="homepage-intro__card">
            <h3 className="homepage-intro__card__title">
              <a href="#" className="homepage-intro__card__link">Strategy</a>
            </h3>
            <p className="homepage-intro__card__desc">
              An expert diagnosis of your business goals and web product to trace the best approach to the development and design of what you need! 
            </p>

            <button className="homepage-intro__card__button" aria-label="read more" />
          </div>

          <div className="homepage-intro__card">
            <h3 className="homepage-intro__card__title">
              <a href="#" className="homepage-intro__card__link">UI/UX Design</a>
            </h3>
            <p className="homepage-intro__card__desc">
              User-friendly and beautifully crafted web products to elevate your brand while accounting for usability and performance for your web product.
            </p>

            <button className="homepage-intro__card__button" aria-label="read more" />
          </div>

          <div className="homepage-intro__card">
            <h3 className="homepage-intro__card__title">
              <a href="#" className="homepage-intro__card__link">Development</a>
            </h3>
            <p className="homepage-intro__card__desc">
              You need a solid technological base to maintain and grow your web product. Our team of developers will guide you there!
            </p>

            <button className="homepage-intro__card__button" aria-label="read more" />
          </div>
        </div>
      </section>

      {/* end intro cards */}
    </>
  );

export default HomepageIntroCards;
