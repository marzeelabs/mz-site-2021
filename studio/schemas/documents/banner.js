export default {
  name: 'banner',
  title: 'Banner',
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
      name: 'titleBottom',
      title: 'Title Bottom Label',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    
    
  ],
};
