$(document).ready(function () {

	window.onload = function () {

		var outageData = [{
				label: "Astoria",
				times: [{
					"starting_time": 1543122000000,
					"ending_time": 1543640400000
				}]
			},
			{
				label: "Baruch Houses",
				times: [{
					"starting_time": 1543381200000,
					"ending_time": 1543554000000
				}]
			},
			{
				label: "Boulevard",
				times: [{
					"starting_time": 1542344400000,
					"ending_time": 1542603600000
				}]
			},
			{
				label: "Bronx River",
				times: [{
					"starting_time": 1543726800000,
					"ending_time": 1543899600000
				}]
			},
			{
				label: "Cooper Park",
				times: [{
					"starting_time": 1543899600000,
					"ending_time": 1543986000000
				}]
			},
			{
				label: "Cypress Hills",
				times: [{
					"starting_time": 1543294800000,
					"ending_time": 1543640400000
				}]
			},
			{
				label: "Glenwood",
				times: [{
					"starting_time": 1543986000000,
					"ending_time": 1544072400000
				}]
			},
			{
				label: "Gowanus",
				times: [{
					"starting_time": 1543554000000,
					"ending_time": 1543640400000
				}]
			},
			{
				label: "Independence",
				times: [{
					"starting_time": 1542776400000,
					"ending_time": 1543554000000
				}]
			},
			{
				label: "Ingersoll",
				times: [{
					"starting_time": 1542949200000,
					"ending_time": 1543467600000
				}]
			},
			{
				label: "Jefferson",
				times: [{
					"starting_time": 1543726800000,
					"ending_time": 1543899600000
				}]
			},
			{
				label: "Marcy",
				times: [{
					"starting_time": 1541912400000,
					"ending_time": 1542603600000
				}]
			},
			{
				label: "Marlboro",
				times: [{
					"starting_time": 1542690000000,
					"ending_time": 1542776400000
				}]
			},
			{
				label: "O'Dwyer Gardens",
				times: [{
					"starting_time": 1542517200000,
					"ending_time": 1542690000000
				}]
			},
			{
				label: "Park Avenue",
				times: [{
					"starting_time": 1543986000000,
					"ending_time": 1544072400000
				}]
			},
			{
				label: "Pomonok",
				times: [{
						"starting_time": 1543122000000,
						"ending_time": 1543294800000
					},
					{
						"starting_time": 1544331600000,
						"ending_time": 1544418000000
					}
				]
			},
			{
				label: "Ravenswood",
				times: [{
					"starting_time": 1543554000000,
					"ending_time": 1543813200000
				}]
			},
			{
				label: "Red Hook East",
				times: [{
					"starting_time": 1543294800000,
					"ending_time": 1543640400000
				}]
			},
			{
				label: "Red Hook West",
				times: [{
						"starting_time": 1542430800000,
						"ending_time": 1542603600000
					},
					{
						"starting_time": 1543381200000,
						"ending_time": 1543467600000
					},
					{
						"starting_time": 1543467600000,
						"ending_time": 1543640400000
					}
				]
			},
			{
				label: "Sheepshead Bay",
				times: [{
					"starting_time": 1542085200000,
					"ending_time": 1542690000000
				}]
			},
			{
				label: "South Beach",
				times: [{
					"starting_time": 1542344400000,
					"ending_time": 1542603600000
				}]
			},
			{
				label: "South Jamaica II",
				times: [{
					"starting_time": 1543208400000,
					"ending_time": 1543640400000
				}]
			},
			{
				label: "Throggs Neck",
				times: [{
					"starting_time": 1542085200000,
					"ending_time": 1542949200000
				}]
			},
			{
				label: "Tompkins",
				times: [{
					"starting_time": 1542258000000,
					"ending_time": 1542603600000
				}]
			},
			{
				label: "Washington Heights",
				times: [{
					"starting_time": 1543986000000,
					"ending_time": 1544072400000
				}]
			},
			{
				label: "West Brighton I",
				times: [{
					"starting_time": 1543726800000,
					"ending_time": 1543899600000
				}]
			},
			{
				label: "Woodside",
				times: [{
					"starting_time": 1543899600000,
					"ending_time": 1543986000000
				}]
			}
		];

		var width = 750;

		function timelineAxisTop() {
			var chart = d3.timeline()
				.showAxisTop()
				.tickFormat({
					format: d3.time.format("%m/%d"),
					tickTime: d3.time.days,
					tickInterval: 2,
					tickSize: 3
				})
				.stack()
				.margin({
					left: 100,
					right: 0,
					top: 0,
					bottom: 0
				});

			var svg = d3.select("#timelineAxisTop").append("svg").attr("width", width)
				.datum(outageData).call(chart);
		}

		timelineAxisTop();
	}

});