export default {
  title: 'About List Section',
  name: 'aboutList',
  type: 'document',
  fields: [
    {
      title: 'Left Side Image',
      name: 'imageLeft',
      type: 'image'
    },
     {
       title: 'Right Side Image',
       name: 'imageRight',
       type: 'image'
     },
    {
      title: 'List Left',
      name: 'left',
      type: 'array',
      description: 'Left side List Items',
      of: [{
        type: 'string',
      }, ],
    },
     {
       title: 'List Right',
       name: 'right',
       type: 'array',
       description: 'Right side List Items',
       of: [{
         type: 'string',
       }, ],
     },
  ],
};
