import HomepageCaseStudy from './homepage-case-study'

const HomepageCaseStudies = () =>

 (
    <>
      <section className="homepage-case-studies__wrapper">
        <div className="homepage-case-studies__content">

          <div className="homepage-case-studies__text">
            <h1 className="homepage-case-studies__title">Why Us?</h1>
            <h2 className="homepage-case-studies__subtitle">We will guide you through the best approach towards having an outstanding web product.</h2>
          </div>

          <HomepageCaseStudy />
          <HomepageCaseStudy />
          <HomepageCaseStudy />

        </div>

          <button className="button-main homepage-case-studies__cta" type="button" >View More of Our Work</button>

      </section>
      {/* end case studies */}
    </>
  );

export default HomepageCaseStudies;
