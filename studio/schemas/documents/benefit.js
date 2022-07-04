export default {
  name: 'benefit',
  title: 'Benefit Cards',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'bp',
      title: 'Bullet Points',
      type: 'array',
      of: [{
        type: 'string',
      }]
    }

  ]
}
