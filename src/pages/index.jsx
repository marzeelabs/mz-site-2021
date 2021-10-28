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
              alt=""
            />
          </div>
        </div>
        {/* end intro */}

        <section className="homepage-intro__cards__wrapper">
          <div className="homepage-intro__cards">

            <div className="homepage-intro__card">
              <h3 className="homepage-intro__card__title">
                Strategy
              </h3>
              <p className="homepage-intro__card__desc">
                An expert diagnosis of your business goals and web product to trace the best approach to the development and design of what you need! 
              </p>

              <button className="homepage-intro__card__button" aria-label="read more" />
            </div>

            <div className="homepage-intro__card">
              <h3 className="homepage-intro__card__title">
                UI/UX Design
              </h3>
              <p className="homepage-intro__card__desc">
                User-friendly and beautifully crafted web products to elevate your brand while accounting for usability and performance for your web product.
              </p>

              <button className="homepage-intro__card__button" aria-label="read more" />
            </div>

            <div className="homepage-intro__card">
              <h3 className="homepage-intro__card__title">
                Development
              </h3>
              <p className="homepage-intro__card__desc">
                You need a solid technological base to maintain and grow your web product. Our team of developers will guide you there!
              </p>

              <button className="homepage-intro__card__button" aria-label="read more" />
            </div>
          </div>
        </section>

      </section>

    </main>
    <footer className="footer">
      <h2>Footer</h2>
    </footer>
  </>
);

export default Home;
