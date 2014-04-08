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

var currentPosLat;

var timer = function(){
  //alert("hello world");
  
  setTimeout(function() {
    navigator.geolocation.getCurrentPosition(function(position){
      alert(position.coords.latitude);
    });
    setTimeout(function() {
      timer;
    }, 500);
  }, 500);
}

(function(){
  
  window.onload = timer;

})();