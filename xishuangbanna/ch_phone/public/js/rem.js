(function () {
    // 基准大小
    var baseSize = 16;
    // 设置 rem 函数
    function setRem() {
        // 当前页面宽度相对于 640 宽的缩放比例，可根据自己需要修改。
        var scale = document.documentElement.clientWidth / 640;
        // 设置页面根节点字体大小
        document.documentElement.style.fontSize = (baseSize * Math.min(scale, 5)) + 'px'
    }
    // 初始化
    setRem();
    // 改变窗口大小时重新设置rem
    window.onresize = function () {
        setRem()
    }
    console.log(document.documentElement.style.fontSize)
}());