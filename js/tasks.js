/**
 * Created by bernardmcginley on 05/02/2017.
 */

//Tasks
var task1 = new Task("task1", [2720, 5888], "Install Kitchen Cabinets", true);
var task2 = new Task("task2", [2664, 3616], "Test Water Pressure", true);
var task3 = new Task("task3", [2816, 6112], "Test Voltage at Sockets", false);
var task4 = new Task("task4", [2048, 4680], "Install Plasterboard in Hallway", false);

//Task Groups AKA Layers
var carpentryTasks = new TaskLayer("Carpentry Tasks", [task1.marker]);
var plumbingTasks = new TaskLayer("Plumbing Tasks", [task2.marker]);
var electricalTasks = new TaskLayer("Electrical Tasks", [task3.marker]);
var constructionTasks = new TaskLayer("Construction Tasks", [task4.marker]);
var completedTasks = new TaskLayer("Completed Tasks", [task1.marker, task2.marker]);
var unstartedTasks = new TaskLayer("Unstarted Tasks", [task3.marker, task4.marker]);

var layers = [carpentryTasks.myLayerGroup, electricalTasks.myLayerGroup, constructionTasks.myLayerGroup, plumbingTasks.myLayerGroup, completedTasks.myLayerGroup, unstartedTasks.myLayerGroup];

//Controls
var overlayMaps = {
    "Carpentry": carpentryTasks.myLayerGroup,
    "Plumbing": plumbingTasks.myLayerGroup,
    "Electrical": electricalTasks.myLayerGroup,
    "Construction": constructionTasks.myLayerGroup,
    "Completed Tasks": completedTasks.myLayerGroup,
    "Unstarted Tasks": unstartedTasks.myLayerGroup
};