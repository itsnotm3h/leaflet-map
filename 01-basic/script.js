let singapore = [1.3521,103.8198];

document.addEventListener("DOMContentLoaded", async function(){
    //L is a global variable, define in leaflet.js
    let map = L.map('myMap')// create map inside the div.
    map.setView(singapore,12);//Two parameter present Latlong and zoom.


    //Create title layer
    // setup the tile layers
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

//add Marker
let internationPlaza = L.marker([1.2761,103.8458]);
// internationPlaza.addTo(map);
map.addLayer(internationPlaza); // anyObjects that can be drawn on the map is a later. 
//show html when the marker is clicked
internationPlaza.bindPopup("Welcome to singapore")

let changiAirport =  L.marker([1.3586,103.9899]);
changiAirport.addTo(map);
changiAirport.addEventListener("click",function(){
    alert("Hello");
})

//first paerameter = array latlng, second parameter is the properties of the circle. 
let circle = L.circle([1.3294,103.8021],{color:"red",fillColor:"orange",radius:2000});


circle.addTo(map);

let response = await axios.get("cycling.geojson");
console.log(response.data);

let cyclingPath = L.geoJson(response.data);

cyclingPath.addTo(map);


//get Geo json. They can be export from a web. json file. 

})