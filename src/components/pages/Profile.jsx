import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Checkbox from "react-simple-checkbox";
import DnD from "../partials/DnD";

export default class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log("super props ",props)
  //   console.log("props role",props.user.role)
  // }
  state = {
    fileList: []
  };

  handleDnd = fileList => {
    this.setState({ fileList });
  };

  render() {
    return (
      <div>
        <h1>PROFILE</h1>
        {/* {this.props.user.role === "admin" && <Link to="/admin">go to admin panel</Link>} */}
        {this.state.fileList.map((file, index) => (
          <p key={index}>{file}</p>
        ))}
        <Checkbox /> Passport (copy of all pages) <br />
        <Checkbox /> ID <br />
        <Checkbox />5 Photos <br />
        <Checkbox /> Last tax declaration <br />
        <Checkbox />
        Signed employment contract or offer letter from your future employer{" "}
        <br />
        <Checkbox />
        Proof of old address: an electricity, gas, water or landline bill, or a
        declaration that you are being housed free of charge signed by the
        person providing you with accommodation, together with a copy of one of
        their bills and their photo ID. <br />
        <Checkbox /> Three most recent bank statements <br />
        <Checkbox /> Foreign tax identification number <br />
        <Checkbox /> Certificate of Eligibility <br />
        <Checkbox />
        Three most recent bank statements <br />
        <DnD handleDnd={this.handleDnd} />
      </div>
    );
  }
}
