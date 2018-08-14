

// -------------辅助js 可删除

//如果a标签的href属性为空，那么设置为javascript::
var all_link = Array.prototype.slice.apply($('a'));
all_link.forEach(item => {
    if(item.href==''){
        item.href = 'javascript:;'
    }
});





// banner轮播
new Swiper('.swiper-container', {
    // autoplay: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',

    },
})
// process-step1 轮播
new Swiper('#step1-banner', {
    autoplay: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',

    },
})
// process-step1 轮播
new Swiper('#step2-banner', {
    autoplay: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',

    },
})
// process-step3 轮播
new Swiper('#step3-banner', {
    autoplay: true,
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',

    },
})


// toggle panel
var toggle_panel_btns = $('.toggle-panel');
var panels = $('.panel');
toggle_panel_btns.click(function (e) {
    var _this = $(this);
    // 切换panel
    _this.next().find('.panel').slideToggle('1000');
    // 更改header
    var icon = _this.find('.icon'),
        text = _this.find('.js-pack-up'),
        arrow = _this.find('.js-pack-up').next();

    if (icon.hasClass('active')) {
        icon.removeClass('active');
    } else {
        icon.addClass('active');
    }

    if (text.html() === '收起') {
        text.html('展开');
    } else {
        text.html('收起');
    }
    if (arrow.hasClass('js-reverse')) {
        arrow.removeClass('js-reverse');
    } else {
        arrow.addClass('js-reverse');
    }
})