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

            <button className="button-main">Reach Out!</button>
          </div>

          <div className="homepage-intro__media">
            <img
              src="/assets/hp_illustration_top.png"
              alt=""
            />
          </div>
        </div>
        {/* end intro */}

        <section className="homepage-intro__cards">
          <div className="homepage-intro__card">
            <h3>
              Bespoke web development services for bold and dynamic web platforms
            </h3>
          </div>

          <div className="homepage-intro__card">
            <h3>
              Bespoke web development services for bold and dynamic web platforms
            </h3>
          </div>

          <div className="homepage-intro__card">
            <h3>
              Bespoke web development services for bold and dynamic web platforms
            </h3>
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
