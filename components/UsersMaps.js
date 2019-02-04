import React from "react";
import { View, StyleSheet } from "react-native";
//import MapView from "react-native-maps";


require(["esri/WebMap"], function(WebMap) { 
  var webmap = new WebMap({
    portalItem: {
      id: "e691172598f04ea8881cd2a4adaa45ba"
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


const UsersMap = props => {
  return (
    <View style={styles.mapContainer}>
      <view
        style={styles.map}
      >
      </view>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 200,
    marginTop: 20
  },
  map: {
    width: "100%",
    height: "100%"
  }
});

export default UsersMap;