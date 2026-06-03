function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            alert("Latitude: " + lat + "\nLongitude: " + lon);
        } 
        , function(error){
            alert("Error occurred. Error code: " + error.code);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}