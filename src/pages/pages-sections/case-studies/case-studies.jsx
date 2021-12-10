import CaseStudy from './case-study'

const CaseStudies = () =>

 (
    <>
      <section className="case-studies__wrapper">
        <div className="case-studies__content">

          <div className="case-studies__text">
             <h2 className="case-studies__title title-display-small"><span className="title-heading-1">See What We</span>Have Done with Other Projects</h2>
          </div>

          <CaseStudy />
          <CaseStudy />
          <CaseStudy />

          <button className="button-main case-studies__cta" type="button" >View More of Our Work</button>

        </div>

      </section>
      {/* end case studies */}
    </>
  );

export default CaseStudies;
