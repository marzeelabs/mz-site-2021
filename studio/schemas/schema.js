import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blog from './documents/blog';
import services from './documents/services';
import caseStudy from './documents/caseStudy';
import ideas from './documents/ideas';
import banner from './documents/banner';
import whySection from './documents/whySection';
import testimonials from './documents/testimonials';
import testimonialSection from './documents/testimonialSection';
import siteSocials from './documents/siteSocials';
import servicesBanner from './documents/servicesBanner';
import serviceContext from './documents/serviceContext';
import benefit from './documents/benefit';
import benefitsSection from './documents/benefitsSection';

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    blog,
    services,
    caseStudy,
    ideas,
    banner,
    testimonials,
    testimonialSection,
    whySection,
    siteSocials,
    servicesBanner,
    serviceContext,
    benefit,
    benefitsSection
  ]),
})
