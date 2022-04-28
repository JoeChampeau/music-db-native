import React from "react";
import {
  Text,
  View,
  Pressable
} from "react-native";

import styles from './style';

export default class Song extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteSong = () => {
    this.props.deleteSong(this.props.id)
  }
  
  render() {
    return(
    <View style={styles.song_container}>
      <Text style={styles.song_view}>
      <Text style={{fontWeight: "bold"}}>{this.props.song}</Text>
        <Text> by </Text>
       <Text style={{fontWeight: "bold"}}>{this.props.artist}</Text> 
        <Text> is rated: </Text>
      <Text style={styles.rating}>{this.props.average} </Text> 
        <Text>({this.props.count})</Text>
        <Pressable
          onPress={() => this.props.onChange(this.props.id)}
          style={styles.song_view}>
          <Text> Edit</Text>
        </Pressable>
        <Pressable 
          onPress={this.deleteSong}
          style={styles.song_view}>
        <Text> Delete</Text>
        </Pressable>
      </Text>
    </View>)
  }
}