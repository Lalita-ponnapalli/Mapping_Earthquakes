// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with a center and zoom level.

let map = L.map('mapid').setView([30, 30], 2);
// {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
// Accessing the airport GeoJSON URL

// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature:function(feature, layer) {
    
//       console.log(layer);
//       layer.bindPopup();
      
    }

  }).addTo(map);;
// let line = [
//   [33.9416, -118.4085],  
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];
// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// // L.circleMarker([34.0522, -118.2437], {
// //     radius: 300,
// //     color :"black",
// //     fillcolor : "#ffffa1"
// //  }).addTo(map);
// //  Add a marker to the map for Los Angeles, California.
// //let marker = L.marker([34.0522, -118.2437]).addTo(map);  
//   // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });
 
    // Then we add our 'graymap' tile layer to the map.
    streets.addTo(map);
    let airportData = "https://raw.githubusercontent.com/https://github.com/Lalita-ponnapalli/Mapping_Earthquakes.git/Mapping_Earthquakes/main/majorAirports.json";
// Grabbing our GeoJSON data.
    d3.json(airportData).then(function(data) {
        console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map);
});
   
    