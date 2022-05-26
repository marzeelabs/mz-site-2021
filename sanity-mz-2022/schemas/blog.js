export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image'}],
      options: {
        hotspot: true
      }
    },
    {
      name: 'blogTitle',
      title: 'BlogTitle',
      type: 'string',
    },
    {
      name: 'blogDescription',
      title: 'BlogDescription',
      type: 'string',
    },
    {
      name: 'blogTag',
      title: 'BlogTag',
      type: 'array',
      of: [{type: 'string',}]
    },
    {
      name: 'blogAuthor',
      title: 'BlogAuthor',
      type: 'string',
    },
    {
      name: 'authorImage',
      title: 'AuthorImage',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      name: 'blogDate',
      title: 'BlogDate',
      type: 'date'
    },
  ]
}
