var map = new BMap.Map("main1");          // 创建地图实例

var point = new BMap.Point(114.057929,22.549718);
map.centerAndZoom(point, 14);             // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(); // 允许滚轮缩放
//map.setMapStyle({style:'light'}); //设置地图主题
map.setMapStyle({styleJson:
    [
        {
            "featureType": "land",
            "elementType": "geometry",
            "stylers": {
                "color": "#005eb3"
            }
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#96b5d6"
            }
        },
        {
            "featureType": "green",
            "elementType": "all",
            "stylers": {
                "color": "#b0d3dd"
            }
        },
        {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#a6cfcf"
            }
        },
        {
            "featureType": "highway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#7dabb3"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#e7f7fc"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#b0d5d4"
            }
        },
        {
            "featureType": "local",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#7a959a"
            }
        },
        {
            "featureType": "local",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#d6e4e5"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#374a46"
            }
        },
        {
            "featureType": "highway",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#374a46"
            }
        },
        {
            "featureType": "highway",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#e9eeed"
            }
        }
    ]
}); //设置地图主题
var points =[
    {"lng":114.057929,"lat":22.540718,"count":58},
    {"lng":114.054929,"lat":22.581718,"count":68},
    {"lng":114.047929,"lat":22.542718,"count":168},
    {"lng":114.033929,"lat":22.503718,"count":68},
    {"lng":114.057929,"lat":22.540718,"count":68},
    {"lng":114.050929,"lat":22.561718,"count":48},
    {"lng":114.027929,"lat":22.572718,"count":28},
    {"lng":114.052929,"lat":22.543718,"count":68},
    {"lng":114.048929,"lat":22.540718,"count":38},
    {"lng":114.049929,"lat":22.561718,"count":98},
    {"lng":114.052929,"lat":22.542718,"count":68},
    {"lng":114.064929,"lat":22.553718,"count":108},
    {"lng":114.053929,"lat":22.540718,"count":68},
    {"lng":114.054929,"lat":22.544718,"count":18},
    {"lng":114.030929,"lat":22.540718,"count":68},
    {"lng":114.025929,"lat":22.545718,"count":88},
    {"lng":114.065929,"lat":22.542718,"count":68},
    {"lng":114.07429,"lat":22.54418,"count":68},

    {"lng":114.050929,"lat":22.5318,"count":126}];

if(!isSupportCanvas()){
    alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
}
//详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
//参数说明如下:
/* visible 热力图是否显示,默认为true
 * opacity 热力的透明度,1-100
 * radius 势力图的每个点的半径大小
 * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
 *	{
        .2:'rgb(0, 255, 255)',
        .5:'rgb(0, 110, 255)',
        .8:'rgb(100, 0, 255)'
    }
    其中 key 表示插值的位置, 0~1.
        value 为颜色值.
 */
heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":40});
map.addOverlay(heatmapOverlay);
heatmapOverlay.setDataSet({data:points,max:100});
//是否显示热力图
function openHeatmap(){
    heatmapOverlay.show();
}
function closeHeatmap(){
    heatmapOverlay.hide();
}
openHeatmap();
function setGradient(){
    /*格式如下所示:
   {
         0:'rgb(102, 255, 0)',
         .5:'rgb(255, 170, 0)',
         1:'rgb(255, 0, 0)'
   }*/
    var gradient = {};
    var colors = document.querySelectorAll("input[type='color']");
    colors = [].slice.call(colors,0);
    colors.forEach(function(ele){
        gradient[ele.getAttribute("data-key")] = ele.value;
    });
    heatmapOverlay.setOptions({"gradient":gradient});
}
//判断浏览区是否支持canvas
function isSupportCanvas(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}









var myChart2 = echarts.init(document.getElementById('main2'));

