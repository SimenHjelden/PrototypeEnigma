var randLat, randLng, randomNumber;
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

    if(location.pathname.substring(location.pathname.lastIndexOf("/") + 1) === "selected-rebus.html") {
      for(var i = 0; i < 4; i++) {
        createRandomLatLongCoord(position.coords.latitude, position.coords.longitude);
        var image = '../assets/img/logo.png';
              var myLatLng = new google.maps.LatLng(randLat, randLng);
              var beachMarker = new google.maps.Marker({
                  position: myLatLng,
                  map: map,
                  icon: image
              });
        $("tbody tr:nth-of-type("+ (i + 1) +") td:nth-of-type(4)").html("<p>lat: "+randLat+", lng: "+randLng+"</p>");
      }
    }

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

var createRandomLatLongCoord = function(lat, lng){
  randBoolean();
  if(randomNumber) {
    randLat = (lat + (Math.random() * (0.002 - 0.005) + 0.005)).toFixed(4);
  } else {
    randLat = (lat - (Math.random() * (0.002 - 0.005) + 0.005)).toFixed(4);
  }

  randBoolean();
  if(randomNumber) {
    randLng = (lng + (Math.random() * (0.002 - 0.005) + 0.005)).toFixed(4);
  } else {
    randLng = (lng - (Math.random() * (0.002 - 0.005) + 0.005)).toFixed(4);
  }
  
  
}
var randBoolean = function(){
  randomNumber = Math.random() >= 0.5;
}

google.maps.event.addDomListener(window, 'load', initialize);