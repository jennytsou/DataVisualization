
var margin = {top: 50, right: 350, bottom: 50, left: 200};
var width = 1500 - margin.left - margin.right;
var height = 420 - margin.top - margin.bottom;

// Features of the annotation between 1960 and 1990
		const annotation1 = [
			// aged 0-14
			{		
				note: {						
					label: "Started to decline in 1967",
					title: "Child Age Pop.",
					align: "middle"
				},
				type: d3.annotationCalloutCircle,
				subject: {
					radius: 10,
					radiusPadding: 10
					},

				color: ["#bf360c"], x: margin.left + 175, y: margin.top + 95, dy: 40, dx: 20
			},
			// aged 15-64
			{		
				note: {				
					label: "Started to increase in 1968",
					title: "Working-Age Pop.",
					align: "middle"
				},
				type: d3.annotationCalloutCircle,
				subject: {
					radius: 10,
					radiusPadding: 10
					},
						
				color: ["#1b5e20"], x: margin.left + 200, y: 48 , dy: -40, dx: 20
			},
			// aged 65 or over
			{	
				note: {
					label: "The percentage point change from 1960 to 1990 was 1.19.",
					title: "Aging Society",
					align: "middle",
					wrap: 200, 
					padding: 10
				},
		
				color: ["#26399c"], x: width - 300, y: height - 30, dy: -20, dx: 20
			},
	
		]

		// Features of the annotation between 1991 and 2010
		const annotation2 = [
			{		// aged 0-14
				note: {
					label: "The percentage point change from 2001 to 2010 was -2.8.",
					title: "Child Age Pop.",
					wrap: 200
				},
				type: d3.annotationCalloutRect,
				subject: {
					width: 150,
					height: 40
					},
				
				color: ["#f4511e"], x: width-140, y: height - 150, dy: 60, dx: 10
			},
		
			{		// aged 15-64
				note: {
					label: "the percentage point change from 2001 to 2010 was 2.2.",
					title: "Working-Age Pop.",
					align: "start",
					wrap: 200
				},
				type: d3.annotationCalloutRect,
				subject: {
					width: 150,
					height: 40
					},
				color: ["#43a047"], x: width-140, y: -10 , dy: 60, dx: 20
			},
			// aged 65 or over
			{	
				note: {
					label: "The proportion continue to rise, and the percentage point change from 1960 to 2010 was 2.6.",
					title: "Aging Society",
					align: "middle",
					wrap: 300, 
					padding: 10
				},
		
				color: ["#3344bb"], x: width - 350, y: height - 30, dy: -20, dx: -20
			},
		]
		
		// Features of the annotation between 2011 and 2021
		const annotation3 = [
			// aged 0-14
			{
				note: {	
					label: "The percentage point from 2011 to 2021 was -1.523.",
					title: "Child Age Pop.",
					align: "middle",
					wrap: 200
				},
				type: d3.annotationCalloutRect,
				subject: {
					width: 150,
					height: 40
					},
				connector: {
					end: "arrow",
					type: "curve",
					points: 3,
					lineType: "horizontal"
				},
						
				color: ["#ff8a65"], x: width-130, y: height - 140  , dy: -60, dx: -30
			},
			// aged 15-64
			{
				note: {		
					label: "Started to decline in 2015",
					title: "Working-Age Pop.",
					align: "middle",
					wrap: 200
				},
				connector: {
					end: "arrow",
					type: "line",
					points: 3,
					lineType: "horizontal"
				},
						
				color: ["#81c784"], x: width-73, y: 8 , dy: 30, dx: 20
			},
			// aged 65 or over
			{
				note: {
					label: "The proportion of the population was 6.16% in 1990.",
					title: "Aging Society",
					align: "middle",
					wrap: 200
				},
				connector: {
					end: "arrow",
					type: "line",
					points: 3,
					lineType: "horizontal"
				},
				color: ["#7986db"], x: width/2 + 95, y: height - 20, dy: -30, dx: -20
			},
			{
				note: {
					label: "The percentage increased from 6% in 1990 to 9% in 2019.",
					title: "Aging Society",
					align: "start",
					wrap: 200
				},
				connector: {
					end: "arrow",
					type: "curve",
					points: 3,
					lineType: "horizontal"
				},
				color: ["#7986db"], x: width-25, y: height - 30, dy: -20, dx: 70
			},
			
		]