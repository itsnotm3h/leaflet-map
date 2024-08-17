// create the map
let map;
let clusterTaxi = L.markerClusterGroup();

document.addEventListener("DOMContentLoaded",async function(){
	let singapore = [ 1.29,103.85];
	loadMap(singapore);
	getTaxi(clusterTaxi);
})


async function getTaxi(clusterTaxi){

	let response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");

	let liveData = response.data.features[0].geometry.coordinates;

	for (let coordinates of liveData)
	{
        const lat = coordinates[1];
        const lng = coordinates[0];

        L.marker([lat,lng]).addTo(clusterTaxi);
	}

	clusterTaxi.addTo(map);

}


//loading Map
function loadMap(x){
	map = L.map('myMap').setView(x,11);
	L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	}).addTo(map);
}



