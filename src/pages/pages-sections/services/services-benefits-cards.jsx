
const ServicesBenefitsCards = ({ data }) => {

 return (
    <>
      <section className="services-benefits__cards__wrapper">
        <div className="services-benefits__cards">
          {data.map((benefit) => (
             <div className="services-benefits__card">
                <h3 className="services-benefits__card__title">{benefit.title}</h3>
                <ul className="services-benefits__card__list">
                  {benefit.bp?.map((bp) => (
                  <li className="services-benefits__card__list__item">{bp}</li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
      </section>

      {/* end intro cards */}
    </>
  );

 }

export default ServicesBenefitsCards;
