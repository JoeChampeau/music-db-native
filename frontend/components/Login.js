import React from "react";

import {
  Text,
  View,
  Button,
  TextInput,
} from "react-native";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  edit(u, p, b) {
    let fun = () => this.props.onChange(u, p, b)
    fun()
    this.setState({username: "", password: ""})
  }

  handleChange(name, value) {
    this.setState({
        [name]: value
    });
  }

  render() {
    if(this.props.username == "") {
      return(
        <View>
          <View>
            <View>
              <View>
                <Text>Username</Text>
                <TextInput
                  name="username"
                  value={this.state.username}
                  onChangeText={(text) => {this.handleChange("username", text)}}
                  placeholder="Username"
                />
              </View>
              <View>
                <Text>Password</Text>
                <TextInput
                  name="password"
                  value={this.state.password}
                  onChangeText={(text) => {this.handleChange("password", text)}}
                  placeholder="Password"
                />
              </View>
            </View>
            <Button 
              onPress={() => this.edit(this.state.username, this.state.password, false)} style={{marginRight: "0.5vw", marginTop: "0.5vw"}}
              title="Login"
            />
            <Button 
              onPress={() => this.edit(this.state.username, this.state.password, true)}
              style={{marginRight: "0.5vw", marginTop: "0.5vw"}}
              title="Sign Up"
            />
            <View style={{color: "red"}} key={this.props.supText}>{this.props.supText} </View>
          </View>
        </View>
      )
    }
    else {
      return (
        <View>
          <Text>Welcome, {this.props.username}</Text>
          <Button 
            onPress={() => this.edit("", "", false)} style={{marginLeft: "0.5vw"}}
            title="Logout"
          />
        </View>
      )
    }
    }
}