option2 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '4%',
        top:'10%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['初一', '初二', '初三', '高一', '高二', '高三'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#bbb',//左边线的颜色
                }
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color: '#bbb',
                    fontSize:9,
                }

            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color:'#bbb'
                }
            },
            axisLabel: {
                interval:0,
                    textStyle:{
                        color: '#bbb',
                        fontSize:10,
                }

            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                        color: '#90929f'//网格线
                    }
                }
        }

    ],
    series : [
        {
            name:'年级人数',
            type:'bar',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[220, 230, 330, 350, 360, 405 ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);






var myChart3 = echarts.init(document.getElementById('main3'));

option3 = {
    color: ['#5bb2ff'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '4%',
        top:'10%',
        containLabel: true

    },
    xAxis : [
        {
            type : 'category',
            data : ['初一', '初二', '初三', '高一', '高二', '高三'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#bbb',//左边线的颜色
                }
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color: '#bbb',
                    fontSize:10,
                }

            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color: '#bbb',
                    fontSize:10,
                }

            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#90929f'//网格线
                }
            }
        }
    ],
    series : [
        {
            name:'年级人数',
            type:'bar',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[18, 24, 36, 39, 33, 41 ]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3);



var option4 = {
    color:['#ff4b29','#1ed9e4','#ebff00'],

    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['重点大学','普通本科','专科'],
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:8,
        right:'2%'
    },
    grid: {
        top:'15%',
        left: '6%',
        right: '6%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2013', '2014','2015','2016','2017','2018'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#bbb',
                width:1
            }
        },
        splitLine:{
            lineStyle: {
                type:'dashed',
                color: '#aaa'//网格线
            }
        },
        axisLabel:{
            show:true,
            interval:'auto',
            formatter:'{value}%'
        }
    },
    series: [
        {
            name:'重点大学',
            type:'line',
            data:[18, 21, 20, 24, 22, 26]
        },
        {
            name:'普通本科',
            type:'line',
            data:[62, 58, 63, 52, 64, 57]
        },
        {
            name:'专科',
            type:'line',
            data:[22, 21, 27, 24, 24, 17]
        }
    ]
};
var myChart4 = echarts.init(document.getElementById('main4'));
myChart4.setOption(option4);


var option5 = {
    color:['#ff4b29','#1ed9e4','#ebff00'],

    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['国家级','省级','市级'],
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:8,
        right:'2%'
    },
    grid: {
        top:'15%',
        left: '6%',
        right: '6%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2013', '2014','2015','2016','2017','2018'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#bbb',
                width:1
            }
        },
        splitLine:{
            lineStyle: {
                type:'dashed',
                color: '#aaa'//网格线
            }
        }
    },
    series: [
        {
            name:'国家级',
            type:'line',
            data:[18, 21, 20, 24, 22, 26]
        },
        {
            name:'省级',
            type:'line',
            data:[62, 58, 63, 52, 64, 57]
        },
        {
            name:'市级',
            type:'line',
            data:[142, 151, 127, 164, 134, 177]
        }
    ]
};
var myChart5 = echarts.init(document.getElementById('main5'));
myChart5.setOption(option5);


// 老师教研弹框图表
var option6 = {
    color:['#ff4b29','#1ed9e4'],
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['备课数量','精品数量'],
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:8,
        right:'2%',
        orient:'vertical'
    },
    grid: {
        top:'15%',
        left: '6%',
        right: '6%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['17/9/21','17/10/21','17/11/21','17/12/21','18/01/21','18/03/21','18/04/21', '18/05/21'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        min:0,
        max:100,
        axisLine:{
            lineStyle:{
                color:'#bbb',
                width:1
            }
        },
        splitLine:{
            lineStyle: {
                type:'dashed',
                color: '#aaa'//网格线
            }
        }
    },
    series: [
        {
            name:'备课数量',
            type:'line',
            data:[85, 78, 89, 72, 79, 81, 83, 86]
        },
        {
            name:'精品数量',
            type:'line',
            data:[56, 64, 69, 50, 53, 55, 59, 65]
        }
    ]
};

