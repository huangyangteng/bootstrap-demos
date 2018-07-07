// ``````````````````````通用函数
// 获取元素并初始化
function $(dom) {
    var temp=document.getElementById(dom);
    return echarts.init(temp);
}
//设置图表
function setChart(dom,obj){
    dom.setOption(obj);
}
// ·························································

// 1. 获取所有元素
var chart_1=$('chart-1'),
    chart_2=$('chart-2'),
    chart_3=$('chart-3'),
    chart_4=$('chart-4'),
    chart_5=$('chart-5'),
    chart_6=$('chart-6'),
    chart_7=$('chart-7'),
    chart_8=$('chart-8'),
    chart_9=$('chart-9'),
    chart_a=$('chart-a');
// 2. 图表的配置
var option_1={
    title: {
        text: '标的金额',
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        
        subtext: '当月成功借款标的金额区间分布',
        
        x: 'center'
    },
    color:['#ff6364','#42e8c7','#e172fc','#92fa72'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['10万以下', '10-50万', '50-100万', '100万以上']
    },
    series: [
        {
            name: '标的金额',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 848, name: '10万以下' },
                { value: 177, name: '10-50万' },
                { value: 49, name: '50-100万' },
                { value: 31, name: '100万以上' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
var option_2={
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '标的期限区间',
        subtext: '当月成功借款标期限区间分布',
        x: 'center'
    },
    color: ['#ff6364', '#42e8c7', '#92fa72'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['1-3个月', '4-6个月', '7-12个月']
    },
    series: [
        {
            name: '期限分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 92, name: '1-3个月' },
                { value: 184, name: '4-6个月' },
                { value: 829, name: '7-12个月' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
var option_3={
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '标的利率区间',
        subtext: '当月成功借款标的利率分布',
        x: 'center'
    },
    color: ['#ff6364', '#42e8c7', '#92fa72'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['7.5-9%', '9.6%-10.2%', '11.4%']
    },
    series: [
        {
            name: '标的利率区间',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 568, name: '7.5-9%' },
                { value: 270, name: '9.6%-10.2%' },
                { value: 267, name: '11.4%' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
var option_4={
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '标的利率金额',
        subtext: '当月成功借款标的利率金额分布(单位：元)',
        x: 'center',
        
    },
    color: ['#ffad33'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['7.5-9%', '9.6%-10.2%', '11.4%'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '利率金额',
            type: 'bar',
            barWidth: '35%',
            data: [9000000,4500000,1900000]
        }
    ]
}
var option_5={
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '标的类型',
        subtext: '当月成功借款标的标的类型分布(单位：笔)',
        x: 'center'
    },
    color: ['#2a88e8'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['房易贷','车易贷'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '利率金额',
            type: 'bar',
            barWidth: '25%',
            data: [790,240]
        }
    ]
}
var option_6={
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '标的类型金额',
        subtext: '当月成功借款标的类型-金额分布(单位：元)',
        x: 'center'
    },
    color: ['#ff6364'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['房易贷', '车易贷'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '利率金额',
            type: 'bar',
            barWidth: '25%',
            data: [1000000,3800000]
        }
    ]
}
var option_8={
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '出借标的类型金额',
        subtext: '当月出借人借款标的类型分布(单位：元)',
        x: 'center'
    },
    color: ['#42e8c7'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['房易贷', '车易贷'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '出借标期限',
            type: 'bar',
            barWidth: '25%',
            data: [3800000,1000000]
        }
    ]
}
var option_7 = {
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '出借标的期限区间',
        subtext: '当月出借人借款标的类型分布',
        x: 'center'
    },
    color: ['#ff6364', '#42e8c7', '#92fa72'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['1-3月', '4-6月', '7-12月']
    },
    series: [
        {
            name: '类型分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 92, name: '1-3月' },
                { value: 184, name: '4-6月' },
                { value: 829, name: '7-12月' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
var option_9 = {
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '充值金额分布',
        subtext: '当月充值金额分布',
        x: 'center'
    },
    color: ['#ff6364', '#42e8c7', '#e172fc', '#92fa72'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['1万以下', '1-5万', '5-10万','10万以上']
    },
    series: [
        {
            name: '充值金额分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 92, name: '1万以下' },
                { value: 184, name: '1-5万' },
                { value: 829, name: '5-10万' },
                { value: 829, name: '10万以上' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
var option_a = {
    title: {
        textStyle: {
            color: '#ffad33'
        },
        subtextStyle: {
            color: '#333',
        },
        text: '提现金额',
        subtext: '当月提现金额分布',
        x: 'center'
    },
    color: ['#ff6364', '#42e8c7', '#e172fc', '#92fa72'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['1-3个月', '4-6个月', '7-12个月']
    },
    series: [
        {
            name: '提现金额分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 92, name: '1-3个月' },
                { value: 184, name: '4-6个月' },
                { value: 829, name: '7-12个月' },
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
// 3. 设置图表
setChart(chart_1,option_1);
setChart(chart_2,option_2);
setChart(chart_3,option_3);
setChart(chart_4,option_4);
setChart(chart_5,option_5);
setChart(chart_6,option_6);
setChart(chart_7,option_7);
setChart(chart_8,option_8);
setChart(chart_9,option_9);
setChart(chart_a,option_a);
