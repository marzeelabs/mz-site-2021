import { urlFor } from '../../../lib/client';


const CaseStudy = ({caseStudy: {image, description}}) => {

 return (
    <>
      <article className="case-study">
        <a href="#" title="case study" className="case-study__img-link">
          <img className="case-study__img" alt="Marzee Case Study" src={urlFor(image)} width="300" height="200" />
        </a>
        
        <h2 className="case-study__title">
          <a href="#" className="case-study__link">
           {description}
          </a>

          <a href="#" className="case-study__link__cta">
            View Case Study
          </a>
        </h2>
      </article>
      {/* end of article */}
    </>
  );

 }

export default CaseStudy;
