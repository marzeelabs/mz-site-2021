export default {
  title: 'Ideas Section',
  name: 'idea',
  type: 'document',
  fields: [{
    title: 'Title Top Label',
    name: 'titleTop',
    type: 'string'
  },
    {
      title: 'title Middle Label',
      name: 'titleMiddle',
      type: 'string',
    },
    {
      title: 'Title Bottom Label',
      name: 'titleBottom',
      type: 'string',
    },
    {
      title: 'Infographic Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Idea Tags',
      name: 'tags',
      type: 'array',
      description: 'Tags shown in the ideas section',
      of: [{
        type: 'string',
      }, ],
    },
  ],
};
