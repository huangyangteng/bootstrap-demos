Page({
    data: {
        array: [
            '测试数据1', '测试数据2', '测试数据3', '测试数据4'
        ],
        index: 0,
        search_first:true,
        search_last:false
    },
    onLoad: function (options) {
        // 生命周期函数--监听页面加载

    },
    changeMode(e){
        let id = e.currentTarget.id;
        if(id==='mod1'){
            this.data.search_first = true;
        }else{
            this.data.search_first = false;
        }
        this.data.search_last = !this.data.search_first;
        this.setData({
            search_first:this.data.search_first,
            search_last:this.data.search_last
        })

        
    },
    selectTest(e) {
        this.setData({
            index: e.detail.value
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