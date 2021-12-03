import Header from './components-global/header';
import ServicesIntro from './pages-sections/services/services-intro';
import ServicesContext from './pages-sections/services/services-context';
import ServicesBenefits from './pages-sections/services/services-benefits';

import Footer from './components-global/footer';

const Services = () => (
  <>
    <Header />
    <main>
    <ServicesIntro />
    <ServicesContext />
    <ServicesBenefits />
    </main>
    <Footer />
  </>
);

export default Services;
