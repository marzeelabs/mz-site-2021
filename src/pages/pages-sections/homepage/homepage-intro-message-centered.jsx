import { urlFor } from '../../../lib/client';

const HomepageIntroMessageCentered = ({data}) => {

 return (
    <>
      <div className="homepage-intro__container">

        <div className="homepage-intro__content">
          <h1 className="title-display-large">
            <span>{data.titleTop}</span><span>{data.titleBottom}</span>
          </h1>

          <h2 className="title-heading-3">
            {data.desc}
          </h2>

          <button className="button-main" type="button" >{
            data.buttonText}
          </button>
        </div>

        <div className="homepage-intro__media">
          <img
            src={urlFor(data.image)}
            alt="intro illustration"
            width="300"
            height="300"
          />
        </div>
      </div>
      {/* end intro */}
    </>
  );

 }

export default HomepageIntroMessageCentered;
