export default {
  name: 'goalCard',
  title: 'Goal Cards',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Goal Header',
      type: 'string',
    },
    {
      name: 'descTop',
      title: 'Description Top',
      type: 'string',
    },
    {
      name: 'descBottom',
      title: 'Description Bottom',
      type: 'string',
    },
    {
      name: 'pairCard',
      title: 'Pair card rendering',
      description: 'Turn on if card is pair and render a different colored card',
      type: 'boolean',
      initialValue: false
    }

  ]
}
