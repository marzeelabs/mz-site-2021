
const HomepageForm = () =>

 (
    <>
    <section className="homepage-form__wrapper">
      <h1 className="homepage-form__title title-display">Let’s Talk?</h1>
      <form action="#" className="homepage-form">

        <label htmlFor="name" className="homepage-form__label">
          <input type="text" id="name" placeholder="Name" />
          <span>Name</span>
        </label>

        <label htmlFor="email" className="homepage-form__label">
          <input type="email" id="email" placeholder="Email" />
          <span>Email</span>
        </label>

        <label htmlFor="message" className="homepage-form__label">
          <textarea type="textarea" id="message" placeholder="Message" />
          <span>Message</span>
        </label>

        <input type="submit" defaultValue="Submit" className="homepage-form__submit" />
      </form>

      <img className="homepage-form__bg" src="/assets/hp_form_squid.png" alt="form bg"  width="320" height="178"/>
    </section>

    </>
  );

export default HomepageForm;
