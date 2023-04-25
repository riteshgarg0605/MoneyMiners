import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="section">
        <h2>Name</h2>
        <p>Priyanshu</p>
      </div>
      <div className="section">
        <h2>Age</h2>
        <p>15</p>
      </div>
      <div className="section">
        <h2>Class</h2>
        <p>10th</p>
      </div>
      <div className="section">
        <h2>School Name</h2>
        <p>Kalka Public School</p>
      </div>
      <div className="section">
        <h2>Mobile</h2>
        <p>0000000000</p>
      </div>
      <button type="submit" onClick={() => (window.location = "/")}>
        SignOut
      </button>
    </div>
  );
}

export default Profile;
