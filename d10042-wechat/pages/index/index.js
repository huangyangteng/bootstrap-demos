Page({
  data: {
    
    basicdata:{
      start:{},
      end:{},
      currentPage:0
    },
    tempData:{
      poswidth:'',
      posheight:'',
      visible: 2,
      tracking:false,//是否在滑动
      animation:false,//首图是否在启用动画效果
      opacity:1,//记录首图透明度
      swipe:false//onTransition判定条件
    },
    pages: [
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },
      {
        img: '../imgs/img/girl1.png',
        height: '160cm',
        work: '英语老师',
        star: '双子座',
        money: '6千-1万',
        edu: '硕士',
        age:'26岁',
        name:'沫沫'

      },

    ]
  },
  transform(){
    for (let i = 0; i < this.data.pages.length; i++) {
      // 非首页样式切换
      if (i > this.data.basicdata.currentPage) {
        let style = {};
        let visible = this.data.tempData.visible;
        let perIndex = i - this.data.basicdata.currentPage;
        // visible可见数量前的滑块样式
        if (i <= this.data.basicdata.currentPage + visible - 1) {
          style['opacity'] = '1'
          style['transform'] = 'translate3D(0,0,' + -1 * perIndex * 60 + 'px' + ')'
          style['zIndex'] = visible - i + this.data.basicdata.currentPage
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = 300 + 'ms'
        } else {
          style['zIndex'] = '-1'
          style['transform'] = 'translate3D(0,0,' + -1 * visible * 60 + 'px' + ')'
        }
        this.data.pages[i].style = style;
        
      } else if (i === this.data.basicdata.currentPage - 1) {//已滑动滑块释放后
        let style = {}
        // 继续执行动画
        style['transform'] = 'translate3D(' + this.data.tempData.lastPosWidth + 'px' + ',' + this.data.tempData.lastPosHeight + 'px' + ',0px)'
        style['opacity'] = '0'
        style['zIndex'] = '-1'
        style['transitionTimingFunction'] = 'ease'
        style['transitionDuration'] = 300 + 'ms'
        this.data.pages[i].style = style;
      }

      if (i == this.data.basicdata.currentPage) {
        let style = {};
        style['transform'] = 'translate3D(' + this.data.tempData.poswidth + 'px' + ',' + this.data.tempData.posheight + 'px' + ',0px)'
        style['opacity'] = 1;
        style['zIndex'] = 10;
        if (this.data.tempData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = 300 + 'ms'
        }
        this.data.pages[i].style = style;
      }


    }
    this.setData({
      pages: this.data.pages
    })
    // 首页样式切换
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    // 设置刚开始的样式 设置pages中的样式
    // 根据index设置样式
    this.transform();
    



  },
  onTransitionEnd(e){
    let that=this;

    // dom发生变化后，正在执行的动画滑动序列变为上一层
    
    for (let index = 0; index < this.data.pages.length; index++) {
      let lastPage = this.data.basicdata.currentPage === 0 ? this.data.pages.length - 1 : this.data.basicdata.currentPage - 1;
      if (this.data.tempData.swipe && index === lastPage) {//1 2 3 4 
        let style = {}
        // 继续执行动画
        style['transform'] = 'translate3D(' + that.data.tempData.lastPosWidth + 'px' + ',' + that.data.tempData.lastPosHeight + 'px' + ',0px)'
        style['opacity'] = '0'
        style['zIndex'] = '-1'
        style['transitionTimingFunction'] = 'ease'
        style['transitionDuration'] = 300 + 'ms'
        that.data.pages[lastPage].style = style;
        that.setData({
          pages: that.data.pages
        })
        this.data.tempData.animation = true;
        this.data.tempData.lastPosWidth = 0;
        this.data.tempData.lastPosHeight = 0;
        this.data.tempData.swipe = false;
        
        
      }
      
    }
    if (this.data.basicdata.currentPage == this.data.pages.length - 3) {
      this.data.basicdata.currentPage = 0;
    }
    
  },
  touchstart(e){//记录开始位置
    if(this.data.tempData.tracking){
      return;
    }
    // 是否是touch
    if(e.touches.length>1){
      this.data.tempData.tracking=false;
      return;
    }else{
      // 记录开始位置
      this.data.basicdata.start.t=new Date().getTime();
      this.data.basicdata.start.x=e.touches[0].clientX;
      this.data.basicdata.start.y=e.touches[0].clientY;

      this.data.tempData.tracking = true;
      this.data.tempData.animation = false;

      this.setData({
        basicdata:this.data.basicdata,
        tempData: this.data.tempData
      })
    }


  },
  touchmove(e){//计算滑动位置
    if(this.data.tempData.tracking && !this.data.tempData.animation){
        this.data.basicdata.end.x=e.touches[0].clientX;
        this.data.basicdata.end.y=e.touches[0].clientY;

        this.data.tempData.poswidth = this.data.basicdata.end.x - this.data.basicdata.start.x;
        this.data.tempData.posheight = this.data.basicdata.end.y - this.data.basicdata.start.y;
        this.setData({
          tempData:this.data.tempData
        })
        // 执行动画，滑动了多少移动多少
        this.transform();
        

    }
  },
  touchend(e){//滑动结束
    let that=this;
    this.data.tempData.tracking=false;
    this.data.tempData.animation=true;

    // 滑动结束，触发判断
    if(Math.abs(this.data.tempData.poswidth)>=100){//滑动距离超过100
      // 最终位移设置为x轴200像素的偏移
      let ratio = Math.abs(this.data.tempData.posheight / this.data.tempData.poswidth);
      this.data.tempData.poswidth = this.data.tempData.poswidth >= 0 ? this.data.tempData.poswidth + 200 : this.data.tempData.poswidth - 200;
      this.data.tempData.posheight = this.data.tempData.posheight >= 0 ? Math.abs(this.data.tempData.posheight * ratio) : -Math.abs(this.data.tempData.posheight * ratio);
      this.data.tempData.opacity=0;
      this.data.tempData.swipe=true;

      // 记录最终滑动距离
      this.data.tempData.lastPosWidth=this.data.tempData.poswidth;
      this.data.tempData.lastPosHeight=this.data.tempData.posheight;
      // 改变currentPage
      this.data.basicdata.currentPage === this.data.pages.length - 1 ? 0 : this.data.basicdata.currentPage++;
      console.log('当前页面是'+this.data.basicdata.currentPage);
      this.setData({
        tempData:this.data.tempData,
      })
      let lastPage=this.data.basicdata.currentPage===0?this.data.pages.length-1:this.data.basicdata.currentPage-1;
      console.log('上一个页面是' + lastPage);
      // currentPage+1引发排序变化 0 1 2
      for (let i = 0; i < this.data.pages.length; i++) {
        // 非首页样式切换
        if (i > this.data.basicdata.currentPage) {
          console.log('大于当前页面的index是'+i);
          let style = {};
          let visible = this.data.tempData.visible;
          let perIndex = i - this.data.basicdata.currentPage;
          // visible可见数量前的滑块样式
          if (i <= this.data.basicdata.currentPage + visible - 1) {
            // console.log('可见数量的滑块的index是'+i);
            style['opacity'] = '1'
            style['transform'] = 'translate3D(0,0,' + -1 * perIndex * 60 + 'px' + ')'
            style['zIndex'] = visible - i + this.data.basicdata.currentPage
            style['transitionTimingFunction'] = 'ease'
            style['transitionDuration'] = 300 + 'ms'
            this.data.pages[i].style = style;
          } else {
            // console.log('隐藏的页面的index是'+i)
            style['zIndex'] = '-1'
            style['transform'] = 'translate3D(0,0,' + -1 * visible * 60 + 'px' + ')'
            this.data.pages[i].style = style;
          }
          
        } else if (i === lastPage) {//已滑动滑块释放后
          console.log('继续执行动画的index是'+i)
          let style = {}
          // 继续执行动画
          style['transform'] = 'translate3D(' + this.data.tempData.lastPosWidth + 'px' + ',' + this.data.tempData.lastPosHeight + 'px' + ',0px)'
          style['opacity'] = '0'
          style['zIndex'] = '20'
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = 300 + 'ms'
          this.data.pages[i].style = style;
        }

        if (i == this.data.basicdata.currentPage) {
          let style = {};
          style['transform'] = 'translate3D(' + this.data.tempData.poswidth + 'px' + ',' + this.data.tempData.posheight + 'px' + ',0px)'
          style['opacity'] = 1;
          style['zIndex'] = 10;
          if (this.data.tempData.animation) {
            style['transitionTimingFunction'] = 'ease'
            style['transitionDuration'] = 300 + 'ms'
          }
          this.data.pages[i].style = style;
        }


      }
      this.setData({
        pages: this.data.pages,
      }, function () {
        // 首页置为0
        that.data.tempData.poswidth = 0;
        that.data.tempData.posheight = 0;
        that.data.tempData.opacity = 1;
        that.setData({
          tempData: that.data.tempData
        })
        // 重新设置首页的样式
        let style = {}
        style['transform'] = 'translate3D(' + that.data.tempData.poswidth + 'px' + ',' + that.data.tempData.posheight + 'px' + ',0px)'
        style['opacity'] = that.data.tempData.opacity
        style['zIndex'] = 10
        if (that.data.tempData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = 300 + 'ms'
        }
        that.data.pages[that.data.basicdata.currentPage].style = style;
        that.setData({
          pages: that.data.pages
        });

      })
      
  

    }else{//不满足条件则划入
      this.data.tempData.poswidth=0;
      this.data.tempData.posheight=0;
      this.data.tempData.swipe=false;
      this.setData({
        tempData: this.data.tempData
      })
      this.transform();
    }
    
    

  },
  prev(){
    this.data.tempData.poswidth=-200;
    this.touchend();
  },
  next(){
    this.data.tempData.poswidth = 200;
    this.touchend();
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