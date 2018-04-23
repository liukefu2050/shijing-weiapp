Page({
    data: {
        bannerSwiperConfig: getApp().globalData.bannerSwiperConfig,
        serviceList: [
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_01.png",
                title:"商城小程序定制开发"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_02.png",
                title:"企业网站定制开发"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_03.png",
                title:"微信活动需求开发"
            },
            {
                icon:"http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/service_icon_04.png",
                title:"各类H5定制开发"
            }
        ],
        contactInfo: [

          {
            icon: "http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/contact_icon_2.png",
            title: "免费咨询电话",
            content: "15921359796"
          },
          {
            icon: "http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/contact_icon_3.png",
            title: "商务合作",
            content: "liukefu2020@sina.com"
          },
          {
            icon: "http://www.gzyueyun.com/m/yueyun-mini-app/assets/img/contact_icon_4.png",
            title: "工作时间",
            content: "周一~~周五 早上9:00~~下午18:00"
          }
        ],
        flowProcessList: ["需求评估","视觉设计","程序开发","测试上线"]
    },
    onLoad: function () {
        getApp().getBannerList(this);
    },
    onShareAppMessage: function () {
        return {
            title: '互联网开发定制平台',
            path: '/pages/service/service',
            success: function (res) {
                wx.showModal({
                    title: "提示",
                    content: "分享成功，感谢您的支持",
                    showCancel: false
                });
            },
            fail: function (res) {
                console.log(res.errMsg);
                if (res.errMsg.search('cancel')) return;
                
                wx.showModal({
                    title: "提示",
                    content: "分享失败，请检查网络或重试",
                    showCancel: false
                });
            }
        }
    }
});