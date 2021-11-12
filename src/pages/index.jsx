import Header from './components/header';
import HomepageIntro from './homepage-blocks/homepage-intro';
import HomepageIntroCards from './homepage-blocks/homepage-intro-cards';
const Home = () => (
  <>
    <Header />
    <main>
      <section className="homepage-intro__wrapper">

        <HomepageIntro />
        <HomepageIntroCards />

      </section>

      <section className="homepage-infographic__wrapper">
        
        <div className="homepage-infographic__content">
          
          <div className="homepage-infographic__left">
            <p className="homepage-infographic__subtitle">We Transform</p>
            <h1 className="homepage-infographic__title">Your Ideas<br />Into Reality</h1>
            <p className="homepage-infographic__subtitle--small">By bringing Current Technologies with Your Business Goals</p>
          </div>

          <div className="homepage-infographic__right">
            <img
              className="homepage-infographic__img"
              src="/assets/hp_manta_ray_infographic.png"
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

      <section className="homepage-case-studies__wrapper">
        <div className="homepage-case-studies__content">

          <div className="homepage-case-studies__text">
            <h1 className="homepage-case-studies__title">Why Us?</h1>
            <h2 className="homepage-case-studies__subtitle">We will guide you through the best approach towards having an outstanding web product.</h2>
          </div>

          <article className="homepage-case-study">
            <a href="#" title="case study" className="homepage-case-study__img-link">
              <img className="homepage-case-study__img" alt="Marzee Case Study" src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" width="300" height="200" />
            </a>
            
            <h3 className="homepage-case-study__title">
              <a href="#" className="homepage-case-study__link">
                Facilisi nisl, egestas viverra felis. Ultrices vulputate ac quis a drerit.
              </a>

              <a href="#" className="homepage-case-study__link__cta">
                View Case Study
              </a>
            </h3>
          </article>

          <article className="homepage-case-study">
            <a href="#" title="case study" className="homepage-case-study__img-link">
              <img className="homepage-case-study__img" alt="Marzee Case Study" src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" width="300" height="200" />
            </a>
            
            <h3 className="homepage-case-study__title">
              <a href="#" className="homepage-case-study__link">
                Facilisi nisl, egestas viverra felis. Ultrices vulputate ac quis a drerit.
              </a>

              <a href="#" className="homepage-case-study__link__cta">
                View Case Study
              </a>
            </h3>
          </article>

          <article className="homepage-case-study">
            <a href="#" title="case study" className="homepage-case-study__img-link">
              <img className="homepage-case-study__img" alt="Marzee Case Study" src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" width="300" height="200" />
            </a>
            
            <h3 className="homepage-case-study__title">
              <a href="#" className="homepage-case-study__link">
                Facilisi nisl, egestas viverra felis. Ultrices vulputate ac quis a drerit.
              </a>

              <a href="#" className="homepage-case-study__link__cta">
                View Case Study
              </a>
            </h3>
          </article>
        </div>

          <button className="button-main homepage-case-studies__cta" type="button" >View More of Our Work</button>

      </section>
      {/* end case studies */}

    </main>
    <footer className="footer">
      <h2>Footer</h2>
    </footer>
  </>
);

export default Home;
