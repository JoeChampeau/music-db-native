import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  "flex_container":{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  },
  
  "flex_view":{
    textAlign: "center",
    width: '50%',
    backgroundColor:'lightgrey',
    borderRadius: 10
  },
  
  "song_container":{
    textAlign: "left",
    display: 'flex',
    height: 50
  },
  
  "song_view":{
    margin: 2,
    fontSize: "1.8vw",
    flex: 1,
    color: "black",
  },
  
  "list":{
    padding: 0,
    margin: 10,
    listStyle: "none"
  },
  
  "login":{
    textAlign: "center",
    top:"3%",
    right:"3%",
    position: "fixed"
  },
  
  "editBar":{
    textAlign: "center",
    top:"30%",
    right:"20%",
    position: "fixed"
  },
  "rating":{
    color: "gold"
  }
})