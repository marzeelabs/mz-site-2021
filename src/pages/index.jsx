import React,{Fragment} from 'react';
import Header from './components-global/header';
import HomepageIntro from './pages-sections/homepage/homepage-intro';
import HomepageInfographic from './pages-sections/homepage/homepage-infographic';
import HomepageCaseStudies from './pages-sections/homepage/homepage-case-studies';
import HomepageTestimonials from './pages-sections/homepage/homepage-testimonials';
import HomepageForm from './pages-sections/homepage/homepage-form';
import Footer from './components-global/footer';

import { client } from '../lib/client';
import { SanityProvider } from '../context/sanity-context';

const Home = ({ data }) => (
  <SanityProvider data={ data } >
    <Fragment>
      <Header />
      <main>
        <HomepageIntro />
        <HomepageInfographic />
        <HomepageCaseStudies />
        <HomepageTestimonials />
        <HomepageForm />
      </main>
      <Footer />
    </Fragment>
  </SanityProvider>
  
);

export const getStaticProps = async () => {
  // query all data from sanity
  const data = await client.fetch(
    '*[_type in ["blog", "services", "studies", "why", "idea", "banner", "testimonial","testimonialSection"] && !(_id in path(\'drafts.**\'))] | order(order asc)',
  );

  return {
    props: {
      data,
    },
  };
};

export default Home;
