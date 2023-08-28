{/* <script>
        const output = document.querySelector('#output');
function distance(lat1,lat2, lon1, lon2){
        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
   
        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)+ Math.cos(lat1) * Math.cos(lat2)* Math.pow(Math.sin(dlon / 2),2);
        let c = 2 * Math.asin(Math.sqrt(a));
   
        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 6371;
   
        // calculate the result
        return(c * r);
}

var userLat,userLon;
// var x = document.getElementById("demo");
if(navigator.geolocation)
  navigator.geolocation.getCurrentPosition(showPosition);
else
    output.innerHTML = "Geolocation is not supported by this browser.";

function showPosition(position) {
    userLat = position.coords.latitude;
    userLon = position.coords.longitude;
    console.log("Latitude: " + userLat +
        "<br>Longitude: " + userLon);
}

async function grabData(){

    var officeData = await fetch("/api/office");
    officeData = await officeData.json();
    return officeData;
}
// var x="null";
const officeData = grabData().then(function(data) {
    return data;
});
console.log(officeData,"office");
    </script> */}