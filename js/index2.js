



var option001 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['观看微课','语文预习','数学预习','英语预习','作业总时长','阅读读物','作业修改','其他预习','背诵'],
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:15,
        itemHeight:10,
        padding:[5,0],
        right:'2%'
    },
    grid: {
        left: '3%',
        right: '3%',
        top:'10%',
        bottom: '0%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['初一','初二','初三','高一','高二','高三'],
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
            name:'观看微课',
            type:'bar',
            data:[320, 332, 360, 300, 330, 390]
        },
        {
            name:'语文预习',
            type:'bar',
            stack: '预习',
            data:[120, 132, 101, 90, 130, 200]
        },
        {
            name:'数学预习',
            type:'bar',
            stack: '预习',
            data:[220, 182, 234, 200, 260, 304]
        },
        {
            name:'英语预习',
            type:'bar',
            stack: '预习',
            data:[150, 232, 201, 190, 200, 254]
        },
        {
            name:'作业总时长',
            type:'bar',
            data:[862, 1018, 1226, 1079, 1310, 1726],
        },
        {
            name:'阅读读物',
            type:'bar',
            barWidth : 6,
            stack: '其他',
            data:[620, 732, 701, 990, 1130, 1290]
        },
        {
            name:'作业修改',
            type:'bar',
            stack: '其他',
            data:[120, 132, 290, 230, 220, 204]
        },
        {
            name:'其他预习',
            type:'bar',
            stack: '其他',
            data:[60, 72, 190, 130, 74, 190]
        },
        {
            name:'背诵',
            type:'bar',
            stack: '其他',
            data:[62, 82, 109, 120, 84, 109]
        }
    ]
};
var myChart001 = echarts.init(document.getElementById('main001'));
myChart001.setOption(option001);


//热力图
var map = new BMap.Map("main002");          // 创建地图实例

var point = new BMap.Point(114.055297,22.521461);
map.centerAndZoom(point, 16);             // 初始化地图，设置中心点坐标和地图级别
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
    {"lng":114.055824,"lat":22.521303,"count":105},
    {"lng":114.0541,"lat":22.520564,"count":100},
    {"lng":114.054171,"lat":22.519041,"count":56},
    {"lng":114.056238,"lat":22.52015,"count":78},
    {"lng":114.053812,"lat":22.52151,"count":69},
    {"lng":114.052788,"lat":22.5225,"count":76},
    {"lng":114.05316,"lat":22.519943,"count":100},
    {"lng":114.05162,"lat":35.180836,"count":98},
    {"lng":114.058411,"lat":22.518199,"count":55},
    {"lng":114.05374,"lat":22.517756,"count":71},
    {"lng":114.053938,"lat":22.524865,"count":78},
    {"lng":111.010352,"lat":22.522042,"count":95},
    {"lng":114.059885,"lat":22.518258,"count":98},
    {"lng":114.056866,"lat":22.518036,"count":99},
    {"lng":114.051735,"lat":22.522426,"count":93},
    {"lng":114.057836,"lat":22.525057,"count":51},
    {"lng":114.058494,"lat":22.523076,"count":68},
    {"lng":114.056482,"lat":22.520076,"count":109},
    {"lng":114.059123,"lat":22.519529,"count":49},
    {"lng":114.052921,"lat":22.525072,"count":103},
    {"lng":114.051897,"lat":22.519307,"count":95},
    {"lng":114.054649,"lat":22.52148,"count":87},
    {"lng":114.05411,"lat":22.51879,"count":89},
    {"lng":114.050057,"lat":22.519027,"count":78},
    {"lng":114.059669,"lat":22.523195,"count":48},
    {"lng":114.051872,"lat":22.519381,"count":98},
    {"lng":114.059608,"lat":22.524835,"count":126}];

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
heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
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
//判断浏览区是否支持canvas
function isSupportCanvas(){
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}





var option003 = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['年级','1班','2班','3班','4班'],
        orient: 'vertical',
        top:'center',
        right:'0%',
        textStyle:{
            color:'#fff'
        }
    },
    color:['#f0ff1a','#1ed9e4','#49e4a9','#8ce43d','#d8e452'],
    radar: {
        nameGap:4,
        center:['44%','50%'],
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
       /* splitArea: {
            areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
            }
        },*/
        indicator: [
            { name: '思想品德', min:40 , max: 100},
            { name: '社会实践', min:40 , max: 100},
            { name: '艺术素养', min:40 , max: 100},
            { name: '学业水平', min:40 , max: 100},
            { name: '身心健康', min:40 , max: 100}
        ]
    },
    series: [{
        name: '综合评价',
        type: 'radar',
        data : [
            {
                value : [81, 86, 83, 88, 89],
                name : '年级',
                areaStyle: {
                    normal: {
                        //color: '#82fbf4' ,
                        opacity: 0.4
                    }
                }
            },
            {
                value : [92, 95, 82, 93, 91],
                name : '1班',
            },
            {
                value : [92, 90, 78, 92, 83],
                name : '2班',
            },
            {
                value : [75, 88, 94, 85, 96],
                name : '3班',
            },
            {
                value : [85, 84, 86, 93, 89],
                name : '4班',
            }
        ],
    }]
};
var myChart003 = echarts.init(document.getElementById('main003'));
myChart003.setOption(option003);

var option00401 = {
    title: {
        text: '',
        show:false
    },
    color:['#f0ff1a','#1ed9e4','#49e4a9','#8ce43d','#d8e452'],
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['年级','1班','2班','3班','4班'],
        orient: 'vertical',
        top:'10%',
        right:'2%',
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        center:["40%","50%"],
        shape: 'circle',
        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '班级综合评价',
        type: 'radar',
        data : [
            {
                value : [81, 86, 83, 88, 89, 83],
                name : '年级',
                areaStyle: {
                    normal: {
                        //color: '#82fbf4' ,
                        opacity: 0.4
                    }
                }
            },
            {
                value : [92, 95, 82, 93, 91, 88],
                name : '1班',
            },
            {
                value : [92, 90, 78, 92, 83, 86],
                name : '2班',
            },
            {
                value : [75, 88, 94, 85, 96, 85],
                name : '3班',
            },
            {
                value : [85, 84, 86, 93, 89, 81],
                name : '4班',
            }
        ],
    }]
};
var myChart00401 = echarts.init(document.getElementById('main00401'));
myChart00401.setOption(option00401);

