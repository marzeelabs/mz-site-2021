export default {
  name: 'studies',
  title: 'Case Studies',
  type: 'document',
  fields: [{
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [{
        type: 'string',
      }]
    }
    
  ]
}
