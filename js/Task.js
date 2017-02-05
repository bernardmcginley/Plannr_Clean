/**
 * Created by bernardmcginley on 05/02/2017.
 */
//Tasks
function Task (taskID, taskLocation, taskNotes, taskCompletion) {
    this.taskID = taskID;
    this.taskLocation = taskLocation;
    this.taskNotes = taskNotes;
    this.taskCompletion = taskCompletion;
    this.marker = L.marker(this.taskLocation, {draggable: true}).bindPopup(this.taskNotes);

    this.marker.on('dragend', function() {
        this.bindPopup(taskNotes + "<br>moved to " + this.getLatLng()).openPopup();
    });
}

Task.prototype.getCompletion = function(){
    return this.taskCompletion;
}

Task.prototype.setCompletion = function(completion) {
    this.taskCompletion = completion;
}
