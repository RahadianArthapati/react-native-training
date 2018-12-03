import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" source={{url:props.avatar}} style={styles.avatar} />
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
      marginRight: 8,
      height: 50,
      width: 50
  }
});

export default ListItem;