import React from "react";
// We would like to use a modal (small window) to show details of a task.
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  ButtonGroup,
} from "reactstrap";

import axios from "axios"

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // Get audio file in a variable
      audio: new Audio(this.props.file),
  
      // Set initial state of song
      isPlaying: false,
    };
  }

  togglePlay = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      console.log("playing")
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  deleteSong = () => {
    this.state.audio.pause();
    this.props.deleteSong(this.props.id)
  }
  render() {
    let playText = this.state.isPlaying ? <span style={{color:"lightgreen"}}>Play</span> : <span style={{color: "white"}}>Play</span>
    return(
    <li className="song-container" style={{textAlign: "left"}}>
      <div style={{width: "200%"}}><b>{this.props.song}</b> by <b>{this.props.artist}</b> is rated:</div>
      <div style={{width: "50%"}}><span className="rating">{this.props.average}</span> ({this.props.count})</div>
      <div><ButtonGroup >
        <Button onClick={() => this.props.onChange(this.props.id)}>
          Edit
        </Button>
        <Button onClick={this.togglePlay}>
          {playText}
        </Button>
        <Button onClick={this.deleteSong}>
              Delete
        </Button>
      </ButtonGroup>
      </div>
    </li>)
  }
}