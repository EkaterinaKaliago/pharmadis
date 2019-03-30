google.maps.event.addDomListener(window, 'load', init);
function init(){
    var mapOptions = {
        center: new google.maps.LatLng( 55.73653, 37.568691),
        zoom: 16,
        disableDefaultUI: true,
        styles: [
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#333333"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"lightness": "60"
					},
					{
						"hue": "#ff0000"
					},
					{
						"saturation": "-100"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"saturation": "-100"
					},
					{
						"hue": "#ff0000"
					},
					{
						"lightness": "49"
					},
					{
						"weight": "0.57"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"hue": "#ff0000"
					},
					{
						"saturation": "-100"
					},
					{
						"lightness": "60"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"lightness": "60"
					},
					{
						"saturation": "-100"
					},
					{
						"hue": "#ff0000"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [
					{
						"lightness": "60"
					},
					{
						"hue": "#ff0000"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f2f2f2"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#f1fbff"
					},
					{
						"lightness": 17
					}
				]
			}
		]
    };
    var mapElement = document.getElementById('contacts_map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var markerImage = new google.maps.MarkerImage('assets/images/toggle.svg',
        new google.maps.Size(102, 116),
        new google.maps.Point(0, 0),
        new google.maps.Point(51, 50));

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.73653, 37.568691),
        map: map,
        icon: markerImage,
        // title: 'Главный Офис',
    });
}