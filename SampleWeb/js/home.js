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
		var mainChart = $('#main-chart-forex');
		console.log(mainChart);
		console.log(mainChart.width() + ', ' + mainChart.height());
		createChartObject('flot-dashboard-chart', mainChart.width(), mainChart.height(), 0);
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
	
	var margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = requiredWidth - margin.left - margin.right,
            height = requiredHeight - margin.top - margin.bottom;

    var parseDate = d3.time.format("%d-%b-%y").parse;

    var x = techan.scale.financetime()
            .range([0, width]);

    var y = d3.scale.linear()
            .range([height, 0]);

    var candlestick = techan.plot.candlestick()
            .xScale(x)
            .yScale(y);
			
	var tradearrow = techan.plot.tradearrow()
            .xScale(x)
            .yScale(y)
            .orient(function(d) { return d.type.startsWith("buy") ? "up" : "down"; });

    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");
			
	var ohlcAnnotation = techan.plot.axisannotation()
            .axis(yAxis)
            .format(d3.format(',.2fs'));
	var timeAnnotation = techan.plot.axisannotation()
            .axis(xAxis)
            .format(d3.time.format('%Y-%m-%d'))
            .width(65)
            .translate([0, height]);
	

    var svg = d3.select("#" + domObjStr).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var coordsText = svg.append('text')
            .style("text-anchor", "end")
            .attr("class", "coords")
            .attr("x", width - 5)
            .attr("y", 15);
	var enter = function () {
        coordsText.style("display", "inline");
    }

    var out = function () {
        coordsText.style("display", "none");
    }

    var move = function (coords) {
        coordsText.text(
            timeAnnotation.format()(coords[0]) + ", " + ohlcAnnotation.format()(coords[1])
        );
    }
	
	var crosshair = techan.plot.crosshair()
            .xScale(x)
            .yScale(y)
            .xAnnotation(timeAnnotation)//, timeTopAnnotation])
            .yAnnotation(ohlcAnnotation)//, ohlcRightAnnotation])
            .on("enter", enter)
            .on("out", out)
            .on("move", move);
			
    svg.append("clipPath")
            .attr("id", "clip")
        .append("rect")
            .attr("x", 0)
            .attr("y", y(1))
            .attr("width", width)
            .attr("height", y(0) - y(1));

    svg.append("g")
            .attr("class", "candlestick")
            .attr("clip-path", "url(#clip)");

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")");

    svg.append("g")
            .attr("class", "y axis")
        .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Price ($)");
			
	svg.append('g')
                .attr("class", "crosshair");
                //.call(crosshair);
	//svg.select('g.crosshair').call(crosshair);
	//svg.select('g.crosshair').call(zoom);

	var draw = function () {
        svg.select("g.candlestick").call(candlestick);
        // using refresh method is more efficient as it does not perform any data joins
        // Use this if underlying data is not changing
//        svg.select("g.candlestick").call(candlestick.refresh);
        svg.select("g.x.axis").call(xAxis);
        svg.select("g.y.axis").call(yAxis);
		svg.select("g.tradearrow").call(tradearrow.refresh);
    }
			
	var zoom = d3.behavior.zoom()
            .on("zoom", draw);		
	/* svg.append("rect")
            .attr("class", "pane")
            .attr("width", width)
            .attr("height", height)
            .call(zoom); */

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

	
            //.on("mouseenter", enter)
            //.on("mouseout", out);
	var trades = [
            { date: data[0].date, type: "buy", price: data[0].low, quantity: 1000 },
            { date: data[1].date, type: "sell", price: data[1].high, quantity: 200 }//,
            //{ date: data[3].date, type: "buy", price: data[3].open, quantity: 500 },
            //{ date: data[5].date, type: "sell", price: data[5].close, quantity: 300 },
            //{ date: data[6].date, type: "buy-pending", price: data[6].low, quantity: 300 }
        ];
	svg.append("g")
                .datum(trades)
                .attr("class", "tradearrow")
                .call(tradearrow);
	
	svg.select('g.crosshair').call(crosshair).call(zoom);
    
	
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

	svg.select("g.candlestick").datum(data);
	var zoomable = x.zoomable();
	zoomable.domain([2,4]);
	
	var mid = data.length / 2;
	var standard = 960 / (500 * 200);
	var real = width / height;
	var numberSampleShow = real / standard;
	zoomable.domain([mid - numberSampleShow / 2, mid + numberSampleShow / 2]);
	
	draw();

	// Associate the zoom with the scale after a domain has been applied
	zoom.x(zoomable.clamp(false)).y(y);
};
