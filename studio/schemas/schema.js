import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blog from './documents/blog';
import services from './documents/services';
import studies from './documents/studies';
import whySection from './documents/whySection';
import ideas from './documents/ideas';
import banner from './documents/banner';
import testimonials from './documents/testimonials';
import testimonialSection from './documents/testimonialSection';

export default createSchema({
  name: 'default',
  
  types: schemaTypes.concat([
    blog,
    services,
    studies,
    whySection,
    ideas,
    banner,
    testimonials,
    testimonialSection
  ]),
})
