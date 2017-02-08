/**
 * Created by bernardmcginley on 05/02/2017.
 */
//boilerplate ot make sure the for each method works as expected
if (!Array.prototype.forEach)
{
    Array.prototype.forEach = function(fun /*, thisp*/)
    {
        var len = this.length;
        if (typeof fun != "function")
            throw new TypeError();

        var thisp = arguments[1];
        for (var i = 0; i < len; i++)
        {
            if (i in this)
                fun.call(thisp, this[i], i, this);
        }
    };
};

//arrays
var taskList = [];
var layerList = [];

//Tasks
var task1 = new Task("task1", [2720, 5888], "Install Kitchen Cabinets", true, "Carpentry");
var task2 = new Task("task2", [2664, 3616], "Test Water Pressure", true, "Plumbing");
var task3 = new Task("task3", [2816, 6112], "Test Voltage at Sockets", false, "Electrical");
var task4 = new Task("task4", [2048, 4680], "Install Plasterboard in Hallway", false, "Construction");

//Task Groups AKA Layers

function listBuilderTrade(trade) {
    var results = [];

    function compareTrade(task, trade) {
        if (task.trade == trade) {
            results.push(task.marker);
        }
    }

    taskList.forEach(compareTrade);

    return results;
}


function listBuilderComplete() {
    var results1 = [];

    function isComplete(task) {
        if (task.taskCompletion) {
            results1.push(task.marker);
        }
    }

    taskList.forEach(isComplete);

    return results1;
}

function listBuilderIncomplete() {
    var results2 = [];

    function isComplete(task) {
        if (!task.taskCompletion) {
            results2.push(task.marker);
        }
    }

    taskList.forEach(isComplete);

    return results2;
}

//taskList.forEach(checkTrade, "trade")

var carpentryTasks = new TaskLayer("Carpentry Tasks", listBuilderTrade("Carpentry"));
var plumbingTasks = new TaskLayer("Plumbing Tasks", listBuilderTrade("Plumbing"));
var electricalTasks = new TaskLayer("Electrical Tasks", listBuilderTrade("Electrical"));
var constructionTasks = new TaskLayer("Construction Tasks", listBuilderTrade("Construction"));
var completedTasks = new TaskLayer("Completed Tasks", listBuilderComplete());
var unstartedTasks = new TaskLayer("Unstarted Tasks", listBuilderIncomplete());

var layers = [
    carpentryTasks.myLayerGroup,
    electricalTasks.myLayerGroup,
    constructionTasks.myLayerGroup,
    plumbingTasks.myLayerGroup,
    completedTasks.myLayerGroup,
    unstartedTasks.myLayerGroup
    ];

//Controls
var overlayMaps = {
    "Carpentry": carpentryTasks.myLayerGroup,
    "Plumbing": plumbingTasks.myLayerGroup,
    "Electrical": electricalTasks.myLayerGroup,
    "Construction": constructionTasks.myLayerGroup,
    "Completed Tasks": completedTasks.myLayerGroup,
    "Unstarted Tasks": unstartedTasks.myLayerGroup
};