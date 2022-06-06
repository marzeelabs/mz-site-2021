export default {
  name: 'testimonial',
  title: 'Testemonials',
  type: 'document',
  fields: [
     {
       name: 'author',
       title: 'Testimonial Author',
       description: 'Author or Company Name',
       type: 'string',
     },
    {
      name: 'logo',
      title: 'Testimonial Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'description',
      title: 'Testimonial Description',
      type: 'string',
    },
   
  ]
}
