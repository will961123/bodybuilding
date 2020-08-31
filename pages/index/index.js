//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    menuList: [{
        name: '课程定制',
        path: '/pages/courseList/courseList',
        icon: '/img/index_img2.png'
      },
      {
        name: '教练专区',
        path: '/pages/coachList/coachList',
        icon: '/img/index_img3.png'
      },
      {
        name: '马上约课',
        path: '/pages/courseDetail/courseDetail',
        icon: '/img/index_img4.png'
      },
      {
        name: '商城',
        path: '',
        icon: '/img/index_img5.png'
      },
    ],
    shopList: [{
        bg: '/img/index_img9.png',
        name: '华康路店',
        location: '成华区华康路8号11栋1层',
        km: '3.2KM'
      },
      {
        bg: '/img/index_img10.png',
        name: '华康路店',
        location: '成华区华康路8号11栋1层',
        km: '3.3KM'
      }
    ],
    hotTopic: [{
        bg: '/img/index_img11.png',
        title: '共享健身房的现状！'
      },
      {
        bg: '/img/index_img12.png',
        title: '共享健身房的现状！'
      }
    ]
  },
  onLoad: function () {},
  navigator:function(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({
      url
    })
  },
  redirect:function(e){ 
    let url = e.currentTarget.dataset.url
    wx.redirectTo({
      url
    })
  }
})