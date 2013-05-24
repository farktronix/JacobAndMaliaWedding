function initialize() {
 var styles =   [
    {
      "featureType": "poi",
      "stylers": [
        { "visibility": "simplified" },
        { "weight": 8 }
      ]
    },{
      "stylers": [
        { "saturation": -100 }
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "color": "#7e9ba9" },
        { "weight": 0.1 },
        { "lightness": 61 },
        { "saturation": 26 }
      ]
    },{
      "featureType": "road.local",
      "stylers": [
        { "visibility": "simplified" },
        { "weight": 1 }
      ]
    },{
      "featureType": "administrative.land_parcel",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "road.arterial",
      "stylers": [
        { "visibility": "simplified" }
      ]
    }
  ];

var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  var mapOptions = {
    center: new google.maps.LatLng(37.586639,-122.324502),
    zoom: 15,
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
  
  var parkingLogo = 'images/parking.png';
  var parking1Loc = new google.maps.LatLng(37.589275,-122.323161);
  var parking1 = new google.maps.Marker({
    position: parking1Loc,
    map: map,
    title:"Parking",
		icon: parkingLogo,
		clickable: false,
		zIndex:1
  });
  
  var parking2Loc = new google.maps.LatLng(37.589028,-122.319664);
  var parking2 = new google.maps.Marker({
    position: parking2Loc,
    map: map,
    title:"Parking",
		icon: parkingLogo,
		clickable: false,
		zIndex:4
  });
  
  var weddingLogo = 'images/weddingicon.png';
  var weddingLoc = new google.maps.LatLng(37.589743,-122.321134);
  var wedding = new google.maps.Marker({
    position: weddingLoc,
    map: map,
    title:"Ceremony",
		icon: weddingLogo,
		zIndex: 2,
  });
  
  var curiodysseyOLogo = 'images/curiodyssey_O.png';
  var curiodysseyLatlng = new google.maps.LatLng(37.590534,-122.31965);
  var curiodyssey = new google.maps.Marker({
    position: curiodysseyLatlng,
    map: map,
    title:"CuriOdyssey",
  	icon: curiodysseyOLogo,
  	zIndex: 3
  });
} 

google.maps.event.addDomListener(window, 'load', initialize);