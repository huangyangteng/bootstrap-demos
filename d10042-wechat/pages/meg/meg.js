Page({
    data: {
        megs:[
            {
                id:1,
                name:'南方',
                avatar:'../imgs/icon/avatar.png',
                meg:'在吗在吗今晚去不去玩？',
                time:'19:29',
                show:true
            },
            {
                id:2,
                name:'南方',
                avatar:'../imgs/icon/avatar.png',
                meg:'在吗在吗今晚去不去玩？',
                time:'20:29'
            },
        ]
    },
    touchstart(e){
        let index = e.currentTarget.id;
        let megs=this.data.megs;
        if (typeof megs[index].show==='undefined'){
            megs[index].show = true;

        }else{
            megs[index].show = !megs[index].show;
        }
        this.setData({
            megs
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