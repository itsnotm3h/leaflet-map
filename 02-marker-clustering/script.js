document.addEventListener("DOMContentLoaded", async function(){

    const map = L.map('map');
    

    //takes 2 paramenter.
    //1. Lat long
    //2. Zoom percentage.
    map.setView([1.2494,103.8303],13);
    
    // setup the tile layers
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    const response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");

    const taxiCoordinates = response.data.features[0].geometry.coordinates;

    const markerCluster = L.markerClusterGroup();


    for (let coordinate of taxiCoordinates)
    {
        const lat = coordinate[1];
        const lng = coordinate[0];

        L.marker([lat,lng]).addTo(markerCluster);
    }
    markerCluster.addTo(map);

    // console.log(response.data)









})