var option00402 = {
    title: {
        text: '',
        show:false
    },
    color:['#f0ff1a','#1ed9e4','#49e4a9','#8ce43d','#d8e452'],
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['班级','年级'],
        orient: 'vertical',
        top:'center',
        right:'20%',
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        shape: 'circle',
        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '班级综合评价',
        type: 'radar',
        data : [
            {
                value : [81, 86, 83, 88, 89],
                name : '年级',
                areaStyle: {
                    normal: {
                        //color: '#82fbf4' ,
                        opacity: 0.4
                    }
                }
            },
            {
                value : [92, 95, 82, 93, 91],
                name : '1班',
            },
            {
                value : [92, 90, 78, 92, 83],
                name : '2班',
            },
            {
                value : [75, 88, 94, 85, 96],
                name : '3班',
            },
            {
                value : [85, 84, 86, 93, 89],
                name : '4班',
            }
        ],
    }]
};
/*var myChart00402 = echarts.init(document.getElementById('main00402'));
myChart00402.setOption(option00402);*/

var option00501 = {
    color:['#e4093e','#1ed9e4','#49e4a9','#8ce43d','#d8e452'],
    title:{
        text:'思想品德',
        left:'center',
        top:'5%',
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['年级','1班','2班','3班','4班'],
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
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            rotate:40,
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        min:60,
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
            name:'年级',
            type:'line',
            data:[72, 79, 81, 83, 86]
        },
        {
            name:'1班',
            type:'line',
            data:[91, 88, 86,95, 92]
        },
        {
            name:'2班',
            type:'line',
            data:[84, 75, 81, 78, 75]
        },
        {
            name:'3班',
            type:'line',
            data:[86, 81, 79, 91, 81]
        },
        {
            name:'4班',
            type:'line',
            data:[89, 76, 78, 84, 79]
        }
    ]
};
var myChart00501 = echarts.init(document.getElementById('main00501'));
myChart00501.setOption(option00501);

var option00502 = {
    color:['#e4093e','#1ed9e4','#49e4a9','#8ce43d','#d8e452'],
    title:{
        text:'社会实践',
        left:'center',
        top:'5%',
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['年级','1班','2班','3班','4班'],
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
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            rotate:40,
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        min:60,
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
            name:'年级',
            type:'line',
            data:[72, 79, 81, 83, 86]
        },
        {
            name:'1班',
            type:'line',
            data:[91, 82, 86,95, 92]
        },
        {
            name:'2班',
            type:'line',
            data:[84, 75, 81, 88, 82]
        },
        {
            name:'3班',
            type:'line',
            data:[86, 73, 79, 91, 81]
        },
        {
            name:'4班',
            type:'line',
            data:[89, 76, 78, 84, 79]
        }
    ]
};
var myChart00502 = echarts.init(document.getElementById('main00502'));
myChart00502.setOption(option00502);

var option00503 = {
    color:['#e4093e','#1ed9e4','#49e4a9','#8ce43d','#d8e452'],
    title:{
        text:'学业水平',
        left:'center',
        top:'5%',
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['年级','1班','2班','3班','4班'],
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
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            rotate:40,
            interval:0,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        min:60,
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
            name:'年级',
            type:'line',
            data:[72, 79, 81, 83, 86]
        },
        {
            name:'1班',
            type:'line',
            data:[91, 82, 86,95, 92]
        },
        {
            name:'2班',
            type:'line',
            data:[84, 75, 81, 82, 82]
        },
        {
            name:'3班',
            type:'line',
            data:[86, 73, 71, 91, 81]
        },
        {
            name:'4班',
            type:'line',
            data:[81, 70, 73, 84, 79]
        }
    ]
};
var myChart00503 = echarts.init(document.getElementById('main00503'));
myChart00503.setOption(option00503);





option006 = {
    color:['#e4093e','#1ed9e4','#49e4a9','#8ce43d','#d8e452'],
    title:{
        text:'数学',
        left:'center',
        top:15,
        textAlign:'center',
        textStyle:{
            color:'#bbb',
            fontSize:12
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['年级','1班','2班','3班','4班'],
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:8,
        right:'2%',
        top:'2%',
        orient:'vertical'
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            interval:0,
            rotate:40,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        min:70,
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
            name:'年级',
            type:'line',
            data:[85, 83, 91, 87, 93]
        },
        {
            name:'1班',
            type:'line',
            data:[84, 81, 88, 86, 88]
        },
        {
            name:'2班',
            type:'line',
            data:[83, 84, 89, 84, 91]
        },
        {
            name:'3班',
            type:'line',
            data:[88, 80, 84, 90, 94]
        },
        {
            name:'4班',
            type:'line',
            data:[86, 87, 91, 83, 92]
        }
    ]
};
var myChart006 = echarts.init(document.getElementById('main006'));
myChart006.setOption(option006);

