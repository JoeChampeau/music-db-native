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
  }

  edit() {
    let fun = () => this.props.onChange(this.props.id, true)
    fun()
  }

  render() {
    return(
    <li>
      {this.props.id} {this.props.song} by {this.props.artist} is rated {this.props.average} ({this.props.count})
      <button onClick={() => this.props.onChange(this.props.id, true)}>
                  Edit
      </button>
    </li>)
  }
}