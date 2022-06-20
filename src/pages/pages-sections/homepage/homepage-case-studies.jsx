import { useSanity } from '../../../context/sanity-context';

import CaseStudy from '../case-studies/case-study'

const HomepageCaseStudies = () => {

  const sectionData = useSanity('why');
  const studiesData = useSanity('studies');
  

  return (
    <>
      <section className="homepage-case-studies__wrapper">
        <div className="homepage-case-studies__content">
          <div className="homepage-case-studies__text">
            <h1 className="homepage-case-studies__title title-display">{sectionData.title}</h1>
            <h2 className="homepage-case-studies__subtitle">{sectionData.subtitle}</h2>
          </div>
          {studiesData?.map((studies) => <CaseStudy key={studies._id} caseStudy={studies} />)}
        </div>

        <button className="button-main homepage-case-studies__cta" type="button"> View More of Our Work </button>
      </section>
    </>
  );

  }

export default HomepageCaseStudies;