//首页散点图
option007 = {
    color:['#ff4b29','#1ed9e4'],
    grid: {
        left: '5%',
        right: '10%',
        bottom: '3%',
        top:'8%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                    + params.value[0] + ' '
                    + params.value[1] + ' ';
            }
            else {
                return params.seriesName + ' :<br/>'
                    + params.name + ' : '
                    + params.value + ' ';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    legend: {
        data: ['女生','男生'],
        right: '10%',
        textStyle: {
            fontSize: '10',
            color:'#bbb'
        },
    },
    xAxis :
        {
            name: "综合评价成绩",
            nameTextStyle: {
                color: '#bbb',
                fontSize: 10
            },
            nameLocation:'end',
            nameGap:5,
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value}',
                textStyle:{
                    color: '#bbb',
                    fontSize:10,
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#888',//横向网格线
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
        },
    yAxis : {
            name: "学科成绩",
            nameTextStyle: {
                color: '#bbb',
                fontSize: 12
            },
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: function (value) {
                    return value*7 - 20
                }
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#888'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#bbb',
                    width:1
                }
            },
        }
    ,
    series : [
        {
            name:'女生',
            type:'scatter',
            data: [[373.2, 51.6], [399.5, 59.0], [363.5, 49.2], [355.0, 63.0], [347.8, 53.6],
                [406.0, 59.0], [363.1, 47.6], [392.0, 69.8], [444.2, 66.8], [367.2, 75.2],
                [419.5, 55.2], [406.9, 54.2], [420.9, 62.5], [340.4, 42.0], [367.0, 50.0],
                [315.2, 49.8], [402.2, 49.2], [438.0, 73.2], [355.0, 47.8], [399.6, 68.8],
                [363.5, 50.6], [438.0, 82.5], [392.8, 57.2], [444.5, 87.8], [406.2, 72.8],
                [429.0, 54.5], [421.0, 59.8], [451.9, 67.3], [406.5, 67.8], [367.0, 47.0],
                [344.4, 46.2], [378.0, 55.0], [445.5, 83.0], [367.0, 54.4], [336.0, 45.8],
                [378.1, 53.6], [407.0, 73.2], [367.2, 52.1], [373.3, 67.9], [392.4, 56.6],
                [401.9, 62.3], [381.8, 58.5], [394.6, 54.5], [367.0, 50.2], [373.3, 60.3],
                [394.6, 58.3], [389.1, 56.2], [367.0, 50.2], [407.0, 72.9], [355.5, 59.8],
                [394.6, 61.0], [367.7, 69.1], [381.2, 55.9], [336.4, 46.5], [355.5, 54.3],
                [401.3, 54.8], [462.3, 60.7], [389.5, 60.0], [389.0, 62.0], [381.5, 60.3],
                [351.0, 52.7], [367.0, 74.3], [381.0, 62.0], [389.7, 73.1], [373.0, 80.0],
     
           
                [485.0, 95.9], [414.4, 91.4], [447.8, 81.8], [447.8, 96.8], [394.6, 69.1],
                [397.6, 82.7], [464.3, 75.5], [468.9, 79.5], [445.5, 73.6], [447.7, 91.8],
                [476.0, 84.1], [478.0, 85.9], [447.8, 81.8], [429.0, 82.5], [447.8, 80.5],
                [414.4, 70.0], [431.4, 81.8], [431.4, 84.1], [478.0, 90.5], [478.0, 91.4],
                [468.9, 89.1], [445.5, 85.0], [438.3, 69.1], [438.3, 73.6], [478.0, 80.5],
                [418.0, 82.7], [438.3, 86.4], [408.5, 67.7], [451.1, 92.7], [448.8, 93.6],
                [439.3, 70.9], [468.9, 75.0], [408.8, 93.2], [418.0, 93.2], [464.3, 77.7],
                [448.8, 61.4], [431.4, 94.1], [401.9, 75.0], [436.4, 83.6], [465.3, 85.5],
                [431.0, 73.9], [397.6, 66.8], [468.9, 87.3], [367.0, 72.3], [465.3, 88.6],
                [397.6, 75.5], [443.7, 101.4], [439.3, 91.1], [439.3, 67.3], [441.9, 77.7],
                [441.3, 81.8], [455.1, 75.5], [465.6, 84.5], [448.8, 76.6], [468.9, 85.0],
                [448.8, 102.5], [421.2, 77.3], [455.1, 71.8], [445.5, 87.9], [479.0, 94.3],
         
            ],
            /*markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }*/
        },
        {
            name:'男生',
            type:'scatter',
            data: [[431.0, 65.6], [441.3, 71.8], [488.5, 80.7], [443.5, 72.6], [472.2, 78.8],
                [465.5, 74.8], [422.0, 86.4], [422.5, 78.4], [441.0, 62.0], [423.0, 81.6],
                [458.0, 76.6], [446.8, 83.6], [485.0, 90.0], [442.0, 74.6], [432.0, 71.0],
                [423.0, 79.6], [489.7, 93.8], [415.5, 70.0], [422.0, 72.4], [442.0, 85.9],
                [442.0, 78.8], [458.5, 77.8], [420.7, 66.2], [444.0, 86.4], [422.5, 81.8],
                [450.0, 89.6], [460.3, 82.8], [460.3, 76.4], [381.5, 63.2], [424.0, 60.9],
                [470.5, 74.8], [434.5, 70.0], [476.0, 72.4], [480.2, 84.1], [420.8, 69.1],
                [409.0, 59.5], [467.0, 67.2], [409.0, 61.3], [446.8, 68.6], [421.2, 80.1],
                [447.7, 87.8], [415.4, 84.7], [417.7, 73.4], [434.3, 72.1], [462.3, 82.6],
                [467.9, 88.7], [476.0, 84.1], [446.2, 94.1], [417.1, 74.9], [397.0, 59.1],
      
       
                [397.6, 65.9], [351.2, 58.6], [434.2, 66.8], [417.1, 56.6], [378.6, 58.6],
                [367.0, 55.9], [385.1, 59.1], [468.9, 81.8], [392.4, 70.7], [385.1, 56.8],
                [446.8, 60.0], [385.1, 58.2], [434.3, 72.7], [344.9, 54.1], [361.8, 49.1],
                [418.7, 75.9], [403.9, 55.0], [373.3, 57.3], [397.6, 55.0], [385.1, 65.5],
                [434.3, 65.5], [355.5, 48.6], [381.8, 58.6], [398.6, 63.6], [387.1, 55.2],
                [387.1, 62.7], [403.9, 56.6], [378.6, 53.9], [381.5, 63.2], [444.5, 73.6],
                [403.9, 62.0], [434.3, 63.6], [363.4, 53.2], [367.0, 53.4], [411.2, 55.0],
                [378.6, 70.5], [398.6, 54.5], [378.6, 54.5], [367.7, 55.9], [367.0, 59.0],
                [355.5, 63.6], [378.6, 54.5], [336.4, 47.3], [411.2, 67.7], [387.1, 80.9],
                [418.7, 70.5], [387.1, 60.9], [411.2, 63.6], [411.2, 54.5], [412.2, 59.1],
                [373.3, 70.5], [398.6, 52.7], [398.6, 62.7], [387.1, 86.3], [378.6, 66.4],
                [345.4, 67.3], [402.9, 63.0], [412.2, 73.6], [436.2, 62.3], [436.2, 57.7],
                [367.0, 55.4], [387.1, 104.1], [425.0, 55.5], [412.2, 77.3], [367.0, 80.5],
                [399.6, 64.5], [399.6, 72.3], [399.6, 61.4], [344.9, 58.2], [378.6, 81.8],
                [436.3, 63.6], [414.4, 53.4], [355.5, 54.5], [389.1, 53.6], [367.0, 60.0],
                [425.0, 73.6], [378.6, 61.4], [427.0, 55.5], [378.6, 63.6], [373.3, 60.9],
                [351.2, 60.0], [323.9, 46.8], [405.5, 57.3], [367.0, 64.1], [436.3, 63.6],
                [405.5, 67.3], [367.0, 75.5], [419.7, 68.2], [365.6, 61.4], [355.5, 76.8],
                [444.5, 71.8], [381.4, 55.5], [367.7, 48.6], [427.0, 66.4], [381.8, 67.3]
                
                
            ],
            /*markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }*/
        }
    ]
};

