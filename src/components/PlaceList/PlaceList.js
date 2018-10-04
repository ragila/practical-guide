import React from "react";
import { View, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  const placesOutput = props.places.map((place, i) => (
    <ListItem key={i} placeName={place} />
  ));
  return <View style={styles.listItem}>{placesOutput}</View>;
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%"
  }
});

export default PlaceList;
