export default {
  name: 'serviceBanner',
  title: 'Service Banner',
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
      name: 'subtitleTop',
      title: 'Subtitle Top Label',
      type: 'string',
    },
    {
      name: 'regularA',
      title: 'Title Bottom Label Regular A',
      type: 'string',
    },
    {
      name: 'strongA',
      title: 'Title Bottom Label Strong A',
      type: 'string',
    },
    {
      name: 'regularB',
      title: 'Title Bottom Label Regular B',
      type: 'string',
    }, {
      name: 'strongB',
      title: 'Title Bottom Label Strong B',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'CTA Button Label',
      type: 'string',
    },
    {
      name: 'link',
      title: 'CTA Button Link',
      type: 'url',
    },

  ],
};
