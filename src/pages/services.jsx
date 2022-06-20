import Header from './components-global/header';
import ServicesIntro from './pages-sections/services/services-intro';
import ServicesContext from './pages-sections/services/services-context';
import ServicesBenefits from './pages-sections/services/services-benefits';
import CaseStudies from './pages-sections/case-studies/case-studies';
import Footer from './components-global/footer';

import { client } from '../lib/client';
import { SanityProvider } from '../context/sanity-context';

const Services = ({ data }) => {

  return (
    <SanityProvider data={data}>
      <>
        <Header/>
        <main>
          <ServicesIntro/>
          <ServicesContext/>
          <ServicesBenefits/>
          <CaseStudies/>
        </main>
        <Footer />
      </>
    </SanityProvider>
  );

}

export const getStaticProps = async () => {
  const data = await client.fetch(
    '*[_type in [ "services", "studies", "socials", "serviceBanner", "context", "benefit", "benefitsSection"] && !(_id in path(\'drafts.**\'))] | order(order asc)',
  );

  return {
    props: {
      data,
    },
  };
}

export default Services;
