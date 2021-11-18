
const HomepageTestimonials = () =>

 (
    <>
    <section className="homepage-testimonials">


      <div className="homepage-testimonials__content">

        <div className="homepage-testimonials__message">

        <img
          className="homepage-testimonials__img"
          src="/assets/homepage/hp_whale.png"
          alt="whale"
          width="300"
          height="600"
        />

          <h1 className="homepage-testimonials__title title-display">
            <span>See</span>
            What Everyone
            <span>Has Been Saying About Us</span>
          </h1>

        </div>

        <div className="homepage-testimonials__list__wrapper">
          <div className="homepage-testimonials__list">

            <div className="homepage-testimonial">
              <img className="homepage-testimonial__img" src="https://atav.pt/wp-content/uploads/2021/05/logo.png" alt="testimonial logo" width="144" height="72"/>
              <h2 className="homepage-testimonial__title">
                We always felt secure and in control of what was happening from a timeframe and budget perspective
              </h2>
              <h3 className="homepage-testimonial__subtitle">
                Co-Founder & Project Lead, Porto i/o
              </h3>
            </div>

            <div className="homepage-testimonials__navigation">
              <button className="homepage-testimonials-button previous" type="button" aria-label="previous" />
              <button className="homepage-testimonials-button next" type="button" aria-label="next" />
            </div>
          </div>

          <a href="#" className="homepage-testimonials__link">
            Check All Our Reviews
          </a>
        </div>
      </div>


    </section>

    </>
  );

export default HomepageTestimonials;
