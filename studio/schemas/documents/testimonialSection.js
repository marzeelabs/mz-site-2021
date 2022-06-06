export default {
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'document',
  fields: [{
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleTop',
      title: 'Title Top Label',
      type: 'string',
    },
     {
       name: 'titleMiddle',
       title: 'Title Middle Label',
       type: 'string',
     },
    {
      name: 'titleBottom',
      title: 'Title Bottom Label',
      type: 'string',
    },
  ],
};