var myChart007 = echarts.init(document.getElementById('main007'));
myChart007.setOption(option007);




















var option0 = {
    color:['#ff4b29','#f0ff1a'],
    title:{
        text:'高三3班数学',
        left:'center',
        top:10,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:15
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:12
        }
    },
    legend: {
        data:['班级平均分','年级平均分'],
        textStyle: {
            fontSize: 12,
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:5,
        top:'4%',
        right:'2%'
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:60,
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
            name:'班级平均分',
            type:'line',
            data:[70, 73, 81, 91, 86]
        },
        {
            name:'年级平均分',
            type:'line',
            data:[76, 80, 74, 88, 80]
        }
    ]
};


option1 = {
    color:['#ff4b29','#f0ff1a'],
    title:{
        text:'高三4班数学',
        left:'center',
        top:10,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:15
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:12
        }
    },
    legend: {
        data:['年级平均分','班级平均分'],
        textStyle: {
            fontSize: 12,
            color:'#bbb'
        },
        itemGap:5,
        itemWidth:25,
        itemHeight:5,
        top:'4%',
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:60,
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
            name:'年级平均分',
            type:'line',
            data:[72, 79, 81, 83, 86]
        },
        {
            name:'班级平均分',
            type:'line',
            data:[79, 73, 76, 84, 80]
        }
    ]
};


/*var option1 = {
    tooltip: {
        textStyle:{
            fontSize:'12'
        }
    },
    legend: {
        show:false
    },
    radar: {
        //nameGap:2,//文字距离边框的距离
        indicator: [
            { name: '教学内容', min:40 , max: 100},
            { name: '教学过程', min:40 , max: 100},
            { name: '教学方法', min:40 , max: 100},
            { name: '教学效果', min:40 , max: 100},
            { name: '教学目标', min:40 , max: 100}
        ]
    },
    series: [{
        name: '年纪学科分布情况',
        type: 'radar',
        data : [
            {
                value : [95, 86, 81, 98, 93],
                name : '王有才',
                // lineStyle: {
                //         color: '#B8D3E4'
                // },
                label: {
                    normal: {
                        show: true,
                        color:"#72e7ff"
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.8
                    }
                }

            }
        ],
        itemStyle: {
            normal: {
                color: '#a7db7c' ,
                lineStyle: {
                    //width: 2,
                    color:'#a7db7c'
                },
                areaStyle: {type: 'default'}
            }
        }
    }]
};
var myChart1 = echarts.init(document.getElementById('main1'));
myChart1.setOption(option1);
*/

var option2 = {
    color:['#ff4b29','#f0ff1a'],
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['班级','年级'],
        orient: 'vertical',
        top:'46%',
        right:10,
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        shape: 'circle',
        indicator: [
            { name: '思想品德', min:40 , max: 100},
            { name: '社会实践', min:40 , max: 100},
            { name: '艺术素养', min:40 , max: 100},
            { name: '学业水平', min:40 , max: 100},
            { name: '身心健康', min:40 , max: 100}
        ]
    },
    series: [{
        name: '班级综合评价',
        type: 'radar',
        data : [
            {
                value : [85, 86, 91, 92, 91],
                name : '班级',
                // lineStyle: {
                //         color: '#B8D3E4'
                // },
                areaStyle: {
                    type: 'default',
                    normal: {
                        opacity: 0.6
                    }
                }

            },
            {
                value : [92, 76, 86, 82, 83],
                name : '年级',
                // lineStyle: {
                //         color: '#B8D3E4'
                // },
                areaStyle: {
                    normal: {
                        opacity: 0.6
                    }
                }

            }
        ],
    }]
};



