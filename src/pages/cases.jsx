import React, {Fragment} from 'react';
import { client } from '../lib/client';

import Header from './components-global/header';
import Footer from './components-global/footer';

const CaseStudies = ({cases}) => {

  return (
    <Fragment>
      <Header/>
      <main>
       {cases?.map((study) => {
         return (
           <div key={study.id}>
            <p>{study.description}</p>
           </div>
         )
       })}
      </main>
      <Footer/>
    </Fragment>
  )
}

export const getServerSideProps = async () => {
  const casesQuery = '*[_type == "case"]';
  const cases = await client.fetch(casesQuery);

  return {
    props: {
      cases
    }
  }
}

export default CaseStudies;
