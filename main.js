require(["esri/views/MapView", "esri/WebMap"], 
function(MapView, WebMap) 
  {
  var webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "d04db6fb32b24a7e9464c5333a9355f0"
    }
  });

  // Set the WebMap instance to the map property in a MapView.
  var view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
