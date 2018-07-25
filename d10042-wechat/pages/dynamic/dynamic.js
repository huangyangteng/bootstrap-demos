Page({
    data: {
        dynamics:[
            {
                name:'nice',
                avatar:'../imgs/icon/avatar.png',
                tags:[
                    '22岁',
                    '175cm',
                    '本科'
                ],
                tag_imgs:[
                    '../imgs/icon/car.png',
                    '../imgs/icon/room.png',
                ],
                dynamic: '希望在这里遇到自己喜欢的然后结婚过一辈子，我知道塑造自己过程很痛快哭，但是最终会收获一个更好的自己，也会把一个更好的自己带给另一半。',
                time:'07-12',
                comments_num:1,
                stars_num:10,
            },
            {
                name:'南方',
                avatar:'../imgs/icon/avatar.png',
                tags:[
                    '22岁',
                    '175cm',
                    '本科'
                ],
                tag_imgs:[
                    '../imgs/icon/car.png',
                    '../imgs/icon/room.png',
                ],
                dynamic: '希望在这里遇到自己喜欢的然后结婚过一辈子，我知道塑造自己过程很痛快哭，但是最终会收获一个更好的自己，也会把一个更好的自己带给另一半。',
                time:'07-12',
                comments_num:1,
                stars_num:10,
            },
            {
                name:'南方',
                avatar:'../imgs/icon/avatar.png',
                tags:[
                    '22岁',
                    '175cm',
                    '本科'
                ],
                tag_imgs:[
                    '../imgs/icon/car.png',
                    '../imgs/icon/room.png',
                ],
                dynamic: '希望在这里遇到自己喜欢的然后结婚过一辈子，我知道塑造自己过程很痛快哭，但是最终会收获一个更好的自己，也会把一个更好的自己带给另一半。',
                time:'07-12',
                comments_num:1,
                stars_num:10,
            },
        ],
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