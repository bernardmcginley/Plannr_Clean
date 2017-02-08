/**
 * Created by bernardmcginley on 05/02/2017.
 */

//Layers
function TaskLayer (layerName, layerMembers) {
    this.layerName = layerName;
    this.layermembers = layerMembers;
    this.myLayerGroup = L.layerGroup(layerMembers);

    layerList.push(this);
}