var option7data1 = {
    name:['听课人数','互动课堂次数'],
    data:[[1156, 1432, 1564, 1265, 1689, 1775, 1865, 1596],[15, 24, 29, 19, 35, 37, 42, 28]],
    color:['#ff4b29','#1ed9e4']
}
var option7data2 = {
    name:['浏览人数','微视频数量'],
    data:[[18156, 17432, 14564, 17265, 17689, 18775, 16865, 19596],[175, 154, 131, 149, 135, 137, 142, 188]],
    color:['#488bff','#1ed9e4']
}
var option7data3 = {
    name:['参赛人数','举办大赛次数'],
    data:[[236, 202, 264, 185, 199, 215, 225, 256],[5, 4, 7, 4, 6, 7, 9, 10]],
    color:['#ffc057','#1ed9e4']
}
var option7data = option7data1;
var option7_1 = {
    color:option7data.color,
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:option7data.name,
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:8,
        top:'5%',
        right:'20%',
        orient:'horizontal'
    },
    grid: {
        top:'15%',
        left: '6%',
        right: '6%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['17/9/21','17/10/21','17/11/21','17/12/21','18/01/21','18/03/21','18/04/21', '18/05/21'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bbb',//左边线的颜色

                }
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color: '#bbb',
                    fontSize:10,
                }

            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: option7data.name[0],
            min: 0,
            max: 2000,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#aaa'//网格线
                }
            }
        },
        {
            type: 'value',
            name: option7data.name[1],
            min: 0,
            max: 50,
            interval: 5,
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#aaa'//网格线
                }
            }
        }
    ],
    series: [
        {
            name:option7data.name[0],
            type:'bar',
            barWidth:25,
            data:option7data.data[0]
        },
        {
            name:option7data.name[1],
            type:'line',
            yAxisIndex: 1,
            data:option7data.data[1]
        }
    ]
};
option7data = option7data2;
var option7_2 = {
    color:option7data.color,
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:option7data.name,
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:8,
        top:'5%',
        right:'20%',
        orient:'horizontal'
    },
    grid: {
        top:'15%',
        left: '6%',
        right: '6%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['17/9/21','17/10/21','17/11/21','17/12/21','18/01/21','18/03/21','18/04/21', '18/05/21'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bbb',//左边线的颜色

                }
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color: '#bbb',
                    fontSize:10,
                }

            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: option7data.name[0],
            /*min: 0,
            max: 2000,
            interval: 200,*/
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#aaa'//网格线
                }
            }
        },
        {
            type: 'value',
            name: option7data.name[1],
            /*min: 0,
            max: 50,
            interval: 5,*/
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#aaa'//网格线
                }
            }
        }
    ],
    series: [
        {
            name:option7data.name[0],
            type:'bar',
            barWidth:25,
            data:option7data.data[0]
        },
        {
            name:option7data.name[1],
            type:'line',
            yAxisIndex: 1,
            data:option7data.data[1]
        }
    ]
};
option7data = option7data3;
var option7_3 = {
    color:option7data.color,
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:option7data.name,
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:8,
        top:'5%',
        right:'20%',
        orient:'horizontal'
    },
    grid: {
        top:'15%',
        left: '6%',
        right: '6%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['17/9/21','17/10/21','17/11/21','17/12/21','18/01/21','18/03/21','18/04/21', '18/05/21'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bbb',//左边线的颜色

                }
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color: '#bbb',
                    fontSize:10,
                }

            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: option7data.name[0],
            /*min: 0,
            max: 2000,
            interval: 200,*/
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#aaa'//网格线
                }
            }
        },
        {
            type: 'value',
            name: option7data.name[1],
            /*min: 0,
            max: 50,
            interval: 5,*/
            axisLabel: {
                formatter: '{value}'
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#aaa'//网格线
                }
            }
        }
    ],
    series: [
        {
            name:option7data.name[0],
            type:'bar',
            barWidth:25,
            data:option7data.data[0]
        },
        {
            name:option7data.name[1],
            type:'line',
            yAxisIndex: 1,
            data:option7data.data[1]
        }
    ]
};





var myChart10 = echarts.init(document.getElementById('main10'));

// 指定图表的配置项和数据
option10 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    visualMap: {
        show: false,
        min: 0,
        max: 30,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'时长统计',
            type:'pie',
            radius : '55%',
            center: ['50%', '55%'],
            data:[
                {value:7, name:'0-1小时'},
                {value:15, name:'1-2小时'},
                {value:19, name:'2-3小时'},
                {value:24, name:'3-4小时'},
                {value:21, name:'4-5小时'},
                {value:13, name:'5-6小时'},
                {value:9, name:'6小时以上'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    show:true,
                    textStyle: {
                        color: '#999'
                    }
                }
            },
            labelLine: {
                normal: {
                    show:true,
                    lineStyle: {
                        color: '#999'
                    },
                    smooth: 0.2,
                    length: 5,
                    length2: 6
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart10.setOption(option10);



var myChart11 = echarts.init(document.getElementById('main11'));
option11 = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {d}%",
        textStyle:{
            fontSize:'10'
        }
    },
    series : [
        {
            name: '学生户籍分布',
            type: 'pie',
            radius : '80%',
            center: ['50%', '50%'],
            data:[
                {value:123, name:'南山'},
                {value:310, name:'宝安'},
                {value:234, name:'罗湖'},
                {value:350, name:'龙岗'},
                {value:600, name:'福田'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    label:{
                        show:true,
                        position:'inner',
                        formatter: '{b}',
                        textStyle:{
                            fontSize:'10px'
                        }
                    },
                }
            }
        }
    ]
};

myChart11.setOption(option11);



var myChart12 = echarts.init(document.getElementById('main12'));
option12 = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {d}%)",
        textStyle:{
            fontSize:'10'
        }
    },

    series : [
        {
            name: '学生民族分布',
            type: 'pie',
            radius : '80%',
            center: ['50%', '50%'],
            data:[
                {value:678, name:'汉族'},
                {value:324, name:'回族'},
                {value:100, name:'满族'},
                {value:125, name:'蒙古'},
                {value:92, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    label:{
                        position:'inner',
                        formatter: '{b}',
                        textStyle:{
                            fontSize:'10px'
                        }
                    },
                }
            }
        }
    ]
};

