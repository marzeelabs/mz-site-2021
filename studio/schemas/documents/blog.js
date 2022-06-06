export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [{
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{
        type: 'image'
      }],
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      title: 'Blog Title',
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
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    }
  ]
}
