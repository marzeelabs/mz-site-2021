import React from 'react';
import { client } from '../lib/client';

import Header from './components-global/header';
import Footer from './components-global/footer';
import CaseStudy from './pages-sections/case-studies/case-study';

const CaseStudies = ({cases}) => {

  return (
    <>
      <Header/>
      <div className="homepage-case-studies__wrapper" >
       {cases?.map((study) => {
         return (
          <CaseStudy 
            key={study.id}
            caseStudy={study}
            />
         )
       })}
      </div>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async () => {
  const casesQuery = '*[_type == "studies"]';
  const cases = await client.fetch(casesQuery);

  return {
    props: {
      cases
    }
  }
}

export default CaseStudies;
