import React, { Component } from 'react';
import './myProfile.less';
import 'bootstrap/dist/css/bootstrap.min.css'

class MyProfile extends Component {

  state = {
     userName: '',
     gender: 'Male',
     description: '',
     isRead: false
  }

  render() {
    return (
      <form id="container" onSubmit={this.submitForm}>
          <div className="form-group" id="title">
              <h1>My Profile</h1>
          </div>
          <div className="form-group">
              <label htmlFor="userName" className="col-sm-2">
                  <h4>Name</h4>
              </label>
              <input className="form-control" value={this.state.userName}
                     id="userName" onChange={this.filedChange}/>
          </div>
          <div className="form-group">
              <label htmlFor="gender" className="col-sm-2">
                  <h4>Gender</h4>
              </label>
              <select className="form-control" onChange={this.filedChange}
                      value={this.state.gender} id="gender">
                  <option>Male</option>
                  <option>Female</option>
              </select>
          </div>
          <div className="form-group">
              <label htmlFor="description" className="col-sm-2">
                  <h4>Description</h4>
              </label>
              <textarea className="form-control" value={this.state.description}
                        onChange={this.filedChange} rows="5" id="description"></textarea>
          </div>
          <div className="form-group" id="confirm-div">
              <label className="form-check-label">
                  <input type="checkbox" id="confirm" checked={this.state.isRead} onChange={this.filedChange}/>
                  I have read the terms of conduct
              </label>
          </div>
          <div className="form-group" id="submit-btn">
              <input type="submit" className="btn btn-primary" disabled={!this.state.userName||
              !this.state.description||!this.state.isRead}/>
          </div>
      </form>
    );
  }

  filedChange = (event) => {
        const eventId = event.target.id;
        const changedValue = event.target.value;
        console.log(changedValue);
        switch (eventId) {
            case "userName":
                this.setState({
                    userName: changedValue
                });
                break;
            case "gender":
                this.setState({
                    gender: changedValue
                });
                break;
            case "description":
                this.setState({
                    description: changedValue
                });
                break;
            case "confirm":
                this.setState({
                    isRead: event.target.checked
                });
                break;
        };
  }

  submitForm = (event) => {
      event.preventDefault();
      console.log("Hello " + this.state.userName + "(" + this.state.gender + "). " +
          "You think you are a " + this.state.description +
          " person, and you have read our confirm?(" + this.state.isRead + ")");
  }
}

export default MyProfile;


