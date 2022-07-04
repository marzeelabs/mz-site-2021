export default {
  name: 'aboutIntro',
  title: 'About Intro',
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
      name: 'header',
      title: 'About Header',
      type: 'string',
    },
   {
     name: 'leftDesc',
     title: 'Description Left',
     type: 'array',
     of: [{
       type: 'block'
     }]
   },
  {
    name: 'rightDesc',
    title: 'Description Right',
    type: 'array',
    of: [{
      type: 'block'
    }]
  }
  ],
};
