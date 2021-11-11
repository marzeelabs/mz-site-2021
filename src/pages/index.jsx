import Header from './components/header';
const Home = () => (
  <>
    <Header />
    <main>
      <section className="homepage-intro__wrapper">

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
              src="/assets/hp_illustration_top.png"
              alt="intro illustration"
              width="300"
              height="300"
            />
          </div>
        </div>
        {/* end intro */}

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
      </section>

        
        <section className="homepage-intro__infographic__wrapper">
          
          <div className="homepage-intro__infographic__content">
            
            <div className="homepage-intro__infographic__left">
              <p className="homepage-intro__infographic__subtitle">We Transform</p>
              <h1 className="homepage-intro__infographic__title">Your Ideas<br />Into Reality</h1>
              <p className="homepage-intro__infographic__subtitle--small">By bringing Current Technologies with Your Business Goals</p>
            </div>

            <div className="homepage-intro__infographic__right">
              <img
                className="homepage-intro__infographic__img"
                src="/assets/hp_manta_ray_infographic.png"
                alt="Assess, Plan, Implement, Maintain, Evolve"
                title="Assess, Plan, Implement, Maintain, Evolve"
                width="300"
                height="600"
              />

              <ul className="homepage-intro__infographic__list">
                <li className="homepage-intro__infographic__item">
                  Assess
                </li>

                <li className="homepage-intro__infographic__item">
                  Plan
                </li>

                <li className="homepage-intro__infographic__item">
                  Implement
                </li>

                <li className="homepage-intro__infographic__item">
                  Maintain
                </li>

                <li className="homepage-intro__infographic__item">
                  Evolve
                </li> 
              </ul>
            </div>
          </div>

        </section>

    </main>
    <footer className="footer">
      <h2>Footer</h2>
    </footer>
  </>
);

export default Home;
