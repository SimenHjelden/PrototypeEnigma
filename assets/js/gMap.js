function initialize() {
 navigator.geolocation.getCurrentPosition(function(position){
  var mapOptions = {
    center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    zoom: 14
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
 });


}
google.maps.event.addDomListener(window, 'load', initialize);