var option3 = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['班级','年级'],
        orient: 'vertical',
        top:'center',
        right:10,
        textStyle:{
            color:'#fff'
        }
    },
    color:['#ff4b29','#f0ff1a'],
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
            }
        },
        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '年纪学科分布情况',
        type: 'radar',
        data : [
            {
                value : [81, 86, 83, 95, 91, 89],
                name : '班级',
                // lineStyle: {
                //         color: '#B8D3E4'
                // },


            },
            {
                value : [92, 76, 82, 82, 83, 76],
                name : '年级',
                lineStyle: {
                       //color: '#e4884d',
                        type: 'dashed'
                },


            }
        ],
    }]
};



option4 = {
    title:[
        {
            text:'语文',
            left:'14%',
            top:'43%',
            textAlign:'center',
            textStyle:{
                color:'#fff',
                fontSize:14
            }
        },
        {
            text:'数学',
            left:'49%',
            top:'43%',
            textAlign:'center',
            textStyle:{
                color:'#fff',
                fontSize:14
            }
        },
        {
            text:'英语',
            left:'84%',
            top:'43%',
            textAlign:'center',
            textStyle:{
                color:'#fff',
                fontSize:14
            }
        },
    ],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    calculable : true,
    series : [
        {
            name:'语文',
            type:'pie',
            radius : [40, 65],
            center : ['15%', '50%'],
            // roseType : 'radius',
            label: {
                normal: {
                    show: true,
                    position:'inner',

                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },

            },
            data:[
                {value:16, name:'不及格'},
                {value:23, name:'一般'},
                {value:31, name:'优秀'}
            ]
        },
        {
            name:'数学',
            type:'pie',
            radius : [40, 65],
            center : ['50%', '50%'],
            // roseType : 'radius',
            label: {
                normal: {
                    show: true,
                    position:'inner',

                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },

            },
            data:[
                {value:19, name:'不及格'},
                {value:32, name:'一般'},
                {value:20, name:'优秀'}
            ]
        },
        {
            name:'英语',
            type:'pie',
            radius : [40, 65],
            center : ['85%', '50%'],
            // roseType : 'radius',
            label: {
                normal: {
                    show: true,
                    position:'inner',

                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#ffffff',
                },

            },
            data:[
                {value:8, name:'不及格'},
                {value:21, name:'一般'},
                {value:43, name:'优秀'}
            ]
        }
    ]
};



var option5 = {
    color:['#ff4b29','#f0ff1a'],
    title:{
        text:'语文',
        left:'center',
        top:0,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['班级平均分','年级平均分'],
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:60,
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
            name:'班级平均分',
            type:'line',
            data:[83, 86, 85, 90, 95]
        },
        {
            name:'年级平均分',
            type:'line',
            data:[79, 80, 85, 84, 91]
        }
    ]
};


option6 = {
    color:['#ff4b29','#f0ff1a'],
    title:{
        text:'数学',
        left:'center',
        top:0,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['班级平均分','年级平均分'],
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:60,
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
            name:'班级平均分',
            type:'line',
            data:[93, 85, 92, 94, 91]
        },
        {
            name:'年级平均分',
            type:'line',
            data:[87, 79, 85, 84, 88]
        }
    ]
};


option7 = {
    color:['#ff4b29','#f0ff1a'],
    title:{
        text:'英语',
        left:'center',
        top:0,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['班级平均分','年级平均分'],
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:60,
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
            name:'班级平均分',
            type:'line',
            data:[89, 85, 91, 93, 98]
        },
        {
            name:'年级平均分',
            type:'line',
            data:[88, 83, 88, 91, 83]
        }
    ]
};



var option8 = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['班级','年级'],
        orient: 'vertical',
        top:'center',
        right:10,
        textStyle:{
            color:'#fff'
        }
    },
    color:['#ff4b29','#f0ff1a'],
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },

        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '年纪学科分布情况',
        type: 'radar',
        data : [
            {
                value : [81, 86, 83, 95, 91, 89],
                name : '班级',
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }


            },
            {
                value : [92, 76, 82, 82, 83, 76],
                name : '年级',
                lineStyle: {
                    //color: '#e4884d',
                    type: 'dashed'
                },


            }
        ],
    }]
};



var option9 = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['班级','年级'],
        orient: 'vertical',
        top:'center',
        right:10,
        textStyle:{
            color:'#fff'
        }
    },
    color:['#ff4b29','#f0ff1a'],
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },

        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '年纪学科分布情况',
        type: 'radar',
        data : [
            {
                value : [89, 89, 83, 95, 91, 89],
                name : '班级',
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }


            },
            {
                value : [89, 76, 82, 85, 83, 76],
                name : '年级',
                lineStyle: {
                    //color: '#e4884d',
                    type: 'dashed'
                },


            }
        ],
    }]
};



var option10 = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['班级','年级'],
        orient: 'vertical',
        top:'center',
        right:10,
        textStyle:{
            color:'#fff'
        }
    },
    color:['#ff4b29','#f0ff1a'],
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },

        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '年纪学科分布情况',
        type: 'radar',
        data : [
            {
                value : [88, 86, 91, 95, 91, 89],
                name : '班级',
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }


            },
            {
                value : [92, 82, 86, 82, 85, 76],
                name : '年级',
                lineStyle: {
                    //color: '#e4884d',
                    type: 'dashed'
                },


            }
        ],
    }]
};



option11 = {
    color:['#ff4b29','#f0ff1a'],
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['班级正确率','年级正确率'],
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
        data: ['18/01/21','18/01/28','18/02/05','18/02/11','18/02/19','18/02/27','18/03/04', '18/03/16','18/03/22', '18/03/30', '18/04/03','18/04/10', '18/04/16'],
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#bbb',//左边线的颜色

            }
        },
        axisLabel: {
            interval:0,
            rotate:40,
            textStyle:{
                color: '#bbb',
                fontSize:10,
            }

        }
    },
    yAxis: {
        type: 'value',
        min:60,
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
            name:'班级正确率',
            type:'line',
            data:[91, 85, 92, 83, 81, 95, 71, 81, 95, 82, 83, 83, 81],

        },
        {
            name:'年级正确率',
            type:'line',
            data:[85, 79, 78, 91, 86, 88, 81, 76, 88, 81, 91, 86, 88],

        }
    ]
};




