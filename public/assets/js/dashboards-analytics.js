!function(){var o=config.colors.cardColor,r=config.colors.textMuted,t=config.colors.borderColor,e=config.colors.chartBgColor,s=(config.colors.bodyColor,document.querySelector("#weeklyOverviewChart")),t={chart:{type:"bar",height:200,offsetY:-9,offsetX:-16,parentHeightOffset:0,toolbar:{show:!1}},series:[{name:"Sales",data:[32,55,45,75,55,35,70]}],colors:[e],plotOptions:{bar:{borderRadius:8,columnWidth:"30%",endingShape:"rounded",startingShape:"rounded",colors:{ranges:[{from:75,to:80,color:config.colors.primary},{from:0,to:73,color:e}]}}},dataLabels:{enabled:!1},legend:{show:!1},grid:{strokeDashArray:8,borderColor:t,padding:{bottom:-10}},xaxis:{axisTicks:{show:!1},axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1},axisBorder:{show:!1},categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tickPlacement:"on",labels:{show:!1}},yaxis:{min:0,max:90,show:!0,tickAmount:3,labels:{formatter:function(o){return parseInt(o)+"K"},style:{fontSize:"13px",fontFamily:"Inter",colors:r}}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:1500,options:{plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1200,options:{plotOptions:{bar:{columnWidth:"30%"}}}},{breakpoint:815,options:{plotOptions:{bar:{borderRadius:5}}}},{breakpoint:768,options:{plotOptions:{bar:{borderRadius:10,columnWidth:"20%"}}}},{breakpoint:568,options:{plotOptions:{bar:{borderRadius:8,columnWidth:"30%"}}}},{breakpoint:410,options:{plotOptions:{bar:{columnWidth:"50%"}}}}]},s=(null!==s&&new ApexCharts(s,t).render(),document.querySelector("#totalProfitLineChart")),t={chart:{height:90,type:"line",parentHeightOffset:0,toolbar:{show:!1}},grid:{borderColor:r,strokeDashArray:6,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-15,left:-7,right:9,bottom:-15}},colors:[config.colors.primary],stroke:{width:3},series:[{data:[0,20,5,30,15,45]}],tooltip:{shared:!1,intersect:!0,x:{show:!1}},tooltip:{enabled:!1},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},markers:{size:6,strokeWidth:3,strokeWidth:3,strokeColors:"transparent",colors:["transparent"],discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:o,strokeColor:config.colors.primary,size:6,shape:"circle"}],hover:{size:7}},responsive:[{breakpoint:1350,options:{chart:{height:80}}},{breakpoint:1200,options:{chart:{height:100}}},{breakpoint:768,options:{chart:{height:110}}}]},r=(null!==s&&new ApexCharts(s,t).render(),document.querySelector("#sessionsColumnChart")),o={chart:{height:90,parentHeightOffset:0,type:"bar",toolbar:{show:!1}},tooltip:{enabled:!1},plotOptions:{bar:{barHeight:"100%",columnWidth:"20px",startingShape:"rounded",endingShape:"rounded",borderRadius:4,colors:{ranges:[{from:25,to:32,color:config.colors.danger},{from:60,to:75,color:config.colors.primary},{from:45,to:50,color:config.colors.danger},{from:35,to:42,color:config.colors.primary}],backgroundBarColors:[e,e,e,e,e],backgroundBarRadius:4}}},grid:{show:!1,padding:{top:-10,left:-10,bottom:-15}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},series:[{data:[30,70,50,40,60]}],responsive:[{breakpoint:1350,options:{chart:{height:80},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:100},plotOptions:{bar:{columnWidth:"20%"}}}},{breakpoint:768,options:{chart:{height:110},plotOptions:{bar:{columnWidth:"10%"}}}},{breakpoint:480,options:{plotOptions:{bar:{columnWidth:"20%"}}}}]};null!==r&&new ApexCharts(r,o).render()}();