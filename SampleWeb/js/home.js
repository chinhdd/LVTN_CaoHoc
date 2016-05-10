$(document).ready(function() {
	var gSystem = {};
	var initPage = function () {
		$('.chart').easyPieChart({
	        barColor: '#f8ac59',
//	                scaleColor: false,
	        scaleLength: 5,
	        lineWidth: 4,
	        size: 80
	    });

	    $('.chart2').easyPieChart({
	        barColor: '#1c84c6',
//	                scaleColor: false,
	        scaleLength: 5,
	        lineWidth: 4,
	        size: 80
	    });

	    var data2 = [
	        [gd(2012, 1, 1), 7], [gd(2012, 1, 2), 6], [gd(2012, 1, 3), 4], [gd(2012, 1, 4), 8],
	        [gd(2012, 1, 5), 9], [gd(2012, 1, 6), 7], [gd(2012, 1, 7), 5], [gd(2012, 1, 8), 4],
	        [gd(2012, 1, 9), 7], [gd(2012, 1, 10), 8], [gd(2012, 1, 11), 9], [gd(2012, 1, 12), 6],
	        [gd(2012, 1, 13), 4], [gd(2012, 1, 14), 5], [gd(2012, 1, 15), 11], [gd(2012, 1, 16), 8],
	        [gd(2012, 1, 17), 8], [gd(2012, 1, 18), 11], [gd(2012, 1, 19), 11], [gd(2012, 1, 20), 6],
	        [gd(2012, 1, 21), 6], [gd(2012, 1, 22), 8], [gd(2012, 1, 23), 11], [gd(2012, 1, 24), 13],
	        [gd(2012, 1, 25), 7], [gd(2012, 1, 26), 9], [gd(2012, 1, 27), 9], [gd(2012, 1, 28), 8],
	        [gd(2012, 1, 29), 5], [gd(2012, 1, 30), 8], [gd(2012, 1, 31), 25]
	    ];

	    var data3 = [
	        [gd(2012, 1, 1), 800], [gd(2012, 1, 2), 500], [gd(2012, 1, 3), 600], [gd(2012, 1, 4), 700],
	        [gd(2012, 1, 5), 500], [gd(2012, 1, 6), 456], [gd(2012, 1, 7), 800], [gd(2012, 1, 8), 589],
	        [gd(2012, 1, 9), 467], [gd(2012, 1, 10), 876], [gd(2012, 1, 11), 689], [gd(2012, 1, 12), 700],
	        [gd(2012, 1, 13), 500], [gd(2012, 1, 14), 600], [gd(2012, 1, 15), 700], [gd(2012, 1, 16), 786],
	        [gd(2012, 1, 17), 345], [gd(2012, 1, 18), 888], [gd(2012, 1, 19), 888], [gd(2012, 1, 20), 888],
	        [gd(2012, 1, 21), 987], [gd(2012, 1, 22), 444], [gd(2012, 1, 23), 999], [gd(2012, 1, 24), 567],
	        [gd(2012, 1, 25), 786], [gd(2012, 1, 26), 666], [gd(2012, 1, 27), 888], [gd(2012, 1, 28), 900],
	        [gd(2012, 1, 29), 178], [gd(2012, 1, 30), 555], [gd(2012, 1, 31), 993]
	    ];

	    function gd(year, month, day) {
	        return new Date(year, month - 1, day).getTime();
	    }

	    var previousPoint = null, previousLabel = null;

	    //create amcharts for forex data
//	    gSystem.chart = AmCharts.makeChart( "flot-dashboard-chart", {
//    	  "type": "serial",
//    	  "theme": "light",
//    	  "dataDateFormat":"YYYY-MM-DD hh:mm",
//    	  "valueAxes": [ {
//    	    "position": "left"
//    	  } ],
//    	  "graphs": [ {
//    	    "id": "g1",
//    	    "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
//    	    "closeField": "close",
//    	    "fillColors": "#7f8da9",
//    	    "highField": "high",
//    	    "lineColor": "#7f8da9",
//    	    "lineAlpha": 1,
//    	    "lowField": "low",
//    	    "fillAlphas": 0.9,
//    	    "negativeFillColors": "#db4c3c",
//    	    "negativeLineColor": "#db4c3c",
//    	    "openField": "open",
//    	    "title": "Price:",
//    	    "type": "candlestick",
//    	    "valueField": "close"
//    	  } ],
//    	  "chartScrollbar": {
//    	    "graph": "g1",
//    	    "graphType": "line",
//    	    "scrollbarHeight": 30
//    	  },
//    	  "chartCursor": {
//    	    "valueLineEnabled": true,
//    	    "valueLineBalloonEnabled": true
//    	  },
//    	  "categoryField": "date",
//    	  "categoryAxis": {
//    	    "parseDates": true
//    	  },
//    	  "dataProvider": [ ],
//    	  
//    	  "export": {
//    	    "enabled": true,
//    	    "position": "bottom-right"
//    	  }
//    	});
//	    gSystem.chart.addListener( "rendered", zoomChart );
//	    zoomChart();
//
//	    // this method is called when chart is first inited as we listen for "dataUpdated" event
//	    function zoomChart() {
//	      // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
//	      gSystem.chart.zoomToIndexes( gSystem.chart.dataProvider.length - 10, gSystem.chart.dataProvider.length - 1 );
//	    }
	    //$.plot($("#flot-dashboard-chart"), dataset, options);

	    var mapData = {
	        "US": 298,
	        "SA": 200,
	        "DE": 220,
	        "FR": 540,
	        "CN": 120,
	        "AU": 760,
	        "BR": 550,
	        "IN": 200,
	        "GB": 120,
	    };

	    $('#world-map').vectorMap({
	        map: 'world_mill_en',
	        backgroundColor: "transparent",
	        regionStyle: {
	            initial: {
	                fill: '#e4e4e4',
	                "fill-opacity": 0.9,
	                stroke: 'none',
	                "stroke-width": 0,
	                "stroke-opacity": 0
	            }
	        },

	        series: {
	            regions: [{
	                values: mapData,
	                scale: ["#1ab394", "#22d6b1"],
	                normalizeFunction: 'polynomial'
	            }]
	        },
	    });
	    
	    //myself
	    console.log('init page');
	};
	var myInitPage = function () {
		console.log('my init page');
		createChartObject('flot-dashboard-chart', 700, 600, 0);
		/* $.ajax({
			url : "forex/data/EURUSD",
			data : 'data',
			type : 'GET',
			contentType : "application/json",
			xhrFields: {
				  withCredentials: true
			}
		}).done(function(val) {
			console.log(val);
//			gSystem.chart.dataProvider = val;
//			gSystem.chart.validateData();
			createChartObject('flot-dashboard-chart', 700, 600, val);
		}).fail(function(val) {
			console.log(val);
		}); */
	};
	
	initPage();
	myInitPage();
});
var createChartObject = function (domObjStr, requiredWidth, requiredHeight, oriData) {
	var str = domObjStr;
    var tip = d3.select('#' + str).append('div').attr('class', 'tooltip');
    
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = requiredWidth - margin.left - margin.right,
            height = requiredHeight - margin.top - margin.bottom;

    var parseDate = d3.time.format("%d-%b-%y").parse,
            timeFormat = d3.time.format('%Y-%m-%d'),
            valueFormat = d3.format(',.2fs');

    var x = techan.scale.financetime()
            .range([0, width]);

    var y = d3.scale.linear()
            .range([height, 0]);

    var candlestick = techan.plot.candlestick()
            .xScale(x)
            .yScale(y);

    var enter = function (d) {
        valueText.style("display", "inline");
        refreshText(d);
    };

    var out = function (d) {
        valueText.style("display", "none");
    };

    var drag = function (d) {
        refreshText(d);
    };

    var refreshText = function (d) {
        valueText.text(
                "Start: [" + timeFormat(d.start.date) + ", " + valueFormat(d.start.value) +
                "] End: [" + timeFormat(d.end.date) + ", " + valueFormat(d.end.value) + "]"
        );
    };
    
    var trendline = techan.plot.trendline()
            .xScale(x)
            .yScale(y)
            .on("mouseenter", enter)
            .on("mouseout", out)
            .on("drag", drag);

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

    var svg = d3.select("#" + str).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var valueText = svg.append('text')
            .style("text-anchor", "end")
            .attr("class", "coords")
            .attr("x", width - 5)
            .attr("y", 15);

    // So it turns out that TechanJS will do the right thing with gaps. it assigns it indexes.
    var data = [
		{ date: new Date(2015, 2, 27, 9,0,0,0), open: 62.40, high: 63, low: 62, close: 63 },
		{ date: new Date(2015, 2, 28, 9,0,0,0), open: 62.40, high: 63, low: 62, close: 63 },
        { date: new Date(2015, 3, 1, 9,0,0,0), open: 62.40, high: 63, low: 62, close: 63 },
        { date: new Date(2015, 3, 1, 9,3,30,0), open: 63, high: 63.5, low: 62.5, close: 63.5 },
        { date: new Date(2015, 3, 1, 9,4,5,0), open: 63.5, high: 63.8, low: 62.8, close: 62.8 },
        { date: new Date(2015, 3, 1, 9,4,10,0), open: 62.8, high: 62.8, low: 61.8, close: 61.8 },
        { date: new Date(2015, 3, 2, 9,4,5,0), open: 63.5, high: 63.8, low: 62.8, close: 62.8 },
        { date: new Date(2015, 3, 2, 9,4,10,0), open: 63.5, high: 63.8, low: 62.8, close: 62.8 },
    ];


    var accessor = candlestick.accessor();
    data = data/*.slice(0,200)*/.map(function(d) {
        return {
            date: d.date,
            open: +d.open,
            high: +d.high,
            low: +d.low,
            close: +d.close
            //volume: +d.volume
        };
    }).sort(function(a, b) { return d3.ascending(accessor.d(a), accessor.d(b)); });
    x.domain(data.map(accessor.d));
    y.domain(techan.scale.plot.ohlc(data, accessor).domain());

    svg.append("g")
            .datum(data)
            .attr("class", "candlestick")
            .call(candlestick);

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

    svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");

    svg.append('rect')
            .datum(data)
            .attr({class: 'pane', height: height, width: width})
            .on('mousemove', function(d){
                var i = x.invertToIndex(d3.mouse(this)[0]);
                // TODO Ensure i is within range...
                console.log('Index: ' + i );
                var d = d[i];
                tip.html(function(){
                	if (typeof d === 'object') {
                        var html = "<strong>Date:</strong> " + d.date + "<br>";
                        html += "<strong>Open: </strong> " + d.open + "<br>";
                        html += "<strong>High: </strong> " + d.high + "<br>";
                        html += "<strong>Low: </strong> " + d.low + "<br>";
                        html += "<strong>Close: </strong> " + d.close + "<br>";
                        html += "<strong>RANGE: </strong> " + (d.high - d.low) + "<br>";
                        return html;
                	}
                })
                .style({
                    left: d3.event.pageX + 20 + 'px', 
                    top: d3.event.pageY - 20 + 'px',
                    display: 'block'
                });

            })
            .on('mouseout', function(){
                //tip.style('display', 'none');
            });

    // functions

    
};