myChart12.setOption(option12);

var myChart13 = echarts.init(document.getElementById('main13'));
option13 = {
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {d}%)",
        textStyle:{
            fontSize:'10'
        }
    },

    series : [
        {
            name: '学生国籍分布',
            type: 'pie',
            radius : '80%',
            center: ['50%', '50%'],
            data:[
                {value:968, name:'中国'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                    label:{
                        position:'inner',
                        formatter: '{b}',
                        textStyle:{
                            fontSize:'10px'
                        }
                    },
                }
            }
        }
    ]
};

myChart13.setOption(option13);


//var myChart14 = echarts.init(document.getElementById('main14'));

// 指定图表的配置项和数据
option14 = {
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        top:'10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:'#bbb',
                width:1
            }
        },
        splitLine:{
            show:false
        },
        data : ["2011","2012","2013","2014","2015","2016","2017"],
    }],
    yAxis: {
        type: 'value',
        min:100,
        axisTick:{show:false},
        axisLine:{
            lineStyle:{
                color:'#bbb',
                width:1
            }
        },
        splitLine: {show: false}
    },
    series: [{
        data: [125,128,130,135,140,121,117],
        type: 'line',
        symbol: 'circle',
        symbolSize:5,
        smooth: true,
        lineStyle: {
            normal: {
                color: '#ff0069',
                width: 1,
            }
        },
        itemStyle: {
            normal: {
                color: '#ff0069'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#ff0069'
                }, {
                    offset: 1,
                    color: '#0a1e4c'
                }])
            }
        }
    }]
};
// 使用刚指定的配置项和数据显示图表。
//myChart14.setOption(option14);




var myChart15 = echarts.init(document.getElementById('main15'));
option15 = {
    tooltip:{
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        data: ['语文', '数学', '英语', '物理', '化学', '生物', '其他'],
        axisLine: {
            lineStyle: {
                color: '#bbb',//左边线的颜色
            }
        },
        axisLabel: {
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        name: "",
        nameTextStyle: {
            color: '#bbb',
            fontSize: 10
        },
        axisLine: {
            lineStyle: {
                color: '#0177d4'
            }
        },
        axisLabel: {
            color: '#bbb',
            fontSize: 10
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: '#0177d4'
            }
        },
        min:50

    },
    series: [{
        type: 'bar',
        barWidth: 18,
        label: {
            normal: {
                show: true,
                position: 'top',
                color:"#ccc"
            }
        },
        itemStyle:{
            normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00b0ff'
                }, {
                    offset: 0.8,
                    color: '#7052f4'
                }], false)
            }
        },
        data: [68, 104, 95, 64, 88, 59, 73]
    }]
};
myChart15.setOption(option15);

