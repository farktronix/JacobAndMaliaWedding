function initialize() {
 var styles = [
	{
	    "featureType": "poi.park",
	    "stylers": [
	    	{ "visibility": "simplified" },
	      { saturation: -60 }
	    ]
	  },
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
];

var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  var mapOptions = {
    center: new google.maps.LatLng(37.590534,-122.31965),
    zoom: 9,
	disableDefaultUI: true,
	zoomControl: true,
	zoomControlOptions: {
		style: google.maps.ZoomControlStyle.SMALL
	},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),
      mapOptions);

 map.mapTypes.set('map_style', styledMap);
 map.setMapTypeId('map_style');

var curiodysseyOLogo = 'images/curiodyssey_O.png';
var curiodysseyLatlng = new google.maps.LatLng(37.590534,-122.31965);
var curiodyssey = new google.maps.Marker({
      position: curiodysseyLatlng,
      map: map,
      title:"CuriOdyssey",
			icon: curiodysseyOLogo
  });
}

google.maps.event.addDomListener(window, 'load', initialize);