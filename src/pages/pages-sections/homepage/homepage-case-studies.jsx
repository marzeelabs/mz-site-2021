import { useSanity } from '../../../context/sanity-context';

import CaseStudy from '../case-studies/case-study'

const HomepageCaseStudies = () => {

  const data = useSanity('why');

  return (
    <>
      <section className="homepage-case-studies__wrapper">
        <div className="homepage-case-studies__content">

          <div className="homepage-case-studies__text">
            <h1 className="homepage-case-studies__title title-display">Why Us?</h1>
            <h2 className="homepage-case-studies__subtitle">We will guide you through the best approach towards having an outstanding web product.</h2>
          </div>
          {data?.map((why) => <CaseStudy key={why._id} caseStudy={why} />)}
        </div>

        <button className="button-main homepage-case-studies__cta" type="button"> View More of Our Work </button>
      </section>
    </>
  );

  }

export default HomepageCaseStudies;
