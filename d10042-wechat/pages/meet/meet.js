Page({
    data: {
        users:[
            {
                name:'南方',
                age:'24岁',
                height:'180cm',
                edu:'本科',
                sign:'南方南，北秋北',
                img:'../imgs/img/boy1.png'

            },
            {
                name:'南方',
                age:'24岁',
                height:'180cm',
                edu:'本科',
                sign:'南方南，北秋北',
                img:'../imgs/img/boy1.png'

            },
            {
                name:'南方',
                age:'24岁',
                height:'180cm',
                edu:'本科',
                sign:'南方南，北秋北',
                img:'../imgs/img/boy1.png'

            },
            {
                name:'南方',
                age:'24岁',
                height:'180cm',
                edu:'本科',
                sign:'南方南，北秋北',
                img:'../imgs/img/boy1.png'

            },
            {
                name:'南方',
                age:'24岁',
                height:'180cm',
                edu:'本科',
                sign:'南方南，北秋北',
                img:'../imgs/img/boy1.png'

            },
            {
                name:'南方',
                age:'24岁',
                height:'180cm',
                edu:'本科',
                sign:'南方南，北秋北',
                img:'../imgs/img/boy1.png'

            },
        ]
    },
    goUser(){
        wx.navigateTo({
            url:'../user/user'
        })
    },
    goSearch(){
        wx.navigateTo({
            url:'../search/search'
        })
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载

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