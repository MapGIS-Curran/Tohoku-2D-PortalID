require(["esri/views/MapView", "esri/WebMap"], function (MapView, WebMap) {
  /************************************************************
   * Creates a new WebMap instance. A WebMap must reference
   * a PortalItem ID that represents a WebMap saved to
   * arcgis.com or an on-premise portal.
   *
   * To load a WebMap from an on-premise portal, set the portal
   * url with esriConfig.portalUrl.
   ************************************************************/
  var webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "d04db6fb32b24a7e9464c5333a9355f0"
    }
  });

  /************************************************************
   * Set the WebMap instance to the map property in a MapView.
   ************************************************************/
  var view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});