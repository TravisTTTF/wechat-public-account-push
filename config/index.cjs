/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  USE_PASSAGE: 'push-deer',
  APP_ID: 'wx84ecf46d1db98b41',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '84f4b1c7c3f21fbb6cbaf70ca8406d6c',

  
  CITY: '墨尔本',

  USERS: [
    {
      // 想要发送的人的名字
      name: '绮绮宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBsSt6KADj6E_eZn_k3SiWhjm-cU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'n7QekJPRSZKg_fgiV6_PFlBUI8HpWt_j4te4AFAaRiY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '绮绮宝', year: '1998', date: '10-30',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '05-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'n7QekJPRSZKg_fgiV6_PFlBUI8HpWt_j4te4AFAaRiY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBsSt6KADj6E_eZn_k3SiWhjm-cU',
    }
  ],

}

module.exports = USER_CONFIG