var myChart16 = echarts.init(document.getElementById('main16'));
var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option16 = {
    color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
    tooltip : {
        show: true,
        formatter: "{a}  : {c} ({d}%)"
    },
    /*toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },*/
    legend: {
        show:true,
        data:['本科','硕士','博士','大专','其他'],
        orient: 'vertical',
        top:2,
        right:15,
        padding:0,
        itemGap:3,
        itemWidth:15,
        itemHeight:10,
        textStyle:{
            color:'#fff',
            fontSize:10
        }
    },
    series : [

        {
            name:'本科',
            type:'pie',
            clockWise:false,
            radius : ['70%','80%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:300,
                    name:'本科'
                },
                {
                    value:100,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'硕士',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : ['60%','70%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:100,
                    name:'硕士'
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'博士',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : ['50%','60%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:30,
                    name:'博士'
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'大专',
            type:'pie',
            clockWise:false,
            radius : ['40%','50%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:18,
                    name:'大专'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }

            ]
        },
        {
            name:'其他',
            type:'pie',
            clockWise: false,
            hoverAnimation: false,
            radius : ['30%','40%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:15,
                    name:'其他'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }

    ]
};
myChart16.setOption(option16);



var myChart17 = echarts.init(document.getElementById('main17'));
option17 = {
    color: ['#027ce2', '#4ac4c1','#cd5e7e', '#e38980','#f7db88'],
    tooltip : {
        show: true,
        formatter: "{a}  : {c} ({d}%)"
    },
    legend: {
        show:true,
        data:['一级教师','二级教师','高级教师','普通教师','三级教师'],
        orient: 'vertical',
        top:2,
        right:15,
        padding:0,
        itemGap:3,
        itemWidth:15,
        itemHeight:10,
        textStyle:{
            color:'#fff',
            fontSize:10
        }
    },
    series : [

        {
            name:'一级教师',
            type:'pie',
            clockWise:false,
            radius : ['70%','80%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:250,
                    name:'一级教师'
                },
                {
                    value:100,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'二级教师',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : ['60%','70%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:120,
                    name:'二级教师'
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'高级教师',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : ['50%','60%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:40,
                    name:'高级教师'
                },
                {
                    value:30,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'普通教师',
            type:'pie',
            clockWise:false,
            radius : ['40%','50%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:20,
                    name:'特级教师'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }

            ]
        },
        {
            name:'三级教师',
            type:'pie',
            clockWise: false,
            hoverAnimation: false,
            radius : ['30%','40%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:15,
                    name:'三级教师'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        }

    ]
};
myChart17.setOption(option17);


var myChart18 = echarts.init(document.getElementById('main18'));
//  颜色集合
var colorList = [
    '#66c5d7', '#11c88c', '#989cff', '#ffa55d', '#9c7de1', '#5d9eff', '#ffdb5d', '#ee82ed', '#8fca5f', '#b995f5'
];

// 总和
var total = {
    value: '24,652',
    name: '用户总数'
}

var originalData = [{
    value: 60,
    name: '20~30岁'
}, {
    value: 110,
    name: '30~40岁'
}, {
    value: 70,
    name: "40~50岁"
}, {
    value: 31,
    name: '50~60岁'
}, {
    value: 12,
    name: '60~70岁'
}];

echarts.util.each(originalData, function(item, index) {
    item.itemStyle = {
        normal: {
            color: colorList[index]
        }
    };
});

option18 = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    title: [{
        text: total.name,
        left: '49%',
        top: '46%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize:14
        }
    }, {
        text: total.value,
        left: '49%',
        top: '56%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#cdcdcd',
            fontWeight: 'normal',
            fontSize: 12
        }
    }],
    series: [{
        hoverAnimation: true, //设置饼图默认的展开样式
        radius: ['60%', '80%'],
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 24, //选中是扇区偏移量
        clockwise: true,
        startAngle: 90,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.2)'
            }
        },
        data: originalData
    }]
};
myChart18.setOption(option18);


option19 = {
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    grid: {
        top:'10%',
        left: '5%',
        right: '5%',
        bottom: '4%',
        containLabel: true
    },

    legend: {
        data:['女生','男生','总人数'],
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:5,
        padding:[1,5],
        right:'5%',
        top:'0%'
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2010','2011','2012','2013','2014','2015','2016','2017'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bbb',//左边线的颜色

                }
            },
            axisLabel: {
                interval:0,
                textStyle:{
                    color: '#bbb',
                    fontSize:10,
                }

            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
            splitLine:{
                lineStyle: {
                    type:'dashed',
                    color: '#aaa'//网格线
                }
            }
        }
    ],
    series : [
        {
            name:'女生',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[1202, 1325, 1206, 1304, 1098, 1235, 1213, 1346]
        },
        {
            name:'男生',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[1422, 1582, 1491, 1534, 1691, 1634, 1513, 1752],
            color:'#ddggff'
        },
        {
            name:'总人数',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[2620, 2932, 2691, 2834, 2780, 2860, 2726, 3098],
            color:'#11c88c'
        }
    ]
};
/*var myChart19 = echarts.init(document.getElementById('main19'));
myChart19.setOption(option19);*/


option20 = {
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['转入人数','转出人数'],
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:15,
        itemHeight:10,
        right:'2%'
    },
    grid: {
        top:'12%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10','11','12','13','14','15','16', '17'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#bbb',
                width:1
            }
        },
        splitLine:{
            lineStyle: {
                type:'dashed',
                color: '#aaa'//网格线
            }
        }
    },
    series: [
        {
            name:'转入人数',
            type:'line',
            data:[26, 17, 34, 15, 27, 21, 34, 26],
            color:"red"
        },
        {
            name:'转出人数',
            type:'line',
            data:[24, 28, 18, 19, 21, 11, 14, 16],
            color:"yellow"
        }
    ]
};
/*var myChart20 = echarts.init(document.getElementById('main20'));
myChart20.setOption(option20);*/











