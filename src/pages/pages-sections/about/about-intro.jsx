const AboutIntro = () =>

 (
    <>
      <section className="about-intro__wrapper">
        
        <header className="about-intro__title__wrapper">
          <h1 className="about-intro__title title-display-small">We are a business-oriented web development company</h1>
        </header>

        <section className="about-intro__content__wrapper">

          <div className="about-intro__content">
            <div className="about-intro__content__left">
              <h2 className="about-intro__content__text title-heading-3">
                Delivering <strong>dynamic</strong> and <strong>powerful</strong> web experiences with inventive design, audacious web development and a fearless business mindset. 
              </h2>

              <img
                className="about-intro__img"
                src="/assets/about/about_octopus.png"
                alt="intro illustration"
                width="300"
                height="300"
              />
            </div>

            <div className="about-intro__content__right">
              <h2 className="about-intro__content__text title-heading-3">
                With the ocean as inspiration that all things are possible and with the idea that the combination of tech and business will result in greater success, our three founders decided to called it <strong>Mar</strong>, sea in Portuguese, and <strong>Zee</strong>, sea in Dutch.
              </h2>
            </div>
          </div>
        </section>

      </section>
      {/* end intro */}
    </>
  );

export default AboutIntro;