/*学生弹框——图表 start*/

var option12 = {
    title: {
        text: '',
        show:false
    },
    color:['#1ed9e4','#e4093e','#ebff00'],
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['个人','班级','年级'],
        orient: 'vertical',
        top:'center',
        right:30,
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        shape: 'circle',
        indicator: [
            { name: '思想品德', min:40 , max: 100},
            { name: '社会实践', min:40 , max: 100},
            { name: '艺术素养', min:40 , max: 100},
            { name: '学业水平', min:40 , max: 100},
            { name: '身心健康', min:40 , max: 100}
        ]
    },
    series: [{
        name: '班级综合评价',
        type: 'radar',
        data : [
            {
                value : [91, 86, 91, 92, 94],
                name : '个人',
                areaStyle: {
                    type: 'default',
                    normal: {
                        opacity: 0.6
                    }
                }

            },
            {
                value : [85, 86, 80, 82, 85],
                name : '班级',
                // lineStyle: {
                //         color: '#B8D3E4'
                // },
                /*areaStyle: {
                    type: 'default',
                    normal: {
                        color: '#f4fbfb' ,
                        opacity: 0.6
                    }
                }*/

            },
            {
                value : [84, 76, 73, 69, 83],
                name : '年级',
                // lineStyle: {
                //         color: '#B8D3E4'
                // },
               /* areaStyle: {
                    normal: {
                        color: '#82fbf4' ,
                        opacity: 0.6
                    }
                }*/

            }
        ],
    }]
};



var option13 = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['个人','班级','年级'],
        orient: 'vertical',
        top:'center',
        right:10,
        textStyle:{
            color:'#fff'
        }
    },
    color:['#1ed9e4','#e4093e','#ebff00'],
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },

        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '学科分布情况',
        type: 'radar',
        data : [
            {
                value : [84, 97, 91, 91, 95, 96],
                name : '个人',
            },
            {
                value : [86, 92, 87, 92, 91, 86],
                name : '班级',
                lineStyle: {
                    type: 'dotted'
                },


            },
            {
                value : [82, 83, 82, 82, 88, 85],
                name : '年级',
                lineStyle: {
                    //color: '#e4884d',
                    type: 'dashed'
                },


            }
        ],
    }]
};


var option14 = {
    color:['#1ed9e4','#ff4b29'],
    title:{
        text:'语文',
        left:'center',
        top:0,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['个人平均分','班级平均分'],
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:80,
        max:110,
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
            name:'个人平均分',
            type:'line',
            data:[88, 91, 88, 91, 92]
        },
        {
            name:'班级平均分',
            type:'line',
            data:[91, 86, 89, 97, 99]
        }
    ]
};


var option15 = {
    color:['#1ed9e4','#ff4b29'],
    title:{
        text:'数学',
        left:'center',
        top:0,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['个人平均分','班级平均分'],
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:80,
        max:130,
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
            name:'个人平均分',
            type:'line',
            data:[105, 104, 106, 99, 112]
        },
        {
            name:'班级平均分',
            type:'line',
            data:[98, 95, 109, 91, 102]
        }
    ]
};


var option16 = {
    color:['#1ed9e4','#ff4b29'],
    title:{
        text:'英语',
        left:'center',
        top:0,
        textAlign:'center',
        textStyle:{
            color:'#fff',
            fontSize:14
        }
    },
    tooltip: {
        trigger: 'axis',
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['个人平均分','班级平均分'],
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
        data: ['16年上学期','16年下学期','17年上学期','17年下学期', '18年上学期'],
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
        min:90,
        max:140,
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
            name:'个人平均分',
            type:'line',
            data:[105, 106, 112, 103, 109]
        },
        {
            name:'班级平均分',
            type:'line',
            data:[102, 98, 105, 97, 109]
        }
    ]
};




var option17 = {
    title: {
        text: '',
        show:false
    },
    color:['#1ed9e4','#e4093e','#ebff00'],
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['个人','班级','年级'],
        orient: 'vertical',
        top:'center',
        right:30,
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        shape: 'circle',
        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '班级综合评价',
        type: 'radar',
        data : [
            {
                value : [80, 80, 91, 92, 88, 89],
                name : '个人',
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                value : [85, 86, 80, 82, 85, 87],
                name : '班级',
            },
            {
                value : [84, 76, 79, 69, 89, 83],
                name : '年级',
            }
        ],
    }]
};


var option18 = {
    title: {
        text: '',
        show:false
    },
    color:['#1ed9e4','#e4093e','#ebff00'],
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['个人','班级','年级'],
        orient: 'vertical',
        top:'center',
        right:30,
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        shape: 'circle',
        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '班级综合评价',
        type: 'radar',
        data : [
            {
                value : [78, 97, 91, 87, 90, 89],
                name : '个人',
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                value : [85, 86, 81, 82, 89, 82],
                name : '班级',
            },
            {
                value : [84, 78, 79, 69, 83, 83],
                name : '年级',
            }
        ],
    }]
};


var option19 = {
    title: {
        text: '',
        show:false
    },
    color:['#1ed9e4','#e4093e','#ebff00'],
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['个人','班级','年级'],
        orient: 'vertical',
        top:'center',
        right:30,
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        shape: 'circle',
        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '班级综合评价',
        type: 'radar',
        data : [
            {
                value : [79, 95, 88, 92, 94, 89],
                name : '个人',
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                value : [85, 86, 80, 82, 85, 82],
                name : '班级',
            },
            {
                value : [84, 82, 79, 69, 83, 86],
                name : '年级',
            }
        ],
    }]
};


