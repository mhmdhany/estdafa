// Mixitup Library
var mixer = mixitup('.cont');


// Maps
am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);
    
    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Miller();
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;
    
    
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0);
    
    // Add image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{title}";
    imageSeries.mapImages.template.propertyFields.url = "url";
    
    var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 3;
    circle.propertyFields.fill = "color";
    
    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 3;
    circle2.propertyFields.fill = "color";
    
    
    circle2.events.on("inited", function(event){
      animateBullet(event.target);
    })
    
    
    function animateBullet(circle) {
        var animation = circle.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function(event){
          animateBullet(event.target.object);
        })
    }

    //stop wheelable 
    chart.chartContainer.wheelable = false;

    //hide watermark
    $("g[aria-labelledby]").hide();


    var colorSet = new am4core.ColorSet();
    
    imageSeries.data = [ {
      "title": "Paris",
      "latitude": 48.8567,
      "longitude": 2.3510,
      "color":colorSet.next()
    }, {
      "title": "Moscow",
      "latitude": 55.7558,
      "longitude": 37.6176,
      "color":colorSet.next()
    }, {
      "title": "London",
      "latitude": 51.5002,
      "longitude": -0.1262,
      "url": "http://www.google.co.uk",
      "color":colorSet.next()
    }, {
      "title": "New Delhi",
      "latitude": 28.6353,
      "longitude": 77.2250,
      "color":colorSet.next()
    }, {
      "title": "Tokyo",
      "latitude": 35.6785,
      "longitude": 139.6823,
      "url": "http://www.google.co.jp",
      "color":colorSet.next()
    }, {
        "title": "Washington",
        "latitude": 38.8921,
        "longitude": -77.0241,
        "color":colorSet.next()
      }, {
      "title": "Cairo",
      "latitude": 30.0571,
      "longitude": 31.2272,
      "color":colorSet.next()
    } ];
    }); 