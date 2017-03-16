/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */

// Define the event listener to initialize Web World Wind.


    requirejs(['./src/WorldWind',
            './LayerManager'],
        function (ww,
                  LayerManager) {
            "use strict";
    WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

    // Create a World Window for the canvas.
    var wwd = new WorldWind.WorldWindow("canvasOne");
    // Add some image layers to the World Window's globe.
    wwd.addLayer(new WorldWind.BMNGOneImageLayer());
    wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());
    // Add a compass, a coordinates display and some view controls to the World Window.
    //wwd.addLayer(new WorldWind.CompassLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    //wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

    // Set up the common placemark attributes.
    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
    placemarkAttributes.imageScale = 0.05;
    placemarkAttributes.imageColor = WorldWind.Color.WHITE;
    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.5,
        WorldWind.OFFSET_FRACTION, 1.5);
    placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "./images/white-dot.png";


    var reachesLayer = new WorldWind.RenderableLayer("Reaches");
    var reachesGeoJSON = new WorldWind.GeoJSONParser("./src/reaches.json");
    reachesGeoJSON.load(null, null, reachesLayer);
    wwd.addLayer(reachesLayer);


    // Create a layer manager for controlling layer visibility.
    var layerManger = new LayerManager(wwd);


});