var option20 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle:{
            fontSize:'10'
        }
    },
    legend: {
        data:['观看微课','语文预习','数学预习','英语预习','作业总时长','阅读读物','作业修改','背诵','其他'],
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
        left: '3%',
        right: '4%',
        top:'10%',
        bottom: '0%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['初一','初二','初三','高一','高二','高三'],
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
            name:'观看微课',
            type:'bar',
            data:[320, 332, 360, 300, 330, 390]
        },
        {
            name:'语文预习',
            type:'bar',
            stack: '预习',
            data:[120, 132, 101, 90, 130, 200]
        },
        {
            name:'数学预习',
            type:'bar',
            stack: '预习',
            data:[220, 182, 234, 200, 260, 304]
        },
        {
            name:'英语预习',
            type:'bar',
            stack: '预习',
            data:[150, 232, 201, 190, 200, 254]
        },
        {
            name:'作业总时长',
            type:'bar',
            data:[862, 1018, 1226, 1079, 1310, 1726],
        },
        {
            name:'阅读读物',
            type:'bar',
            barWidth : 6,
            stack: '其他',
            data:[620, 732, 701, 990, 1130, 1290]
        },
        {
            name:'作业修改',
            type:'bar',
            stack: '其他',
            data:[120, 132, 290, 230, 220, 204]
        },
        {
            name:'其他预习',
            type:'bar',
            stack: '其他',
            data:[60, 72, 190, 130, 74, 190]
        },
        {
            name:'背诵',
            type:'bar',
            stack: '其他',
            data:[62, 82, 109, 120, 84, 109]
        }
    ]
};



var option21 = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['个人','班级','年级'],
        orient: 'vertical',
        top:'center',
        right:'10%',
        textStyle:{
            color:'#fff'
        }
    },
    color:['#1ed9e4','#e4093e','#ebff00'],
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        /*splitArea: {
            areaStyle: {
                color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
            }
        },*/
        indicator: [
            { name: '学习动机', min:40 , max: 100},
            { name: '学习方法与习惯', min:40 , max: 100},
            { name: '时间管理', min:40 , max: 100},
            { name: '注意力', min:40 , max: 100},
            { name: '考试心理', min:40 , max: 100},
            { name: '学习环境', min:40 , max: 100}
        ]
    },
    series: [{
        name: '学业督导评测',
        type: 'radar',
        data : [
            {
                value : [93, 99, 88, 92, 94, 89],
                name : '个人',
                areaStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                value : [81, 86, 83, 95, 91, 89],
                name : '班级',
                // lineStyle: {
                //         color: '#B8D3E4'
                // },


            },
            {
                value : [92, 76, 82, 82, 83, 76],
                name : '年级',
                lineStyle: {
                    //color: '#e4884d',
                    type: 'dashed'
                },


            }
        ],
    }]
};