window.onresize = function(){
    myChart.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    myChart7.resize();
    myChart9.resize();
    myChart10.resize();
    myChart11.resize();
    myChart12.resize();
    myChart13.resize();
    myChart14.resize();

};


function showCharts(val) {
    if(val == 1){
        var index1 = layer.open({
                type:1,
                title:false,
                area:['28%','36.2%'],
                offset:['5.4%','1%'],
                content:$(".student-alert-box"),
                shade:0,
                shadeClose:true,
                closeBtn:'1'
                });
        var myChart19 = echarts.init(document.getElementById('main19'));
        myChart19.setOption(option19,true);
        var myChart20 = echarts.init(document.getElementById('main20'));
        myChart20.setOption(option20,true);


    }
    if(val == 2){
        var index2 = layer.open({
            type:1,
            title:false,
            area:['28%','21%'],
            offset:['21%','71%'],
            content:$(".teacher-alert-box"),
            shade:0,
            shadeClose:true,
            closeBtn:'2'
        });
            var myChart14 = echarts.init(document.getElementById('main14'));
            myChart14.clear();
            myChart14.setOption(option14,true);

    }
}
$('.teacher-table .number td').click(function () {
    var index = $(this).index();
    teachTableAlert(index);
});

function teachTableAlert(val) {
    switch (val){
        case 0:
            var index0 = layer.open({
                type:1,
                title:false,
                area:['28%','32.6%'],
                offset:['65%','71%'],
                content:$(".teach-table-alert"),
                shade:0,
                shadeClose:true,
                closeBtn:'2'
            });
            $('.teach-table-alert .chart-title').text('上传资源趋势');
            var myChart6 = echarts.init(document.getElementById('main6'));
            myChart6.clear();
            myChart6.setOption(option6,true);
            break;

        case 1:{
            var index1 = layer.open({
                type:1,
                title:false,
                area:['28%','32.6%'],
                offset:['65%','71%'],
                content:$(".teach-table-alert"),
                shade:0,
                shadeClose:true,
                closeBtn:'2'
            });
            $('.teach-table-alert .chart-title').text('互动课堂趋势');
            var myChart7 = echarts.init(document.getElementById('main6'));
            myChart7.clear();
            myChart7.setOption(option7_1,true);
            break;
        }
        case 2:{
            var index1 = layer.open({
                type:1,
                title:false,
                area:['28%','32.6%'],
                offset:['65%','71%'],
                content:$(".teach-table-alert"),
                shade:0,
                shadeClose:true,
                closeBtn:'2'
            });
            $('.teach-table-alert .chart-title').text('上传微视频数量趋势');
            var myChart7 = echarts.init(document.getElementById('main6'));
            myChart7.clear();
            myChart7.setOption(option7_2,true);
            break;
        }
        case 3:{

            var index1 = layer.open({
                type:1,
                title:false,
                area:['28%','32.6%'],
                offset:['65%','71%'],
                content:$(".teach-table-alert"),
                shade:0,
                shadeClose:true,
                closeBtn:'2'
            });
            $('.teach-table-alert .chart-title').text('举办大赛情况趋势');
            var myChart7 = echarts.init(document.getElementById('main6'));
            myChart7.clear();
            myChart7.setOption(option7_3,true);
            break;
        }
        case 4:
            var index0 = layer.open({
                type:1,
                title:false,
                area:['28%','32.6%'],
                offset:['65%','71%'],
                content:$(".teach-table-alert"),
                shade:0,
                shadeClose:true,
                closeBtn:'2'
            });
            $('.teach-table-alert .chart-title').text('远程教研趋势');
            var myChart6 = echarts.init(document.getElementById('main6'));
            myChart6.clear();
            myChart6.setOption(option6,true);
            break;


        default:break;
    }

}




/*

var t = 1,d = 0;
setInterval(function () {


    if(t == 1){
        showCharts(1);
        showCharts(2);
        if(d == 0){
            teachTableAlert(0);
            d++;
        }else if(d == 1){
            teachTableAlert(1);
            d=0;
        }
        t = 0;
    }else {
        layer.closeAll('page');
        t = 1;
    }

},20000);

//定时跳转到看板2
setTimeout(function(){
    location.href = "index2.html"
},90000);
*/
