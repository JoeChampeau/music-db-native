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

  render() {
    return(
    <li style={{textAlign: "left"}}>
      <span>{this.props.song} by {this.props.artist} is rated {this.props.average} ({this.props.count}) </span>
      <button onClick={() => this.props.onChange(this.props.id)}>
                  Edit
      </button>
      <button onClick={this.togglePlay} style={{marginLeft: "0.5vw"}}>
                  Play
      </button>
      <span style={{color: "green"}}>{this.state.isPlaying ? " Playing song!" : ""}</span>
    </li>)
  }
}