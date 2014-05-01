function initialize() {

  navigator.geolocation.getCurrentPosition(function(position){

    var mapOptions = {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 14
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"),
                                  mapOptions);

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom'
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });

      //Remove ui-loader when done loading
      google.maps.event.addListenerOnce(map, 'idle', function(){
        // do something only the first time the map is loaded
          $(".ui-loader").remove();
      });

  });
}

google.maps.event.addDomListener(window, 'load', initialize);