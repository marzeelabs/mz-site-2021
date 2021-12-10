import Header from './components-global/header';
import ServicesIntro from './pages-sections/services/services-intro';
import ServicesContext from './pages-sections/services/services-context';
import ServicesBenefits from './pages-sections/services/services-benefits';
import CaseStudies from './pages-sections/case-studies/case-studies';

import Footer from './components-global/footer';

const Services = () => (
  <>
    <Header />
    <main>
      <ServicesIntro />
      <ServicesContext />
      <ServicesBenefits />
      <CaseStudies />
    </main>
    <Footer />
  </>
);

export default Services;