var option22 = {
    //backgroundColor: '#394056',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 15,
        itemHeight: 10,
        itemGap: 13,
        data: ['学习动机', '学习方法与习惯', '时间管理', '注意力', '考试心理', '学习环境'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#ddd'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top:'10%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#bbb'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        min:40,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#bbb'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    color:['#e4093e','#1ed9e4','#89bd1b','#0088d4','#fffd1a','#c64eff','#e5e3ff'],
    series: [{
        name: '学习动机',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        data: [96.3,96.4,86.5,95.6,94.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
    }, {
        name: '学习方法与习惯',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        data: [97.3,91.2,93.3,94.0,86.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
    }, {
        name: '时间管理',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,86.8,79.7,87.6,92.9,66]
    }, {
        name: '注意力',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        data: [71.2,68.0,63.5,92.1,53.7,81.5,95.9,81.8,70.7,89.6,91.9,56]
    }, {
        name: '考试心理',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        data: [92.2,84.0,69.5,79.1,49.7,89.5,75.9,80.8,91.7,89.6,91.9,82]
    }, {
        name: '学习环境',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        data: [68.2,78.0,61.5,79.1,69.7,81.5,72.9,87.8,73.7,92.6,90.9,76]
    } ]
};


var option23 = {
    color:['#4ae400','#e445ad','#ff9500'],
    tooltip: {
        textStyle:{
            fontSize:'10'
        }},
    legend: {
        show:true,
        data:['学习态度','教师评价','课堂测试成绩'],
        orient: 'vertical',
        top:'center',
        right:10,
        textStyle:{
            color:'#fff'
        }
    },
    radar: {
        nameGap:4,
        name: {
            textStyle: {
                color: '#aaa',
                fontSize:12,
            }
        },
        shape: 'circle',
        indicator: [
            { name: '语文', min:40 , max: 100},
            { name: '数学', min:40 , max: 100},
            { name: '英语', min:40 , max: 100},
            { name: '物理', min:40 , max: 100},
            { name: '化学', min:40 , max: 100},
            { name: '生物', min:40 , max: 100}
        ]
    },
    series: [{
        name: '课堂表现',
        type: 'radar',
        data : [
            {
                value : [79, 95, 88, 90, 90, 89],
                name : '学习态度',
            },
            {
                value : [85, 86, 80, 82, 85, 82],
                name : '教师评价',
            },
            {
                value : [74, 98, 95, 97, 83, 85],
                name : '课堂测试成绩',
            }
        ],
    }]
};




/*学生弹框——图表 end*/


















function showClassDetail() {
    $(".class-detail").fadeOut(400).fadeIn(400);
}



$(".index2-left").on("click",".class-box .class-number>li",function () {
    showClassDetail(1)
})



function showTeacher(val) {

    layer.closeAll();

    setTimeout(function () {



        if(val == 1){
            var index1 = layer.open({
                type:1,
                title:false,
                area:['80.6%','80.1%'],
                offset:['10%','10%'],
                content:$(".teacher-alert"),
                shade:0.8,
                shadeClose:true,
                closeBtn:'2'
            });
            setTimeout(function(){
                var myChart0 = echarts.init(document.getElementById('main0'));myChart0.clear();
            myChart0.setOption(option0);
            var myChart1 = echarts.init(document.getElementById('main1'));myChart1.clear();
            myChart1.setOption(option1); 
            
            },200); 
           

        }
        if(val == 2){

        }

    },200)

}
$(".index2-right").on("click",".teacher-list .teacher-name",function () {
    showTeacher(1)
})

function showClass(val) {
    layer.closeAll();

    setTimeout(function () {

        if(val == 1){
            var index1 = layer.open({
                type:1,
                title:false,
                area:['96%','96%'],
                offset:['2%','2%'],
                content:$(".class-alert"),
                shade:0.8,
                shadeClose:true,
                closeBtn:'2'
            });
            setTimeout(function(){
                var myChart2 = echarts.init(document.getElementById('main2'));myChart2.clear();
                var myChart3 = echarts.init(document.getElementById('main3'));myChart3.clear();
                var myChart4 = echarts.init(document.getElementById('main4'));myChart4.clear();
                var myChart5 = echarts.init(document.getElementById('main5'));myChart5.clear();
                var myChart6 = echarts.init(document.getElementById('main6'));myChart6.clear();
                var myChart7 = echarts.init(document.getElementById('main7'));myChart7.clear();
                var myChart8 = echarts.init(document.getElementById('main8'));myChart8.clear();
                var myChart9 = echarts.init(document.getElementById('main9'));myChart9.clear();
                var myChart10 = echarts.init(document.getElementById('main10'));myChart10.clear();
                var myChart11 = echarts.init(document.getElementById('main11'));myChart11.clear();
                

                myChart2.setOption(option2,true);
                myChart3.setOption(option3,true);
                myChart4.setOption(option4,true);
                myChart5.setOption(option5,true);
                myChart6.setOption(option6,true);
                myChart7.setOption(option7,true);
                myChart8.setOption(option8,true);
                myChart9.setOption(option9,true);
                myChart10.setOption(option10,true);
                myChart11.setOption(option11,true);
            
            },200); 




        }
        if(val == 2){

        }

    },200)

}

$(".index2-right").on("click",".class-btn",function () {
    showClass(1)
})

function showStudent(Sname) {
    /*$(".class-alert .row.class-student,.class-alert .class-grade-box").hide();
    $(".class-alert .student-comment").show();
    $(".class-alert .alert-title").text("三年级2班——王雄安");
    $(".class-alert").addClass("student-alert");*/


    layer.closeAll();

    setTimeout(function () {

$(".student-alert .alert-title").text("高三3班——" + Sname);
$(".student-alert .student-name").text(Sname);

            var index1 = layer.open({
                type:1,
                title:false,
                area:['96%','96%'],
                offset:['2%','2%'],
                content:$(".student-alert"),
                shade:.8,
                shadeClose:true,
                closeBtn:'2'
            });
            setTimeout(function(){
                var myChart12 = echarts.init(document.getElementById('main12'));myChart12.clear();
                myChart12.setOption(option12,true);
                var myChart13 = echarts.init(document.getElementById('main13'));myChart13.clear();
                myChart13.setOption(option13,true);
                var myChart14 = echarts.init(document.getElementById('main14'));myChart14.clear();
                myChart14.setOption(option14,true);
                var myChart15 = echarts.init(document.getElementById('main15'));myChart15.clear();
                myChart15.setOption(option15,true);
                var myChart16 = echarts.init(document.getElementById('main16'));myChart16.clear();
                myChart16.setOption(option16,true);
                var myChart17 = echarts.init(document.getElementById('main17'));myChart17.clear();
                myChart17.setOption(option17,true);
                var myChart18 = echarts.init(document.getElementById('main18'));myChart18.clear();
                myChart18.setOption(option18,true);
                var myChart19 = echarts.init(document.getElementById('main19'));myChart19.clear();
                myChart19.setOption(option19,true);
                var myChart20 = echarts.init(document.getElementById('main20'));myChart20.clear();
                myChart20.setOption(option20,true);
                var myChart21 = echarts.init(document.getElementById('main21'));myChart21.clear();
                myChart21.setOption(option21,true);
                var myChart22 = echarts.init(document.getElementById('main22'));myChart22.clear();
                myChart22.setOption(option22,true);
                var myChart23 = echarts.init(document.getElementById('main23'));myChart23.clear();
                myChart23.setOption(option23,true);
            },200);
            





    },200)
}

$(".index2-right").on("click",".class-student>ul>li",function () {
    var Sname = $(this).find("p").text();
    showStudent(Sname)
})

/*


var alert_val = 1;
setInterval(function () {

        if(alert_val == 1){
            showClass(1)
            alert_val++;
        }else if (alert_val == 2){
            showTeacher(1)
            alert_val++;
        }else if (alert_val == 3){
            showStudent(1)
            alert_val = 0;
        }else {
        layer.closeAll('page');
            alert_val = 1;

        //刷新首页图表
        setTimeout(function(){
                         
            myChart001.clear();
            myChart001.setOption(option001,true); 
            myChart003.clear();
            myChart003.setOption(option003,true); 
            myChart00401.clear();
            myChart00401.setOption(option00401,true); 
            myChart00501.clear();
            myChart00501.setOption(option00501,true); 
            myChart00502.clear();
            myChart00502.setOption(option00502,true); 
            myChart00503.clear();
            myChart00503.setOption(option00503,true); 
            myChart006.clear();
            myChart006.setOption(option006,true); 
            myChart007.clear();
            myChart007.setOption(option007,true);  
            
        },200);
    }

},40000);

setTimeout(function(){
    location.href = "index.html"
},160000);

*/





var swiper = new Swiper('.swiper1', {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});
