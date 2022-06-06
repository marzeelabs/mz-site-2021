import { useSanity } from '../../../context/sanity-context';

const HomepageInfographic = () => {

  const data = useSanity('idea');

 return (
    <>
      <section className="homepage-infographic__wrapper">
        
        <div className="homepage-infographic__content">
          
          <div className="homepage-infographic__left">
            <p className="homepage-infographic__subtitle">{data.titleTop}</p>
            <h1 className="homepage-infographic__title title-display">{data.titleMiddle}</h1>
            <p className="homepage-infographic__subtitle--small">{data.titleBottom}</p>
          </div>

          <div className="homepage-infographic__right">
            <img
              className="homepage-infographic__img"
              src="/assets/homepage/hp_manta_ray_infographic.png"
              alt="Assess, Plan, Implement, Maintain, Evolve"
              title="Assess, Plan, Implement, Maintain, Evolve"
              width="300"
              height="600"
            />

            <ul className="homepage-infographic__list">
              {data.tags?.map((tag) => (
                <li className="homepage-infographic__item" key={tag._id}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
      {/* end infographic */}
    </>
  );

 }

export default HomepageInfographic;
