import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./listItem";

const HeroesList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.heroes}
      renderItem={(info) => (
        <ListItem
          name={info.item.name}
          avatar={info.item.avatar}
          onItemPressed={() => props.onItemSelected(info.item.name)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default HeroesList;