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
    
    // L.marker(getRandomLatLng(map)).addTo(map);
    // to to organise layers.
    const markerLayerGroup = L.layerGroup();

    for(i=0; i<10; i++){

        const marker = L.marker(getRandomLatLng(map))
        marker.addTo(markerLayerGroup);
    }
    markerLayerGroup.addTo(map);

    //add in Layer control;

    //layer group for circle

    const circleLayerGroup = L.layerGroup();
    for (let i = 0; i<5; i++)
    {
        L.circle(getRandomLatLng(map), {
            color: 'red',
            fillColor:'orange',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(circleLayerGroup);
    }

    circleLayerGroup.addTo(map);


    const circleGreenLayerGroup = L.layerGroup();
    for (let i = 0; i<5; i++)
    {
        L.circle(getRandomLatLng(map), {
            color: 'blue',
            fillColor:'green',
            fillOpacity: 0.5,
            radius: 500
        }).addTo(circleGreenLayerGroup);
    }

    circleGreenLayerGroup.addTo(map);


    //complusory layers
    let baseLayers = {
        "Circles": circleLayerGroup,
        "Green Circles": circleGreenLayerGroup

    };

// editable layers. 
    let overlays = {
        "Markers": markerLayerGroup,

    }

    L.control.layers(baseLayers, overlays).addTo(map)

})


function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}


