/**
 * Created by bernardmcginley on 31/01/2017.
 */

//Map
var mymap = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
    layers: layers
});

var bounds = [[0, 0], [7584, 9336]];

mymap.fitBounds(bounds);

// Drawing taken from wikimedia commons labled for non-commercial reuse
// https://www.google.ie/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwio6N-_jfnRAhWsLMAKHciTB74QjhwIBQ&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ABlackman_House%2C_Pettibone_Road%2C_Solon%2C_Cuyahoga_County%2C_OH_HABS_OHIO%2C18-SOLO.V%2C1-_(sheet_2_of_2).png&bvm=bv.146094739,d.ZGg&psig=AFQjCNGBGHhc9nw8FPY6waXTvjUF6QiVKg&ust=1486389211803750
var image = L.imageOverlay('drawing/drawing.png', bounds).addTo(mymap);

L.control.layers(null, overlayMaps).addTo(mymap);

/* just a click event for now, but will eventually prompt for new task creation
mymap.on('click', function (ev) {
    alert(ev.latlng);
});
*/
var dataCollector = ' <form>' +
                    'Task ID:<br>' +
                        '<input type="text" name="taskID"><br>' +
                    'Task Notes:<br>' +
                        '<input type="text" name="taskNotes"><br>' +
                    'Trade:<br>' +
                        '<input type="radio" name="taskTrade" value="Carpentry" checked>Carpentry<br>' +
                        '<input type="radio" name="taskTrade" value="Plumbing" checked>Plumbing<br>' +
                        '<input type="radio" name="taskTrade" value="Electrical" checked>Electrical<br>' +
                        '<input type="radio" name="taskTrade" value="Constructiobn" checked>Construction<br>' +
                    '<input type="submit" value="submit">' +
                    '</form>';

mymap.on('click', function (ev) {
    var tempTask = new Task("", ev.latlng, dataCollector, false, "");
    tempTask.marker.addTo(mymap);
    tempTask.marker.openPopup();
});
