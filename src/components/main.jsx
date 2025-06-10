import React from "react";
import "../style/main.css";

const Main = ({ fullName, bio,image }) => {
  return (
    <div className="profile-container">
      <div className="profile-image-container">
        <img src={image} alt="Profile" className="profile-image" />
      </div>
      <h1 className="profile-fullname">{fullName}</h1>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default Main;
