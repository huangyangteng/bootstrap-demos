Page({
    data: {

    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载

    },
    nextStep(){
        wx.navigateTo({
            url:'../change-pass/change-pass'
        })
    },
    onShareAppMessage: function () {
        // 用户点击右上角分享
        return {
            title: '自定义', // 分享标题
            desc: '啦啦啦啦啦', // 分享描述
            path: 'path' // 分享路径
        }
    }
})