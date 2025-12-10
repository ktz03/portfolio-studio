export default {
  name: 'portfolio',
  title: '作品集',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '作品名称',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: '分类',
      type: 'string',
      options: {
        list: [
          {title: '插画设计', value: 'illustration'},
          {title: 'UI设计', value: 'ui'},
          {title: '网页设计', value: 'web'},
          {title: '品牌设计', value: 'branding'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: '描述',
      type: 'string'
    },
    {
      name: 'coverImage',
      title: '封面图片',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: '作品图片',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: '图片名称',
              type: 'string'
            },
            {
              name: 'image',
              title: '图片',
              type: 'image',
              options: {
                hotspot: true
              }
            }
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image'
            }
          }
        }
      ]
    },
    {
      name: 'order',
      title: '排序',
      type: 'number',
      description: '数字越小越靠前'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage'
    }
  }
}