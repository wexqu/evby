import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
const App = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
