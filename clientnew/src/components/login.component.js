import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";



function login(props) {
 
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
              >
                <span>Login</span>
              </button>
            </div>

          </Form>
        </div>
      </div>
    );
  }

  export default login;
