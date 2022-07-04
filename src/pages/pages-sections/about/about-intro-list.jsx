import { useSanity } from '../../../context/sanity-context';
import { urlFor } from '../../../lib/client';


const AboutIntroList = () => {

  const data = useSanity("aboutList");
 return (
    <>
      <section className="about-intro__list__wrapper">

        <section className="about-intro__list__content__wrapper">

          <div className="about-intro__list__content__left">
            <img
              className="about-intro__list-1"
              src={urlFor(data.imageLeft)}
              alt="intro illustration"
              width="300"
              height="300"
            />
            <ul className="about-intro__list">
              {data.left?.map((list) => (
                <li className = "about-intro__list__item" key={list._id}> {list} </li>
              ))}
            </ul>
          </div>

          <div className="about-intro__list__content__right">
            <img
              className="about-intro__list-2"
              src={urlFor(data.imageRight)}
              alt="intro illustration"
              width="300"
              height="300"
            />
           <ul className="about-intro__list">
              {data.right?.map((list) => (
                <li className = "about-intro__list__item" key={list._id}> {list} </li>
              ))}
            </ul>
          </div>

        </section>
      </section>
      {/* end intro */}
    </>
  );

 }

export default AboutIntroList;
